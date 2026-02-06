interface EnquiryFormData {
  name: string;
  phoneNumber: string;
  email: string;
  message: string;
}

export function validateEnquiry(data: EnquiryFormData): Record<string, string> {
  const errors: Record<string, string> = {};

  // Name validation
  if (!data.name || data.name.trim().length === 0) {
    errors.name = 'Name is required';
  } else if (data.name.trim().length < 2) {
    errors.name = 'Name must be at least 2 characters';
  }

  // Phone validation
  if (!data.phoneNumber || data.phoneNumber.trim().length === 0) {
    errors.phoneNumber = 'Phone number is required';
  } else if (!/^\d{10}$/.test(data.phoneNumber.replace(/[\s-]/g, ''))) {
    errors.phoneNumber = 'Please enter a valid 10-digit phone number';
  }

  // Email validation (optional, but must be valid if provided)
  if (data.email && data.email.trim().length > 0) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(data.email)) {
      errors.email = 'Please enter a valid email address';
    }
  }

  // Message validation
  if (!data.message || data.message.trim().length === 0) {
    errors.message = 'Message is required';
  } else if (data.message.trim().length < 10) {
    errors.message = 'Message must be at least 10 characters';
  }

  return errors;
}
