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
import { TimelineMax, Power4 } from "gsap";
import MorphD from "../morph/MorphD.vue";
import LettersEnterRight from "./LettersEnterRight";

export default {
  name: "DropLine",
  components: { MorphD, LettersEnterRight },
  mounted() {
    const containerTL = new TimelineMax();
    const number1TL = new TimelineMax();
    const number2TL = new TimelineMax();

    number1TL.from('#number1', 1.5, { ease: Power4.easeOut, x: 16, opacity: 0, delay: 1.5 })
    number2TL.from('#number2', 1.5, { ease: Power4.easeOut, x: 16, opacity: 0, delay: 1.5 });

    containerTL
      .from("#dropLineContainer", 1.5, { ease: Power4.easeOut, x: 2500 })
      .to("#dropLineContainer", 1.5, { ease: Power4.easeOut, x: 0 });
  },
};
</script>

<style scoped>
  #mainWrapper {
    padding-top: 32px;
  }
  #dropLineContainer {
    display: flex;
    padding: 0 24px;
    position: absolute;
  }

  #numbersWrapper {
    width: 60%;
    opacity: .7;
    padding-right: 24px;
  }

  #dropWrapper {
    height: 290px;
    width: 40%;
    min-width: 650px;
  }
</style>
