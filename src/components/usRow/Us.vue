<template>
  <div id="usRow">
    <svg :width="data.width" :height="data.height" :viewBox="data.viewBox" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path :d="data.d1" fill="white" fill-opacity="0.7"/>
      <path :d="data.d2" fill="white" fill-opacity="0.7"/>
    </svg>
  </div>
</template>
<script>
import { TimelineMax, Expo } from 'gsap';
import manageSvgDataOnResizeAndInit from './manageSvgDataOnResizeAndInit';

export default {
  name: 'Us',
  data() {
    return {
      data: {
        width: null,
        height: null,
        viewBox: null,
        d1: null,
        d2: null,
      }
    }
  },
  mounted() {
    const containerTL = new TimelineMax();

    const pageWidth = window.innerWidth;
    this.data = manageSvgDataOnResizeAndInit(pageWidth);
    containerTL
      .from("#usRow", 3, { ease: Expo.easeInOut, x: pageWidth })
  },
  created() {
    window.addEventListener('resize', this.trackWindowResize);
  },
  destroyed() {
    window.removeEventListener('resize', this.trackWindowResize);
  },
  methods: {
    trackWindowResize(e) {
      this.data = manageSvgDataOnResizeAndInit(e.target.innerWidth);
    }
  }
}
</script>
<style scoped>
  #usRow {
    padding: 16px 24px;
  }
</style>