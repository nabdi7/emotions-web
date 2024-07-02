import Hero from "@/components/hero/Hero";
import Cta from "@/components/cta/Cta";
import Stats from "@/components/stats/Stats";
import Features from "@/components/feature/Features";

export default function Home() {
  return (
    <main className="">
      <Hero />
      <Features />
      <Stats />
      <Cta />
    </main>
  );
}
