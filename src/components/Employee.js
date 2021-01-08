import { Link } from 'react-router-dom';

const Employee = ({ employee, employees, setEmployees }) => {
const deleteHandler = () => {
    setEmployees(employees.filter(element => element.id !== employee.id));
    localStorage.removeItem(employee.id);
}

    return (<>
    <img src={employee.avatar} alt="Avatar"></img>
    <ul className="employee-info">
            <li><p><strong>Name: </strong> {employee.name}</p></li>
            <li><p><strong>Email: </strong> {employee.email}</p></li>
            <li><p><strong>Phone: </strong> {employee.phone}</p></li>
            <li><p><strong>Skills: </strong> {employee.skills}</p></li>
    </ul>
    <Link to={`/form/${employee.id}`}>
        <button>Update</button>
    </Link>
    <button onClick={deleteHandler}>Delete</button>
    </>);
}

export default Employee;