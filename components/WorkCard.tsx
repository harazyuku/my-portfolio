type WorkCardProps = {
  period: string;
  title: string;
  tech: string;
  description: string;
};

export default function WorkCard({
  period,
  title,
  tech,
  description,
}: WorkCardProps) {
  return (
    <div className="border border-white/20 bg-black/60 p-8 transition duration-300 hover:-translate-y-1">
      <p className="text-sm tracking-wider text-gray-500">
        {period}
      </p>

      <h3 className="mt-2 text-3xl font-semibold">
        {title}
      </h3>

      <p className="mt-2 text-gray-400">
        {tech}
      </p>

      <p className="mt-6">
        {description}
      </p>
    </div>
  );
}