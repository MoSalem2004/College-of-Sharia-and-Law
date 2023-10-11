<template>
  <div class="content" id="Conect">
    <div class="container fit">
      <div class="Conect">
        <span> تواصل معنا عبر</span>
        <a
          href="https://www.facebook.com/profile.php?id=100083363979639"
          class="facebook"
        >
          <font-awesome-icon :icon="['fab', 'facebook']" />
          <span>الفيس بوك</span>
        </a>
      </div>
    </div>
    <!-- Copyright -->
    <div class="text-center p-4 Copyright">
      © 2024 Copyright:
      <a
        class="text-reset fw-bold"
        href="https://www.facebook.com/profile.php?id=61551365201853"
        >SALEM TEAM</a
      >
    </div>
    <!-- Copyright -->
  </div>
</template>
<script>
export default {
  name: "TheFooter",
};
</script>
<style lang="scss" scoped>
.content {
  background-color: #eee;
  margin-top: auto;
  .container {
    padding: 20px;
    margin: 75px auto 0px;
    display: flex;
    .Conect {
      width: 100%;
      display: flex;
      justify-content: space-between;
      align-items: center;
      .facebook {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 10px;
        background: #0866ff;
        padding: 10px;
        border-radius: 5px;
        color: #fff !important;
        align-items: center;
        svg {
          //   color: var(--main-color);
        }
      }
    }
  }
  .Copyright {
    padding: 20px;
    text-align: center;
    border-top: 1px solid #ddd;
    a {
      color: var(--main-color) !important;
      font-weight: bold;
    }
  }
}
</style>
