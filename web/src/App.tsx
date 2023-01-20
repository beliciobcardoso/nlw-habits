import { Header } from './components/Header';
import { SummaryTable } from './components/SummaryTable';
import './styles/global.css';

export function App() {
  return (
    <div className='App'>
      <div className='AppContainer'>
        <Header />
        <SummaryTable />
      </div>
    </div>
  );
}
