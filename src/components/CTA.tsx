// src/components/CTA.tsx
export default function CTA() {
  return (
    <section className="w-full bg-indigo-600 py-20 text-white">
      <h2 className="text-3xl md:text-4xl font-bold">
        Ready to transform your digital presence?
      </h2>
      <p className="mt-4 text-lg">
        Let’s build something extraordinary together.
      </p>
      <a
        href="/contact"
        className="mt-8 inline-block px-8 py-4 bg-white text-indigo-600 rounded-xl font-semibold text-lg hover:bg-gray-100"
      >
        Contact Us
      </a>
    </section>
  );
}
