import { useHistory } from 'react-router-dom';
import uuid from 'react-uuid';

const EmployeeForm = ({ props, employees, setEmployees }) => {
  const history = useHistory();

  const formSubmitHandler = (event) => {
    const formData = event.target;
    const name = formData[0].value;
    const email = formData[1].value;
    const phone = formData[2].value;
    const skills = formData[3].value;
    const avatar = formData[4].value;
    const id =
      props.match.params.id !== 'noId' ? props.match.params.id : uuid();
    const employeeNew = {
      id,
      name,
      email,
      phone,
      skills,
      avatar,
    };

    const prevoiusEmployees = employees.filter(
      (element) => element.id !== employeeNew.id
    );

    setEmployees([...prevoiusEmployees, employeeNew]);
    history.push('/');
  };

  return (
    <div>
      <h1>Employee Information</h1>
      <form id="employee-form" onSubmit={formSubmitHandler}>
        <label htmlFor="employee-name">Name</label>
        <input
          id="employee-name"
          name="employee-name"
          type="text"
          required
        ></input>

        <label htmlFor="employee-email">Email</label>
        <input
          id="employee-email"
          name="employee-email"
          type="email"
          required
        ></input>

        <label htmlFor="employee-phone">Phone</label>
        <input
          id="employee-phone"
          name="employee-phone"
          type="text"
          required
        ></input>

        <label htmlFor="employee-skills">Skills</label>
        <input
          id="employee-skills"
          name="employee-skills"
          type="text"
          required
        ></input>

        <label htmlFor="employee-avatar">Avatar</label>
        <input
          id="employee-avatar"
          name="employee-avatar"
          type="text"
          required
        ></input>

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default EmployeeForm;
