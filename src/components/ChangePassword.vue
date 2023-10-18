<template>
  <div class="main_popup" @click="closeModal"></div>
  <div class="Container_Form container">
    <div class="ChangePassword">
      <header>
        <h3>تغيير الباسوورد</h3>
        <font-awesome-icon
          :icon="['fas', 'window-close']"
          @click="closeModal"
        />
      </header>
      <form @submit="UpdateData">
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
              ><font-awesome-icon :icon="['fas', 'lock']" /> الباسوورد الجديدة
            </label>
            <div class="Show_Password" @click="showPassword = !showPassword">
              <font-awesome-icon
                :icon="showPassword ? ['fas', 'eye-slash'] : ['fas', 'eye']"
              />
            </div>
          </div>
        </div>
        <button type="submit">تغيير الباسوورد</button>
      </form>
    </div>
  </div>
</template>
<script>
import { doc, updateDoc, getFirestore } from "firebase/firestore";
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
  name: "ChangePassword",
  emits: ["close_modal_2"],
  data() {
    return {
      password: "",
      showPassword: false,
    };
  },
  methods: {
    closeModal() {
      this.$emit("close_modal_2");
    },
    async UpdateData(event) {
      event.preventDefault();
      const washingtonRef = doc(db, "Admins", localStorage.getItem("userid"));
      const salt = bcrypt.genSaltSync(10); // توليد الملح (salt)
      const hashedPassword = bcrypt.hashSync(this.password, salt); // تجزئة كلمة المرور
      this.password = hashedPassword;
      await updateDoc(washingtonRef, {
        password: this.password,
      });
      this.$emit("close_modal_2");
    },
  },
};
</script>
