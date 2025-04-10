import React from "react";
import FeatureCard from "@/components/FeatureCard";

const features = [
  {
    title: "🔍 Skill Matching",
    description:
      "Match your resume to specific job roles and see how well it fits.",
  },
  {
    title: "📊 Resume Score",
    description:
      "Get a detailed score based on grammar, formatting, and content clarity.",
  },
  {
    title: "💡 Improvement Tips",
    description: "AI suggests edits to make your resume more impactful.",
  },
  {
    title: "🤖 Powered by GPT-4",
    description:
      "Uses OpenAI’s powerful LLM for accurate, real-world feedback.",
  },
];

const FeatureList = () => {
  return (
    <section className="mt-16 grid grid-cols-1 sm:grid-cols-2 gap-8 max-w-4xl w-full text-left">
      {features.map((feature) => (
        <FeatureCard
          key={feature.title}
          title={feature.title}
          description={feature.description}
        />
      ))}
    </section>
  );
};

export default FeatureList;
