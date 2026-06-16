"use client";

import { useState } from "react";
import { useNetworkState } from "react-use";

type NetworkStatusGateProps = {
  children: React.ReactNode;
};

export default function NetworkStatusGate({ children }: NetworkStatusGateProps) {
  const { online } = useNetworkState();
  const [showStillOffline, setShowStillOffline] = useState(false);

  if (online === false) {
    return (
      <section className="relative isolate min-h-screen overflow-hidden bg-black text-white">
        <div className="absolute -top-28 left-1/2 -z-10 h-[100vh] w-72 -translate-x-1/2 rounded-full bg-blue-400/20 blur-3xl" />
        <div className="mx-auto flex min-h-screen max-w-4xl flex-col items-center justify-center px-6 py-20 text-center">
          <p className="mb-4 text-sm tracking-[0.28em] text-blue-200">
            NETWORK ERROR
          </p>
          <h1 className="text-4xl font-bold sm:text-5xl md:text-6xl">
            You Are Offline
          </h1>
          <p className="mt-6 max-w-2xl text-sm leading-8 text-blue-100 sm:text-base">
            Your internet connection appears to be unavailable right now. Please
            check your network and try again.
          </p>
          <button
            type="button"
            onClick={() => {
              if (navigator.onLine) {
                window.location.reload();
                return;
              }
              setShowStillOffline(true);
            }}
            className="mt-10 inline-flex items-center rounded-md border border-blue-200/40 bg-white/10 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white hover:text-[#101a4e]"
          >
            Try Again
          </button>
          {showStillOffline ? (
            <p className="mt-3 text-xs text-blue-200">
              You are still offline. Reconnect, then try again.
            </p>
          ) : null}
        </div>
      </section>
    );
  }

  return <>{children}</>;
}
