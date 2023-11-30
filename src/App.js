import {BrowserRouter, Routes, Route} from 'react-router-dom'
import {Auth} from './pages/auth/Auth'
import {ExpenseTracker} from './pages/expensetracker/ExpenseTracker'
import './AppStyles.css'
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Auth/>}/>
          <Route path='/expense-tracker' element={<ExpenseTracker/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
