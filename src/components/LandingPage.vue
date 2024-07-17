<template>
  <div class="LandingPage">
    <div class="context">
      <div class="container">
        <div class="right">
          <h2>منصة طلاب كلية الشريعة و القانون</h2>
          <p>
            لقد صممنا موقعًا مبتكرًا لطلاب كلية الشريعة والقانون، يوفر حلولاً
            شاملة للبحث عن الكتب، التلخيصات، والتسجيلات الأكاديمية. يتيح الموقع
            نظامًا متميزًا لتبادل الكتب بين الزملاء، ويتميز بوجود مشرفين لكل
            فرقة لإدارة المحتوى بكفاءة. تجربة دراسية متكاملة بين أيديكم!
          </p>
        </div>
        <div class="left">
          <a
            class="button"
            href="../assets/college-of-sharia-and-law.apk"
            download
          >
            <font-awesome-icon :icon="['fab', 'android']" />
            <div>تحميل التطبيق</div>
          </a>
        </div>
      </div>
    </div>

    <div class="area">
      <ul class="circles">
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
      </ul>
    </div>

    <a href="#AllClasses" id="AllClasses"
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
  // background-image: url("../../assets/_4cbf7f3d-57d3-4566-965a-add6ac9c088f.jpg");
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
  .container {
    width: 90%;
    display: flex;
    align-items: flex-start;
    flex-wrap: wrap;
    justify-content: space-between;
    gap: 10px;
    flex-direction: column;
    & > div {
      width: 100%;
      &:last-child {
        display: flex;
        align-items: center;
        justify-content: flex-start;
        margin-top: 20px;
        a {
          display: flex;
          align-items: center;
          gap: 10px;
          background: #fff;
          color: var(--main-color) !important;
          font-weight: bold;
          font-size: 20px;
          border-radius: 5px;
          padding: 7px 10px;
          justify-content: center;
          width: 100%;
        }
      }
    }
  }
  a#AllClasses {
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

.context {
  width: 100%;
  position: absolute;
  top: 50%;
  transform: translate(0, -50%);
  z-index: 10;
}

.context h2 {
  text-align: center;
  color: #fff;
  font-size: 40px;
  color: #fff;
  font-weight: bold;
}
.context p {
  font-size: 18px;
  margin-top: 20px;
  font-weight: bold;
}

.area {
  background: -webkit-linear-gradient(to left, #8f94fb, #4e54c8);
  background: var(--main-color);
  width: 100%;
  height: 100vh;
}

.circles {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
}

.circles li {
  position: absolute;
  display: block;
  list-style: none;
  width: 20px;
  height: 20px;
  background: rgba(255, 255, 255, 0.2);
  animation: animate 25s linear infinite;
  bottom: -150px;
}

.circles li:nth-child(1) {
  left: 25%;
  width: 80px;
  height: 80px;
  animation-delay: 0s;
}

.circles li:nth-child(2) {
  left: 10%;
  width: 20px;
  height: 20px;
  animation-delay: 2s;
  animation-duration: 12s;
}

.circles li:nth-child(3) {
  left: 70%;
  width: 20px;
  height: 20px;
  animation-delay: 4s;
}

.circles li:nth-child(4) {
  left: 40%;
  width: 60px;
  height: 60px;
  animation-delay: 0s;
  animation-duration: 18s;
}

.circles li:nth-child(5) {
  left: 65%;
  width: 20px;
  height: 20px;
  animation-delay: 0s;
}

.circles li:nth-child(6) {
  left: 75%;
  width: 110px;
  height: 110px;
  animation-delay: 3s;
}

.circles li:nth-child(7) {
  left: 35%;
  width: 150px;
  height: 150px;
  animation-delay: 7s;
}

.circles li:nth-child(8) {
  left: 50%;
  width: 25px;
  height: 25px;
  animation-delay: 15s;
  animation-duration: 45s;
}

.circles li:nth-child(9) {
  left: 20%;
  width: 15px;
  height: 15px;
  animation-delay: 2s;
  animation-duration: 35s;
}

.circles li:nth-child(10) {
  left: 85%;
  width: 150px;
  height: 150px;
  animation-delay: 0s;
  animation-duration: 11s;
}

@keyframes animate {
  0% {
    transform: translateY(0) rotate(0deg);
    opacity: 1;
    border-radius: 0;
  }

  100% {
    transform: translateY(-1000px) rotate(720deg);
    opacity: 0;
    border-radius: 50%;
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
    .context h2 {
      font-size: 20px;
    }
    .context p {
      font-size: 15px;
      text-align: center;
    }
    .container > div:last-child {
      justify-content: center;
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
