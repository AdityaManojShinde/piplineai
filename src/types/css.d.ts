// For CSS
declare module '*.css' {
  const content: { [className: string]: string };
  export default content;
}

// For Tailwind CSS
declare namespace React {
  interface CSSProperties {
    [key: `--${string}`]: string | number;
  }
} 