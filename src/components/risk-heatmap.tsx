import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import type { StaticMomData } from "@/lib/data";

type Risk = StaticMomData['risksCompliance'][0];

const positions: { [key: string]: string } = {
  "high-high": "col-start-2 row-start-1",
  "high-medium": "col-start-2 row-start-1",
  "high-low": "col-start-2 row-start-2",
  "medium-high": "col-start-1 row-start-1",
  "medium-medium": "col-start-1 row-start-1",
  "medium-low": "col-start-1 row-start-2",
};

const quadrantColors = {
  "high-high": "bg-red-500/20 border-red-500/30",
  "high-low": "bg-yellow-500/20 border-yellow-500/30",
  "medium-high": "bg-yellow-500/20 border-yellow-500/30",
  "medium-low": "bg-green-500/20 border-green-500/30",
};

function RiskItem({ risk }: { risk: Risk }) {
  const positionKey = `${risk.impact}-${risk.likelihood}` as keyof typeof positions;
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <div className="p-1">
             <Badge variant="destructive" className="cursor-pointer truncate">{risk.riskArea}</Badge>
          </div>
        </TooltipTrigger>
        <TooltipContent>
          <p className="font-bold">{risk.riskArea}</p>
          <p>{risk.description}</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
}

export function RiskHeatmap({ risks }: { risks: readonly Risk[] }) {
  const quadrants: { [key: string]: Risk[] } = {
    'high-high': [], 'high-medium': [], 'high-low': [],
    'medium-high': [], 'medium-medium': [], 'medium-low': [],
    'low-high': [], 'low-medium': [], 'low-low': []
  };

  risks.forEach(risk => {
    const key = `${risk.impact}-${risk.likelihood}`;
    if (quadrants[key]) {
      quadrants[key].push(risk);
    }
  });

  return (
    <Card>
      <CardHeader>
        <CardTitle>Risk Heatmap</CardTitle>
        <CardDescription>Visualizing risks by likelihood and business impact.</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-[auto_1fr_1fr] grid-rows-[auto_1fr_1fr] gap-1 items-stretch">
          <div />
          <div className="text-center font-bold text-sm p-2">Medium Impact</div>
          <div className="text-center font-bold text-sm p-2">High Impact</div>

          <div className="p-2 -rotate-90 translate-y-1/2 font-bold text-sm text-center">High Likelihood</div>
          <div className="border rounded-md p-2 flex flex-wrap gap-1 items-start content-start min-h-[120px] bg-yellow-500/20 border-yellow-500/30">
            {quadrants['medium-high'].map(risk => <RiskItem key={risk.riskArea} risk={risk} />)}
            {quadrants['medium-medium'].map(risk => <RiskItem key={risk.riskArea} risk={risk} />)}
          </div>
          <div className="border rounded-md p-2 flex flex-wrap gap-1 items-start content-start min-h-[120px] bg-red-500/20 border-red-500/30">
            {quadrants['high-high'].map(risk => <RiskItem key={risk.riskArea} risk={risk} />)}
            {quadrants['high-medium'].map(risk => <RiskItem key={risk.riskArea} risk={risk} />)}
          </div>

          <div className="p-2 -rotate-90 translate-y-1/2 font-bold text-sm text-center">Low Likelihood</div>
          <div className="border rounded-md p-2 flex flex-wrap gap-1 items-start content-start min-h-[120px] bg-green-500/20 border-green-500/30">
            {quadrants['medium-low'].map(risk => <RiskItem key={risk.riskArea} risk={risk} />)}
          </div>
          <div className="border rounded-md p-2 flex flex-wrap gap-1 items-start content-start min-h-[120px] bg-yellow-500/20 border-yellow-500/30">
            {quadrants['high-low'].map(risk => <RiskItem key={risk.riskArea} risk={risk} />)}
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
