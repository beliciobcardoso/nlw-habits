import * as Popover from '@radix-ui/react-popover';
import { ProgressBar } from './ProgressBar';
import { HabitsList } from './HabitsList';
import clsx from 'clsx';
import dayjs from 'dayjs';
import { useState } from 'react';

interface HabitDayProps {
  date: Date;
  amount?: number;
  defaultCompleted?: number;
}

export function HabitDay({
  date,
  defaultCompleted = 0,
  amount = 0,
}: HabitDayProps) {
  const [completed, setCompleted] = useState(defaultCompleted);

  const DaysSquares00 = 'DaysSquares00';
  const DaysSquares20 = 'DaysSquares20';
  const DaysSquares40 = 'DaysSquares40';
  const DaysSquares60 = 'DaysSquares60';
  const DaysSquares80 = 'DaysSquares80';

  const completedPercentage =
    amount > 0 ? Math.round((completed / amount) * 100) : 0;

  const dayAndMonth = dayjs(date).format('DD/MM');
  const dayOfWeek = dayjs(date).format('dddd');

  function handleCompletedChanged(completed: number) {
    setCompleted(completed);
  }

  return (
    <Popover.Root>
      <Popover.Trigger
        className={clsx('DaysSquares', {
          DaysSquares00: completedPercentage > 0 && completedPercentage < 20,
          DaysSquares20: completedPercentage >= 20 && completedPercentage < 40,
          DaysSquares40: completedPercentage >= 40 && completedPercentage < 60,
          DaysSquares60: completedPercentage >= 60 && completedPercentage < 80,
          DaysSquares80: completedPercentage >= 80,
        })}
      />
      <Popover.Portal>
        <Popover.Content className='PopoverContent'>
          <span>{dayOfWeek}</span>
          <span>{dayAndMonth}</span>

          <ProgressBar progress={completedPercentage} />

          <HabitsList date={date} onCompletedChanged={handleCompletedChanged} />

          <Popover.Arrow height={10} width={24} className={'PopoverArrow'} />
        </Popover.Content>
      </Popover.Portal>
    </Popover.Root>
  );
}
