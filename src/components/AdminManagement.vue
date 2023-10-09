<template>
  <div class="main_popup" @click="closeModal"></div>
  <div class="Container_Form container">
    <header class="login">
      <h1>إدارة الأدمين</h1>
      <font-awesome-icon :icon="['fas', 'window-close']" @click="closeModal" />
    </header>
    <div class="content">
      <div class="box" v-for="smalldata in data" :key="smalldata">
        <div>
          <div class="name">{{ smalldata.name }}</div>
          <div class="email">{{ smalldata.email }}</div>
          <div class="class">{{ smalldata.class }}</div>
        </div>
        <font-awesome-icon :icon="['fas', 'trash-alt']" />
      </div>
    </div>
  </div>
</template>
<script>
import {
  collection,
  getFirestore,
  getDocs,
  doc,
  deleteDoc,
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

export default {
  name: "AdminManagement",
  emits: {
    close_modal_4: null,
  },
  mounted() {
    this.GetData();
    setTimeout(() => {
      setTimeout(() => {
        this.MoSalem();
      }, 200);
      this.DeleteData();
    }, 1000);
  },
  data() {
    return {
      Ids: [],
      data: [],
    };
  },
  methods: {
    closeModal() {
      this.$emit("close_modal_4");
    },
    MoSalem() {
      document.querySelectorAll(".content .box .email").forEach((e) => {
        if (e.innerHTML === "mas2022mas2004@gmail.com") {
          e.parentElement.parentElement.children[1].classList.add("hidden");
          e.parentElement.parentElement.classList.add("none");
        }
      });
    },
    DeleteData() {
      let Btn = document.querySelectorAll(".content .box > svg");
      for (let i = 0; i < this.data.length; i++) {
        Btn[i].onclick = async () => {
          Btn[i].parentElement.remove();
          await deleteDoc(doc(db, "Admins", this.Ids[i]));
        };
      }
    },
    async GetData() {
      const querySnapshot = await getDocs(collection(db, "Admins"));
      querySnapshot.forEach((doc) => {
        // doc.data() is never undefined for query doc snapshots
        this.data.push(doc.data());
        this.Ids.push(doc.id);
      });
    },
  },
};
</script>
<style lang="scss" scoped>
.Container_Form {
  width: 90%;
}
.content {
  display: flex;
  gap: 10px;
  flex-direction: column;
  .box {
    width: 100%;
    border: 1px solid #ddd;
    border-radius: 5px;
    display: flex;
    padding: 10px;
    align-items: center;
    justify-content: space-between;
    .name {
      font-size: 20px;
      font-weight: bold;
    }
    .email {
      font-size: 14px;
      font-weight: bold;
      color: #6e6e6e;
    }
    svg {
      color: red;
    }
  }
}
</style>
