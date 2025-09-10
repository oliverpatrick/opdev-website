"use client";

import React, { useState } from "react";

type AccordionItem = {
  id: string;
  title: string;
  content: string | React.ReactNode;
};

type Props = {
  items: AccordionItem[];
  allowMultiple?: boolean;
};

export const Accordion = ({ items, allowMultiple = false }: Props) => {
  const [openItems, setOpenItems] = useState<Set<string>>(new Set());

  const toggleItem = (id: string) => {
    const newOpenItems = new Set(openItems);

    if (newOpenItems.has(id)) {
      newOpenItems.delete(id);
    } else {
      if (!allowMultiple) {
        newOpenItems.clear();
      }
      newOpenItems.add(id);
    }

    setOpenItems(newOpenItems);
  };

  return (
    <div className="w-full space-y-2">
      {items.map(item => (
        <div
          key={item.id}
          className="border border-secondary rounded-b-lg overflow-hidden"
        >
          <button
            onClick={() => toggleItem(item.id)}
            className="w-full px-4 py-3 text-left bg-primary hover:bg-primary/50 transition-colors duration-200 flex justify-between items-center"
          >
            <span className="font-medium text-secondary">{item.title}</span>
            <svg
              className={`w-5 h-5 text-accent-secondary transition-transform duration-200 ${
                openItems.has(item.id) ? "rotate-180" : ""
              }`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </button>
          {openItems.has(item.id) && (
            <div className="px-4 py-3 bg-white border-t border-primary">
              <p className="text-secondary">{item.content}</p>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};
