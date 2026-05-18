export default function WillowOakCafePage() {
  return (
    <main className="min-h-screen bg-white text-black">

      {/* Hero */}
      <section className="relative overflow-hidden">

        <img
          src="/images/willow-oak-showcase.png"
          alt="Willow and Oak Cafe"
          className="w-full h-[70vh] object-cover"
        />

        <div className="absolute inset-0 bg-black/40"></div>

        <div className="absolute inset-0 flex items-center justify-center text-center px-6">

          <div>

            <p className="uppercase tracking-[0.3em] text-sm text-white/80 mb-6">
              Café Website Concept
            </p>

            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
              Willow & Oak Café
            </h1>

            <p className="text-xl text-white/90 max-w-2xl mx-auto leading-relaxed">
              A warm, modern café experience designed to blend atmosphere, simplicity, and customer connection.
            </p>

          </div>

        </div>

      </section>

      {/* Overview */}
      <section className="max-w-5xl mx-auto px-6 py-24">

        <div className="grid md:grid-cols-2 gap-16">

          <div>

            <p className="uppercase tracking-[0.3em] text-sm text-gray-500 mb-4">
              Project Overview
            </p>

            <h2 className="text-4xl font-bold mb-6">
              Crafted for atmosphere and connection.
            </h2>

          </div>

          <div>

            <p className="text-gray-600 leading-relaxed text-lg mb-6">
              Willow & Oak Café was designed as a premium café brand experience focused on warmth, elegance, and simplicity.
            </p>

            <p className="text-gray-600 leading-relaxed text-lg">
              The layout prioritises emotional visual storytelling, intuitive navigation, and mobile-friendly browsing for modern customers.
            </p>

          </div>

        </div>

      </section>

      {/* Services */}
      <section className="bg-gray-50 py-24">

        <div className="max-w-5xl mx-auto px-6">

          <p className="uppercase tracking-[0.3em] text-sm text-gray-500 mb-6">
            Services Included
          </p>

          <div className="grid md:grid-cols-3 gap-8">

            <div className="bg-white rounded-3xl p-8 shadow-sm">
              <h3 className="font-semibold text-xl mb-4">
                Branding
              </h3>

              <p className="text-gray-600">
                Elegant visual identity and warm typography direction.
              </p>
            </div>

            <div className="bg-white rounded-3xl p-8 shadow-sm">
              <h3 className="font-semibold text-xl mb-4">
                Website Design
              </h3>

              <p className="text-gray-600">
                Responsive modern website focused on bookings and customer engagement.
              </p>
            </div>

            <div className="bg-white rounded-3xl p-8 shadow-sm">
              <h3 className="font-semibold text-xl mb-4">
                Mobile Experience
              </h3>

              <p className="text-gray-600">
                Smooth browsing experience across phones, tablets, and desktop.
              </p>
            </div>

          </div>

        </div>

      </section>

      {/* CTA */}
      <section className="text-center py-28 px-6">

        <h2 className="text-4xl font-bold mb-6">
          Want Something Like This?
        </h2>

        <p className="text-gray-600 text-lg max-w-2xl mx-auto mb-10">
          Let’s create a premium digital experience tailored to your business.
        </p>

        <a
          href="/contact"
          className="inline-block px-10 py-4 rounded-2xl bg-black text-white hover:opacity-90 transition shadow-lg"
        >
          Start Your Project
        </a>

      </section>

    </main>
  );
}