"use client";

import { type VariantProps, cva } from "class-variance-authority";
import {
  type AnchorHTMLAttributes,
  type CSSProperties,
  type ReactNode,
  forwardRef,
} from "react";
import {
  Button as _Button,
  type ButtonProps as _ButtonProps,
} from "react-aria-components";
import { cn, focusRing } from "../../utils/cn";
import { Slot } from "../slot/slot";
import { Spinner } from "../spinner/spinner";
import Link from "next/link";

export const buttonVariants = cva(
  `group/button gap-2 relative inline-flex items-center justify-center overflow-hidden whitespace-nowrap rounded text-sm font-normal ring-offset-white transition-colors ${focusRing} data-[disabled]:pointer-events-none aria-disabled:pointer-events-none`,
  {
    variants: {
      variant: {
        default:
          "bg-slate-900 text-white hover:bg-slate-800 data-[disabled]:bg-slate-900/25 data-[disabled]:text-white/75 aria-disabled:bg-slate-900/10 aria-disabled:text-slate-900/30",
        primary:
          "bg-blue-600 text-white justify-start hover:bg-blue-700 data-[disabled]:bg-blue-600/25 data-[disabled]:text-white/75 aria-disabled:bg-blue-600/10 aria-disabled:text-blue-600/30",
        destructive:
          "bg-red-600 text-white hover:bg-red-700 data-[disabled]:opacity-10 aria-disabled:opacity-10",
        outline:
          "border border-gray-300 bg-white hover:bg-gray-100 hover:text-gray-900 hover:border-gray-400 data-[disabled]:opacity-10 aria-disabled:opacity-10",
        secondary:
          "bg-gray-100 text-gray-900 hover:bg-gray-200 data-[disabled]:opacity-10 aria-disabled:opacity-10",
        ghost:
          "hover:bg-gray-100 hover:text-gray-900 data-[disabled]:opacity-10 aria-disabled:opacity-10",
        link: "text-gray-500 underline-offset-4 underline hover:text-gray-900 data-[disabled]:opacity-10 aria-disabled:opacity-10",
        block:
          "hover:bg-gray-100 hover:text-gray-900 data-[disabled]:opacity-10 aria-disabled:opacity-10 rounded-none",
      },
      size: {
        default: "h-7 px-2 py-1",
        xs: "rounded px-2 py-1 text-xs",
        sm: "h-7 rounded px-2 py-2 text-xs",
        md: "h-9 rounded px-4 py-2 text-xs",
        lg: "h-10 px-4 py-2",
        icon: "h-10 w-10",
        "icon-sm": "h-7 w-7",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

const ButtonSpinner = () => (
  <div className="absolute inset-0 flex items-center justify-center bg-inherit">
    <Spinner />
  </div>
);

const Arrow = () => (
  <span
    aria-hidden
    className="ml-auto translate-x-0 pl-1 transition-transform group-hover/button:translate-x-1"
  >
    <svg xmlns="http://www.w3.org/2000/svg" width="12" height="9" fill="none">
      <path
        fill="currentColor"
        d="m7.588.168 3.304 3.682c.098.112.168.21.168.378 0 .182-.07.28-.168.392L7.588 8.288h.014a.493.493 0 0 1-.406.168.529.529 0 0 1-.518-.532c0-.112.042-.252.14-.364l1.75-1.96c.266-.308.56-.588.854-.868-.91.028-1.736.028-2.73.028H.532A.55.55 0 0 1 0 4.228a.55.55 0 0 1 .532-.532h6.16c1.12 0 1.68 0 2.73.028-.308-.294-.574-.546-.854-.868L6.818.896a.569.569 0 0 1-.14-.364c0-.28.224-.532.518-.532.168 0 .294.042.406.168h-.014Z"
      />
    </svg>
  </span>
);

export type ButtonProps = _ButtonProps &
  VariantProps<typeof buttonVariants> & {
    style?: CSSProperties;
    children?: ReactNode;
    asChild?: boolean;
    isLoading?: boolean;
    hasArrow?: boolean;
  };

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      variant,
      size,
      isDisabled,
      isLoading,
      slot,
      style,
      asChild = false,
      hasArrow = false,
      children,
      ...props
    },
    ref,
  ) => {
    const loadingUI = isLoading ? <ButtonSpinner /> : undefined;
    const arrowUI = hasArrow ? <Arrow /> : undefined;

    if (asChild) {
      return (
        <Slot
          aria-disabled={isDisabled}
          className={cn(buttonVariants({ variant, size, className }))}
          ref={ref}
          style={style}
          {...props}
        >
          <>
            {children}
            {arrowUI}
            {loadingUI}
          </>
        </Slot>
      );
    }

    return (
      <_Button
        isDisabled={isDisabled}
        slot={slot}
        style={style}
        className={(values) =>
          cn(
            buttonVariants({
              variant,
              size,
              className:
                typeof className === "function" ? className(values) : className,
            }),
          )
        }
        ref={ref}
        {...props}
      >
        <>
          {children}
          {arrowUI}
          {loadingUI}
        </>
      </_Button>
    );
  },
);
Button.displayName = "Button";

export type ButtonLinkProps = AnchorHTMLAttributes<HTMLAnchorElement> &
  VariantProps<typeof buttonVariants> & {
    href: string;
    isDisabled?: boolean;
    isLoading?: boolean;
    hasArrow?: boolean;
  };

export const ButtonLink = forwardRef<HTMLAnchorElement, ButtonLinkProps>(
  (
    {
      className,
      variant,
      size,
      isDisabled,
      isLoading,
      hasArrow = false,
      children,
      ...props
    },
    ref,
  ) => {
    const loadingUI = isLoading ? <ButtonSpinner /> : undefined;

    const arrowUI = hasArrow ? <Arrow /> : undefined;

    return (
      <Link
        aria-disabled={isDisabled}
        className={cn(
          "react-aria-Button",
          buttonVariants({ variant, size, className }),
        )}
        ref={ref}
        {...props}
      >
        <>
          {children}
          {arrowUI}
          {loadingUI}
        </>
      </Link>
    );
  },
);

ButtonLink.displayName = "ButtonLink";
