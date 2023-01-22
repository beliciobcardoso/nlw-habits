import { Check } from 'phosphor-react';

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
      <button type='submit' className='ModalButtonConfirmar'>
        <Check size={20} weight='bold' />
        Confirmar
      </button>
    </form>
  );
}
