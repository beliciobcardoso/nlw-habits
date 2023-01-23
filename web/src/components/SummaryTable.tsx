import dayjs from 'dayjs';
import { useEffect, useState } from 'react';
import { api } from '../lib/axios';
import { generateDatesFromYearBeginning } from '../utils/generate-dates-from-year-beginning';
import { HabitDay } from './HabitDay';

const weekDays = ['D', 'S', 'T', 'Q', 'Q', 'S', 'S'];

const summaryDates = generateDatesFromYearBeginning();

const minimumSummarySize = 25 * 7;
const amountOfDaysToFill = minimumSummarySize - summaryDates.length;

type Summary = {
  id: string;
  date: string;
  amount: number;
  completed: number;
}[];

export function SummaryTable() {
  const [summary, setSumary] = useState<Summary>([]);
  useEffect(() => {
    api.get('summary').then((response) => {
      setSumary(response.data);
    });
  }, []);

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
          const dayInSummary = summary.find((day) => {
            return dayjs(date).isSame(day.date, 'day');
          });
          return (
            <HabitDay
              key={date.toString()}
              date={date}
              amount={dayInSummary?.amount}
              completed={dayInSummary?.completed}
            />
          );
        })}

        {amountOfDaysToFill > 0 &&
          Array.from({ length: amountOfDaysToFill }).map((_, index) => {
            return <div key={index} className='DaysSquaresPlacehold ' />;
          })}
      </div>
    </div>
  );
}
