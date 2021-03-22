<template>
  <div class="flex">
    <svg
      width="518"
      height="230"
      viewBox="0 0 518 230"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M0 0H53.2286V186.629H168.557V230H0V0Z"
        fill="white"
        fill-opacity="0.7"
      />
      <path
        d="M198.298 0H251.527V230H198.298V0Z"
        fill="white"
        fill-opacity="0.7"
      />
      <path
        d="M517.053 0V230H473.353L358.682 90.3571V230H306.11V0H350.139L464.482 139.643V0H517.053Z"
        fill="white"
        fill-opacity="0.7"
      />
    </svg>
    <morph-e></morph-e>
  </div>
</template>
<script>
import MorphE from "../morph/MorphE";

export default {
  name: "NamedLine",
  components: { "morph-e": MorphE },
  setup() {},
};
</script>