import "@/styles/globals.css";
import ReactLenis from "lenis/react";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ReactLenis root>
      <Component {...pageProps} />
    </ReactLenis>
  );
}
