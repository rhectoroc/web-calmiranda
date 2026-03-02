import type { LucideIcon } from 'lucide-react';

export interface Product {
    id: string;
    name: string;
    category: string;
    image: string;
    icon: LucideIcon;
    description: string;
    features: string[];
}
