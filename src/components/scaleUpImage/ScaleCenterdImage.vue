<template>
  <div id="imageWrapper">
    <img id="image" alt="Contact centerd image" src="../../assets/images/scaleUpImage.jpeg" />
  </div>
</template>
<script>
import gsap from 'gsap';
export default {
  name: 'ScaleCenteredImage',
  mounted() {
    const imageTL = gsap.timeline();

    imageTL
      .from('#imageWrapper', 3, { delay: 1, ease: 'Expo.easeOut', scale: 0 })
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

@media screen and (max-width: 1300px) {
  #imageWrapper {
    height: 220px;
    width: 350px;
    overflow: hidden;
    position: absolute;
    left: calc(50% - 175px);
    top: calc(50% - 110px);
    z-index: 100;
  }
}
</style>