import './App.css';
import { useState, useEffect } from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import EmployeeList from './components/EmployeeList';
import EmployeeForm from './components/EmployeeForm';

function App() {
  const [employees, setEmployees] = useState([
    {id: 1,
    name: "John Doe",
    email: "john@doe.com",
    phone: "09876543321",
    skills: "html, css, javascript, java",
    avatar: "https://i.imgur.com/Q9qFt3m.png"}]);

    useEffect(() => {
      if(localStorage.length > 0){
        let employeesFromLocalStorage = []
        for(var i=0; i<localStorage.length; i++) {
          let key = localStorage.key( i );
          let item = localStorage.getItem( key );
          employeesFromLocalStorage.push(JSON.parse(item));
        }
        setEmployees(() => {
          return [...employeesFromLocalStorage];
        });
      }
    }, []);

    useEffect(() => {
      employees.map((employee) => {
        return localStorage.setItem(employee.id, JSON.stringify(employee));
      });
    }, [employees]);

  return (
  <Router>
  <div className="App">
    <Switch>
      <Route path="/" exact render = {() => <EmployeeList employees={employees} setEmployees={setEmployees}/>} />
      <Route path="/form/:id" render={ (props) => <EmployeeForm props={props} employees={employees} setEmployees={setEmployees}/>} />
    </Switch>
  </div>
  </Router>
  )
}

export default App;
