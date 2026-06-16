import Link from "next/link";

export default function NotFound() {
  return (
    <section className="relative isolate overflow-hidden">
      <div className="absolute inset-0 -z-10 bg-black" />
      <div className="absolute -top-28 left-1/2 -z-10 h-[100vh] w-72 -translate-x-1/2 rounded-full bg-blue-400/20 blur-3xl" />

      <div className="mx-auto flex min-h-screen max-w-4xl flex-col items-center justify-center px-6 py-20 text-center text-white">
        <p className="mb-4 text-sm tracking-[0.28em] text-blue-200">ERROR 404</p>
        <h1 className="text-4xl font-bold sm:text-5xl md:text-6xl">
          Page Not Found
        </h1>
        <p className="mt-6 max-w-2xl text-sm leading-8 text-blue-100 sm:text-base">
          The page you are looking for might have been removed, renamed, or is
          temporarily unavailable. Let&apos;s get you back to the homepage.
        </p>

        <Link
          href="/"
          className="mt-10 inline-flex items-center rounded-md border border-blue-200/40 bg-white/10 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white hover:text-[#101a4e]"
        >
          Back to Home
        </Link>
      </div>
    </section>
  );
}
