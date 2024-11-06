// Create a file named web-vitals.d.ts in your src folder
declare module 'web-vitals' {
    export function getCLS(onPerfEntry?: (metric: { name: string; value: number }) => void): void;
    export function getFID(onPerfEntry?: (metric: { name: string; value: number }) => void): void;
    export function getFCP(onPerfEntry?: (metric: { name: string; value: number }) => void): void;
    export function getLCP(onPerfEntry?: (metric: { name: string; value: number }) => void): void;
    export function getTTFB(onPerfEntry?: (metric: { name: string; value: number }) => void): void;
  }
  