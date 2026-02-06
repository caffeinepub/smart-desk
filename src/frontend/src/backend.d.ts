import type { Principal } from "@icp-sdk/core/principal";
export interface Some<T> {
    __kind__: "Some";
    value: T;
}
export interface None {
    __kind__: "None";
}
export type Option<T> = Some<T> | None;
export interface Enquiry {
    id: bigint;
    courseCategory?: CourseCategory;
    name: string;
    email?: string;
    message: string;
    timestamp: bigint;
    phoneNumber: string;
}
export interface UserProfile {
    name: string;
}
export type CourseCategory = {
    __kind__: "certificate";
    certificate: null;
} | {
    __kind__: "other";
    other: string;
} | {
    __kind__: "undergraduate";
    undergraduate: null;
} | {
    __kind__: "continuingEducation";
    continuingEducation: null;
} | {
    __kind__: "postgraduate";
    postgraduate: null;
} | {
    __kind__: "diploma";
    diploma: null;
};
export enum UserRole {
    admin = "admin",
    user = "user",
    guest = "guest"
}
export interface backendInterface {
    addEnquiry(name: string, phoneNumber: string, email: string | null, courseCategory: CourseCategory | null, message: string): Promise<bigint>;
    assignCallerUserRole(user: Principal, role: UserRole): Promise<void>;
    getAllEnquiries(): Promise<Array<Enquiry>>;
    getCallerUserProfile(): Promise<UserProfile | null>;
    getCallerUserRole(): Promise<UserRole>;
    getUserProfile(user: Principal): Promise<UserProfile | null>;
    isCallerAdmin(): Promise<boolean>;
    saveCallerUserProfile(profile: UserProfile): Promise<void>;
}
