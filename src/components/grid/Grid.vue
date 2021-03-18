<template>
  <styled-grid>
    <slot></slot>
  </styled-grid>
</template>

<script>
import styled from 'vue-styled-components';

const StyledGrid = styled.div`
  padding: 40px 0;
	display: grid;
	grid-template-columns: minmax(20px, 1fr) repeat(12, minmax(0, 70px)) minmax(20px, 1fr);
	grid-gap: 20px;
`;

export default {
  name: 'GridTemplate',
  components: { StyledGrid },
  props: {
    columnStart: String,
    columnEnd: String,
  }
}
</script>
