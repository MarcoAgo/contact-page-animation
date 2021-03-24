<template>
  <div id="lastLineRow" class="flex spacedBetween">
    <div class="start">
      <div id="absolutePositioned">
        <a-letter></a-letter>
      </div>
    </div>
    <div id="center">
      <p class="fontSerif">Don't be shy to send us a few words - we will <span>get back to you</span></p>
      <button class="buttonDefault">Start the conversation</button>
    </div>
    <div class="end">
      <named-line></named-line>
    </div>
  </div>
</template>
<script>
import ALetter from './ALetter'
import NamedLine from './Line';
import { TimelineMax, Expo, TimelineLite } from "gsap";

export default {
  name: 'LastLineWrapper',
  components: { ALetter, NamedLine },
  mounted() {
    const containerTL = new TimelineMax();
    const centeredContentTL = new TimelineLite();
    
    containerTL
      .from("#lastLineRow", 3, { ease: Expo.easeInOut, x: -2100 })

    centeredContentTL
      .from("#center", .7, { opacity: 0, delay: 3, display: 'none', y: 40 })
  },
}
</script>
<style scoped>
  #lastLineRow {
    padding: 0 24px;
    width: 100%;
    position: relative;
  }

  #center {
    display: flex;
    align-items: center;
    max-width: 400px;
    flex-direction: column;
  }

  #center p {
    text-align: center;
    font-size: 32px;
    font-weight: 100;
    margin-bottom: 16px;
    opacity: .7;
  }
  
  #center span {
    font-style: italic;
  }
</style>