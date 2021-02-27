import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';

const Dashboard = ({ defectsList }) => {
  const [defects, setDefects] = useState(defectsList);
  const users = Array.from(
    new Set(defectsList.map(defect => defect.assignedTo)),
  );
  const priorities = Array.from(
    new Set(defectsList.map(defect => defect.priority)),
  );
  const [searchParams, setSearchParams] = useState({
    priority: '',
    assignedTo: '',
  });
  useEffect(() => {
    setDefects(defectsList);
  }, [defectsList]);

  const handleChange = event => {
    setSearchParams({
      ...searchParams,
      [event.target.name]: event.target.value,
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
  }, [searchParams]);

  return (
    <>
      <div>
        <label htmlFor='priority'>Priority:</label>
        <select onChange={handleChange} name='priority'>
          <option value=''>Select</option>
          {priorities.map((priority, index) => {
            return (
              <option key={index} value={priority}>
                {priority}
              </option>
            );
          })}
          ;
        </select>
      </div>
      <div>
        <label htmlFor='assignedTo'>Assigned To:</label>
        <select onChange={handleChange} name='assignedTo'>
          <option value=''>Select</option>
          {users.map((user, index) => {
            return (
              <option key={index} value={user}>
                {user}
              </option>
            );
          })}
          ;
        </select>
      </div>
      <div>
        <table>
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
        </table>
      </div>
    </>
  );
};

const mapStatetoProps = state => ({
  defectsList: state.defects.defectsList,
});

export default connect(mapStatetoProps)(Dashboard);
