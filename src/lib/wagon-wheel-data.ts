import type { LucideIcon } from 'lucide-react';
import { Lightbulb, Settings, GraduationCap, Package, Users, Link, Folder } from 'lucide-react';

export type WagonWheelCategory = {
  id: string;
  name: string;
  icon: LucideIcon;
  subsections: { id: string; name: string; }[];
};

export const WAGON_WHEEL_DATA: WagonWheelCategory[] = [
  {
    id: 'inspire',
    name: 'INSPIRE',
    icon: Lightbulb,
    subsections: [
      { id: 'success-stories', name: 'Architects Success Stories' },
      { id: 'women-in-arch', name: 'Women in Architecture' },
      { id: 'mentoring', name: 'Mentoring Program' },
    ],
  },
  {
    id: 'methods',
    name: 'METHODS',
    icon: Settings,
    subsections: [
      { id: 'sustainability', name: 'Sustainability Edition' },
      { id: 'togaf', name: 'The TOGAF Standard' },
      { id: 'agile-arch', name: 'Capgemini Agile Architects' },
    ],
  },
  {
    id: 'learning',
    name: 'LEARNING',
    icon: GraduationCap,
    subsections: [
      { id: 'cap-uni', name: 'Capgemini University' },
      { id: 'next', name: 'NEXT' },
      { id: 'portfolio-learning', name: 'PORTFOLIO' },
    ],
  },
  {
    id: 'portfolio',
    name: 'PORTFOLIO',
    icon: Package,
    subsections: [
      { id: 'x-port', name: 'X-PORT' },
      { id: 'tech-innovation', name: 'Technology Innovation & Ventures' },
    ],
  },
  {
    id: 'experts',
    name: 'EXPERTS',
    icon: Users,
    subsections: [
      { id: 'technovision', name: 'Techno Vision 2025' },
      { id: 'tech-communities', name: 'Tech Communities' },
      { id: 'client-chiefs', name: 'Client Chief Architects' },
    ],
  },
  {
    id: 'connects',
    name: 'CONNECTS',
    icon: Link,
    subsections: [
      { id: 'archimeets', name: 'ArchiMeets' },
      { id: 'regional-leads', name: 'Regional Leads Connect' },
      { id: 'architects-summit', name: 'Architects Summit' },
    ],
  },
  {
    id: 'information',
    name: 'INFORMATION',
    icon: Folder,
    subsections: [
      { id: 'kitbag', name: 'Architects Kitbag' },
      { id: 'newsletter', name: 'Architects Newsletter' },
      { id: 'handbook', name: 'Architects Handbook' },
    ],
  },
];
