import React from 'react';

interface TextareaProps {
  id: string;
  name: string;
  label?: string;
  placeholder?: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  required?: boolean;
  rows?: number;
  className?: string;
}

export default function Textarea({
  id,
  name,
  label,
  placeholder,
  value,
  onChange,
  required = false,
  rows = 4,
  className = ''
}: TextareaProps) {
  return (
    <div className={className}>
      {label && (
        <label htmlFor={id} className="block text-sm font-medium text-gray-700 mb-2">
          {label} {required && '*'}
        </label>
      )}
      <textarea
        id={id}
        name={name}
        value={value}
        onChange={onChange}
        required={required}
        rows={rows}
        placeholder={placeholder}
        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors resize-none"
      />
    </div>
  );
} 