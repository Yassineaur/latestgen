import { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface Report {
  id: number;
  title: string;
  image: string;
  description: string;
}

const reports: Report[] = [
  {
    id: 1,
    title: "Financial Analysis Report",
    image: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&w=800&q=80",
    description: "Comprehensive financial reports with detailed analytics and insights"
  },
  {
    id: 2,
    title: "Academic Research Paper",
    image: "https://images.unsplash.com/photo-1456735190827-d1262f71b8a3?auto=format&fit=crop&w=800&q=80",
    description: "Professional academic papers with proper citations and formatting"
  },
  {
    id: 3,
    title: "Business Proposal",
    image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&w=800&q=80",
    description: "Compelling business proposals that win clients"
  }
];

export default function ReportSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const next = () => setCurrentIndex((current) => 
    current === reports.length - 1 ? 0 : current + 1
  );

  const prev = () => setCurrentIndex((current) => 
    current === 0 ? reports.length - 1 : current - 1
  );

  return (
    <div className="relative py-12">
      <h2 className="text-3xl font-bold text-center mb-8 text-white">Example Reports</h2>
      
      <div className="relative max-w-4xl mx-auto">
        <div className="overflow-hidden rounded-xl aspect-[16/9]">
          <div className="flex transition-transform duration-500 ease-out"
               style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
            {reports.map((report) => (
              <div key={report.id} className="min-w-full">
                <div className="grid md:grid-cols-2 gap-8 p-6 bg-gray-800/50 backdrop-blur rounded-xl">
                  <img
                    src={report.image}
                    alt={report.title}
                    className="rounded-lg object-cover w-full h-full"
                  />
                  <div className="flex flex-col justify-center space-y-4">
                    <h3 className="text-2xl font-semibold text-white">{report.title}</h3>
                    <p className="text-gray-400">{report.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <button
          onClick={prev}
          className="absolute left-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-gray-800/80 text-white hover:bg-gray-700 transition"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>

        <button
          onClick={next}
          className="absolute right-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-gray-800/80 text-white hover:bg-gray-700 transition"
        >
          <ChevronRight className="w-6 h-6" />
        </button>

        <div className="flex justify-center space-x-2 mt-4">
          {reports.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-2 h-2 rounded-full transition-colors ${
                index === currentIndex ? 'bg-blue-500' : 'bg-gray-600'
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}