<template>
  <div id="AllClasses">
    <h2 class="main-title">الفرق الدراسية</h2>
    <div class="container fit">
      <router-link to="/ClassOne">
        <img
          src="../../assets/_75893851-f291-42f3-bbd3-c9ab12ee3572.jpg"
          alt=""
        />
        <div>
          <div class="title">الفرقة الأولي</div>
          <div class="Subject">12 مادة</div>
        </div>
      </router-link>
      <router-link to="/ClassTwo">
        <img
          src="../../assets/_7352e989-4dfa-4e44-b3fe-1c698c897019.jpg"
          alt=""
        />
        <div>
          <div class="title">الفرقة الثانية</div>
          <div class="Subject">14 مادة</div>
        </div>
      </router-link>
      <router-link to="/ClassThree">
        <img
          src="../../assets/_fa24f100-45a4-4be2-8b4b-2203fc5bf928.jpg"
          alt=""
        />
        <div>
          <div class="title">الفرقة الثالثة</div>
          <div class="Subject">12 مادة</div>
        </div>
      </router-link>
      <router-link to="/ClassFour">
        <img
          src="../../assets/_bc4ab2c8-f9bf-41d6-8c4c-ee47365694c7.jpg"
          alt=""
        />
        <div>
          <div class="title">الفرقة الرابعة</div>
          <div class="Subject">17 مادة</div>
        </div>
      </router-link>
    </div>
  </div>
</template>
<script>
export default {
  name: "AllClasses",
};
</script>
<style lang="scss" scoped>
.container {
  display: flex;
  gap: 10px;
  margin-bottom: 110px;
  > a {
    // border: 1px solid #ddd;
    // border-radius: 5px;
    width: 24%;

    // display: flex;
    position: relative;
    // flex-direction: column;
    cursor: pointer;
    // justify-content: flex-end;
    // gap: 10px;
    transition: 0.3s;
    &:hover {
      // border-color: var(--main-color);
      // box-shadow: 0 0 10px #ddd;
      filter: opacity(0.9);
      transform: scale(1.05);
      img {
        filter: hue-rotate(350deg);
        --tw-saturate: saturate(1.5);
      }
      & > div {
        width: 100%;
        // left: 0;
        // transform: translate(0px, -40px);
      }
    }
    img {
      border-radius: 5px;
      width: 100%;
      transition: 0.3s;
    }
    & > div {
      transition: 0.3s;
      position: absolute;
      bottom: -54px;
      width: 90%;
      background: var(--main-color);
      margin: 0 auto;
      left: 50%;
      transform: translate(-50%, -50%);
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 15px;
      border-radius: 5px;
      color: #fff;
      font-weight: bold;
    }
    .Subject {
      // padding: 10px;
      // background: #fff;
      // margin: 10px auto 10px 10px;
      // text-align: left;
      // border-radius: 50px;
      // color: #717171;
      // font-weight: bold;
      font-size: 12px;
    }
    .title {
      // text-align: center;
      // position: absolute;
      // top: 50%;
      // left: 50%;
      // transform: translate(-50%, -50%);
      // color: var(--main-color);
      // font-size: 21px;
      // font-weight: bold;
    }
  }
}
@media (max-width: 263px) {
  .container > a {
    width: 100% !important;
  }
}
@media (max-width: 500px) {
  .container {
    flex-wrap: wrap;
    gap: 35px;
    > a {
      width: 100%;
      // height: 185px;
    }
  }
}
@media (min-width: 500px) and (max-width: 900px) {
  .container {
    flex-wrap: wrap;
    gap: 35px;
    > a {
      width: 100%;
    }
  }
}

@media (min-width: 900px) {
  .container {
    flex-wrap: wrap;
    gap: 45px;
    > a {
      width: 46%;
    }
  }
}
</style>
