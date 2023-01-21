import { generateDatesFromYearBeginning } from '../utils/generate-dates-from-year-beginning';
import { HabitDay } from './HabitDay';

const weekDays = ['D', 'S', 'T', 'Q', 'Q', 'S', 'S'];

const summaryDates = generateDatesFromYearBeginning();

const minimumSummarySize = 25 * 7;
const amountOfDaysToFill = minimumSummarySize - summaryDates.length;

export function SummaryTable() {
  return (
    <div className='SummaryTable'>
      <div className='HeaderTable'>
        {weekDays.map((weekDay, index) => {
          return (
            <div className='WeekDays' key={`${weekDay}-${index}`}>
              {weekDay}
            </div>
          );
        })}
      </div>
      <div className='DaysTable'>
        {summaryDates.map((date) => {
          return <HabitDay key={date.toString()} />;
        })}

        {amountOfDaysToFill > 0 &&
          Array.from({ length: amountOfDaysToFill }).map((_, index) => {
            return <div key={index} className='DaysSquaresPlacehold ' />;
          })}
      </div>
    </div>
  );
}
