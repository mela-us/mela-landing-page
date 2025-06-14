'use client';

import React, { useEffect, useState } from "react";
import { useTheme } from "next-themes";

export const ThemeAwareFavicon = () => {
  const { resolvedTheme, theme, setTheme } = useTheme();
  const [hasMounted, setHasMounted] = useState(false);

  // Ensure component has mounted before accessing browser APIs
  useEffect(() => {
    setHasMounted(true);
  }, []);

  useEffect(() => {
    // Skip if not mounted or theme is not resolved yet
    if (!hasMounted || !resolvedTheme) return;

    const favicon = resolvedTheme === "dark" ? "/WhiteLogoIcon.png" : "/LogoIcon.png";    
    console.log("Current theme:", resolvedTheme, "System theme:", theme, "Setting favicon to:", favicon);
    
    // First remove existing favicon links
    const existingLinks = document.querySelectorAll("link[rel='icon'], link[rel='shortcut icon']");
    existingLinks.forEach(link => link.remove());

    // Create new favicon link
    const link = document.createElement('link');
    link.rel = 'icon';
    link.type = 'image/png';
    link.href = favicon;
    document.head.appendChild(link);
    
    // Update apple-touch-icon
    const appleLinks = document.querySelectorAll("link[rel='apple-touch-icon']");
    appleLinks.forEach(link => link.remove());
    
    const appleLink = document.createElement('link');
    appleLink.rel = 'apple-touch-icon';
    appleLink.href = favicon;
    document.head.appendChild(appleLink);

    // Update theme color
    const themeColor = resolvedTheme === "dark" ? "#000000" : "#ffffff";
    const metaThemeColor = document.querySelector("meta[name='theme-color']");
    if (metaThemeColor) {
      metaThemeColor.setAttribute('content', themeColor);
    }
  }, [resolvedTheme, hasMounted]);

  // Add a debug button to test theme switching (can be removed in production)
  if (!hasMounted) return null;
  
  return (
    <div style={{ position: 'fixed', bottom: '10px', right: '10px', zIndex: 9999, display: 'none' }}>
      <button onClick={() => setTheme(resolvedTheme === 'dark' ? 'light' : 'dark')}>
        Toggle Theme (Current: {resolvedTheme})
      </button>
    </div>
  );
};