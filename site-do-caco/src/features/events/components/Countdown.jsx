import { useState, useEffect } from 'react';
import { getTimeUntil } from '@/shared/utils/helpers';

export function Countdown({ targetDate }) {
  const [timeLeft, setTimeLeft] = useState(getTimeUntil(targetDate));

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(getTimeUntil(targetDate));
    }, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  if (timeLeft.days === 0 && timeLeft.hours === 0 && timeLeft.minutes === 0 && timeLeft.seconds === 0) {
    return null;
  }

  return (
    <div className="bg-gradient-to-r from-primary to-primary/80 text-primary-foreground rounded-lg p-8 text-center">
      <h3 className="text-2xl font-bold mb-6">Faltam</h3>
      <div className="grid grid-cols-4 gap-4 max-w-lg mx-auto">
        <TimeUnit value={timeLeft.days} label="Dias" />
        <TimeUnit value={timeLeft.hours} label="Horas" />
        <TimeUnit value={timeLeft.minutes} label="Min" />
        <TimeUnit value={timeLeft.seconds} label="Seg" />
      </div>
    </div>
  );
}

function TimeUnit({ value, label }) {
  return (
    <div className="bg-white/20 rounded-lg p-4">
      <div className="text-4xl font-bold mb-1">
        {String(value).padStart(2, '0')}
      </div>
      <div className="text-sm opacity-90">{label}</div>
    </div>
  );
}
