<template>
  <TheHeader />

  <router-view />
  <TheFooter />
</template>
<script>
import TheHeader from "@/components/TheHeader.vue";

import TheFooter from "@/components/TheFooter.vue";

export default {
  components: {
    TheHeader,

    TheFooter,
  },
};
</script>
<style lang="scss">
:root {
  --main-color: #0088ff;
}
* {
  scroll-behavior: smooth;
}
::-webkit-scrollbar {
  width: 10px;
}
::-webkit-scrollbar-track {
  background: var(--White-color);
}
::-webkit-scrollbar-thumb {
  border-radius: 5px;
  background: var(--main-color);
  width: 20px;
}
body {
  direction: rtl;
  font-family: system-ui;
  // display: flex;
  // justify-content: space-between;
}
#app {
  // min-height: 100vh;
  // width: 100%;
  // display: flex;
  // flex-direction: column;
  // gap: 20px;
}
a {
  text-decoration: none !important;
  color: black !important;
}
svg {
  cursor: pointer;
}
.fit {
  width: 90%;
  margin: 0 auto;
}
h2.main-title {
  color: var(--main-color);
  font-size: 25px;
  margin: 70px auto 50px;
  text-align: center;
}
.main_popup {
  position: fixed;
  top: 0;
  left: 0;
  background: rgba(51, 51, 51, 0.429);
  width: 100%;
  height: 100%;
  z-index: 3;
}
.form-floating > label {
  right: 0 !important;
}
.form-floating > .form-control:focus ~ label,
.form-floating > .form-control:not(:placeholder-shown) ~ label,
.form-floating > .form-control-plaintext ~ label,
.form-floating > .form-select ~ label {
  color: rgba(var(--bs-body-color-rgb), 0.65);
  transform: scale(0.85) translateY(-0.5rem) translateX(11.5rem) !important;
}
.form-floating > .form-control:focus,
.form-floating > .form-control:not(:placeholder-shown),
.form-floating > .form-control-plaintext:focus,
.form-floating > .form-control-plaintext:not(:placeholder-shown) {
  box-shadow: none !important;
}
.Show_Password {
  padding: 5px 10px !important;
  background-color: #ffffff;
  color: var(--main-color);
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 14px !important;
  width: fit-content;
  // border: 1px solid var(--main-color);
  transition: 0.3s;
  position: absolute;
  top: 50%;
  left: 10px;
  transform: translatey(-50%);
  &:hover {
    background: var(--main-color);
    color: #ffff;
  }
}
.container.fit.In {
  margin: 30px auto 2px;
  position: relative;
  nav {
    border-radius: 5px;
    padding: 10px 20px;
    display: flex;
    align-items: center;
    background: #eee;
    ol {
      margin: 0;
    }
  }
  .breadcrumb-item a {
    color: var(--main-color) !important;
    font-weight: bold;
  }
  .breadcrumb-item.active {
    color: black;
  }
  .breadcrumb-item + .breadcrumb-item::before {
    color: black;
  }
  h1 {
    color: var(--main-color);
    border-radius: 5px;
    background: #eee;
    border-bottom: 1px solid var(--main-color);
    border-bottom-right-radius: 0;
    border-bottom-left-radius: 0;
    padding: 20px;
    margin: 10px auto 10px;
    display: flex;
    justify-content: space-between;
    font-size: 30px;
    & > div {
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 10px;
      font-size: 16px;
      border: 1px solid var(--main-color);
      padding: 5px 10px;
      border-radius: 5px;
      cursor: pointer;
      background: #ffff;
    }
  }
  .counter {
    color: var(--main-color);
    font-weight: bold;
    margin: 10px 0;
    text-align: left;
  }
  .content {
    margin: 30px auto;
    display: flex;
    flex-wrap: wrap;
    justify-content: start;
    gap: 13px;
    .box {
      width: 32.4%;
      padding: 10px;
      border-radius: 5px;
      cursor: pointer;
      border: 1px solid #ddd;
      display: flex;
      flex-direction: column;
      gap: 10px;
      transition: 0.3s;
      position: relative;
      &.none {
        pointer-events: none;
      }
      &::before {
        content: "";
        position: absolute;
        top: 0;
        left: 50%;
        width: 0;
        height: 2px;
        background: var(--main-color);
        transition: 0.3s;
        transform: translateX(-50%);
      }
      &:hover {
        transform: translateY(-10px);
      }
      &:hover::before {
        width: 100%;
      }
      .count {
        width: 30px;
        height: 30px;
        background: var(--main-color);
        display: flex;
        align-items: center;
        justify-content: center;
        color: #fff;
        font-weight: bold;
        border-radius: 5px;
      }
      .title {
        text-align: center;
        font-size: 20px;
        // font-family: inherit;
      }
      .type {
        text-align: left;
        color: #636363;
        font-weight: bold;
      }
    }
  }
}
.box.none {
  pointer-events: none;
}
.hidden {
  opacity: 0;
  height: 0;
  width: 0;
  overflow: hidden;
}
.input-group > .form-control,
.input-group > .form-select,
.input-group > .form-floating {
  overflow: hidden;
}
.form-floating > .form-control:focus ~ label,
.form-floating > .form-control:not(:placeholder-shown) ~ label,
.form-floating > .form-control-plaintext ~ label,
.form-floating > .form-select ~ label {
  transform: scale(0.85) translateY(-0.5rem) translateX(10.5rem) !important;
}
@media (max-width: 263px) {
  h1 > span {
    font-size: 16px !important;
  }
  .breadcrumb-item + .breadcrumb-item {
    order: -1 !important;
    display: none;
  }
  .container.fit.In.popup header {
    flex-direction: row;
  }
  .Header .container .logo div {
    font-size: 11px !important;
  }
  .container.fit.In h1 {
    flex-direction: column;
    gap: 15px;
  }
  .content .container .Conect {
    flex-direction: column;
    gap: 15px;
  }
  .container.fit.In .breadcrumb-item.active {
    color: var(--main-color);
    font-size: 17px;
    font-weight: bold;
  }
}
@media (max-width: 500px) {
  .breadcrumb-item + .breadcrumb-item {
    order: 1;
  }
  .form-floating > .form-control:focus ~ label,
  .form-floating > .form-control:not(:placeholder-shown) ~ label,
  .form-floating > .form-control-plaintext ~ label,
  .form-floating > .form-select ~ label {
    transform: scale(0.85) translateY(-0.5rem) translateX(3.5rem) !important;
  }
  .container.fit.In {
    .content {
      justify-content: center;
      .box {
        width: 100%;
      }
    }
  }
  h2.main-title {
    font-size: 21px;
  }
  h1 {
    & > span {
      font-size: 21px;
    }
  }
  .container.fit.In h1 > div {
    font-size: 13px;
    text-align: center;
  }
  .order {
    order: -1;
  }
}
@media (min-width: 500px) and (max-width: 993px) {
  .form-floating > .form-control:focus ~ label,
  .form-floating > .form-control:not(:placeholder-shown) ~ label,
  .form-floating > .form-control-plaintext ~ label,
  .form-floating > .form-select ~ label {
    transform: scale(0.85) translateY(-0.5rem) translateX(6.5rem) !important;
  }
  .container.fit.In {
    .content {
      justify-content: space-between;
      .box {
        width: 48%;
      }
    }
  }
}

@media (min-width: 900px) and (max-width: 1067px) {
  .container.fit.In {
    .content {
      justify-content: space-between;
      .box {
        width: 48%;
      }
    }
  }
}
</style>
