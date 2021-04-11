import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { PRIORITY } from '../../common/constants';
import {
  StyledFilters,
  StyledTable,
  StyledTableContainer,
} from './DashboardStyles';

const Dashboard = ({ defectsList }) => {
  const [defects, setDefects] = useState(defectsList);
  const [searchParams, setSearchParams] = useState({
    priority: '',
    assignedTo: '',
  });

  const users = Array.from(
    new Set(defectsList.map(defect => defect.assignedTo)),
  );

  useEffect(() => {
    setDefects(defectsList);
  }, [defectsList]);

  const handleChange = event => {
    setSearchParams({
      ...searchParams,
      [event.target.name]: event.target.value,
    });
  };
  const clearFilters = () => {
    setSearchParams({
      priority: '',
      assignedTo: '',
    });
  };
  //TODO: reduce the filtering conditions for better readability and come up with new solution to add more filter parameters without extending if-else ladder
  useEffect(() => {
    let tempDefects = defectsList;
    if (searchParams.assignedTo !== '' && searchParams.priority !== '')
      tempDefects = tempDefects.filter(
        defect =>
          defect.priority === Number(searchParams.priority) &&
          defect.assignedTo === searchParams.assignedTo,
      );
    else if (searchParams.assignedTo !== '' && searchParams.priority === '')
      tempDefects = tempDefects.filter(
        defect => defect.assignedTo === searchParams.assignedTo,
      );
    else if (searchParams.assignedTo === '' && searchParams.priority !== '')
      tempDefects = tempDefects.filter(
        defect => defect.priority === Number(searchParams.priority),
      );
    setDefects(tempDefects);
  }, [searchParams, defectsList]);

  return (
    <>
      <div>
        <StyledFilters>
          <label htmlFor='priority'>Priority:</label>
          <select
            onChange={handleChange}
            id='priority'
            name='priority'
            value={searchParams.priority}
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
          <label htmlFor='assignedTo'>Assigned To:</label>
          <select
            onChange={handleChange}
            name='assignedTo'
            value={searchParams.assignedTo}
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
          <button type='button' onClick={clearFilters}>
            Clear Filters
          </button>
        </StyledFilters>
      </div>
      <StyledTableContainer>
        <StyledTable>
          <thead>
            <tr>
              <th>Defect Id</th>
              <th>Created On</th>
              <th>Assigned To</th>
              <th>Created By</th>
              <th>Priority</th>
              <th>Priority Level</th>
              <th>Summary</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {defects.map(defect => {
              const {
                defectId,
                createdOn,
                assignedTo,
                createdBy,
                priority,
                priorityLevel,
                defectSummary,
                status,
              } = defect;
              return (
                <tr key={defectId}>
                  <td>{defectId}</td>
                  <td>{new Date(createdOn).toLocaleDateString()}</td>
                  <td>{assignedTo}</td>
                  <td>{createdBy}</td>
                  <td>{priority}</td>
                  <td>{priorityLevel}</td>
                  <td>{defectSummary}</td>
                  <td>{status}</td>
                </tr>
              );
            })}
          </tbody>
        </StyledTable>
        {defects.length === 0 ? <h3>No records found</h3> : null}
      </StyledTableContainer>
    </>
  );
};

const mapStatetoProps = state => ({
  defectsList: state.defects.defectsList,
});

export default connect(mapStatetoProps)(Dashboard);
