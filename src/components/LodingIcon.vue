<template>
  <div>
    <div class="main_popup" style="z-index: 4"></div>
    <div class="Icon">
      <img src="../../assets/animation_loldv2bz_small.gif" alt="" />
    </div>
  </div>
</template>

<script>
export default {
  name: "LodingIcon",
};
</script>

<style scoped>
.Icon {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 3;
  color: #fff;
  font-size: 31px;
}
</style>
