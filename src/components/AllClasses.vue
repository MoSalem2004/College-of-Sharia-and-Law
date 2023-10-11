<template>
  <div id="AllClasses">
    <h2 class="main-title">الفرق الدراسية</h2>
    <div class="container fit">
      <router-link :to="{ name: 'ClassOne' }">
        <div class="title">الفرقة الأولي</div>
        <div class="Subject">12 مادة</div>
      </router-link>
      <router-link to="/ClassTwo">
        <div class="title">الفرقة الثانية</div>
        <div class="Subject">14 مادة</div>
      </router-link>
      <router-link to="/ClassThree">
        <div class="title">الفرقة الثالثة</div>
        <div class="Subject">13 مادة</div>
      </router-link>
      <router-link to="/ClassFour">
        <div class="title">الفرقة الرابعة</div>
        <div class="Subject">18 مادة</div>
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
  > a {
    border: 1px solid #ddd;
    border-radius: 5px;
    width: 24%;
    height: 150px;
    display: flex;
    position: relative;
    flex-direction: column;
    cursor: pointer;
    justify-content: flex-end;
    gap: 10px;
    transition: 0.3s;
    &:hover {
      border-color: var(--main-color);
      box-shadow: 0 0 10px #ddd;
    }

    .Subject {
      padding: 10px;
      background: #fff;
      margin: 10px auto 10px 10px;
      text-align: left;
      border-radius: 50px;
      color: #717171;
      font-weight: bold;
    }
    .title {
      text-align: center;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      color: var(--main-color);
      font-size: 21px;
      font-weight: bold;
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
    > a {
      width: 48%;
      height: 185px;
    }
  }
}
@media (min-width: 500px) and (max-width: 900px) {
  .container {
    flex-wrap: wrap;
    > a {
      width: 48%;
      height: 185px;
    }
  }
}

@media (min-width: 900px) {
}
</style>
