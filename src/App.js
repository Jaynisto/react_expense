import ExpenseItem from './components/ExpenseItem'

function App() {
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
    }
  ]
  return (
    <div>
      <h2>Let's Get Started!</h2>
      <ExpenseItem expense={expenses[0]}/>
      <ExpenseItem expense={expenses[1]}/>
      <ExpenseItem expense={expenses[2]}/>
    </div>
  );
}

export default App;
