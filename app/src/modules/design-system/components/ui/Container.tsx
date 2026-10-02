import React from "react";

export interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  size?: "default" | "md" | "sm";
  children: React.ReactNode;
  className?: string;
}

/**
 * Container Component
 * Responsive centering container wrapper matching design system breakpoints.
 * - default: 1400px
 * - md: 1080px
 * - sm: 760px
 */
export function Container({
  size = "default",
  children,
  className = "",
  style,
  ...props
}: ContainerProps) {
  let sizeClass = "container";
  if (size === "md") sizeClass = "container-md";
  else if (size === "sm") sizeClass = "container-sm";

  return (
    <div className={`${sizeClass} ${className}`.trim()} style={style} {...props}>
      {children}
    </div>
  );
}

export default Container;
