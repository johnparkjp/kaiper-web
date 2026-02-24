type SpecCardProps = {
  label: string;
  value: string;
};

export default function SpecCard({ label, value }: SpecCardProps) {
  return (
    <div className="p-5 border border-cool-gray-50/30 rounded-xl border-l-2 border-l-accent-blue/60">
      <p className="text-xs text-cool-gray-30 uppercase tracking-wider mb-1.5 font-medium">
        {label}
      </p>
      <p className="text-sm font-bold text-kaiper-white">
        {value}
      </p>
    </div>
  );
}
