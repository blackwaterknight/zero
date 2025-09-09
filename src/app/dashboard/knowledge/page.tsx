import { Tile } from '@/components/tile';
import { WAGON_WHEEL_DATA } from '@/lib/wagon-wheel-data';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

const tileColors = [
  "bg-tile-1", "bg-tile-2", "bg-tile-3", "bg-tile-4", "bg-tile-5", "bg-tile-6", "bg-tile-7"
];

export default function KnowledgePage() {
  return (
    <div className="container py-8">
      <Button variant="ghost" asChild className="mb-4 -ml-4">
        <Link href="/dashboard"> &larr; Back to Dashboard</Link>
      </Button>
      <h1 className="text-3xl font-bold font-headline mb-2">Architects Wagon Wheel</h1>
      <p className="text-muted-foreground mb-8">Your central hub for architectural knowledge and resources.</p>
      
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {WAGON_WHEEL_DATA.map((category, index) => (
          <Tile
            key={category.id}
            href={`/dashboard/knowledge/${category.id}`}
            icon={category.icon}
            label={category.name}
            className={tileColors[index % tileColors.length]}
          />
        ))}
      </div>
    </div>
  );
}
