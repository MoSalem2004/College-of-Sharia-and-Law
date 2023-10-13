<template>
  <div class="main_popup" @click="closeModal"></div>
  <div class="Container_Form container">
    <header class="login">
      <h1>إضافة المشرفين</h1>
      <font-awesome-icon :icon="['fas', 'window-close']" @click="closeModal" />
    </header>
    <form @submit="signUp">
      <div class="input-group mb-3">
        <div class="form-floating">
          <input
            type="text"
            class="form-control"
            id="First_Name"
            placeholder="الإسم ثنائي"
            v-model="name"
            required
          />

          <label for="First_Name"
            ><font-awesome-icon :icon="['fas', 'user-edit']" /> الإسم
            ثنائي</label
          >
        </div>
      </div>

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
            ><font-awesome-icon :icon="['fas', 'lock']" /> الباسوورد</label
          >
          <div class="Show_Password" @click="showPassword = !showPassword">
            <font-awesome-icon
              :icon="showPassword ? ['fas', 'eye-slash'] : ['fas', 'eye']"
            />
          </div>
        </div>
      </div>
      <div class="form-floating long">
        <select
          class="form-select"
          id="floatingSelect"
          aria-label="Floating label select example"
          @change="handleSelectChange($event)"
        >
          <option
            v-for="(option, index) in options"
            :key="index"
            :value="option"
            @click="classActiveOption"
          >
            {{ option }}
          </option>
        </select>
        <label for="floatingSelect">أختر الفرقة</label>
      </div>
      <p v-if="signUpError" class="error">{{ signUpError }}</p>
      <button type="submit">إضافة</button>
    </form>
  </div>
</template>

<script>
import { collection, addDoc, getFirestore } from "firebase/firestore";
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
export default {
  name: "TheSignUp",
  emits: {
    close_modal_3: null,
  },
  data() {
    return {
      name: "",
      email: "",
      password: this.generateRandomString(),
      signUpError: "",
      selectedValue: "",

      showPassword: false,
      options: [
        "",
        "الفرقة الأولي",
        "الفرقة الثانية",
        "الفرقة الثالثة",
        "الفرقة الرابعة",
        "الكل",
      ],
    };
  },
  methods: {
    generateRandomString() {
      const characters =
        "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
      let result = "";

      for (let i = 0; i < 6; i++) {
        const randomIndex = Math.floor(Math.random() * characters.length);
        result += characters.charAt(randomIndex);
      }

      return result;
    },
    closeModal() {
      this.$emit("close_modal_3");
    },
    handleSelectChange(event) {
      this.selectedValue = event.target.value;
    },
    async signUp(event) {
      event.preventDefault();

      await addDoc(collection(db, "Admins"), {
        name: this.name,
        email: this.email,
        password: this.password,
        class: this.selectedValue,
      });
      this.$emit("close_modal_3");
    },
  },
};
</script>

<style lang="scss" scoped>
.container {
  background-color: #fff;
  padding: 20px;
  border-radius: 5px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);

  h1 {
    text-align: center;
    margin-bottom: 20px;
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

  .error {
    color: red;
    text-align: center;
    margin-top: 10px;
  }
  button {
    margin-top: 20px;
  }
}
</style>
