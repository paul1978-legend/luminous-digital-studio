export default function ContactPage() {
  return (
    <main className="min-h-screen px-6 py-16 max-w-3xl mx-auto">

      <h1 className="text-4xl font-bold mb-6">
        Contact
      </h1>

      <p className="text-gray-600 mb-10">
        Tell us about your project.
      </p>

      <form className="space-y-6">

        <input
          type="text"
          placeholder="Your Name"
          className="w-full border rounded-xl px-4 py-3"
        />

        <input
          type="email"
          placeholder="Your Email"
          className="w-full border rounded-xl px-4 py-3"
        />

        <textarea
          placeholder="Project Details"
          rows={6}
          className="w-full border rounded-xl px-4 py-3"
        />

        <button
          type="submit"
          className="px-6 py-3 bg-black text-white rounded-xl"
        >
          Send Enquiry
        </button>

      </form>

    </main>
  );
}