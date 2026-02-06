'use client';

import { useState, useEffect } from 'react';

const AsyncPhoneInput = ({ value, onChange }) => {
  const [PhoneInput, setPhoneInput] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadPhoneInput = async () => {
      try {
        const module = await import('react-phone-input-2');
        console.log('Module loaded:', module);
        if (module.default) {
          setPhoneInput(() => module.default);
        } else {
          setError('PhoneInput component could not be loaded correctly.');
        }
      } catch (err) {
        setError('Failed to load PhoneInput component.');
        console.error('Error loading PhoneInput:', err);
      } finally {
        setLoading(false);
      }
    };

    loadPhoneInput();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!PhoneInput) {
    return <div>PhoneInput component is not available.</div>;
  }

  return (
    <PhoneInput
      country={'in'}
      value={value}
      onChange={onChange}
      inputProps={{
        name: 'mobile',
        required: true,
        className: 'contact_inputt w-100  px-5 border-0 border-bottom border-black',
      }}
     
    />
  );
};

export default AsyncPhoneInput;
