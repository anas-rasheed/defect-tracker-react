import styled from 'styled-components';

export const StyledTable = styled.table`
  width: 100%;
  text-align: center;
  > thead > tr > th {
    width: 12.5%;
  }
  > tbody > tr > td {
    width: 12.5%;
  }
`;

export const StyledFilters = styled.span`
  display: inline-grid;
  grid-template-column: auto auto;
  > label {
    padding-right: 20px;
  }
`;

export const StyledTableContainer = styled.div`
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
