<template>
  <svg
    id="ropBox"
    :width="data.width"
    :height="data.height"
    :viewBox="data.viewBox"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      :d="data.d1"
      fill="white"
      fill-opacity="0.7"
      id="r"
    />
    <path
      :d="data.d2"
      fill="white"
      fill-opacity="0.7"
      id="o"
    />
    <path
      :d="data.d3"
      fill="white"
      fill-opacity="0.7"
      id="p"
    />
  </svg>
</template>
<script>
import gsap from "gsap";
import manageAndInitResizeOfSvg from './manageAndInitResizeOfSvg';

export default {
  name: "LettersEnterRight",
  data() {
    return {
      data: {
        height: null,
        width: null,
        viewBox: null,
        d1: '',
        d2: '',
        d3: '',
      }
    };
  },
  mounted() {
    const lettersTL = gsap.timeline();

    // init width and height
    this.data = manageAndInitResizeOfSvg(window.innerWidth);
    lettersTL
      .from("#r", 2, { ease: "Power4.easeOut", x: 16, delay: .2 }, 0)
      .from("#o", 2, { ease: "Power4.easeOut", x: 16, delay: .4 }, 0)
      .from("#p", 2, { ease: "Power4.easeOut", x: 16, delay: .6 }, 0);
  },
  created() {
    window.addEventListener("resize", this.trackWindowResize);
  },
  destroyed() {
    window.removeEventListener("resize", this.trackWindowResize);
  },
  methods: {
    trackWindowResize(e) {
      this.data = manageAndInitResizeOfSvg(e.target.innerWidth);
    },
  },
};
</script>