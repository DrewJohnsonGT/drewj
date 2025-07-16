import { Tooltip, TooltipContent, TooltipTrigger } from '~/components/ui/Tooltip';

const timeSince = (date: Date): string => {
  const seconds = Math.floor((new Date().getTime() - date.getTime()) / 1000);

  const intervals = [
    { label: 'year', seconds: 31536000 },
    { label: 'month', seconds: 2592000 },
    { label: 'day', seconds: 86400 },
    { label: 'hour', seconds: 3600 },
    { label: 'minute', seconds: 60 },
    { label: 'second', seconds: 1 },
  ];

  for (const interval of intervals) {
    const count = Math.floor(seconds / interval.seconds);
    if (count > 1) {
      return `${count} ${interval.label}s ago`;
    } else if (count === 1) {
      return `${count} ${interval.label} ago`;
    }
  }

  return 'just now';
};

export const TimeAgo = ({ date }: { date?: Date | string }) => {
  if (!date) return null;
  const dateObj = typeof date === 'string' ? new Date(date) : date;
  return (
    <Tooltip>
      <TooltipTrigger asChild>
        <span className="cursor-default">{timeSince(dateObj)}</span>
      </TooltipTrigger>
      <TooltipContent>{`${dateObj.toLocaleDateString()} - ${dateObj.toLocaleTimeString()}`}</TooltipContent>
    </Tooltip>
  );
};
