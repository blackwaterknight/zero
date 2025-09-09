import Link from 'next/link';
import type { LucideIcon } from 'lucide-react';
import { Card } from '@/components/ui/card';

type TileProps = {
  href: string;
  icon: LucideIcon;
  label: string;
};

export function Tile({ href, icon: Icon, label }: TileProps) {
  return (
    <Link href={href}>
      <Card className="bg-primary text-primary-foreground hover:bg-secondary hover:text-secondary-foreground transition-colors group aspect-square flex flex-col items-center justify-center text-center p-4 shadow-md hover:shadow-xl">
        <Icon className="w-12 h-12 mb-2" />
        <span className="font-headline font-bold text-lg">{label}</span>
      </Card>
    </Link>
  );
}
