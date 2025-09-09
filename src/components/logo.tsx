import Image from 'next/image';
import { cn } from '@/lib/utils';

type LogoProps = {
  className?: string;
};

export function Logo({ className }: LogoProps) {
  return (
    <div className={cn("flex items-center gap-2 text-primary", className)}>
      <Image src="/logo.svg" alt="Archie Logo" width={28} height={28} className="text-primary"/>
      <span className="font-headline text-xl font-bold">Archie</span>
    </div>
  );
}
