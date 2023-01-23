import * as Checkbox from '@radix-ui/react-checkbox';
import dayjs from 'dayjs';
import { Check } from 'phosphor-react';
import { useEffect, useState } from 'react';
import { api } from '../lib/axios';

interface HabitListPorps {
  date: Date;
  onCompletedChanged: (completed: number) => void;
}

interface HabitsInfo {
  possibleHabits: {
    id: string;
    title: string;
    created_at: string;
  }[];
  completHabits: string[];
}

export function HabitsList({ date, onCompletedChanged }: HabitListPorps) {
  const [habitsInfo, setHabitsInfo] = useState<HabitsInfo>();

  useEffect(() => {
    api
      .get('day', {
        params: {
          date: date.toISOString(),
        },
      })
      .then((response) => setHabitsInfo(response.data));
  }, []);

  async function handleToggleHabit(habitId: string) {
    await api.patch(`/habits/${habitId}/toggle`);
    const isHabitAlreadyCompleted = habitsInfo!.completHabits.includes(habitId);
    let completHabits: string[] = [];
    if (isHabitAlreadyCompleted) {
      completHabits = habitsInfo!.completHabits.filter((id) => id !== habitId);
    } else {
      completHabits = [...habitsInfo!.completHabits, habitId];
    }
    setHabitsInfo({
      possibleHabits: habitsInfo!.possibleHabits,
      completHabits,
    });

    onCompletedChanged(completHabits.length);
  }

  const isDateInPast = dayjs(date).endOf('day').isBefore(new Date());

  return (
    <div className='Checkbox'>
      {habitsInfo?.possibleHabits.map((habit) => {
        return (
          <Checkbox.Root
            key={habit.id}
            onCheckedChange={() => handleToggleHabit(habit.id)}
            checked={habitsInfo.completHabits.includes(habit.id)}
            disabled={isDateInPast}
            className='CheckboxRoot'
          >
            <div className='CheckboxIndicator'>
              <Checkbox.Indicator className='CheckboxIndicatorCheck'>
                <Check />
              </Checkbox.Indicator>
            </div>
            <span className='SpanDaysWeek'>{habit.title}</span>
          </Checkbox.Root>
        );
      })}
    </div>
  );
}
