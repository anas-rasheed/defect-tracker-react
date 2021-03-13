import React, { useState } from 'react';
import { connect } from 'react-redux';

const AddDefect = ({ defectsList }) => {
  const [formData, setFormData] = useState({
    assignedTo: '',
    priority: '',
    priorityLevel: '',
    defectSummary: '',
    status: '',
  });
  const users = Array.from(
    new Set(defectsList.map(defect => defect.assignedTo)),
  );
  const handleChange = event => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };
  const handleSubmit = event => {
    event.preventDefault();
    console.log(formData);
  };
  return (
    <form onSubmit={handleSubmit}>
      <table>
        <tbody>
          <tr>
            <td>
              <label htmlFor='priority'>Priority</label>
            </td>
            <td>
              <input
                id='priority'
                name='priority'
                type='text'
                placeholder='Priority'
                onChange={handleChange}
                required
              />
            </td>
          </tr>
          <tr>
            <td>
              <label htmlFor='priorityLevel'>Priority Level</label>
            </td>
            <td>
              <input
                id='priorityLevel'
                name='priorityLevel'
                type='text'
                placeholder='Priority Level'
                onChange={handleChange}
                required
              />
            </td>
          </tr>
          <tr>
            <td>
              <label htmlFor='defectSummary'>Defect Summary</label>
            </td>
            <td>
              <input
                id='defectSummary'
                name='defectSummary'
                type='text'
                placeholder='Defect Summary'
                onChange={handleChange}
                required
              />
            </td>
          </tr>
          <tr>
            <td>
              <label htmlFor='status'>Defect Status</label>
            </td>
            <td>
              <input
                id='status'
                name='status'
                type='text'
                placeholder='Defect Status'
                onChange={handleChange}
                required
              />
            </td>
          </tr>
          <tr>
            <td>
              <label htmlFor='assignedTo'>Assign To</label>
            </td>
            <td>
              <select
                name='assignedTo'
                id='assignedTo'
                onChange={handleChange}
                defaultValue=''
                required
              >
                <option value='' disabled>
                  -Select-
                </option>
                {users.map((user, index) => {
                  return (
                    <option key={index} value={user}>
                      {user}
                    </option>
                  );
                })}
              </select>
            </td>
          </tr>
          <tr>
            <td></td>
            <td>
              <button type='submit'>Submit</button>
            </td>
          </tr>
        </tbody>
      </table>
    </form>
  );
};
const mapStatetoProps = state => ({
  defectsList: state.defects.defectsList,
});
export default connect(mapStatetoProps)(AddDefect);
