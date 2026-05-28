"use client";

import {
  type ComponentPropsWithoutRef,
  ComponentRef,
  type ForwardRefExoticComponent,
  type RefAttributes,
  forwardRef,
} from "react";
import {
  Tab as _Tab,
  TabList as _TabList,
  TabPanel as _TabPanel,
  Tabs as _Tabs,
} from "react-aria-components";

import { cn } from "../../utils/cn";

const Tabs: typeof _Tabs = _Tabs;

const TabList: ForwardRefExoticComponent<
  ComponentPropsWithoutRef<typeof _TabList> &
    RefAttributes<ComponentRef<typeof _TabList>>
> = forwardRef<
  ComponentRef<typeof _TabList>,
  ComponentPropsWithoutRef<typeof _TabList>
>(({ className, ...props }, ref) => (
  <_TabList ref={ref} className={cn("w-full border-b", className)} {...props} />
));
TabList.displayName = "TabList";

const Tab: ForwardRefExoticComponent<
  ComponentPropsWithoutRef<typeof _Tab> &
    RefAttributes<ComponentRef<typeof _Tab>>
> = forwardRef<
  ComponentRef<typeof _Tab>,
  ComponentPropsWithoutRef<typeof _Tab>
>(({ className, ...props }, ref) => (
  <_Tab
    ref={ref}
    className={cn(
      "-mb-px inline-flex cursor-pointer border-b px-4 pb-2 text-sm data-selected:border-theme-action data-selected:text-theme-action data-focus-visible:outline-none data-focused:outline-none",
      className,
    )}
    {...props}
  />
));
Tab.displayName = "Tab";

const TabPanel: ForwardRefExoticComponent<
  ComponentPropsWithoutRef<typeof _TabPanel> &
    RefAttributes<ComponentRef<typeof _TabPanel>>
> = forwardRef<
  ComponentRef<typeof _TabPanel>,
  ComponentPropsWithoutRef<typeof _TabPanel>
>(({ className, ...props }, ref) => (
  <_TabPanel
    ref={ref}
    className={cn(
      "mt-2 ring-offset-background focus-visible:outline-none data-focus-visible:outline-none data-focus-visible:ring-2 data-focus-visible:ring-ring data-focus-visible:ring-offset-2",
      className,
    )}
    {...props}
  />
));
TabPanel.displayName = "TabPanel";

export { Tab, TabList, TabPanel, Tabs };
