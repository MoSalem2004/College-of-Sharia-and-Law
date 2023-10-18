<template>
  <div class="LandingPage">
    <img src="../../assets/cloud.webp" alt="" id="cloud_1" />
    <img src="../../assets/cloud.webp" alt="" id="cloud" />
    <!-- <img src="../../assets/4a8babf8_o-removebg-preview.png" alt="" id="cloud" /> -->
    <img
      src="../../assets/الجامع-الازهر-الشريف-removebg-preview.webp"
      alt=""
      id="college"
    />
    <!-- <img
      src="../../assets/cover/b327b289_o__1_-removebg-preview.png"
      alt=""
      id="planting_1"
    />
    <img
      src="../../assets/cover/2bff9900_o-removebg-preview.png"
      alt=""
      id="tree_1"
    /> -->
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
    background-size: cover;
    object-fit: cover;
    vertical-align: middle;
    &#college {
      // top: 56%;
      // height: 300px;
      // width: 300px;
    }
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
    img {
      &#cloud {
        width: 310%;
      }
    }
  }
}
</style>
