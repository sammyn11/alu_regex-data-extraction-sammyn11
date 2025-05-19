import React, { useState } from 'react';

interface ValidationResult {
  isValid: boolean;
  message: string;
}

const RegexValidator: React.FC = () => {
  const [input, setInput] = useState('');
  const [validationType, setValidationType] = useState('email');
  const [result, setResult] = useState<ValidationResult | null>(null);

  const validationPatterns = {
    email: {
      pattern: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
      description: 'Email address (e.g., user@example.com)'
    },
    url: {
      pattern: /^https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)$/,
      description: 'URL (e.g., https://www.example.com)'
    },
    phone: {
      pattern: /^(\+\d{1,2}\s?)?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}$/,
      description: 'Phone number (e.g., (123) 456-7890)'
    },
    creditCard: {
      pattern: /^(?:\d{4}[- ]?){3}\d{4}$/,
      description: 'Credit card number (e.g., 1234 5678 9012 3456)'
    }
  };

  const validateInput = () => {
    const validator = validationPatterns[validationType as keyof typeof validationPatterns];
    const isValid = validator.pattern.test(input);
    
    setResult({
      isValid,
      message: isValid 
        ? 'Valid input!' 
        : `Invalid ${validationType}. Please check the format.`
    });
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold mb-6 text-gray-800">Regex Validator</h2>
      
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2">
          Select Validation Type:
        </label>
        <select
          className="w-full p-2 border rounded"
          value={validationType}
          onChange={(e) => setValidationType(e.target.value)}
        >
          {Object.entries(validationPatterns).map(([type, { description }]) => (
            <option key={type} value={type}>
              {description}
            </option>
          ))}
        </select>
      </div>

      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2">
          Input to Validate:
        </label>
        <input
          type="text"
          className="w-full p-2 border rounded"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder={`Enter ${validationType}...`}
        />
      </div>

      <button
        className="w-full bg-blue-500 text-white font-bold py-2 px-4 rounded hover:bg-blue-700"
        onClick={validateInput}
      >
        Validate
      </button>

      {result && (
        <div className={`mt-4 p-3 rounded ${
          result.isValid ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'
        }`}>
          {result.message}
        </div>
      )}
    </div>
  );
};

export default RegexValidator; 