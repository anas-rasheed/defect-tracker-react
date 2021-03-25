import React, { useState } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { DEFECT_STAGES, PRIORITY, PRIORITY_LEVELS } from '../common/constants';
import { addDefect } from '../../redux/slices/defectsSlice';

const StyledContainer = styled.div`
  height: calc(100% - 60px);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const AddDefect = ({ defectsList, addDefect }) => {
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

  return (
    <StyledContainer>
      <form>
        <table>
          <tbody>
            <tr>
              <td>
                <label htmlFor='priority'>Priority</label>
              </td>
              <td>
                <select
                  id='priority'
                  name='priority'
                  onChange={handleChange}
                  defaultValue=''
                >
                  <option value='' disabled>
                    -Select-
                  </option>
                  {PRIORITY.map((priority, index) => {
                    return (
                      <option key={index} value={priority}>
                        {priority}
                      </option>
                    );
                  })}
                </select>
              </td>
            </tr>
            <tr>
              <td>
                <label htmlFor='priorityLevel'>Priority Level</label>
              </td>
              <td>
                <select
                  id='priorityLevel'
                  name='priorityLevel'
                  onChange={handleChange}
                  defaultValue=''
                >
                  <option value='' disabled>
                    -Select-
                  </option>
                  {PRIORITY_LEVELS.map((priorityLevel, index) => {
                    return (
                      <option key={index} value={priorityLevel}>
                        {priorityLevel}
                      </option>
                    );
                  })}
                </select>
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
                />
              </td>
            </tr>
            <tr>
              <td>
                <label htmlFor='status'>Defect Status</label>
              </td>
              <td>
                <select
                  id='status'
                  name='status'
                  onChange={handleChange}
                  defaultValue=''
                >
                  <option value='' disabled>
                    -Select-
                  </option>
                  {DEFECT_STAGES.map((defectStages, index) => {
                    return (
                      <option key={index} value={defectStages}>
                        {defectStages}
                      </option>
                    );
                  })}
                </select>
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
                <button type='button' onClick={() => addDefect(formData)}>
                  Submit
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </form>
    </StyledContainer>
  );
};
const mapStatetoProps = state => ({
  defectsList: state.defects.defectsList,
});
const mapDispatchToProps = dispatch => {
  return {
    addDefect: formData => dispatch(addDefect(formData)),
  };
};

export default connect(mapStatetoProps, mapDispatchToProps)(AddDefect);
