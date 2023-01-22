import * as Popover from '@radix-ui/react-popover';
import { ProgressBar } from './ProgressBar';

export function HabitDay() {
  return (
    <Popover.Root>
      <Popover.Trigger className='DaysSquares' />
      <Popover.Portal>
        <Popover.Content className='PopoverContent'>
          <span>Terça-Feira</span>
          <span>22/01/2023</span>

          <ProgressBar progress={50} />

          <Popover.Arrow height={10} width={24} className={'PopoverArrow'} />
        </Popover.Content>
      </Popover.Portal>
    </Popover.Root>
  );
}
