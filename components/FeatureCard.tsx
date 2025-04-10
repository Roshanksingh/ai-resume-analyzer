import React from "react";

type FeatureCardProps = {
  title: string;
  description: string;
};

const FeatureCard = ({ title, description }: FeatureCardProps) => {
  return (
    <div className="bg-white p-6 rounded-xl shadow-md border hover:shadow-lg transition">
      <h3 className="text-gray-900 text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-900">{description}</p>
    </div>
  );
};

export default FeatureCard;
