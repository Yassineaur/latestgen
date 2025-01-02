interface TemplateCardProps {
  tag: string;
  tagColor: string;
  title: string;
  description: string;
  icon: string;
  isMore?: boolean;
}

export default function TemplateCard({
  tag,
  tagColor,
  title,
  description,
  icon,
  isMore = false,
}: TemplateCardProps) {
  return (
    <div
      className={`
      group p-4 rounded-lg transition-all duration-300 cursor-pointer
      ${
        isMore
          ? 'bg-gradient-to-br from-gray-800/50 to-gray-700/50 hover:from-gray-700/50 hover:to-gray-600/50'
          : 'bg-gray-800/50 hover:bg-gray-700/50'
      }
      border border-gray-700 hover:border-blue-500/50
      hover:transform hover:-translate-y-1
    `}
    >
      <span
        className={`
        inline-flex items-center px-2 py-1 rounded-full text-xs font-medium
        bg-gradient-to-r ${tagColor} text-gray-900
      `}
      >
        {tag}
      </span>

      <h3 className="text-lg font-semibold mt-2 flex items-center space-x-2">
        <span>{icon}</span>
        <span>{title}</span>
      </h3>

      <p className="text-sm text-gray-400 mt-1">{description}</p>

      {isMore && (
        <div className="flex space-x-1 mt-3">
          {[...Array(3)].map((_, i) => (
            <div
              key={i}
              className="w-2 h-2 rounded-full bg-blue-500/50 animate-pulse"
              style={{ animationDelay: `${i * 200}ms` }}
            />
          ))}
        </div>
      )}
    </div>
  );
}
