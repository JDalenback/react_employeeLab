import Employee from './Employee';
import { Link } from 'react-router-dom';

const EmployeeList = ( { employees, setEmployees }) => {
    return (<>
        <h1>Employee List</h1>
        <Link to="/form/noId">
            <button id="add-employee-btn" >Add Employee</button>
        </Link>
        {employees.map((employee, index) => {
            return (
            <div key={index} className="employee-list">
                <Employee employee={employee} employees={employees} setEmployees={setEmployees}/>
            </div>)
        })}
        

    </>);
}

export default EmployeeList;