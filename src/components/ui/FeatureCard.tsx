type FeatureCardProps = {
  icon: React.ReactNode;
  title: string;
  description: string;
};

export default function FeatureCard({ icon, title, description }: FeatureCardProps) {
  return (
    <div className="group p-8 border border-cool-gray-50/30 rounded-2xl hover:border-accent-blue/30 transition-colors duration-300 h-full">
      <div className="text-accent-blue mb-5">
        {icon}
      </div>
      <h3 className="text-lg font-semibold mb-2">
        {title}
      </h3>
      <p className="text-cool-gray-30 text-sm leading-relaxed">
        {description}
      </p>
    </div>
  );
}
