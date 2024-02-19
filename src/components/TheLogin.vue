<template>
  <div class="Login">
    <div class="main_popup" @click="closeModal"></div>
    <div class="container Container_Form">
      <header class="login">
        <h3>تسجيل دخول للمشرفين فقط</h3>
        <font-awesome-icon
          :icon="['fas', 'window-close']"
          @click="closeModal"
        />
      </header>

      <form @submit="login">
        <div class="input-group mb-3">
          <div class="form-floating">
            <input
              type="email"
              class="form-control"
              id="Email"
              placeholder="الإيميل"
              v-model="email"
              required
            />

            <label for="Email"
              ><font-awesome-icon :icon="['fas', 'at']" /> الإيميل</label
            >
          </div>
        </div>
        <div class="input-group mb-3">
          <div class="form-floating">
            <input
              :type="showPassword ? 'text' : 'password'"
              class="form-control"
              id="Password"
              placeholder="الباسوورد"
              v-model="password"
              required
            />
            <label for="Password"
              ><font-awesome-icon :icon="['fas', 'lock']" /> الباسوورد
            </label>
            <div class="Show_Password" @click="showPassword = !showPassword">
              <font-awesome-icon
                :icon="showPassword ? ['fas', 'eye-slash'] : ['fas', 'eye']"
              />
            </div>
          </div>
        </div>
        <p class="error">{{ loginError }}</p>
        <button type="submit">تسجيل دخول</button>
      </form>
    </div>
  </div>
</template>

<script>
import {
  collection,
  query,
  where,
  getDocs,
  getFirestore,
} from "firebase/firestore";
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyA_D5gSKBvIVK75S-f8yNiwMXADq0dGN5A",
  authDomain: "college-sharia-and-law.firebaseapp.com",
  projectId: "college-sharia-and-law",
  storageBucket: "college-sharia-and-law.appspot.com",
  messagingSenderId: "617057601264",
  appId: "1:617057601264:web:f3ef5f44ac0d39a523e435",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
import bcrypt from "bcryptjs";
export default {
  name: "TheLogin",
  data() {
    return {
      email: "",
      password: "",
      loginError: "",
      username: "",
      useremail: "",
      showPassword: false,
    };
  },
  created() {
    this.username = localStorage.getItem("username");
    this.useremail = localStorage.getItem("useremail");
  },
  methods: {
    closeModal() {
      this.$emit("close_modal");
    },
    async login() {
      event.preventDefault();
      console.log("login");
      try {
        const q = query(
          collection(db, "المشرفين"),
          where("email", "==", this.email)
        );
        const querySnapshot = await getDocs(q);
        querySnapshot.forEach((doc) => {
          const admin = doc.data();
          const isPasswordCorrect = bcrypt.compareSync(
            this.password,
            admin.password
          );

          if (isPasswordCorrect) {
            if (querySnapshot.docs.length > 0) {
              const user = querySnapshot.docs[0].data();
              this.username = user.name;
              this.useremail = user.email;

              localStorage.setItem("username", user.name);
              localStorage.setItem("useremail", user.email);
              localStorage.setItem("userid", querySnapshot.docs[0].id);
              localStorage.setItem("userclass", user.class);
              this.loginError = "";
              this.email = "";
              this.password = "";
              this.$emit("close_modal");
            }
          } else {
            this.loginError = "بيانات تسجيل الدخول غير صحيحة !";
          }
        });
      } catch (error) {
        this.loginError = "حدث خطأ أثناء تسجيل الدخول!";
      }
    },
  },
};
</script>

<style lang="scss">
.Container_Form {
  background-color: #fff;
  padding: 20px;
  border-radius: 5px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  z-index: 4;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 70%;
  height: auto !important;
  header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 20px;
    h3 {
      text-align: center;
      margin: 0;
    }
    svg {
      color: var(--main-color);
      cursor: pointer;
      font-size: 25px;
    }
  }

  form {
    display: flex;
    flex-direction: column;
  }

  input {
    margin-bottom: 10px;
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 4px;
  }

  button {
    padding: 10px;
    background-color: var(--main-color);
    color: #fff;
    border: none;
    border-radius: 4px;
    cursor: pointer;
  }

  button:hover {
    background-color: var(--main-color);
  }

  .error {
    color: red;
    text-align: center;
    margin-top: 10px;
  }
}
</style>
