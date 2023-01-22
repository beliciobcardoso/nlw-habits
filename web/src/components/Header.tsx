import logoImage from '../assets/logo.svg';
import { Plus, X } from 'phosphor-react';
import * as Dialog from '@radix-ui/react-dialog';
import { NewHabitForm } from './NewHabitForm';

export function Header() {
  return (
    <div className='Header'>
      <img src={logoImage} alt='Logo tipo' />

      <Dialog.Root>
        <Dialog.Trigger type='button' className='ButtonPlus'>
          <Plus size={20} className='Plus' />
          Novo Hábito
        </Dialog.Trigger>
        <Dialog.Portal>
          <Dialog.Overlay className='ModalOverlay' />
          <Dialog.Content className='ModalContent'>
            <Dialog.Close className='ModalClose'>
              <X size={24} className='ModalButtonClose' />
            </Dialog.Close>
            <Dialog.Title className='ModalTitle'>Criar Hábito</Dialog.Title>
            <NewHabitForm />
          </Dialog.Content>
        </Dialog.Portal>
      </Dialog.Root>
    </div>
  );
}
