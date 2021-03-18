<template>
  <div>
    <custom-header v-bind:items="items"></custom-header>
    <drop-line></drop-line>
  </div>
</template>

<script>
import CustomHeader from "../header/Header";
import DropLine from "../dropLine/DropLine";

export default {
  name: "ContactPageWrapper",
  components: { CustomHeader, DropLine },
  props: {
    msg: String,
  },
  data () {
    return {
			items: [
				{ name: "About", index: 1 },
				{ name: "Shop", index: 2 },
				{ name: "Cart", index: 3 },
			],
		}
  },
};
</script>
<style>
@import "./style.css";

.test {
  height: 50px;
  width: 100%;
  background-color: red;
}
.test1 {
  height: 50px;
  width: 100%;
  background-color: red;
}

</style>


