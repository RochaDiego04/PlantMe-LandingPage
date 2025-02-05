import { useEffect, useRef, useState } from "react";

export function useSelectDropdown(
  options: string[],
  value: string,
  onChange: (newValue: string) => void
) {
  const [open, setOpen] = useState(false);
  const [focusedIndex, setFocusedIndex] = useState(-1);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  useEffect(() => {
    if (open) {
      const selectedIndex = options.indexOf(value);
      setFocusedIndex(selectedIndex !== -1 ? selectedIndex : 0);
    }
  }, [open, value, options]);

  const handleKeyDown = (event: React.KeyboardEvent) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      if (!open) {
        setOpen(true);
      } else if (focusedIndex >= 0) {
        onChange(options[focusedIndex]);
        setOpen(false);
      }
    } else if (event.key === "Escape") {
      setOpen(false);
    } else if (event.key === "ArrowDown") {
      event.preventDefault();
      setFocusedIndex((prev) => (prev < options.length - 1 ? prev + 1 : 0));
    } else if (event.key === "ArrowUp") {
      event.preventDefault();
      setFocusedIndex((prev) => (prev > 0 ? prev - 1 : options.length - 1));
    }
  };

  return {
    open,
    setOpen,
    focusedIndex,
    setFocusedIndex,
    dropdownRef,
    handleKeyDown,
  };
}
