import * as Popover from '@radix-ui/react-popover';
import { ProgressBar } from './ProgressBar';
import * as Checkbox from '@radix-ui/react-checkbox';
import clsx from 'clsx';
import { Check } from 'phosphor-react';

interface HabitDayProps {
  date: Date;
  amount?: number;
  completed?: number;
}

export function HabitDay({ date, completed = 0, amount = 0 }: HabitDayProps) {
  const DaysSquares00 = 'DaysSquares00';
  const DaysSquares20 = 'DaysSquares20';
  const DaysSquares40 = 'DaysSquares40';
  const DaysSquares60 = 'DaysSquares60';
  const DaysSquares80 = 'DaysSquares80';

  const completedPercentage =
    amount > 0 ? Math.round((completed / amount) * 100) : 0;

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
          <span>{}</span>
          <span>{date.toDateString()}</span>

          <ProgressBar progress={completedPercentage} />

          <div className='Checkbox'>
            <Checkbox.Root className='CheckboxRoot'>
              <div className='CheckboxIndicator'>
                <Checkbox.Indicator className='CheckboxIndicatorCheck'>
                  <Check />
                </Checkbox.Indicator>
              </div>
              <span className='SpanDaysWeek'>Beber 2L de água</span>
            </Checkbox.Root>
          </div>

          <Popover.Arrow height={10} width={24} className={'PopoverArrow'} />
        </Popover.Content>
      </Popover.Portal>
    </Popover.Root>
  );
}
