import React from "react";
import UploadButton from "@/components/UploadButton";

const Hero = () => {
  return (
    <section className="text-center max-w-2xl">
      <h1 className="text-stone-900 text-4xl font-bold sm:text-5xl mb-4">
        AI-Powered Resume Analyzer
      </h1>
      <p className="text-lg text-gray-700 mb-6">
        Upload your resume and get instant, AI-driven feedback on grammar,
        format, job-fit, and more — boost your chances of landing interviews!
      </p>
      <UploadButton />
    </section>
  );
};

export default Hero;
