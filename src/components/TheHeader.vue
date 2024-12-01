<template>
  <div class="Header">
    <div class="container fit">
      <router-link class="logo" to="/">
        <img src="../../assets/main-logo.webp" alt="logo" />
        <div class="students">طلاب كلية الشريعة و القانون</div>
      </router-link>
      <!-- <div class="buttons">
        <a href="/#AllClasses">الفرق الدراسية</a>
        <a href="/#Conect">تابعنا</a>
      </div> -->
      <div class="Sign_In">
        <div v-if="username" style="position: relative">
          <div class="User_Logo" @click="State">{{ firstLetters }}</div>
          <div class="user" v-if="state">
            <div>أهلا {{ username }}</div>
            <div class="email">{{ useremail }}</div>
            <div class="add" @click="close_modal_2">تغيير الباسوورد</div>
            <div class="add" v-if="Mosalem_Admin" @click="close_modal_3">
              إضافة المشرفين
            </div>
            <div class="add" v-if="Mosalem_Admin" @click="close_modal_4">
              إدارة المشرفين
            </div>
            <div class="add" v-if="Mosalem_Admin" @click="close_modal_5">
              طلبات التبرع
            </div>
            <button @click="logout">تسجيل خروج</button>
          </div>
          <div
            class="main_popup"
            v-if="state"
            @click="State"
            style="background: transparent"
          ></div>
        </div>
        <div class="sign" v-else @click="close_modal">
          <font-awesome-icon :icon="['fas', 'sign-in-alt']" />
          <div class="Sing_Text">تسجيل دخول</div>
        </div>
      </div>
    </div>
  </div>
  <TheLogin v-if="modalActive" @close_modal="close_modal" />
  <ChangePassword v-if="modalActive_2" @close_modal_2="close_modal_2" />
  <TheSignUp v-if="modalActive_3" @close_modal_3="close_modal_3" />
  <AdminManagement v-if="modalActive_4" @close_modal_4="close_modal_4" />
  <BookRequests v-if="modalActive_5" @close_modal_5="close_modal_5" />
</template>

