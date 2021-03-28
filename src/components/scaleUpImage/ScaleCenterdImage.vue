<template>
  <div class="flex">
    <div id="imageWrapper">
      <div id="image"></div>
      <div id="imageLabel">
        <p>if you want ot buy from us become our licensed partner overseas or join our friendly team!</p>
      </div>
    </div>
  </div>
</template>
<script>
import gsap from 'gsap';
export default {
  name: 'ScaleCenteredImage',
  mounted() {
    const imageTL = gsap.timeline();  
    const imageLabelTL = gsap.timeline();

    imageTL.from('#imageWrapper', 2, { delay: 1, ease: 'Expo.easeInOut', scale: 0 });
    imageLabelTL.to('#imageLabel', .7, { delay: 3, opacity: .7, y: 32 });
  }
}
</script>
<style scoped>
#imageWrapper {
  height: 260px;
  width: 550px;
  position: absolute;
  left: calc(50% - 275px);
  top: calc(50% - 130px);
  z-index: 100;
}

#image {
  height: 100%;
  width: 100%;
  background-image: url('../../assets/images/scaleUpImage.jpeg');
  background-size: cover;
  background-position: center center;
}

#imageLabel {
  position: absolute;
  left: 582px;
  text-transform: uppercase;
  font-size: 12px;
  top: 160px;
  opacity: 0;
  width: 350px;
  padding-right: 24px;
}

#imageLabel p {
  width: 100%;
}

#imageWrapper img {
  width: 100%;
  float: left;
}

@media screen and (max-width: 1300px) {
  #imageWrapper {
    height: 220px;
    width: 350px;
    left: calc(50% - 175px);
    top: calc(50% - 110px);
  }

  #imageLabel {
    left: 366px;
    top: 120px;
  }
}
</style>