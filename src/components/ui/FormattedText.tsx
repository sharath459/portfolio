import React from 'react';

interface FormattedTextProps {
  text: string;
  className?: string;
}

/** Renders the inline <strong> markup used in data.ts as React elements. */
function renderInline(text: string) {
  const parts = text.split(/(<strong>.*?<\/strong>)/g);
  return parts.map((part, index) => {
    if (part.startsWith('<strong>') && part.endsWith('</strong>')) {
      const content = part.replace(/<\/?strong>/g, '');
      return (
        <strong key={index} className="font-semibold text-primary">
          {content}
        </strong>
      );
    }
    return <React.Fragment key={index}>{part}</React.Fragment>;
  });
}

/**
 * Safely renders the lightweight markup used in data.ts (<p> paragraphs and
 * <strong> emphasis) as React elements, avoiding dangerouslySetInnerHTML.
 * Text without <p> tags renders as a single paragraph.
 */
export function FormattedText({ text, className = '' }: FormattedTextProps) {
  const paragraphs = text
    .split(/<\/?p>/g)
    .map((part) => part.trim())
    .filter(Boolean);

  return (
    <div className={className}>
      {paragraphs.map((para, index) => (
        <p key={index}>{renderInline(para)}</p>
      ))}
    </div>
  );
}