<script>
import TheLogin from "./TheLogin.vue";
import ChangePassword from "./ChangePassword.vue";
import TheSignUp from "./TheSignUp.vue";
import AdminManagement from "./AdminManagement.vue";
import BookRequests from "./BookRequests.vue";
export default {
  name: "TheHeader",
  components: {
    TheLogin,
    ChangePassword,
    TheSignUp,
    AdminManagement,
    BookRequests,
  },
  mounted() {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 1) {
        document.querySelector(".Header").style.cssText =
          "background:#fff ; box-shadow: 0 0 10px #ddd;";
        document.querySelector(
          ".Header .container .sign"
        ).style.cssText = `color:var(--main-color);border-color:var(--main-color)`;
        document.querySelector(
          ".Header .container .logo div"
        ).style.cssText = `color:var(--main-color);`;
      } else {
        document.querySelector(".Header").style.cssText = `
    background-size: cover;
    background-position: center top;
    background-attachment: fixed;
    background-color: transparent !important;
     box-shadow: none;
     `;
        document.querySelector(
          ".Header .container .sign"
        ).style.cssText = `color:#fff;border-color:#fff`;
        document.querySelector(
          ".Header .container .logo div"
        ).style.cssText = `color:#fff;`;
      }
    });
  },
  data() {
    return {
      user: null,
      modalActive: null,
      modalActive_2: null,
      modalActive_3: null,
      modalActive_4: null,
      modalActive_5: null,
      username: "",
      useremail: "",
      userclass: "",
      UserState: null,
      firstLetters: "",
      state: null,
      Mosalem_Admin: null,
    };
  },
  created() {
    this.userstate();
  },
  methods: {
    State() {
      this.state = !this.state;
    },
    userstate() {
      this.UserState = true;
      this.username = localStorage.getItem("username");
      this.useremail = localStorage.getItem("useremail");
      this.userclass = localStorage.getItem("userclass");

      this.userclass === "الكل"
        ? (this.Mosalem_Admin = true)
        : (this.Mosalem_Admin = false);
      if (this.username) {
        this.firstLetters = this.username
          .split(" ")
          .map(function (name) {
            return name.charAt(0);
          })
          .join(" ");
      }
    },
    close_modal_5() {
      this.modalActive_5 = !this.modalActive_5;
      this.state = false;
    },
    close_modal_4() {
      this.modalActive_4 = !this.modalActive_4;
      this.state = false;
    },
    close_modal_3() {
      this.modalActive_3 = !this.modalActive_3;
      this.state = false;
    },
    close_modal_2() {
      this.modalActive_2 = !this.modalActive_2;
      this.state = false;
    },
    close_modal() {
      this.modalActive = !this.modalActive;
      this.userstate();
    },
    logout() {
      localStorage.removeItem("username");
      localStorage.removeItem("useremail");
      localStorage.removeItem("userid");
      localStorage.removeItem("userclass");
      this.UserState = false;
      this.state = !this.state;
      this.userstate();
      if (localStorage.getItem("userclass") === "الكل") {
        this.Admin_State = true;
      } else {
        this.Admin_State = false;
      }
    },
  },
};
</script>
<style lang="scss" scoped>
.Header {
  background-size: cover;
  background-position: center top;
  background-attachment: fixed;
  background-color: transparent;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 11;
  transition: 0.3s;
  .container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    .logo {
      display: flex;
      align-items: center;
      gap: 10px;
      div {
        color: #fff;
        font-weight: bold;
        font-family: system-ui;
      }
      img {
        width: 75px;
      }
    }
    .buttons {
      display: flex;
      gap: 10px;
      a {
        width: 135px;
        // padding: 0 10px;
        display: flex;
        align-items: center;
        justify-content: center;
        height: 75px;
        position: relative;
        transition: 0.3s;
        border-radius: 5px;
        &::before {
          content: "";
          transition: 0.3s;
          position: absolute;
          top: 0;
          left: 0%;
          height: 5px;
          width: 0;
          background: var(--main-color);
        }
        &:hover {
          background: #eee;
        }
        &:hover::before {
          width: 100%;
        }
      }
    }
    .User_Logo {
      background: var(--main-color);
      color: #fff;
      width: 45px;
      height: 45px;
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;
    }
    .user {
      position: absolute;
      right: -150px;
      background: #fff;
      width: 200px;
      top: 55px;
      padding: 10px;
      z-index: 140;
      border: 1px solid #ddd;
      border-radius: 5px;
      display: flex;
      flex-direction: column;
      gap: 10px;
      > div {
        border-bottom: 1px solid #ddd;
        padding-bottom: 5px;
        &.email {
          color: rgb(131, 129, 129);
          text-align: left;
          font-size: 11px;
          font-weight: bold;
        }
      }
      button {
        background: red;
        border: none;
        color: #fff;
        margin-right: auto;
        border-radius: 5px;
        font-size: 14px;
        padding: 5px 10px;
      }
    }
    .sign {
      // width: 150px;
      border: 1px solid #fff;
      padding: 10px;
      color: #fff;
      cursor: pointer;
      border-radius: 5px;
      transition: 0.3s;
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 10px;
      &:hover {
        border: 1px solid #fff;
        color: #fff;
        background: var(--main-color);
      }
      // }
    }
    .add {
      text-align: center;
      background: var(--main-color);
      color: #fff;
      cursor: pointer;
      padding: 5px;
      border-radius: 5px;
    }
  }
}
.Sign_In {
  // width: 150px;
}
@media (max-width: 500px) {
  .Header .container {
    // flex-direction: column;
    gap: 10px;
    .logo {
      justify-content: flex-start;
      width: 100%;
      // padding-bottom: 10px;
      // border-bottom: 1px solid #ddd;
    }
    .buttons {
      width: 100%;
      justify-content: space-between;
      height: 0;
      display: none;
      > a {
        width: 48%;
        background: #fafafa;
        height: 0;
      }
    }
    .sign,
    .Sign_In {
      margin-right: auto;
      // margin: 15px auto 0 0;
      span {
        display: none;
      }
      & > .Sing_Text {
        display: none;
      }
    }
    .students {
      display: none;
    }
  }
  .Header .container .logo div {
    font-size: 14px;
  }
}

@media (min-width: 500px) and (max-width: 900px) {
  .Header .container {
    // flex-direction: column;
    .logo {
      justify-content: flex-start;
      width: 100%;
    }
    .buttons {
      width: 100%;
      justify-content: space-between;
      > a {
        width: 48%;
        background: #fafafa;
      }
    }
    .sign,
    .Sign_In {
      margin-right: auto;
      // margin: 15px auto 0 0;
      .Sing_Text {
        display: none;
      }
    }
  }
}
@media (max-width: 500px) {
}
@media (min-width: 500px) and (max-width: 993px) {
}

@media (min-width: 993px) {
}
</style>
