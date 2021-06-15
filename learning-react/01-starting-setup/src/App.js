import Expenses from './components/Expenses'

function App() {
  const expenses = [
    {
      id: 'e1',
      title: 'Toilet Paper',
      amount: 94.12,
      date: new Date(2020, 7, 14),
    },
    {
      id: 'e2',
      title: 'Car Insurance',
      amount: 294.67,
      date: new Date(2021, 2, 28),
    },
    {
      id: 'e3',
      title: 'KFC',
      amount: 25.12,
      date: new Date(2021, 1, 14),
    },
    {
      id: 'e4',
      title: 'Water Bottle',
      amount: 15.9,
      date: new Date(2021, 3, 15),
    },
  ]
  return (
    <div>
      <Expenses items={expenses}/>
    </div>
  );
}

export default App;
