// src/components/Features.tsx
import { Lightbulb, Rocket, Shield } from "lucide-react";

const features = [
  {
    icon: <Lightbulb size={32} />,
    title: "Innovation First",
    desc: "We craft future-proof solutions tailored to your business needs.",
  },
  {
    icon: <Rocket size={32} />,
    title: "Scalable Growth",
    desc: "From startups to enterprises, our systems grow with you.",
  },
  {
    icon: <Shield size={32} />,
    title: "Trusted Security",
    desc: "Enterprise-grade security ensures your data and users are protected.",
  },
];

export default function Features() {
  return (
    <section className="w-full bg-gray-50 py-20">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-12">
          Why Choose <span className="text-indigo-600">Digintellivus</span>?
        </h2>
        <div className="grid gap-10 md:grid-cols-3">
          {features.map((f, i) => (
            <div
              key={i}
              className="bg-white p-8 rounded-2xl shadow-md hover:shadow-xl transition"
            >
              <div className="text-indigo-600 mb-4">{f.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{f.title}</h3>
              <p className="text-gray-600">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
