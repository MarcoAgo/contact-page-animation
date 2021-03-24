<template>
  <div id="imageWrapper">
    <img id="image" alt="Contact centerd image" src="../../assets/images/scaleUpImage.jpeg" />
  </div>
</template>
<script>
import { TimelineLite, Expo } from 'gsap';
export default {
  name: 'ScaleCenteredImage',
  mounted() {
    const imageTL = new TimelineLite();

    imageTL
      .from('#imageWrapper', 3, { delay: 1, ease: Expo.easeOut, scale: 0 })
  }
}
</script>
<style scoped>
#imageWrapper {
  height: 260px;
  width: 500px;
  overflow: hidden;
  position: absolute;
  left: calc(50% - 250px);
  top: calc(50% - 130px);
  z-index: 100;
}

#imageWrapper img {
  width: 100%;
}
</style>