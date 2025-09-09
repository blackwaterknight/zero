import { WAGON_WHEEL_DATA } from '@/lib/wagon-wheel-data';
import { notFound } from 'next/navigation';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

const tileColors = [
  "bg-tile-1", "bg-tile-2", "bg-tile-3", "bg-tile-4", "bg-tile-5", "bg-tile-6", "bg-tile-7"
];

export default function CategoryPage({ params }: { params: { category: string } }) {
  const category = WAGON_WHEEL_DATA.find((cat) => cat.id === params.category);

  if (!category) {
    notFound();
  }

  const Icon = category.icon;

  return (
    <div className="container py-8">
      <Button variant="ghost" asChild className="mb-4 -ml-4">
        <Link href="/dashboard/knowledge"> &larr; Back to Wagon Wheel</Link>
      </Button>
      <div className="flex items-center gap-4 mb-2">
        <Icon className="w-10 h-10 text-primary" />
        <h1 className="text-3xl font-bold font-headline">{category.name}</h1>
      </div>
      <p className="text-muted-foreground mb-8">Explore resources and information within the {category.name} domain.</p>
      
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
        {category.subsections.map((subsection, index) => (
          <Link href="#" key={subsection.id}>
             <Card className={`h-full hover:shadow-lg transition-all group text-tile-text ${tileColors[index % tileColors.length]}`}>
              <CardContent className="p-6 flex flex-row items-center justify-between">
                <CardTitle className="text-lg font-semibold">{subsection.name}</CardTitle>
                <ArrowRight className="w-5 h-5 text-tile-text/70 group-hover:translate-x-1 transition-transform" />
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  );
}
