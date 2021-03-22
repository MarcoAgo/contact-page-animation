<template>
  <div id="lastLineRow" class="flex spacedBetween">
    <div class="start">
      <div id="absolutePositioned">
        <a-letter></a-letter>
      </div>
    </div>
    <div class="end">
      <named-line></named-line>
    </div>
  </div>
</template>
<script>
import ALetter from './ALetter'
import NamedLine from './Line';
import { TimelineMax, Expo } from "gsap";

export default {
  name: 'LastLineWrapper',
  components: { ALetter, NamedLine },
  mounted() {
    const containerTL = new TimelineMax();
    containerTL
      .from("#lastLineRow", 3, { ease: Expo.easeInOut, x: -1900 })
  },
}
</script>
<style scoped>
  #lastLineRow {
    padding: 0 24px;
    width: 100%;
  }
  
  #absolutePositioned {
    position: absolute;
  }
</style>