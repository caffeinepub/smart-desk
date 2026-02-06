import Map "mo:core/Map";
import Iter "mo:core/Iter";
import Order "mo:core/Order";
import Runtime "mo:core/Runtime";
import Principal "mo:core/Principal";
import Array "mo:core/Array";
import Nat "mo:core/Nat";

import MixinAuthorization "authorization/MixinAuthorization";
import AccessControl "authorization/access-control";

actor {
  // Authorization component with persistent state
  let accessControlState = AccessControl.initState();
  include MixinAuthorization(accessControlState);

  // User profile type as required by the frontend
  public type UserProfile = {
    name : Text;
  };

  let userProfiles = Map.empty<Principal, UserProfile>();

  // Get caller's own profile (users only)
  public query ({ caller }) func getCallerUserProfile() : async ?UserProfile {
    if (not (AccessControl.hasPermission(accessControlState, caller, #user))) {
      Runtime.trap("Unauthorized: Only users can access profiles");
    };
    userProfiles.get(caller);
  };

  // Get any user's profile (own profile or admin)
  public query ({ caller }) func getUserProfile(user : Principal) : async ?UserProfile {
    if (caller != user and not AccessControl.isAdmin(accessControlState, caller)) {
      Runtime.trap("Unauthorized: Can only view your own profile");
    };
    userProfiles.get(user);
  };

  // Save caller's own profile (users only)
  public shared ({ caller }) func saveCallerUserProfile(profile : UserProfile) : async () {
    if (not (AccessControl.hasPermission(accessControlState, caller, #user))) {
      Runtime.trap("Unauthorized: Only users can save profiles");
    };
    userProfiles.add(caller, profile);
  };

  type CourseCategory = {
    #undergraduate;
    #postgraduate;
    #diploma;
    #certificate;
    #continuingEducation;
    #other : Text;
  };

  type Enquiry = {
    id : Nat;
    name : Text;
    phoneNumber : Text;
    email : ?Text;
    courseCategory : ?CourseCategory;
    message : Text;
    timestamp : Int;
  };

  module Enquiry {
    public func compare(a : Enquiry, b : Enquiry) : Order.Order {
      Nat.compare(a.id, b.id);
    };
  };

  // Persistent storage for all enquiries
  let enquiries = Map.empty<Nat, Enquiry>();
  var nextId = 0;

  // Add a new enquiry (available to all users including guests - no authorization check)
  public shared ({ caller }) func addEnquiry(
    name : Text,
    phoneNumber : Text,
    email : ?Text,
    courseCategory : ?CourseCategory,
    message : Text,
  ) : async Nat {
    if (not isValidContactInfo(phoneNumber, email)) {
      Runtime.trap("Must provide valid contact info: phone number or email is required");
    };

    let id = nextId;
    let enquiry : Enquiry = {
      id;
      name;
      phoneNumber;
      email;
      courseCategory;
      message;
      timestamp = getCurrentTimestamp();
    };

    enquiries.add(id, enquiry);
    nextId += 1;
    id;
  };

  // Helper function to check if at least one contact method is provided
  func isValidContactInfo(phoneNumber : Text, email : ?Text) : Bool {
    if (not phoneNumber.isEmpty()) {
      true;
    } else {
      switch (email) {
        case (?e) { not e.isEmpty() };
        case (null) { false };
      };
    };
  };

  // Helper function to get current timestamp (simulated)
  func getCurrentTimestamp() : Int {
    // Simulate timestamp since real timestamp functionality is not available
    nextId * 1000000;
  };

  // Retrieve all enquiries (admin only)
  public query ({ caller }) func getAllEnquiries() : async [Enquiry] {
    if (not (AccessControl.isAdmin(accessControlState, caller))) {
      Runtime.trap("Unauthorized: Only admins can view all enquiries");
    };

    enquiries.values().toArray().sort();
  };
};
