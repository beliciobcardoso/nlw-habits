import * as Checkbox from '@radix-ui/react-checkbox';
import { Check } from 'phosphor-react';

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
  return (
    <form className='ModalForm'>
      <label htmlFor='title' className='ModalFormLabel'>
        Qual seu comprometimento?
      </label>
      <input
        type='text'
        id='title'
        className='ModalFormInput'
        placeholder='Ex.: Beber Agua, Domir, etc...'
        autoFocus
      />
      <label htmlFor='' className='ModalFormLabel'>
        Qual a recorrência?
      </label>

      <div className='Checkbox'>
        {daysWeek.map((dayWeek) => {
          return (
            <Checkbox.Root key={dayWeek} className='CheckboxRoot'>
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
