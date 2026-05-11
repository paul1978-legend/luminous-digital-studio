import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Luminous Digital Studio",
  description: "Websites and apps for small businesses",
};

export default function Home() {
  return (
    <main className="min-h-screen px-6 py-16 max-w-5xl mx-auto">

      {/* Hero */}
      {/* Hero */}
<section className="relative mb-28 text-center overflow-hidden rounded-3xl py-24 px-6 border bg-gradient-to-b from-white to-gray-50">

  <div className="absolute inset-0 opacity-20 blur-3xl bg-gradient-to-r from-orange-200 via-pink-200 to-yellow-100"></div>

  <div className="relative z-10">

    <p className="uppercase tracking-[0.3em] text-sm text-gray-500 mb-6">
      Websites • Apps • Creative Digital Experiences
    </p>

    <h1 className="text-5xl md:text-7xl font-bold mb-8 leading-tight">
      Luminous
      <br />
      Digital Studio
    </h1>

    <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-10 leading-relaxed">
      Beautiful websites and modern digital experiences crafted for small businesses, creatives, and ambitious ideas.
    </p>

    <div className="flex flex-col sm:flex-row gap-4 justify-center">

      <a
        href="/contact"
        className="px-8 py-4 bg-black text-white rounded-2xl hover:opacity-90 transition"
      >
        Start Your Project
      </a>

      <a
        href="/contact"
        className="px-8 py-4 border rounded-2xl hover:bg-gray-100 transition"
      >
        View Services
      </a>

    </div>

  </div>

</section>

      {/* Services */}
      <section className="mb-20">
        <h2 className="text-2xl font-semibold mb-8 text-center">Services</h2>

        <div className="grid gap-6 md:grid-cols-3">
          <div className="p-6 border rounded-xl">
            <h3 className="font-semibold mb-2">Website Builds</h3>
            <p className="text-sm text-gray-600">
              Clean, modern websites designed to help your business stand out and convert visitors into customers.
            </p>
          </div>

          <div className="p-6 border rounded-xl">
            <h3 className="font-semibold mb-2">Website Refreshes</h3>
            <p className="text-sm text-gray-600">
              Transform outdated websites into polished, professional experiences.
            </p>
          </div>

          <div className="p-6 border rounded-xl">
            <h3 className="font-semibold mb-2">App Prototypes</h3>
            <p className="text-sm text-gray-600">
              Simple, functional app concepts to bring your ideas to life quickly.
            </p>
          </div>
        </div>
      </section>

      {/* Offer */}
      <section className="mb-20 text-center">
        <h2 className="text-2xl font-semibold mb-4">
          Starter Website Package
        </h2>

        <p className="text-gray-600 mb-6">
          A clean, professional one-page website to get your business online quickly.
        </p>

        <ul className="text-gray-600 mb-6 list-disc pl-6 text-left max-w-md mx-auto">
          <li>Mobile-friendly design</li>
          <li>Contact form</li>
          <li>Modern layout</li>
          <li>Launch support</li>
        </ul>

        <p className="text-xl font-bold">$750</p>
      </section>

      {/* CTA */}
      <section className="text-center">
        <h2 className="text-2xl font-semibold mb-4">
          Let’s Build Something Great
        </h2>

        <p className="text-gray-600 mb-6">
          Ready to bring your business online or upgrade your current website?
        </p>

        <a
          href="/contact"
          className="inline-block px-6 py-3 bg-black text-white rounded-xl"
        >
          Get in Touch
        </a>
      </section>

    </main>
  );
}