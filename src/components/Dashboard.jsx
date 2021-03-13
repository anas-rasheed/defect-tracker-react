import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';

const StyledTable = styled.table`
  width: 100%;
  > thead > tr > th {
    width: 12.5%;
    text-align: center;
  }
  > tbody > tr > td {
    width: 12.5%;
    text-align: center;
  }
`;

const StyledFilters = styled.span`
  display: inline-grid;
  grid-template-column: auto auto;
  > label {
    padding-right: 20px;
  }
`;

const StyledTableContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: calc(100% - 90px);
  width: 80%;
  padding: 30px;
  border: 1px solid rgba(157, 160, 252, 0.8);
  border-radius: 2rem;
  background: linear-gradient(
    to right bottom,
    rgba(255, 255, 255, 0.4),
    rgba(255, 255, 255, 0.2)
  );
  backdrop-filter: blur(7px);
  box-shadow: 6px 6px 20px rgba(157, 160, 252, 0.8);
`;

const Dashboard = ({ defectsList }) => {
  const [defects, setDefects] = useState(defectsList);
  const [searchParams, setSearchParams] = useState({
    priority: '',
    assignedTo: '',
  });

  const users = Array.from(
    new Set(defectsList.map(defect => defect.assignedTo)),
  );
  const priorities = Array.from(
    new Set(defectsList.map(defect => defect.priority)),
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
            name='priority'
            value={searchParams.priority}
          >
            <option value='' disabled>
              -Select-
            </option>
            {priorities.map((priority, index) => {
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
              return (
                <tr key={defect.defectId}>
                  <td>{defect.defectId}</td>
                  <td>{new Date(defect.createdOn).toLocaleDateString()}</td>
                  <td>{defect.assignedTo}</td>
                  <td>{defect.createdBy}</td>
                  <td>{defect.priority}</td>
                  <td>{defect.priorityLevel}</td>
                  <td>{defect.defectSummary}</td>
                  <td>{defect.status}</td>
                </tr>
              );
            })}
          </tbody>
        </StyledTable>
      </StyledTableContainer>
    </>
  );
};

const mapStatetoProps = state => ({
  defectsList: state.defects.defectsList,
});

export default connect(mapStatetoProps)(Dashboard);
