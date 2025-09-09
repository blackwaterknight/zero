import Link from 'next/link';
import { Suspense } from 'react';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { STATIC_MOM_DATA } from '@/lib/data';
import { Check, Dot } from 'lucide-react';

import { CostChart } from '@/components/cost-chart';
import { RiskHeatmap } from '@/components/risk-heatmap';
import { StrategicTab } from '@/components/results/strategic-tab';
import { SolutionsTab } from '@/components/results/solutions-tab';

function ResultsPageContent({ tab }: { tab?: string }) {
  const data = STATIC_MOM_DATA;
  const validTabs = ["docs", "solutions", "options", "cost", "risks", "strategic"];
  const defaultTab = tab && validTabs.includes(tab) ? tab : "docs";

  return (
    <div className="container py-8 mb-20 md:mb-0">
      <div className="flex flex-col md:flex-row justify-between md:items-start mb-4 gap-4">
        <div>
          <h1 className="text-3xl font-bold font-headline">AI Insights</h1>
          <p className="text-muted-foreground">AI-generated summary and architectural recommendations.</p>
        </div>
        <Button variant="ghost" asChild>
          <Link href="/dashboard"> &larr; Back to Dashboard</Link>
        </Button>
      </div>

      <Tabs defaultValue={defaultTab} className="w-full">
        <TabsList className="grid w-full grid-cols-2 md:grid-cols-3 lg:grid-cols-6 h-auto bg-primary/10">
          <TabsTrigger value="docs">Documentation</TabsTrigger>
          <TabsTrigger value="solutions">Solutions</TabsTrigger>
          <TabsTrigger value="options">Options</TabsTrigger>
          <TabsTrigger value="cost">Cost</TabsTrigger>
          <TabsTrigger value="risks">Risks</TabsTrigger>
          <TabsTrigger value="strategic">Strategic</TabsTrigger>
        </TabsList>

        <div className="mt-6">
          <TabsContent value="docs">
            <Card>
              <CardHeader>
                <CardTitle>{data.meetingDocumentation.title}</CardTitle>
                <CardDescription>
                  {data.meetingDocumentation.date} &bull; {data.meetingDocumentation.duration} &bull; Participants: {data.meetingDocumentation.participants.join(', ')}
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <InfoList label="Topics Covered" items={data.meetingDocumentation.topicsCovered} icon={<Dot />} />
                <InfoList label="Action Items" items={data.meetingDocumentation.actionItems} icon={<Check className="text-primary"/>} />
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="solutions">
            <SolutionsTab data={data} />
          </TabsContent>

          <TabsContent value="options">
            <div className="grid md:grid-cols-2 gap-4">
              {data.comparativeOptions.map(opt => (
                <Card key={opt.option}>
                  <CardHeader>
                    <CardTitle>{opt.option}</CardTitle>
                    <CardDescription>{opt.description}</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <InfoList label="Pros" items={opt.pros} itemClassName="text-green-700 dark:text-green-400" />
                    <InfoList label="Cons" items={opt.cons} itemClassName="text-red-700 dark:text-red-400" />
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
          
          <TabsContent value="cost">
            <div className="grid lg:grid-cols-2 gap-6">
              <CostChart factors={data.costEstimation.factors} />
              <Card>
                <CardHeader>
                  <CardTitle>High-Level Estimates (USD)</CardTitle>
                  <CardDescription>Ballpark figures for budgeting purposes.</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                    <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center p-4 bg-muted/50 rounded-lg">
                      <p className="font-medium">Initial Setup (CAPEX)</p>
                      <p className="font-mono text-lg font-bold text-primary">${data.costEstimation.estimates.initialSetupUSD[0].toLocaleString()} - ${data.costEstimation.estimates.initialSetupUSD[1].toLocaleString()}</p>
                    </div>
                    <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center p-4 bg-muted/50 rounded-lg">
                      <p className="font-medium">Annual Operation (OPEX)</p>
                      <p className="font-mono text-lg font-bold text-primary">${data.costEstimation.estimates.annualOpexUSD[0].toLocaleString()} - ${data.costEstimation.estimates.annualOpexUSD[1].toLocaleString()}</p>
                    </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="risks">
             <div className="grid lg:grid-cols-2 gap-6">
                <RiskHeatmap risks={data.risksCompliance} />
                <Card>
                  <CardHeader>
                    <CardTitle>Risk Mitigation</CardTitle>
                    <CardDescription>Strategies to address identified risks.</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    {data.risksCompliance.map(risk => (
                      <div key={risk.riskArea} className="border-l-4 pl-3" style={{borderColor: risk.impact === 'high' ? 'var(--colors-red-500)' : 'var(--colors-yellow-500)'}}>
                          <p className="font-semibold">{risk.riskArea}</p>
                          <p className="text-sm text-muted-foreground">{risk.mitigation}</p>
                      </div>
                    ))}
                  </CardContent>
                </Card>
             </div>
          </TabsContent>
          
          <TabsContent value="strategic">
            <StrategicTab data={data} />
          </TabsContent>
        </div>
      </Tabs>

      <div className="fixed bottom-0 left-0 right-0 bg-background/80 backdrop-blur-sm border-t md:hidden">
        <div className="container py-3 flex justify-end gap-4">
          <Button variant="outline" asChild><Link href="/dashboard">Back to Home</Link></Button>
          <Button variant="destructive" asChild><Link href="/">Exit</Link></Button>
        </div>
      </div>
       <div className="hidden md:flex mt-8 justify-end gap-4">
          <Button variant="outline" asChild><Link href="/dashboard">Back to Home</Link></Button>
          <Button variant="destructive" asChild><Link href="/">Exit Session</Link></Button>
        </div>
    </div>
  );
}

export function InfoList({ label, items, icon, className, itemClassName }: { label: string, items: readonly string[], icon?: React.ReactNode, className?: string, itemClassName?: string }) {
  return (
    <div className={className}>
      <h4 className="font-semibold">{label}</h4>
      <ul className="list-inside mt-1 space-y-1">
        {items.map((item, index) => (
          <li key={index} className={`flex items-start gap-2 text-muted-foreground ${itemClassName}`}>
            {icon || <Dot className="h-6 w-6 flex-shrink-0" />}
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function ResultsPage({
  searchParams,
}: {
  searchParams?: { [key: string]: string | string[] | undefined };
}) {
  const tab = typeof searchParams?.tab === 'string' ? searchParams.tab : undefined;

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <ResultsPageContent tab={tab} />
    </Suspense>
  );
}
