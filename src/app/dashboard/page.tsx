import Link from 'next/link';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { ArrowRight, BrainCircuit, MessageSquareQuote, History, FileText } from 'lucide-react';
import { PROCESSED_SOLUTIONS_DATA } from '@/lib/data';
import { Badge } from '@/components/ui/badge';

export default function DashboardPage() {
  return (
    <div className="container py-8">
      <h1 className="text-3xl font-bold font-headline mb-2">Architect Assistant</h1>
      <p className="text-muted-foreground mb-8">Your AI-powered copilot for architectural excellence.</p>
      
      <div className="grid md:grid-cols-2 gap-6">
        <FeatureCard
          href="/dashboard/meeting/mode"
          icon={<MessageSquareQuote className="w-12 h-12 text-primary" />}
          title="Join a Meeting"
          description="Transcribe, summarize, and generate architectural solutions from your meetings."
        />
        <FeatureCard
          href="/dashboard/knowledge"
          icon={<BrainCircuit className="w-12 h-12 text-primary" />}
          title="Explore Knowledge Base"
          description="Access the Architects Wagon Wheel for methods, best practices, and expert connections."
        />
      </div>

      <section className="mt-12">
        <div className="flex items-center gap-3 mb-4">
            <History className="w-6 h-6" />
            <h2 className="text-2xl font-bold font-headline">Processed Solutions</h2>
        </div>
        <div className="grid gap-4">
          {PROCESSED_SOLUTIONS_DATA.map((solution) => (
            <Link href="/dashboard/meeting/results" key={solution.id}>
              <Card className="hover:border-primary/80 hover:shadow-lg transition-all group">
                <CardContent className="p-4 flex items-center gap-4">
                    <div className="p-3 bg-muted rounded-md">
                        <FileText className="w-6 h-6 text-primary" />
                    </div>
                    <div className="flex-1">
                        <p className="font-semibold">{solution.title}</p>
                        <p className="text-sm text-muted-foreground">Processed on: {solution.date}</p>
                    </div>
                    <div className="flex gap-2">
                        {solution.tags.map(tag => <Badge key={tag} variant="secondary">{tag}</Badge>)}
                    </div>
                    <ArrowRight className="w-5 h-5 text-muted-foreground ml-auto group-hover:translate-x-1 transition-transform" />
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}

function FeatureCard({ href, icon, title, description }: { href: string, icon: React.ReactNode, title: string, description: string }) {
  return (
    <Link href={href}>
      <Card className="h-full hover:border-primary/80 hover:shadow-lg transition-all group">
        <CardHeader className="flex flex-row items-center gap-6">
          {icon}
          <div>
            <CardTitle className="text-xl font-headline">{title}</CardTitle>
            <CardDescription className="mt-1">{description}</CardDescription>
          </div>
          <ArrowRight className="w-6 h-6 text-muted-foreground ml-auto group-hover:translate-x-1 transition-transform" />
        </CardHeader>
      </Card>
    </Link>
  );
}
