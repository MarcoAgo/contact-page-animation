<template>
  <svg
    :width="data.height"
    :height="data.width"
    :viewBox="data.viewBox"
    fill="none"
  >
    <path
      :d="data.d"
      fill="white"
      fill-opacity="0.7"
    />
  </svg>
</template>
<script>
export default {
  name: "ALetter",
  data() {
    return {
      data: {
        height: null,
        width: null,
        viewBox: null,
        d: null,
      }
    }
  },
  mounted() {
    const pageWidth = window.innerWidth;
    
    if (pageWidth > 1300) {
      this.data = {
        height: 230,
        width: 259,
        viewBox: '0 0 259 170',
        d: 'M181.9 180.714H75.1142L54.7428 230H0.199951L102.714 0H155.286L258.129 230H202.271L181.9 180.714ZM165.143 140.3L128.671 52.2429L92.2 140.3H165.143Z',
      }
    }

    if (pageWidth <= 1300) {
      this.data = {
        height: 170,
        width: 259,
        viewBox: '0 0 259 170',
        d: 'M181.9 180.714H75.1142L54.7428 230H0.199951L102.714 0H155.286L258.129 230H202.271L181.9 180.714ZM165.143 140.3L128.671 52.2429L92.2 140.3H165.143Z',
      }
    }
  },
  created() {
    window.addEventListener('resize', this.trackWindowResize);
  },
  destroyed() {
    window.removeEventListener('resize', this.trackWindowResize);
  },
  methods: {
    trackWindowResize(e) {
      if (e.target.innerWidth > 1300) {
        this.data = {
          height: 230,
          width: 259,
          viewBox: '0 0 259 170',
          d: 'M181.9 180.714H75.1142L54.7428 230H0.199951L102.714 0H155.286L258.129 230H202.271L181.9 180.714ZM165.143 140.3L128.671 52.2429L92.2 140.3H165.143Z',
        }
      }

      if (e.target.innerWidth <= 1300) {
        this.data = {
          height: 170,
          width: 191,
          viewBox: '0 0 191 170',
          d: 'M134.5 133.571H55.5714L40.5142 170H0.199951L75.9714 0H114.829L190.843 170H149.557L134.5 133.571ZM122.114 103.7L95.1571 38.6143L68.2 103.7H122.114Z',
        }
      }
    }
  }
};
</script>