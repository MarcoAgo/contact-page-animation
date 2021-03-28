<template>
  <svg
    id="ESvg"
    :width="data.widthInitial"
    :height="data.height"
    :viewBox="data.viewBoxInitial"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      id="morphE"
      :d="data.eMorphInitial"
      fill="white"
      fill-opacity="0.7"
    />
  </svg>
</template>
<script>
import gsap from "gsap";
import manageSvgDataOnResizeAndInit from './helpers/e/manageSvgDataOnResizeAndInit';

export default {
  name: "MorphE",
  data() {
    return {
      data: {
        height: null,
        eMorphFinal: null,
        eMorphInitial: null,
        widthInitial: null,
        widthFinal: null,
        viewBoxInitial: null,
        viewBoxFinal: null,
      }
    }
  },
  mounted() {
    const morphTL = gsap.timeline();
    const widthTL = gsap.timeline();

    const pageWidth = window.innerWidth;
    this.data = manageSvgDataOnResizeAndInit(pageWidth);

    morphTL.to("#morphE", 2.2, {
      ease: 'Expo.easeInOut',
      delay: 0.6,
      attr: { d: this.data.eMorphFinal },
    });
    widthTL.to("#ESvg", 2.2, {
      ease: 'Expo.easeInOut',
      delay: 0.6,
      attr: {
        width: this.data.widthFinal,
        viewBox: this.data.viewBoxFinal,
      },
    });
  },
  created() {
    window.addEventListener("resize", this.trackWindowResize);
  },
  destroyed() {
    window.removeEventListener("resize", this.trackWindowResize);
  },
  methods: {
    trackWindowResize(e) {
      this.data = manageSvgDataOnResizeAndInit(e.target.innerWidth, {}, true);
    },
  },
};
</script>
<style scoped>
  #ESvg {
    margin-left: 17px;
  }
</style>