import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const titles = {
  "/": "Evendo - Home Page",
  "/features": "Evendo - Features",
  "/pricing": "Evendo - Pricing",
  "/faqs": "Evendo - FAQs",
};

export function TitleUpdater() {
  const location = useLocation();

  useEffect(() => {
    document.title = titles[location.pathname] || "Evendo";
  }, [location.pathname]);

  return null; // invisible component
}