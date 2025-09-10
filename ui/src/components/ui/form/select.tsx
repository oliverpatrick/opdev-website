"use client";

import { cn } from "@/utils/cn";

import { FieldWrapper, FieldWrapperPassThroughProps } from "./field-wrapper";

type Option = {
  label: React.ReactNode;
  value: string | number | string[];
};

type SelectFieldProps = FieldWrapperPassThroughProps & {
  options: Option[];
  className?: string;
  defaultValue?: string;
  value?: string;
  onChange?: (value: string) => void;
};

export const Select: React.FC<SelectFieldProps> = ({
  label,
  options,
  error,
  className,
  defaultValue,
  value,
  onChange,
}: SelectFieldProps) => {
  return (
    <FieldWrapper label={label} error={error}>
      <select
        className={cn(
          "mt-1 block w-full rounded-md border-gray-600 py-2 pl-3 pr-10 text-base focus:border-blue-500 focus:outline-none focus:ring-blue-500 sm:text-sm",
          className
        )}
        defaultValue={defaultValue}
        value={value}
        onChange={e => onChange?.(e.target.value)}
      >
        {options.map(({ label, value }) => (
          <option key={label?.toString()} value={value}>
            {label}
          </option>
        ))}
      </select>
    </FieldWrapper>
  );
};
