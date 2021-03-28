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
import gsap from "gsap";

export default {
  name: 'LastLineWrapper',
  components: { ALetter, NamedLine },
  mounted() {
    const containerTL = gsap.timeline();
    const centeredContentTL = gsap.timeline();

    // GET WIDTH FOR ANIMATION TO START FROM OUT OF PAGE
    const doubledWindowWidth = window.innerWidth * 2;
    const fromX = window.innerWidth - doubledWindowWidth;
    
    containerTL
      .from("#lastLineRow", 3, { ease: 'Expo.easeInOut', x: fromX - 1238 })

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
    align-items: center;
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
    padding: 0 16px;
  }
  
  #center span {
    font-style: italic;
  }

  @media screen and (max-width: 1300px) {
    #center p {
      text-align: center;
      font-size: 24px;
      font-weight: 100;
      margin-bottom: 16px;
      opacity: .7;
    }
  }
</style>