<template>
  <div class="flex centerAligned">
    <svg
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
      />
      <path
        :d="data.d2"
        fill="white"
        fill-opacity="0.7"
      />
      <path
        :d="data.d3"
        fill="white"
        fill-opacity="0.7"
      />
    </svg>
    <morph-e></morph-e>
  </div>
</template>
<script>
import MorphE from "../morph/MorphE";
import manageSvgDataOnResizeAndInit from './manageSvgSizeOnResizeAndInit';

export default {
  name: "NamedLine",
  components: { "morph-e": MorphE },
  data() {
    return {
      data: {
        height: null,
        width: null,
        viewBox: null,
        d1: null,
        d2: null,
        d3: null,
      }
    }
  },
  created() {
    window.addEventListener('resize', this.trackWindowResize);
  },
  mounted() {
    const pageWidth = window.innerWidth;
    this.data = manageSvgDataOnResizeAndInit(pageWidth);
  },
  destroyed() {
    window.removeEventListener('resize', this.trackWindowResize);
  },
  methods: {
    trackWindowResize(e) {
      this.data = manageSvgDataOnResizeAndInit(e.target.innerWidth);
    }
  }
};
</script>