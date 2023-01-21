import logoImage from '../assets/logo.svg';
import { Plus } from 'phosphor-react';

export function Header() {
  return (
    <div className='Header'>
      <img src={logoImage} alt='Logo tipo' />
      <button type='button' className='ButtonPlus'>
        <Plus size={20} className='Plus' />
        Novo Hábito
      </button>
    </div>
  );
}
