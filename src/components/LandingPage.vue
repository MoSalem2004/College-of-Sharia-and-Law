<template>
  <div class="LandingPage">
    <a href="#AllClasses"
      ><font-awesome-icon :icon="['fas', 'angle-down']"
    /></a>
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
  background-image: url("../../assets/_4cbf7f3d-57d3-4566-965a-add6ac9c088f.jpg");
  background-size: cover;
  background-position: center top;
  background-attachment: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  overflow: hidden;
  height: 100vh;
  position: relative;
  // margin-top: 70px;
  a {
    position: absolute;
    bottom: 15px;
    font-size: 31px;
    svg {
      background: #fff;
      font-size: 32px;
      color: var(--main-color);
      width: 122px;
      height: 35px;
      border-radius: 5px;
    }
  }
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
    &#cloud {
      left: 260px;
      width: 210%;
    }
  }
}
@media (max-width: 500px) {
  .LandingPage {
    height: 100vh !important;
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
