import { useCallback, useEffect, useState } from "react";

const mobileUserAgentRegex =
  /Mobi|Android|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i;

export const enum LayoutThresholds {
  MobileTablePortrait = 810,
  MobileTabletLandscape = 1080,
  MobilePhonePortrait = 430,
  MobilePhoneLandscape = 844,
}

const isMobileUserAgent = () => mobileUserAgentRegex.test(navigator.userAgent);

export const useIsMobile = (
  layout: LayoutThresholds = LayoutThresholds.MobilePhonePortrait
) => {
  const isMobileViewport = useCallback(() => {
    return window.innerWidth < layout;
  }, [layout]);

  const [isMobile, setIsMobile] = useState(
    isMobileViewport() || isMobileUserAgent()
  );

  useEffect(() => {
    let timeoutId: NodeJS.Timeout;

    const handleResize = () => {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => {
        setIsMobile(isMobileViewport() || isMobileUserAgent());
      }, 150);

      window.addEventListener("resize", handleResize);
    };

    return () => {
      window.removeEventListener("resize", handleResize);
      clearTimeout(timeoutId);
    };
  }, [isMobileViewport]);

  return isMobile;
};
