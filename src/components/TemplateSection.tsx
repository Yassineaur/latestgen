interface TemplateCardProps {
  tag: string;
  tagColor: string;
  title: string;
  description: string;
  icon: string;
}

function TemplateCard({ tag, tagColor, title, description, icon }: TemplateCardProps) {
  return (
    <div className="group p-6 rounded-lg bg-muted/50 hover:bg-muted transition-all border border-border hover:border-primary cursor-pointer">
      <span className={`inline-flex px-2 py-1 text-xs font-medium rounded-full ${tagColor}`}>
        {tag}
      </span>
      <h3 className="text-lg font-semibold mt-2 flex items-center gap-2">
        <span>{icon}</span>
        <span>{title}</span>
      </h3>
      <p className="text-sm text-muted-foreground mt-1">{description}</p>
    </div>
  );
}

export default function TemplateSection() {
  const templates = [
    {
      tag: "Most Used",
      tagColor: "bg-yellow-500/20 text-yellow-500",
      title: "School Report",
      description: "Turn assignments and projects into polished, professional reports",
      icon: "📚"
    },
    {
      tag: "Professional",
      tagColor: "bg-emerald-500/20 text-emerald-500",
      title: "LaTeX Article",
      description: "Create publication-ready academic papers with proper formatting",
      icon: "📝"
    },
    {
      tag: "Practical",
      tagColor: "bg-blue-500/20 text-blue-500",
      title: "Financial Report",
      description: "Comprehensive financial analysis with charts and KPIs",
      icon: "👨‍💼"
    },
    {
      tag: "Explore All",
      tagColor: "bg-pink-500/20 text-pink-500",
      title: "More Templates",
      description: "Explore our full template library",
      icon: "✨"
    }
  ];

  return (
    <div className="mt-8">
      <h3 className="text-xl font-semibold mb-4">Choose a Template</h3>
      <div className="grid grid-cols-2 gap-4">
        {templates.map((template, index) => (
          <TemplateCard key={index} {...template} />
        ))}
      </div>
      <p className="text-sm text-muted-foreground mt-6">
        By uploading a file or URL you agree to our <a href="#" className="text-primary hover:underline">Terms of Service</a>.
        Learn more about how we handle your data in our <a href="#" className="text-primary hover:underline">Privacy Policy</a>.
      </p>
    </div>
  );
}