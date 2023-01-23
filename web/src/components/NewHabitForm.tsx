import * as Checkbox from '@radix-ui/react-checkbox';
import { Check } from 'phosphor-react';
import { FormEvent, useState } from 'react';
import { api } from '../lib/axios';

const daysWeek = [
  'Domingo',
  'Segunda-Feira',
  'Terça-Feira',
  'Quarta-Feira',
  'Quinta-Feira',
  'Sexta-Feira',
  'Sábado',
];

export function NewHabitForm() {
  const [title, setTitle] = useState('');
  const [weekDays, setWeekDays] = useState<number[]>([]);

  async function createNewHabit(event: FormEvent) {
    event.preventDefault();
    if (!title || weekDays.length === 0) {
      return;
    }

    await api.post('habits', {
      title,
      weekDays,
    });

    setTitle('');
    setWeekDays([]);

    alert('Hábito criado com sucesso!');
  }

  function handleToggleWeekDay(weekDay: number) {
    if (weekDays.includes(weekDay)) {
      const weekDaysWithRemovedOne = weekDays.filter((day) => day !== weekDay);
      setWeekDays(weekDaysWithRemovedOne);
    } else {
      const weekDaysWithAddedOne = [...weekDays, weekDay];
      setWeekDays(weekDaysWithAddedOne);
    }
  }

  return (
    <form onSubmit={createNewHabit} className='ModalForm'>
      <label htmlFor='title' className='ModalFormLabel'>
        Qual seu comprometimento?
      </label>
      <input
        type='text'
        id='title'
        value={title}
        onChange={(event) => setTitle(event.target.value)}
        className='ModalFormInput'
        placeholder='Ex.: Beber Agua, Domir, etc...'
        autoFocus
      />
      <label htmlFor='' className='ModalFormLabel'>
        Qual a recorrência?
      </label>

      <div className='Checkbox'>
        {daysWeek.map((dayWeek, index) => {
          return (
            <Checkbox.Root
              key={dayWeek}
              checked={weekDays.includes(index)}
              onCheckedChange={() => handleToggleWeekDay(index)}
              className='CheckboxRoot'
            >
              <div className='CheckboxIndicator'>
                <Checkbox.Indicator className='CheckboxIndicatorCheckDaysweek'>
                  <Check />
                </Checkbox.Indicator>
              </div>
              <span>{dayWeek}</span>
            </Checkbox.Root>
          );
        })}
      </div>

      <button type='submit' className='ModalButtonConfirmar'>
        <Check size={20} weight='bold' />
        Confirmar
      </button>
    </form>
  );
}
