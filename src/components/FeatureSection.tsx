interface FeatureSectionProps {
  title: string;
  description: string;
  videoUrl: string;
  isReversed?: boolean;
}

export default function FeatureSection({
  title,
  description,
  videoUrl,
  isReversed = false,
}: FeatureSectionProps) {
  return (
    <div className={`grid md:grid-cols-2 gap-8 items-center ${isReversed ? 'md:flex-row-reverse' : ''}`}>
      <div className="space-y-4">
        <div className="flex items-center space-x-2 text-primary">
        
          <h2 className="text-3xl font-bold">{title}</h2>
        </div>
        <p className="text-lg text-muted-foreground leading-relaxed">{description}</p>
      </div>
      <div className="relative rounded-xl overflow-hidden aspect-video bg-muted">
        <video
          className="w-full h-full object-cover"
          autoPlay
          muted
          loop
          playsInline
        >
          <source src={videoUrl} type="video/mp4" />
        </video>
      </div>
    </div>
  );
}