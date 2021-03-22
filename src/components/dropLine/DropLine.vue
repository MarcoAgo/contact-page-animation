<template>
  <div class="flex" id="mainWrapper">
    <div class="flex start" id="dropWrapper">
      <div id="dropLineContainer">
        <morph-d></morph-d>
        <letters-enter-right></letters-enter-right>
      </div>
    </div>
    <div class="flex end" id="numbersWrapper">
      <div class="flex spacedBetween" style="width: 100%">
        <div id="number1">00.2348</div>
        <div id="number2">00.234.000.00</div>
      </div>
    </div>
  </div>
</template>

<script>
import { TimelineMax, Expo, Power4 } from "gsap";
import MorphD from "../morph/MorphD.vue";
import LettersEnterRight from "./LettersEnterRight";

export default {
  name: "DropLine",
  components: { MorphD, LettersEnterRight },
  mounted() {
    const containerTL = new TimelineMax();
    const number1TL = new TimelineMax();
    const number2TL = new TimelineMax();

    number1TL.from('#number1', 2, { ease: Power4.easeOut, x: 16, opacity: 0, delay: 2.5 })
    number2TL.from('#number2', 2, { ease: Power4.easeOut, x: 16, opacity: 0, delay: 2.5 });

    containerTL
      .from("#dropLineContainer", 3, { ease: Expo.easeInOut, x: 1700 })
  },
};
</script>

<style scoped>
  #mainWrapper {
    padding-top: 16px;
    width: 100%;
  }
  
  #dropLineContainer {
    display: flex;
    padding: 0 24px;
    position: absolute;
  }

  #numbersWrapper {
    width: 100%;
    opacity: .7;
    padding-right: 24px;
  }

  #dropWrapper {
    height: 230px;
    min-width: 950px;
    max-width: 950px;
  }
</style>
