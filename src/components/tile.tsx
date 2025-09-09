import Link from 'next/link';
import type { LucideIcon } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { cn } from '@/lib/utils';

type TileProps = {
  href: string;
  icon: LucideIcon;
  label: string;
  className?: string;
};

export function Tile({ href, icon: Icon, label, className }: TileProps) {
  return (
    <Link href={href}>
      <Card className={cn("text-tile-text hover:shadow-xl transition-shadow group aspect-square flex flex-col items-center justify-center text-center p-4 shadow-md", className)}>
        <Icon className="w-12 h-12 mb-2 text-primary" />
        <span className="font-headline font-bold text-lg">{label}</span>
      </Card>
    </Link>
  );
}
