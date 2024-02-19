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
  gap: 20px;
  margin-bottom: 110px;
  > a {
    width: 24%;
    position: relative;
    cursor: pointer;
    transition: 0.3s;
    &:hover {
      filter: opacity(0.9);
      transform: scale(1.05);
      img {
        filter: hue-rotate(350deg);
      }
      & > div {
        width: 100%;
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
      font-size: 12px;
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
    gap: 55px;
    > a {
      width: 100%;
    }
  }
}
@media (min-width: 500px) and (max-width: 992px) {
  .container {
    flex-wrap: wrap;
    gap: 35px;
    justify-content: center;
    > a {
      width: 46%;
    }
  }
}
</style>
