import logoImage from '../assets/logo.svg';
import { Plus } from 'phosphor-react';

export function Header() {
  return (
    <>
      {' '}
      <div className='Header'>
        <img src={logoImage} alt='' />
        <button type='button' className=''>
          <Plus size={20} />
          Novo Hábito
        </button>
      </div>
    </>
  );
}
