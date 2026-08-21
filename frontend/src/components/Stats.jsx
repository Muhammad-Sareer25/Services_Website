import React from 'react';
import { Clock, MapPin, Users, Zap } from 'lucide-react';

const stats = [
  { icon: Clock, label: '24/7 Support', description: 'Round-the-clock monitoring and assistance' },
  { icon: MapPin, label: 'UK-Wide Coverage', description: 'Engineers available across the UK' },
  { icon: Users, label: 'Experienced Engineers', description: 'Skilled, qualified technical teams' },
  { icon: Zap, label: 'Fast Response Times', description: 'Rapid turnaround when it matters most' },
];

const Stats = () => {
  return (
    <section className="py-14 border-b border-navy-100">
      <div className="container-page grid grid-cols-2 lg:grid-cols-4 gap-8">
        {stats.map(({ icon: Icon, label, description }) => (
          <div key={label} className="flex flex-col items-start gap-3">
            <div className="h-11 w-11 rounded-xl bg-accent-50 text-accent-700 flex items-center justify-center">
              <Icon className="h-5 w-5" aria-hidden="true" />
            </div>
            <div>
              <p className="font-bold text-navy-900">{label}</p>
              <p className="text-sm text-navy-500 mt-0.5">{description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Stats;
