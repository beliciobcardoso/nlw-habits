import { generateDatesFromYearBeginning } from '../utils/generate-dates-from-year-beginning';
import { HabitDay } from './HabitDay';

const weekDays = ['D', 'S', 'T', 'Q', 'Q', 'S', 'S'];

const summaryDates = generateDatesFromYearBeginning();

export function SummaryTable() {
  return (
    <>
      <div className='SummaryTable'>
        <div className='WeekDays'>
          {weekDays.map((weekDay, index) => {
            return <div key={index}>{weekDay}</div>;
          })}
        </div>
        <div className='WeekLine'>
          {summaryDates.map((date) => {
            return <HabitDay key={date.toString()} />;
          })}
        </div>
      </div>
    </>
  );
}
