import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Luminous Digital Studio",
  description: "Websites and apps for small businesses",
};

export default function Home() {
  return (
    <main className="min-h-screen px-6 py-16 max-w-5xl mx-auto">

      {/* Hero */}
      <section className="mb-20 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-6">
          Luminous Digital Studio
        </h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-6">
          Beautiful, affordable websites and simple apps for small businesses, creatives, and local brands.
        </p>

        <a
          href="/contact"
          className="inline-block px-6 py-3 bg-black text-white rounded-xl"
        >
          Start Your Project
        </a>
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