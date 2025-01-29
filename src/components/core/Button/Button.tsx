import { ReactNode } from "react";
import "./Button.css";
import { ButtonMode } from "../../enums/ButtonMode";

type ButtonProps = {
  children?: ReactNode;
  className?: string;
  buttonType?: "button" | "anchor";
  mode?: ButtonMode;
  Icon?: ReactNode;
  [key: string]: unknown;
};

export default function Button({
  children,
  className,
  buttonType = "button",
  mode,
  Icon,
  ...props
}: ButtonProps) {
  let cssClasses: string = mode ? `button ${mode}-button` : `button`;

  if (Icon) {
    cssClasses += " icon-button";
  }

  if (className) {
    cssClasses += " " + className;
  }

  const isAnchor = buttonType === "button" ? false : true;

  return (
    <>
      {isAnchor ? (
        <a className={cssClasses} {...props}>
          {Icon && <span className="button-icon">{Icon}</span>}
          {children}
        </a>
      ) : (
        <button className={cssClasses} {...props}>
          {Icon && <span className="button-icon">{Icon}</span>}
          {children}
        </button>
      )}
    </>
  );
}
