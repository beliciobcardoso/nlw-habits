import { Header } from './components/Header';
import { SummaryTable } from './components/SummaryTable';
import './styles/global.css';
import './lib/dayjs';

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
