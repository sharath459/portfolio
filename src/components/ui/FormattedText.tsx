import React from 'react';

interface FormattedTextProps {
  text: string;
  className?: string;
}

/**
 * Safely renders text with <strong> tags converted to React elements
 * Avoids using dangerouslySetInnerHTML for better security
 */
export function FormattedText({ text, className = '' }: FormattedTextProps) {
  // Split text by <strong> tags and create React elements
  const parts = text.split(/(<strong>.*?<\/strong>)/g);
  
  return (
    <span className={className}>
      {parts.map((part, index) => {
        // Check if this part is a <strong> tag
        if (part.startsWith('<strong>') && part.endsWith('</strong>')) {
          // Extract content between tags
          const content = part.replace(/<\/?strong>/g, '');
          return (
            <strong key={index} className="font-semibold text-primary">
              {content}
            </strong>
          );
        }
        // Regular text
        return <React.Fragment key={index}>{part}</React.Fragment>;
      })}
    </span>
  );
}
