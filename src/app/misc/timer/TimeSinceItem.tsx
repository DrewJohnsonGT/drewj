import { TimeSince } from './page';

export const TimeSinceItem = ({
  days,
  hours,
  minutes,
  percentOfMonth,
  seconds,
}: TimeSince) => {
  return (
    <div className="flex flex-col items-center justify-center">
      <div className="flex flex-row items-center justify-center gap-2">
        {[
          { label: 'D', value: days },
          { label: 'H', value: hours },
          { label: 'M', value: minutes },
          { label: 'S', value: seconds },
        ].map((unit, index) => (
          <div key={index} className="flex flex-col items-center">
            <span className="text-2xl font-bold">{unit.value}</span>
            <span className="text-sm text-muted-foreground">{unit.label}</span>
          </div>
        ))}
      </div>
      {percentOfMonth && (
        <span className="text-lg text-orange-500">
          {percentOfMonth?.toFixed(2)}%
        </span>
      )}
    </div>
  );
};
