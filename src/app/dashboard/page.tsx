import Link from 'next/link';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { ArrowRight, BrainCircuit, MessageSquareQuote, History, FileText, Search } from 'lucide-react';
import { PROCESSED_SOLUTIONS_DATA } from '@/lib/data';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';

export default function DashboardPage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="w-full bg-gradient-to-r from-primary to-secondary text-primary-foreground py-12 px-4 md:px-6">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold font-headline tracking-tight">Archie: Your AI Architect Ally</h1>
          <p className="mt-4 text-lg md:text-xl max-w-3xl mx-auto text-primary-foreground/90">
            Empowering Capgemini architects with intelligent insights, real-time collaboration, and framework-aligned solutions.
          </p>
        </div>
      </section>

      <div className="container py-8">
        {/* Main Feature Cards */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <FeatureCard
            href="/dashboard/meeting/mode"
            icon={<MessageSquareQuote className="w-12 h-12" />}
            title="Launch Intelligent Meeting"
            description="Capture, transcribe, and derive TOGAF/IAF-aligned architectures in real-time."
          />
          <FeatureCard
            href="/dashboard/knowledge"
            icon={<BrainCircuit className="w-12 h-12" />}
            title="Dive into Wagon Wheel"
            description="Unlock expert methods, success stories, and global architect connections."
          />
        </div>

        {/* Processed Solutions Section */}
        <section>
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-4">
            <div className="flex items-center gap-3">
              <History className="w-6 h-6" />
              <h2 className="text-2xl font-bold font-headline">Recent Processed Insights</h2>
            </div>
            <div className="relative w-full md:w-auto md:max-w-xs">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input placeholder="Filter insights..." className="pl-9" />
            </div>
          </div>
          <p className="text-muted-foreground mb-6">Unlock past sessions for quick reference and collaboration.</p>
          <div className="grid gap-4">
            {PROCESSED_SOLUTIONS_DATA.processedSolutions.map((solution) => (
              <Link href="/dashboard/meeting/results" key={solution.id}>
                <Card className="hover:border-primary/80 hover:shadow-xl transition-all group rounded-xl">
                  <CardContent className="p-4 flex flex-col sm:flex-row items-start sm:items-center gap-4">
                      <div className="p-3 bg-gradient-to-br from-primary/10 to-secondary/10 rounded-lg self-start">
                          <FileText className="w-6 h-6 text-primary" />
                      </div>
                      <div className="flex-1">
                          <p className="font-bold text-base">{solution.title}</p>
                          <p className="text-sm text-muted-foreground">Processed on: {solution.processedDate}</p>
                      </div>
                      <div className="flex flex-wrap gap-2 justify-start sm:justify-end sm:max-w-xs w-full sm:w-auto">
                          {solution.tags.map(tag => <Badge key={tag} variant="secondary">{tag}</Badge>)}
                      </div>
                      <ArrowRight className="w-5 h-5 text-muted-foreground ml-auto group-hover:translate-x-1 transition-transform hidden sm:block" />
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </section>
      </div>

       {/* Floating Action Button */}
       <Button asChild className="fixed bottom-6 right-6 h-16 w-16 rounded-full shadow-2xl z-40" size="icon">
          <Link href="/dashboard/meeting/mode">
              <MessageSquareQuote className="h-8 w-8" />
              <span className="sr-only">Quick Start Meeting</span>
          </Link>
       </Button>
    </div>
  );
}

function FeatureCard({ href, icon, title, description }: { href: string, icon: React.ReactNode, title: string, description: string }) {
  return (
    <Link href={href} className="group">
      <Card className="h-full bg-card hover:border-primary/50 hover:shadow-2xl transition-all duration-300 ease-in-out transform hover:scale-105 rounded-xl overflow-hidden">
        <div className="p-6">
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 text-center sm:text-left">
            <div className="p-4 rounded-lg bg-gradient-to-br from-primary to-secondary text-primary-foreground mx-auto sm:mx-0">
              {icon}
            </div>
            <div>
              <CardTitle className="text-xl font-bold font-headline">{title}</CardTitle>
              <p className="mt-2 text-muted-foreground">{description}</p>
            </div>
          </div>
        </div>
      </Card>
    </Link>
  );
}
