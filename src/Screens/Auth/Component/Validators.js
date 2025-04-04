export const validatePassword = text => {
  if (!text) return {error: 'Password is required'};
  if (text.length < 8) return {error: 'Password must be at least 8 characters'};
  if (!/[A-Z]/.test(text))
    return {error: 'Password must contain at least one uppercase letter'};
  if (!/[0-9]/.test(text))
    return {error: 'Password must contain at least one number'};
  return {error: ''};
};

export const validatePhoneNumber = text => {
  if (!text) return {error: 'Phone number is required'};
  const cleaned = text.replace(/[^0-9+]/g, '');
  if (cleaned.length > 15)
    return {error: 'Phone number cannot exceed 15 digits'};
  if (!/^\+?[0-9]+$/.test(cleaned)) {
    return {
      error: 'Phone number must contain only numbers and an optional + prefix',
    };
  }
  return {error: ''};
};
