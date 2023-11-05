<template>
  <div class="content" id="Conect">
    <div class="container fit">
      <div class="Conect">
        <div>
          <span>تابع الكلية عبر</span>
        </div>
        <div>
          <a
            href="https://www.facebook.com/profile.php?id=100083363979639"
            class="facebook"
          >
            <font-awesome-icon :icon="['fab', 'facebook']" />
            <span>الفيس بوك</span>
          </a>
        </div>
      </div>
    </div>
    <!-- Copyright -->
    <div class="text-center Copyright container fit">
      <p>
        <span>جميع الحقوق محفوظة &copy; 2024</span>
        <a
          class="text-reset fw-bold"
          href="https://www.facebook.com/profile.php?id=61551365201853"
          ><img
            src="../../assets/SalemTeamLogo_2-removebg-preview.webp"
            alt=""
            id="SalemTeam"
            style="height: 60px"
          />
        </a>
      </p>
      <div>
        <p>
          تصميم وتطوير بواسطة
          <a href="https://www.facebook.com/profile.php?id=61551365201853">
            <strong>محمد سالم</strong>
          </a>
        </p>
        <p>
          <a
            href="https://www.facebook.com/profile.php?id=61551365201853"
            id="fac"
          >
            <font-awesome-icon :icon="['fab', 'facebook']" />
            قم بزيارة صفحتنا عبر الفيس بوك</a
          >
        </p>
      </div>
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
    &:first-child {
      padding: 20px;
      margin: 75px auto 0px;
      display: flex;
      .Conect {
        width: 100%;
        display: flex;
        justify-content: space-between;
        align-items: center;
        background: #fff;
        padding: 10px;
        border-radius: 5px;

        .facebook {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 10px;
          background: var(--main-color);
          padding: 10px;
          border-radius: 5px;
          color: #fff !important;
          align-items: center;
        }
      }
    }
  }
  .Copyright {
    display: flex;
    justify-content: center;
    gap: 10px;
    flex-direction: column-reverse;
    padding: 0 20px 20px 20px;
    & > div {
      display: flex;
      justify-content: space-between;
      padding: 10px;
      gap: 10px;
      align-items: center;
      padding: 10px;
      background: #fff;
      border-radius: 5px;
    }
    p {
      display: flex;
      gap: 10px;
      justify-content: space-between;
      margin: 0;
      &:first-child {
        padding-bottom: 10px;
      }
    }
    span {
      display: flex;
      align-items: flex-end;
    }
    a {
      position: relative;
    }
    strong {
      font-weight: bold;
      color: var(--main-color);
    }
    #fac {
      background: var(--main-color);
      color: #fff !important;
      padding: 10px;
      border-radius: 5px;
    }
  }
}
@media (max-width: 500px) {
  .Conect {
    > div:last-child {
      width: 100%;
    }
  }
  .Copyright {
    & > div {
      flex-direction: column;
      p:last-child {
        width: 100%;
        a {
          width: 100%;
        }
      }
    }
  }
}
</style>
