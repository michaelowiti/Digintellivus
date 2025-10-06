import Hero from "@/components/Hero";
import Features from "@/components/Features";
import CTA from "@/components/CTA";

export default function Home() {
  return (
   
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
        <Hero />
      <Features />
      <CTA />
    
      </main>
    
   
  );
}
