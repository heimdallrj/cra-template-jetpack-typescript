import React, { useState } from 'react';
import { prefix } from '../config';

type AccordionProps = {
  children: React.ReactNode;
};

export function Accordion({ children }: AccordionProps) {
  return <div className={`${prefix}-accordion`}>{children}</div>;
}

type AccordionItemProps = {
  children: React.ReactNode;
  title: string;
};

export function AccordionItem({ children, title }: AccordionItemProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={`${prefix}-accordion__item`}>
      <div
        className={`${prefix}-accordion__title`}
        onClick={() => setIsOpen(!isOpen)}
      >
        <div>{title}</div>
        <div>{isOpen ? '-' : '+'}</div>
      </div>
      {isOpen && (
        <div className={`${prefix}-accordion__content`}>{children}</div>
      )}
    </div>
  );
}

export default Accordion;
