import "@/styles/globals.css";
// import type { AppProps } from "next/app";
import React from "react";
import PersonalForm from "./components/PersonalForm";
//import "./App.css";

// export default function App({ Component, pageProps }: AppProps) {
export default function App() {
  // return <Component {...pageProps} />;
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <PersonalForm />
    </div>
  );
}
