<template>
  <div id="container">
    <svg
      id="DSvg"
      :width="data.widthInitial"
      :height="data.height"
      :viewBox="data.viewBoxInitial"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        id="morphD"
        :d="data.dMorphInitial"
        fill="white"
        fill-opacity="0.7"
      />
    </svg>
  </div>
</template>

<script>
import gsap from "gsap";
import manageSvgDataOnResizeAndInit from './helpers/d/manageSvgDataOnResizeAndInit';

export default {
  name: "MorphD",
  data() {
    return {
      data: {
        height: null,
        dMorphFinal: null,
        dMorphInitial: null,
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

    morphTL.to("#morphD", 2.2, {
      ease: 'Expo.easeInOut',
      delay: 0.6,
      attr: { d: this.data.dMorphFinal },
    });
    widthTL.to("#DSvg", 2.2, {
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
#container {
  margin-right: 17px;
}
</style>
