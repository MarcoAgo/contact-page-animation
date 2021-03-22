<template>
  <svg
    id="ESvg"
    width="1239"
    height="230"
    viewBox="0 0 1239 230"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      id="morphE"
      d="M1238.09 187.286V230H0V0H1233.81V42.7143H52.9V92.6571H1219.69V134.057H52.9V187.286H1238.09Z"
      fill="white"
      fill-opacity="0.7"
    />
  </svg>
</template>
<script>
import { TimelineMax, Expo } from "gsap";

export default {
  name: "MorphE",
  mounted() {
    const morphTL = new TimelineMax();
    const widthTL = new TimelineMax();
    morphTL.to("#morphE", 2.2, {
      ease: Expo.easeInOut,
      delay: 0.6,
      attr: {
        d:
          "M178.086 187.286V230H0V0H173.814V42.7143H52.9V92.6571H159.686V134.057H52.9V187.286H178.086Z",
      },
    });
    widthTL.to("#ESvg", 2.2, {
      ease: Expo.easeInOut,
      delay: 0.6,
      attr: {
        width: 179,
        viewBox: "0 0 179 230",
      },
    });
  },
};
</script>
<style scoped>
  #ESvg {
    margin-left: 17px;
  }
</style>