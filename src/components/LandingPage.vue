<template>
  <div class="LandingPage">
    <img src="../../assets/cloud.jpg" alt="" id="cloud" />
    <img src="../../assets/الجامع-الازهر-الشريف-removebg-preview.png" alt="" />
  </div>
</template>
<script>
export default {
  name: "LandingPage",
  mounted() {
    this.scroll();
  },
  methods: {
    scroll() {
      window.addEventListener("scroll", () => {
        if (document.getElementById("cloud")) {
          document.getElementById("cloud").style.left = `${scrollY + 260}px`;
        }
      });
    },
  },
};
</script>
<style lang="scss" scoped>
.LandingPage {
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  overflow: hidden;
  height: 85vh;
  img {
    height: 85vh;
    position: absolute;
    top: 0;
    left: 50%;
    transform: translate(-50%);
    width: 100%;
    &#cloud {
      left: 260px;
      width: 210%;
    }
  }
}
@media (max-width: 500px) {
  .LandingPage {
    height: 359.2px !important;
    img {
      width: 100%;
      height: 359.2px !important;
      &#cloud {
        width: 510%;
      }
    }
  }
}
@media (min-width: 500px) and (max-width: 993px) {
  .LandingPage {
    height: 359.2px !important;
    img {
      width: 100%;
      height: 359.2px !important;
      &#cloud {
        width: 510%;
      }
    }
  }
}
</style>
