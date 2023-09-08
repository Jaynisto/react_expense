import Expenses from './components/Expenses/Expenses'

const  App = () => {
  const expenses = [
    {
      id:'e1',
      title:'Toilet Paper',
      amount: 94.12,
      date: new Date(2020,7,14)
    },
    {
      id:'e2',
      title:'Car Insurance',
      amount: 294.67,
      date: new Date(2021,2,28)
    },
    {
      id:'e3',
      title:'Cosmetics',
      amount: 114.12,
      date: new Date(2023,7,14)
    },
    {
      id:'e4',
      title:'Food',
      amount: 1014.12,
      date: new Date(2023,6,15)
    }
  ]
  return (
    <div>
      <h2>Let's Get Started!</h2>
      <Expenses items={expenses}/>
    </div>
  );
}

export default App;
