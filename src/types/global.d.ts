/* eslint-disable @typescript-eslint/no-explicit-any */
interface Window {
  fbq: (...args: any[]) => void;
  gtag: (...args: any[]) => void;
}
