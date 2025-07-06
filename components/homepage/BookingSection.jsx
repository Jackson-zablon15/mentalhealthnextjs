'use client'
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import DateSelect from '../Booking/DateSelect';

const BookingSection = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [selectedDate, setSelectedDate] = useState(null);
  
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isValid },
    trigger,
    reset,
    setValue
  } = useForm({
    mode: 'onChange'
  });

  // Register date field for validation
  const dateValidation = register('date', { 
    required: 'Date is required',
    validate: (value) => {
      if (!value) return 'Date is required';
      const selectedDate = new Date(value);
      const tomorrow = new Date();
      tomorrow.setDate(tomorrow.getDate() + 1);
      tomorrow.setHours(0, 0, 0, 0);
      return selectedDate >= tomorrow || 'Date must be tomorrow or in the future';
    }
  });

  const watchedValues = watch();

  // Sanitization functions
  const sanitizeName = (name) => {
    return name.trim().replace(/\s+/g, ' '); // Trim and convert multiple spaces to single
  };

  const sanitizeEmail = (email) => {
    return email.toLowerCase().trim();
  };

  const sanitizePhone = (phone) => {
    return phone.replace(/[^\d+]/g, ''); // Keep only digits and +
  };

  const sanitizeMessage = (message) => {
    if (!message) return '';
    return message
      .trim()
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/&/g, '&amp;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#x27;');
  };

  const onSubmit = (data) => {
    // Sanitize all data before submission
    const sanitizedData = {
      fullName: sanitizeName(data.fullName),
      email: sanitizeEmail(data.email),
      phone: sanitizePhone(data.phone),
      date: data.date,
      sessionType: data.sessionType,
      message: sanitizeMessage(data.message)
    };
    
    console.log('Original form data:', data);
    console.log('Sanitized form data:', sanitizedData);
    console.log('Current step when submitting:', currentStep);
    setIsSubmitted(true);
    reset();
    setCurrentStep(1);
    setSelectedDate(null);
  };

  const handleNext = async (e) => {
    e.preventDefault(); // Prevent form submission
    const fieldsToValidate = getFieldsForStep(currentStep);
    const isStepValid = await trigger(fieldsToValidate);
    
    if (isStepValid) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handleBack = () => {
    setCurrentStep(currentStep - 1);
  };

  const getFieldsForStep = (step) => {
    switch (step) {
      case 1:
        return ['fullName', 'email', 'phone'];
      case 2:
        return ['date', 'sessionType'];
      case 3:
        return []; // No required fields for step 3
      default:
        return [];
    }
  };

  const isStepValid = () => {
    const fieldsToCheck = getFieldsForStep(currentStep);
    if (fieldsToCheck.length === 0) return true; // Step 3 is always valid
    
    return fieldsToCheck.every(field => {
      const value = watchedValues[field];
      if (!value) return false;
      
      // Check specific validation rules
      switch (field) {
        case 'fullName':
          return value.length >= 3 && /^[a-zA-Z\s]+$/.test(value);
        case 'email':
          return /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/.test(sanitizeEmail(value));
        case 'phone':
          const sanitized = sanitizePhone(value);
          const digitsOnly = sanitized.replace(/\+/g, '');
          return digitsOnly.length >= 10 && digitsOnly.length <= 15 && /^[0-9]+$/.test(digitsOnly);
        case 'date':
          if (!value) return false;
          const selectedDate = new Date(value);
          const tomorrow = new Date();
          tomorrow.setDate(tomorrow.getDate() + 1);
          tomorrow.setHours(0, 0, 0, 0);
          return selectedDate >= tomorrow;
        case 'sessionType':
          return ['online', 'physical'].includes(value);
        default:
          return true;
      }
    });
  };

  const resetForm = () => {
    setIsSubmitted(false);
    reset();
    setCurrentStep(1);
    setSelectedDate(null);
  };

  if (isSubmitted) {
    return (
      <section className="py-16" style={{background: 'var(--soft-white)'}}>
        <div className="max-w-3xl mx-auto px-4">
          <div className="text-center bg-white rounded-lg shadow-lg p-8">
            <div className="w-16 h-16 mx-auto mb-6 rounded-full flex items-center justify-center" style={{background: 'var(--deep-red)'}}>
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
              </svg>
            </div>
            <h2 
              className="text-2xl font-bold mb-4"
              style={{color: 'var(--deep-red)'}}
            >
              Booking Submitted Successfully!
            </h2>
            <p 
              className="mb-6"
              style={{color: 'var(--charcoal-black)'}}
            >
              Thank you for your booking request. We have received your information and will contact you within 24 hours to confirm your appointment.
            </p>
            <button
              onClick={resetForm}
              className="px-6 py-3 rounded-lg font-semibold transition-all duration-300 hover:scale-105"
              style={{
                background: 'var(--deep-red)',
                color: 'var(--soft-white)'
              }}
            >
              Book Another Session
            </button>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-16" style={{background: 'var(--soft-white)'}}>
      <div className="max-w-3xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 
            className="text-3xl font-bold mb-4"
            style={{color: 'var(--deep-red)'}}
          >
            Book Your Session
          </h2>
          <p 
            className="text-lg"
            style={{color: 'var(--charcoal-black)'}}
          >
            Take the first step towards better mental health. Book a consultation with our experienced professionals.
          </p>
        </div>

        {/* Progress Bar */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-4">
            {[1, 2, 3].map((step) => (
              <div key={step} className="flex items-center">
                <div 
                  className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-semibold ${
                    currentStep >= step 
                      ? 'text-white' 
                      : 'text-gray-500'
                  }`}
                  style={{
                    background: currentStep >= step ? 'var(--deep-red)' : 'var(--grayish-blue)'
                  }}
                >
                  {step}
                </div>
                {step < 3 && (
                  <div 
                    className={`w-16 h-1 mx-2 ${
                      currentStep > step 
                        ? 'bg-red-500' 
                        : 'bg-gray-300'
                    }`}
                  ></div>
                )}
              </div>
            ))}
          </div>
          <div className="text-center">
            <span 
              className="text-sm font-medium"
              style={{color: 'var(--grayish-blue)'}}
            >
              Step {currentStep} of 3
            </span>
          </div>
        </div>

        {/* Form */}
        <form 
          onSubmit={handleSubmit(onSubmit)} 
          className="bg-white rounded-lg shadow-lg p-8"
          onKeyDown={(e) => {
            if (e.key === 'Enter' && currentStep < 3) {
              e.preventDefault();
            }
          }}
        >
          {/* Step 1: Basic Information */}
          {currentStep === 1 && (
            <div className="space-y-6">
              <h3 
                className="text-xl font-semibold mb-6"
                style={{color: 'var(--charcoal-black)'}}
              >
                Basic Information
              </h3>
              
              <div>
                <label 
                  htmlFor="fullName" 
                  className="block text-sm font-medium mb-2"
                  style={{color: 'var(--charcoal-black)'}}
                >
                  Full Name *
                </label>
                <input
                  {...register('fullName', { 
                    required: 'Full name is required',
                    minLength: { value: 3, message: 'Name must be at least 3 characters' },
                    pattern: { 
                      value: /^[a-zA-Z\s]+$/, 
                      message: 'Only alphabetic characters and spaces are allowed' 
                    },
                    validate: (value) => {
                      const sanitized = sanitizeName(value);
                      return sanitized.length >= 3 || 'Name must be at least 3 characters after trimming';
                    }
                  })}
                  type="text"
                  id="fullName"
                  className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 transition-colors ${
                    errors.fullName 
                      ? 'border-red-500 focus:ring-red-200' 
                      : 'border-gray-300 focus:ring-blue-200'
                  }`}
                  placeholder="Enter your full name"
                />
                {errors.fullName && (
                  <p className="mt-1 text-sm text-red-600">{errors.fullName.message}</p>
                )}
              </div>

              <div>
                <label 
                  htmlFor="email" 
                  className="block text-sm font-medium mb-2"
                  style={{color: 'var(--charcoal-black)'}}
                >
                  Email Address *
                </label>
                <input
                  {...register('email', { 
                    required: 'Email is required',
                    pattern: { 
                      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i, 
                      message: 'Invalid email address format (e.g., example@email.com)' 
                    },
                    validate: (value) => {
                      const sanitized = sanitizeEmail(value);
                      return /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/.test(sanitized) || 'Invalid email address';
                    }
                  })}
                  type="email"
                  id="email"
                  className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 transition-colors ${
                    errors.email 
                      ? 'border-red-500 focus:ring-red-200' 
                      : 'border-gray-300 focus:ring-blue-200'
                  }`}
                  placeholder="Enter your email address"
                />
                {errors.email && (
                  <p className="mt-1 text-sm text-red-600">{errors.email.message}</p>
                )}
              </div>

              <div>
                <label 
                  htmlFor="phone" 
                  className="block text-sm font-medium mb-2"
                  style={{color: 'var(--charcoal-black)'}}
                >
                  Phone Number *
                </label>
                <input
                  {...register('phone', { 
                    required: 'Phone number is required',
                    validate: (value) => {
                      const sanitized = sanitizePhone(value);
                      const digitsOnly = sanitized.replace(/\+/g, '');
                      
                      if (digitsOnly.length < 10) {
                        return 'Phone number must be at least 10 digits';
                      }
                      if (digitsOnly.length > 15) {
                        return 'Phone number must not exceed 15 digits';
                      }
                      if (!/^[0-9]+$/.test(digitsOnly)) {
                        return 'Phone number must contain only digits (and optionally + at the start)';
                      }
                      return true;
                    }
                  })}
                  type="tel"
                  id="phone"
                  className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 transition-colors ${
                    errors.phone 
                      ? 'border-red-500 focus:ring-red-200' 
                      : 'border-gray-300 focus:ring-blue-200'
                  }`}
                  placeholder="Enter your phone number (e.g., +1234567890)"
                />
                {errors.phone && (
                  <p className="mt-1 text-sm text-red-600">{errors.phone.message}</p>
                )}
              </div>
            </div>
          )}

          {/* Step 2: Booking Details */}
          {currentStep === 2 && (
            <div className="space-y-6">
              <h3 
                className="text-xl font-semibold mb-6"
                style={{color: 'var(--charcoal-black)'}}
              >
                Booking Details
              </h3>
              
              <DateSelect
                selectedDate={selectedDate}
                onDateSelect={(date) => {
                  setSelectedDate(date);
                  setValue('date', date, { 
                    shouldValidate: true,
                    shouldDirty: true 
                  });
                }}
                error={errors.date?.message}
              />

              <div>
                <label className="block text-sm font-medium mb-4" style={{color: 'var(--charcoal-black)'}}>
                  Session Type *
                </label>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                  {['Online', 'Physical'].map((type) => (
                    <label key={type} className="relative cursor-pointer">
                      <input
                        {...register('sessionType', { required: 'Please select a session type' })}
                        type="radio"
                        value={type.toLowerCase()}
                        className="sr-only"
                      />
                      <div 
                        className={`w-full p-4 rounded-lg border-2 transition-all duration-200 text-center ${
                          watchedValues.sessionType === type.toLowerCase()
                            ? 'border-red-500 bg-red-50'
                            : 'border-gray-300 bg-white hover:border-gray-400'
                        }`}
                      >
                        <div className="flex items-center justify-center space-x-2">
                          <div 
                            className={`w-4 h-4 rounded-full border-2 flex items-center justify-center ${
                              watchedValues.sessionType === type.toLowerCase()
                                ? 'border-red-500 bg-red-500'
                                : 'border-gray-400'
                            }`}
                          >
                            {watchedValues.sessionType === type.toLowerCase() && (
                              <div className="w-2 h-2 rounded-full bg-white"></div>
                            )}
                          </div>
                          <span 
                            className={`font-medium ${
                              watchedValues.sessionType === type.toLowerCase()
                                ? 'text-red-600'
                                : 'text-gray-700'
                            }`}
                          >
                            {type} Session
                          </span>
                        </div>
                      </div>
                    </label>
                  ))}
                </div>
                {errors.sessionType && (
                  <p className="mt-1 text-sm text-red-600">{errors.sessionType.message}</p>
                )}
              </div>
            </div>
          )}

          {/* Step 3: Description */}
          {currentStep === 3 && (
            <div className="space-y-6">
              <h3 
                className="text-xl font-semibold mb-6"
                style={{color: 'var(--charcoal-black)'}}
              >
                Additional Information
              </h3>
              
              <div>
                <label 
                  htmlFor="message" 
                  className="block text-sm font-medium mb-2"
                  style={{color: 'var(--charcoal-black)'}}
                >
                  Message or Reason for Booking (Optional)
                </label>
                <textarea
                  {...register('message', { 
                    minLength: { value: 10, message: 'Message must be at least 10 characters if provided' },
                    maxLength: { value: 500, message: 'Message must be less than 500 characters' },
                    validate: (value) => {
                      if (!value || value.trim() === '') return true; // Optional field
                      const sanitized = sanitizeMessage(value);
                      return sanitized.length >= 10 || 'Message must be at least 10 characters if provided';
                    }
                  })}
                  id="message"
                  rows="6"
                  className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 transition-colors resize-none ${
                    errors.message 
                      ? 'border-red-500 focus:ring-red-200' 
                      : 'border-gray-300 focus:ring-blue-200'
                  }`}
                  placeholder="Please share any additional information about your situation or what you hope to achieve from this session... (optional)"
                />
                {errors.message && (
                  <p className="mt-1 text-sm text-red-600">{errors.message.message}</p>
                )}
                <p className="mt-1 text-xs text-gray-500">
                  {watchedValues.message?.length || 0}/500 characters {watchedValues.message && watchedValues.message.length < 10 && '(minimum 10 characters if provided)'}
                </p>
              </div>
            </div>
          )}

          {/* Navigation Buttons */}
          <div className="flex justify-between mt-8 pt-6 border-t border-gray-200">
            {currentStep > 1 && (
              <button
                type="button"
                onClick={handleBack}
                className="px-6 py-3 border rounded-lg font-semibold transition-all duration-300 hover:scale-105"
                style={{
                  borderColor: 'var(--deep-red)',
                  color: 'var(--deep-red)'
                }}
              >
                Back
              </button>
            )}
            
            <div className="ml-auto">
              {currentStep < 3 ? (
                <button
                  type="button"
                  onClick={(e) => handleNext(e)}
                  disabled={!isStepValid()}
                  className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                    isStepValid() 
                      ? 'hover:scale-105' 
                      : 'opacity-50 cursor-not-allowed'
                  }`}
                  style={{
                    background: 'var(--deep-red)',
                    color: 'var(--soft-white)'
                  }}
                >
                  Next
                </button>
              ) : (
                <button
                  type="submit"
                  className="px-6 py-3 rounded-lg font-semibold transition-all duration-300 hover:scale-105"
                  style={{
                    background: 'var(--deep-red)',
                    color: 'var(--soft-white)'
                  }}
                >
                  Submit Booking
                </button>
              )}
            </div>
          </div>
        </form>
      </div>
    </section>
  );
};

export default BookingSection; 