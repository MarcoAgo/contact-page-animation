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
import gsap from "gsap";
import MorphD from "../morph/MorphD.vue";
import LettersEnterRight from "./LettersEnterRight";

export default {
  name: "DropLine",
  components: { MorphD, LettersEnterRight },
  mounted() {
    const containerTL = gsap.timeline();
    const number1TL = gsap.timeline();
    const number2TL = gsap.timeline();

    // GET WIDTH FOR ANIMATION TO START FROM OUT O
    const windowWidth = window.innerWidth;

    number1TL.from('#number1', 2, { ease: 'Power4.easeOut', x: 16, opacity: 0, delay: 3 })
    number2TL.from('#number2', 2, { ease: 'Power4.easeOut', x: 16, opacity: 0, delay: 3 });

    containerTL
      .from("#dropLineContainer", 3, { ease: 'Expo.easeInOut', x: windowWidth })
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
    align-items: center;
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
    align-items: center;
  }

  @media screen and (max-width: 1300px) {
    #dropWrapper {
      height: 230px;
      min-width: 730px;
      max-width: 730px;
      align-items: center;
    }

    #numbersWrapper {
      padding-top: 30px;
    }
  }
</style>
