import type {
  HTMLAttributes,
  PropsWithChildren,
  ReactElement,
  ReactNode,
  Ref,
} from "react";
import { Children, cloneElement, forwardRef, isValidElement } from "react";

import { composeRefs } from "../../utils/compose-refs";

/* -------------------------------------------------------------------------------------------------
 * Slot
 * -----------------------------------------------------------------------------------------------*/

interface SlotProps extends HTMLAttributes<HTMLElement> {
  children?: ReactNode;
}

const Slot = forwardRef<HTMLElement, SlotProps>(
  function Slot(props, forwardedRef) {
    const { children, ...slotProps } = props;
    const childrenArray = Children.toArray(children);
    const slottable = childrenArray.find(isSlottable);

    if (slottable) {
      // the new element to render is the one passed as a child of `Slottable`
      const newElement = slottable.props.children as ReactNode;

      const newChildren = childrenArray.map((child) => {
        if (child === slottable) {
          // because the new element will be the one rendered, we are only interested
          // in grabbing its children (`newElement.props.children`)
          if (Children.count(newElement) > 1) return Children.only(null);
          return isValidElement<PropsWithChildren>(newElement)
            ? (newElement.props.children as ReactNode)
            : null;
        } else {
          return child;
        }
      });

      return (
        <SlotClone {...slotProps} ref={forwardedRef}>
          {isValidElement(newElement)
            ? cloneElement(newElement, undefined, newChildren)
            : null}
        </SlotClone>
      );
    }

    return (
      <SlotClone {...slotProps} ref={forwardedRef}>
        {children}
      </SlotClone>
    );
  },
);

/* -------------------------------------------------------------------------------------------------
 * SlotClone
 * -----------------------------------------------------------------------------------------------*/

interface SlotCloneProps {
  children: ReactNode;
}

const SlotClone = forwardRef<HTMLElement, SlotCloneProps>(
  function SlotClone(props, forwardedRef) {
    const { children, ...slotProps } = props;

    if (isValidElement<PropsWithChildren>(children)) {
      const childWithRef = children as ReactElement<
        PropsWithChildren & { ref: Ref<HTMLElement> }
      >;
      return cloneElement(childWithRef, {
        ...mergeProps(slotProps, childWithRef.props),
        ref: forwardedRef
          ? composeRefs(forwardedRef, childWithRef.props.ref)
          : childWithRef.props.ref,
      });
    }

    return Children.count(children) > 1 ? Children.only(null) : null;
  },
);

/* -------------------------------------------------------------------------------------------------
 * Slottable
 * -----------------------------------------------------------------------------------------------*/

const Slottable = ({ children }: { children: ReactNode }) => {
  return <>{children}</>;
};

/* ---------------------------------------------------------------------------------------------- */

// eslint-disable-next-line @typescript-eslint/no-explicit-any
type AnyProps = Record<string, any>;

function isSlottable(
  child: ReactNode,
): child is ReactElement<PropsWithChildren> {
  return isValidElement(child) && child.type === Slottable;
}

function mergeProps(slotProps: AnyProps, childProps: AnyProps) {
  // all child props should override
  const overrideProps = { ...childProps };

  for (const propName in childProps) {
    const slotPropValue = slotProps[propName];
    const childPropValue = childProps[propName];

    const isHandler = /^on[A-Z]/.test(propName);
    if (isHandler) {
      // if the handler exists on both, we compose them
      if (slotPropValue && childPropValue) {
        overrideProps[propName] = (...args: unknown[]) => {
          childPropValue(...args);
          slotPropValue(...args);
        };
      }
      // but if it exists only on the slot, we use only this one
      else if (slotPropValue) {
        overrideProps[propName] = slotPropValue;
      }
    }
    // if it's `style`, we merge them
    else if (propName === "style") {
      overrideProps[propName] = { ...slotPropValue, ...childPropValue };
    } else if (propName === "className") {
      overrideProps[propName] = [slotPropValue, childPropValue]
        .filter(Boolean)
        .join(" ");
    }
  }

  return { ...slotProps, ...overrideProps };
}

const Root = Slot;

export { Root, Slot, Slottable };

export type { SlotProps };
