import { useState, useRef, useEffect } from "react";
import {
  FaChevronDown,
  FaGlobeAmericas,
  FaGlobeEurope,
  FaGlobe,
} from "react-icons/fa";

const LANGUAGES = [
  { code: "en", label: "English", icon: <FaGlobeAmericas /> },
  { code: "fr", label: "French", icon: <FaGlobeEurope /> },
  { code: "de", label: "German", icon: <FaGlobe /> },
];

const LanguageSelector = () => {
  const [open, setOpen] = useState(false);
  const [selectedLang, setSelectedLang] = useState("en");
  const ref = useRef<HTMLDivElement>(null);

  const toggleDropdown = () => setOpen(!open);

  const handleLanguageChange = (code: string) => {
    setSelectedLang(code);
    setOpen(false);
    // Optional: Save to localStorage or trigger i18n language switch
    // localStorage.setItem("language", code);
  };

  const selectedLabel = LANGUAGES.find((l) => l.code === selectedLang)?.label;

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="relative" ref={ref}>
      <div
        onClick={toggleDropdown}
        className="flex items-center gap-1 cursor-pointer select-none"
      >
        <span>{selectedLabel?.slice(0, 3)}</span>
        <FaChevronDown className="text-xs" />
      </div>

      {open && (
        <div className="absolute mt-2 right-0 bg-white rounded shadow-md w-40 z-10 text-black">
          {LANGUAGES.map((lang) => (
            <div
              key={lang.code}
              onClick={() => handleLanguageChange(lang.code)}
              className="px-4 py-2 hover:bg-gray-100 flex items-center gap-2 cursor-pointer"
            >
              <span className="text-gray-500">{lang.icon}</span> {lang.label}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default LanguageSelector;
