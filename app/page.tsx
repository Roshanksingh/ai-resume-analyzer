import Hero from "@/components/Hero";
import FeatureList from "@/components/FeatureList";

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-50 flex flex-col items-center justify-center p-6">
      <Hero />
      <FeatureList />
    </main>
  );
}
