"use client";
import React from 'react';
import { Check, X } from 'lucide-react';

interface FeatureItem {
  title: string;
  [key: string]: any; // optional extra properties
}

interface FeaturesListProps {
  items?: FeatureItem[] | string; // array or JSON string
  type?: 'include' | 'exclude';
}

export default function FeaturesList({ items, type = 'include' }: FeaturesListProps) {
  if (!items) return null;

  const parsed: FeatureItem[] = typeof items === 'string' ? JSON.parse(items) : items;
  const itemsArray = Object.values(parsed);

  const isInclude = type === 'include';
  const Icon = isInclude ? Check : X;
  const iconBg = isInclude ? 'bg-green-100 text-green-600' : 'bg-red-100 text-red-500';

  return (
    <ul className="space-y-3">
      {itemsArray.map((item, index) => (
        <li key={index} className="flex items-start gap-3">
          <div className={`w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 ${iconBg}`}>
            <Icon className="w-4 h-4" />
          </div>
          <span className="text-slate-600">{item.title}</span>
        </li>
      ))}
    </ul>
  );
}
