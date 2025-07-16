'use client'
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import DateSelect from '../Booking/DateSelect';
import emailjs from "@emailjs/browser";

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

  const onSubmit = async (data, e) => {
    // Sanitize all data before submission
      await emailjs
      .sendForm("service_be6qg9y", "template_1kzcx9k", e.target, {
        publicKey: "MrKtDiM4rOW05oIyz",
      })
      .then(
        () => {
          console.log("SUCCESS!");
          reset();
          setIsSubmitted(false);
        },
        (error) => {
          console.log("FAILED...", error);
        }
      );
  
    console.log('Original form data:', data);
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

  // Full country code list
  const countryCodes = [
    { code: '+93', name: 'Afghanistan' },
    { code: '+355', name: 'Albania' },
    { code: '+213', name: 'Algeria' },
    { code: '+1-684', name: 'American Samoa' },
    { code: '+376', name: 'Andorra' },
    { code: '+244', name: 'Angola' },
    { code: '+1-264', name: 'Anguilla' },
    { code: '+672', name: 'Antarctica' },
    { code: '+1-268', name: 'Antigua and Barbuda' },
    { code: '+54', name: 'Argentina' },
    { code: '+374', name: 'Armenia' },
    { code: '+297', name: 'Aruba' },
    { code: '+61', name: 'Australia' },
    { code: '+43', name: 'Austria' },
    { code: '+994', name: 'Azerbaijan' },
    { code: '+1-242', name: 'Bahamas' },
    { code: '+973', name: 'Bahrain' },
    { code: '+880', name: 'Bangladesh' },
    { code: '+1-246', name: 'Barbados' },
    { code: '+375', name: 'Belarus' },
    { code: '+32', name: 'Belgium' },
    { code: '+501', name: 'Belize' },
    { code: '+229', name: 'Benin' },
    { code: '+1-441', name: 'Bermuda' },
    { code: '+975', name: 'Bhutan' },
    { code: '+591', name: 'Bolivia' },
    { code: '+387', name: 'Bosnia and Herzegovina' },
    { code: '+267', name: 'Botswana' },
    { code: '+55', name: 'Brazil' },
    { code: '+246', name: 'British Indian Ocean Territory' },
    { code: '+1-284', name: 'British Virgin Islands' },
    { code: '+673', name: 'Brunei' },
    { code: '+359', name: 'Bulgaria' },
    { code: '+226', name: 'Burkina Faso' },
    { code: '+257', name: 'Burundi' },
    { code: '+855', name: 'Cambodia' },
    { code: '+237', name: 'Cameroon' },
    { code: '+1', name: 'Canada' },
    { code: '+238', name: 'Cape Verde' },
    { code: '+1-345', name: 'Cayman Islands' },
    { code: '+236', name: 'Central African Republic' },
    { code: '+235', name: 'Chad' },
    { code: '+56', name: 'Chile' },
    { code: '+86', name: 'China' },
    { code: '+61', name: 'Christmas Island' },
    { code: '+61', name: 'Cocos Islands' },
    { code: '+57', name: 'Colombia' },
    { code: '+269', name: 'Comoros' },
    { code: '+682', name: 'Cook Islands' },
    { code: '+506', name: 'Costa Rica' },
    { code: '+385', name: 'Croatia' },
    { code: '+53', name: 'Cuba' },
    { code: '+599', name: 'Curacao' },
    { code: '+357', name: 'Cyprus' },
    { code: '+420', name: 'Czech Republic' },
    { code: '+243', name: 'Democratic Republic of the Congo' },
    { code: '+45', name: 'Denmark' },
    { code: '+253', name: 'Djibouti' },
    { code: '+1-767', name: 'Dominica' },
    { code: '+1-809', name: 'Dominican Republic' },
    { code: '+670', name: 'East Timor' },
    { code: '+593', name: 'Ecuador' },
    { code: '+20', name: 'Egypt' },
    { code: '+503', name: 'El Salvador' },
    { code: '+240', name: 'Equatorial Guinea' },
    { code: '+291', name: 'Eritrea' },
    { code: '+372', name: 'Estonia' },
    { code: '+251', name: 'Ethiopia' },
    { code: '+500', name: 'Falkland Islands' },
    { code: '+298', name: 'Faroe Islands' },
    { code: '+679', name: 'Fiji' },
    { code: '+358', name: 'Finland' },
    { code: '+33', name: 'France' },
    { code: '+594', name: 'French Guiana' },
    { code: '+689', name: 'French Polynesia' },
    { code: '+241', name: 'Gabon' },
    { code: '+220', name: 'Gambia' },
    { code: '+995', name: 'Georgia' },
    { code: '+49', name: 'Germany' },
    { code: '+233', name: 'Ghana' },
    { code: '+350', name: 'Gibraltar' },
    { code: '+30', name: 'Greece' },
    { code: '+299', name: 'Greenland' },
    { code: '+1-473', name: 'Grenada' },
    { code: '+590', name: 'Guadeloupe' },
    { code: '+1-671', name: 'Guam' },
    { code: '+502', name: 'Guatemala' },
    { code: '+224', name: 'Guinea' },
    { code: '+245', name: 'Guinea-Bissau' },
    { code: '+592', name: 'Guyana' },
    { code: '+509', name: 'Haiti' },
    { code: '+504', name: 'Honduras' },
    { code: '+852', name: 'Hong Kong' },
    { code: '+36', name: 'Hungary' },
    { code: '+354', name: 'Iceland' },
    { code: '+91', name: 'India' },
    { code: '+62', name: 'Indonesia' },
    { code: '+98', name: 'Iran' },
    { code: '+964', name: 'Iraq' },
    { code: '+353', name: 'Ireland' },
    { code: '+972', name: 'Israel' },
    { code: '+39', name: 'Italy' },
    { code: '+225', name: 'Ivory Coast' },
    { code: '+1-876', name: 'Jamaica' },
    { code: '+81', name: 'Japan' },
    { code: '+962', name: 'Jordan' },
    { code: '+7', name: 'Kazakhstan' },
    { code: '+254', name: 'Kenya' },
    { code: '+686', name: 'Kiribati' },
    { code: '+383', name: 'Kosovo' },
    { code: '+965', name: 'Kuwait' },
    { code: '+996', name: 'Kyrgyzstan' },
    { code: '+856', name: 'Laos' },
    { code: '+371', name: 'Latvia' },
    { code: '+961', name: 'Lebanon' },
    { code: '+266', name: 'Lesotho' },
    { code: '+231', name: 'Liberia' },
    { code: '+218', name: 'Libya' },
    { code: '+423', name: 'Liechtenstein' },
    { code: '+370', name: 'Lithuania' },
    { code: '+352', name: 'Luxembourg' },
    { code: '+853', name: 'Macau' },
    { code: '+389', name: 'Macedonia' },
    { code: '+261', name: 'Madagascar' },
    { code: '+265', name: 'Malawi' },
    { code: '+60', name: 'Malaysia' },
    { code: '+960', name: 'Maldives' },
    { code: '+223', name: 'Mali' },
    { code: '+356', name: 'Malta' },
    { code: '+692', name: 'Marshall Islands' },
    { code: '+596', name: 'Martinique' },
    { code: '+222', name: 'Mauritania' },
    { code: '+230', name: 'Mauritius' },
    { code: '+262', name: 'Mayotte' },
    { code: '+52', name: 'Mexico' },
    { code: '+691', name: 'Micronesia' },
    { code: '+373', name: 'Moldova' },
    { code: '+377', name: 'Monaco' },
    { code: '+976', name: 'Mongolia' },
    { code: '+382', name: 'Montenegro' },
    { code: '+1-664', name: 'Montserrat' },
    { code: '+212', name: 'Morocco' },
    { code: '+258', name: 'Mozambique' },
    { code: '+95', name: 'Myanmar' },
    { code: '+264', name: 'Namibia' },
    { code: '+674', name: 'Nauru' },
    { code: '+977', name: 'Nepal' },
    { code: '+31', name: 'Netherlands' },
    { code: '+599', name: 'Netherlands Antilles' },
    { code: '+687', name: 'New Caledonia' },
    { code: '+64', name: 'New Zealand' },
    { code: '+505', name: 'Nicaragua' },
    { code: '+227', name: 'Niger' },
    { code: '+234', name: 'Nigeria' },
    { code: '+683', name: 'Niue' },
    { code: '+672', name: 'Norfolk Island' },
    { code: '+850', name: 'North Korea' },
    { code: '+1-670', name: 'Northern Mariana Islands' },
    { code: '+47', name: 'Norway' },
    { code: '+968', name: 'Oman' },
    { code: '+92', name: 'Pakistan' },
    { code: '+680', name: 'Palau' },
    { code: '+970', name: 'Palestine' },
    { code: '+507', name: 'Panama' },
    { code: '+675', name: 'Papua New Guinea' },
    { code: '+595', name: 'Paraguay' },
    { code: '+51', name: 'Peru' },
    { code: '+63', name: 'Philippines' },
    { code: '+64', name: 'Pitcairn' },
    { code: '+48', name: 'Poland' },
    { code: '+351', name: 'Portugal' },
    { code: '+1-787', name: 'Puerto Rico' },
    { code: '+974', name: 'Qatar' },
    { code: '+242', name: 'Republic of the Congo' },
    { code: '+262', name: 'Reunion' },
    { code: '+40', name: 'Romania' },
    { code: '+7', name: 'Russia' },
    { code: '+250', name: 'Rwanda' },
    { code: '+590', name: 'Saint Barthelemy' },
    { code: '+290', name: 'Saint Helena' },
    { code: '+1-869', name: 'Saint Kitts and Nevis' },
    { code: '+1-758', name: 'Saint Lucia' },
    { code: '+590', name: 'Saint Martin' },
    { code: '+508', name: 'Saint Pierre and Miquelon' },
    { code: '+1-784', name: 'Saint Vincent and the Grenadines' },
    { code: '+685', name: 'Samoa' },
    { code: '+378', name: 'San Marino' },
    { code: '+239', name: 'Sao Tome and Principe' },
    { code: '+966', name: 'Saudi Arabia' },
    { code: '+221', name: 'Senegal' },
    { code: '+381', name: 'Serbia' },
    { code: '+248', name: 'Seychelles' },
    { code: '+232', name: 'Sierra Leone' },
    { code: '+65', name: 'Singapore' },
    { code: '+1-721', name: 'Sint Maarten' },
    { code: '+421', name: 'Slovakia' },
    { code: '+386', name: 'Slovenia' },
    { code: '+677', name: 'Solomon Islands' },
    { code: '+252', name: 'Somalia' },
    { code: '+27', name: 'South Africa' },
    { code: '+82', name: 'South Korea' },
    { code: '+211', name: 'South Sudan' },
    { code: '+34', name: 'Spain' },
    { code: '+94', name: 'Sri Lanka' },
    { code: '+249', name: 'Sudan' },
    { code: '+597', name: 'Suriname' },
    { code: '+47', name: 'Svalbard and Jan Mayen' },
    { code: '+268', name: 'Swaziland' },
    { code: '+46', name: 'Sweden' },
    { code: '+41', name: 'Switzerland' },
    { code: '+963', name: 'Syria' },
    { code: '+886', name: 'Taiwan' },
    { code: '+992', name: 'Tajikistan' },
    { code: '+255', name: 'Tanzania' },
    { code: '+66', name: 'Thailand' },
    { code: '+228', name: 'Togo' },
    { code: '+690', name: 'Tokelau' },
    { code: '+676', name: 'Tonga' },
    { code: '+1-868', name: 'Trinidad and Tobago' },
    { code: '+216', name: 'Tunisia' },
    { code: '+90', name: 'Turkey' },
    { code: '+993', name: 'Turkmenistan' },
    { code: '+1-649', name: 'Turks and Caicos Islands' },
    { code: '+688', name: 'Tuvalu' },
    { code: '+256', name: 'Uganda' },
    { code: '+380', name: 'Ukraine' },
    { code: '+971', name: 'United Arab Emirates' },
    { code: '+44', name: 'United Kingdom' },
    { code: '+1', name: 'United States' },
    { code: '+598', name: 'Uruguay' },
    { code: '+998', name: 'Uzbekistan' },
    { code: '+678', name: 'Vanuatu' },
    { code: '+58', name: 'Venezuela' },
    { code: '+84', name: 'Vietnam' },
    { code: '+1-284', name: 'Virgin Islands, British' },
    { code: '+1-340', name: 'Virgin Islands, U.S.' },
    { code: '+681', name: 'Wallis and Futuna' },
    { code: '+212', name: 'Western Sahara' },
    { code: '+967', name: 'Yemen' },
    { code: '+260', name: 'Zambia' },
    { code: '+263', name: 'Zimbabwe' },
  ];

  const [selectedCountry, setSelectedCountry] = useState(countryCodes.find(c => c.code === '+255'));
  const [showDropdown, setShowDropdown] = useState(false);

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
                <div className="flex">
                  <div className="relative" style={{ minWidth: '100px' }}>
                    <button
                      type="button"
                      className="flex items-center justify-between px-3 py-3 border border-gray-300 bg-gray-50 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-blue-200 text-gray-700 w-full h-12"
                      onClick={() => setShowDropdown((prev) => !prev)}
                      tabIndex={0}
                      style={{ minWidth: '100px', height: '48px' }}
                    >
                      <span className="mr-2 font-medium">{selectedCountry.code}</span>
                      <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </button>
                    {showDropdown && (
                      <div className="absolute left-0 z-10 mt-1 bg-white border border-gray-200 rounded shadow-lg max-h-60 overflow-y-auto" style={{ minWidth: '260px', maxHeight: '300px' }}>
                        {countryCodes.map((country) => (
                          <button
                            type="button"
                            key={country.code + '-' + country.name}
                            className={`w-full text-left px-4 py-2 hover:bg-gray-100 ${country.code === selectedCountry.code ? 'bg-gray-100 font-semibold' : ''}`}
                            onClick={() => {
                              setSelectedCountry(country);
                              setShowDropdown(false);
                            }}
                          >
                            {country.name} ({country.code})
                          </button>
                        ))}
                      </div>
                    )}
                  </div>
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
                    className={`w-full px-4 py-3 border-t border-b border-r rounded-r-lg focus:outline-none focus:ring-2 transition-colors h-12 ${
                      errors.phone 
                        ? 'border-red-500 focus:ring-red-200' 
                        : 'border-gray-300 focus:ring-blue-200'
                    }`}
                    placeholder="e.g., 712345678"
                    value={watchedValues.phone || ''}
                    onChange={e => {
                      // Remove country code if user types it
                      let val = e.target.value;
                      if (val.startsWith(selectedCountry.code)) {
                        val = val.slice(selectedCountry.code.length);
                      }
                      setValue('phone', val, { shouldValidate: true, shouldDirty: true });
                    }}
                    onFocus={() => setShowDropdown(false)}
                    style={{ height: '48px' }}
                  />
                </div>
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