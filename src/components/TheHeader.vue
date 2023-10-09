<template>
  <div class="Header">
    <div class="container fit">
      <a class="logo" href="/">
        <img src="../assets/main-logo.png" alt="" />
        <div>كلية الشريعة و القانون بالقاهرة</div>
      </a>
      <div class="buttons">
        <a href="/#AllClasses">الفرق الدراسية</a>
        <a href="/#Conect">تابعنا</a>
      </div>
      <div class="Sign_In">
        <div v-if="username" style="position: relative">
          <div class="User_Logo" @click="State">{{ firstLetters }}</div>
          <div class="user" v-if="state">
            <div>أهلا {{ username }}</div>
            <div class="email">{{ useremail }}</div>
            <div class="add" @click="close_modal_2">تغيير الباسوورد</div>
            <div class="add" v-show="Mosalem_Admin" @click="close_modal_3">
              إضافة أدمين
            </div>
            <div class="add" v-show="Mosalem_Admin" @click="close_modal_4">
              إدارة الأدمين
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
          <span> تسجيل دخول </span>
        </div>
      </div>
    </div>
  </div>
  <TheLogin v-if="modalActive" @close_modal="close_modal" />
  <ChangePassword v-if="modalActive_2" @close_modal_2="close_modal_2" />
  <TheSignUp v-if="modalActive_3" @close_modal_3="close_modal_3" />
  <AdminManagement v-if="modalActive_4" @close_modal_4="close_modal_4" />
</template>

<script>
import TheLogin from "./TheLogin.vue";
import ChangePassword from "./ChangePassword.vue";
import TheSignUp from "./TheSignUp.vue";
import AdminManagement from "./AdminManagement.vue";
export default {
  name: "TheHeader",
  components: {
    TheLogin,
    ChangePassword,
    TheSignUp,
    AdminManagement,
  },
  data() {
    return {
      user: null,
      modalActive: null,
      modalActive_2: null,
      modalActive_3: null,
      modalActive_4: null,
      username: "",
      useremail: "",
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

      this.useremail === "mas2022mas2004@gmail.com"
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
      window.location.reload();
      if (
        localStorage.getItem("userclass") ===
          document.querySelector("h1 span").innerHTML ||
        localStorage.getItem("userclass") === "الكل"
      ) {
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
  border-bottom: 1px solid #ddd;
  padding-bottom: 10px;
  .container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    .logo {
      display: flex;
      align-items: center;
      gap: 10px;
      div {
        color: var(--main-color);
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
        padding: 0 10px;
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
      z-index: 4;
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
          font-size: 12px;
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
      // & > div {
      border: 1px solid var(--main-color);
      padding: 10px;
      color: var(--main-color);
      cursor: pointer;
      border-radius: 5px;
      transition: 0.3s;
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
@media (max-width: 600px) {
  .Header .container {
    flex-direction: column;
    gap: 10px;
    .logo {
      justify-content: start;
      width: 100%;
      padding-bottom: 10px;
      border-bottom: 1px solid #ddd;
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
      margin: 15px auto 0 0;
    }
  }
}

@media (min-width: 600px) and (max-width: 900px) {
  .Header .container {
    flex-direction: column;
    .logo {
      justify-content: space-around;
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
      margin: 15px auto 0 0;
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
