import * as Popover from '@radix-ui/react-popover';
import { ProgressBar } from './ProgressBar';
import clsx from 'clsx';

interface HabitDayProps {
  amount: number;
  comoleted: number;
}

export function HabitDay(props: HabitDayProps) {
  const DaysSquares00 = 'DaysSquares00';
  const DaysSquares20 = 'DaysSquares20';
  const DaysSquares40 = 'DaysSquares40';
  const DaysSquares60 = 'DaysSquares60';
  const DaysSquares80 = 'DaysSquares80';
  const completedPercentage = Math.round(
    (props.comoleted / props.amount) * 100
  );

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
          <span>Terça-Feira</span>
          <span>22/01/2023</span>

          <ProgressBar progress={completedPercentage} />

          <Popover.Arrow height={10} width={24} className={'PopoverArrow'} />
        </Popover.Content>
      </Popover.Portal>
    </Popover.Root>
  );
}
