<template>
  <div>
    <custom-header v-bind:items="items"></custom-header>
    <div id="absoluteContent">
      <scale-centerd-image></scale-centerd-image>
    </div>
    <div id="centeredContent">
      <div id="rowWrapper">
        <drop-line></drop-line>
      </div>
      <div id="rowWrapper">
        <us></us>
      </div>
      <div id="rowWrapper">
        <last-line-wrapper></last-line-wrapper>
      </div>
    </div>
  </div>
</template>

<script>
import CustomHeader from "../header/Header";
import DropLine from "../dropLine/DropLine";
import Us from "../usRow/Us";
import LastLineWrapper from "../lastLineRow/LastLineWrapper";
import ScaleCenterdImage from '../scaleUpImage/ScaleCenterdImage.vue';

export default {
  name: "ContactPageWrapper",
  components: { CustomHeader, DropLine, Us, LastLineWrapper, ScaleCenterdImage },
  props: {  },
  data() {
    return {
      items: [
        { name: "About", index: 1 },
        { name: "Shop", index: 2 },
        { name: "Cart", index: 3 },
      ],
    };
  },
};
</script>
<style>
@import "./style.css";

#rowWrapper {
  height: calc(90vh / 3);
  width: 100%;
  display: flex;
  align-items: center;
}

#centeredContent {
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>


