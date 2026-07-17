import React from "react";

export default function Button({
  text,
  variant = "navy",
  onClick,
  href,
  icon,
  className = "",
}) {
  const btnClasses = `btn btn-${variant} ${className}`;

  if (href) {
    return (
      <a href={href} className={btnClasses} onClick={onClick}>
        {icon && (
          <span
            className="btn-icon"
            style={{
              marginRight: "0.5rem",
              display: "inline-flex",
              alignItems: "center",
            }}
          >
            {icon}
          </span>
        )}
        {text}
      </a>
    );
  }

  return (
    <button className={btnClasses} onClick={onClick}>
      {icon && (
        <span
          className="btn-icon"
          style={{
            marginRight: "0.5rem",
            display: "inline-flex",
            alignItems: "center",
          }}
        >
          {icon}
        </span>
      )}
      {text}
    </button>
  );
}
