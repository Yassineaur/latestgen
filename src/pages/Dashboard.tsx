import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { supabase } from '../lib/supabase';
import UploadSection from '../components/UploadSection';
import TemplateSection from '../components/TemplateSection';

export default function Dashboard() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const checkSession = async () => {
      const { data: { session } } = await supabase.auth.getSession();
      if (!session) {
        navigate('/signin');
      }
      setLoading(false);
    };

    checkSession();
  }, [navigate]);

  if (loading) {
    return null;
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background/95 to-background">
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="space-y-8">
          <div>
            <h1 className="text-4xl font-bold">Create New Report</h1>
            <p className="mt-2 text-muted-foreground">
              Choose a template and upload your data to get started
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            <UploadSection />
            <TemplateSection />
          </div>
        </div>
      </main>
    </div>
  );
}