import { Link } from 'react-router-dom';
import DemoSequence from '../components/DemoSequence';
import FeatureSection from '../components/FeatureSection';
import ReportSlider from '../components/ReportSlider';

export default function Home() {
  const features = [
    {
      title: 'Dive deep with us',
      description: 'Check how to use our service flawlessly!',
      videoUrl:
        'https://www.youtube.com/watch?v=uXlWYZ022zU&ab_channel=AdamSaunders',
    },
  ];

  return (
    <>
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h1 className="text-5xl font-bold leading-tight bg-gradient-to-r from-foreground to-primary bg-clip-text text-transparent">
              Professional Reports in a Flash!
            </h1>
            <p className="text-xl text-muted-foreground">
              Turn raw data into polished, professional reports in minutes. No
              hassle, just results!
              <span className="ml-2 inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-gradient-to-r from-yellow-400 to-orange-500 text-gray-900">
                Free Trial
              </span>
            </p>
            <DemoSequence />
            <div className="pt-4">
              <Link
                to="/dashboard"
                className="inline-flex items-center px-6 py-3 text-base font-medium bg-primary text-primary-foreground hover:bg-primary/90 rounded-lg transition"
              >
                Get Started
              </Link>
            </div>
          </div>
          <div className="relative rounded-xl overflow-hidden aspect-video bg-muted">
            <video
              className="w-full h-full object-cover"
              autoPlay
              muted
              loop
              playsInline
            >
              <source
                src="https://your-demo-video-url.mp4"
                type="video/mp4"
              />
            </video>
          </div>
        </div>
      </main>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 space-y-32">
        {features.map((feature, index) => (
          <FeatureSection key={index} {...feature} />
        ))}
      </section>

      <section className="bg-gradient-to-b from-transparent to-background/50 py-24">
        <ReportSlider />
      </section>
    </>
  );
}