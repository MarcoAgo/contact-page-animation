import styled from 'vue-styled-components';

const columnProps = {
  start: String,
  end: String,
};

const Column = styled('div', columnProps)`
  grid-column: ${p => p.start + '/' + p.end};
`;

export default Column;
