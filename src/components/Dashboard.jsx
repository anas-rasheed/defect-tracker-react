import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';

const Dashboard = ({ defectsList }) => {
  const [defects, setDefects] = useState(defectsList);
  useEffect(() => {
    setDefects(defectsList);
  }, [defectsList]);
  return (
    <>
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
                  <td>{defect.createdOn}</td>
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
