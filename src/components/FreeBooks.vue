<template>
  <div class="main_popup" @click="closeModal"></div>
  <div class="container fit In popup">
    <AddFreeBooks
      v-if="ShowAddFreeBooks"
      @close_AddFreeBooks="close_AddFreeBooks"
      :Class="this.Class"
    />
    <LodingIcon v-if="showLoading" />
    <header>
      <nav>كتب مجانية {{ Class }}</nav>
      <div>
        <span @click="close_AddFreeBooks">
          <span>تبرع بكتبك</span>
          <font-awesome-icon :icon="['fas', 'hand-holding-usd']" />
        </span>
        <font-awesome-icon
          :icon="['fas', 'window-close']"
          @click="closeModal"
        />
      </div>
    </header>
    <div class="msg"></div>
    <div class="counter">
      ( <span>{{ counter }}</span> ) متبرعين
    </div>
    <div class="Content">
      <div
        class="box"
        v-for="(ReportsArray, index) in Data[0]"
        :key="ReportsArray"
        v-show="ReportsArray.approval"
        :class="ReportsArray.approval ? '' : 'hidden'"
      >
        <div class="header">
          <span class="count">{{ index + 1 }} </span>
          <span>
            {{ ReportsArray.name }}
          </span>
        </div>
        <div class="body">
          <div class="number">{{ ReportsArray.Phone }}</div>
          <div class="btn" @click="copyTextDad($event)">
            <font-awesome-icon
              :icon="['fas', 'copy']"
              @click="copyTextSvg($event)"
            />
            <span @click="copyText($event)">نسخ الرقم</span>
          </div>
        </div>
        <div class="bottom">
          <div class="time">
            {{
              new Date(ReportsArray.Time.toMillis()).toLocaleString(["ar"], {
                weekday: "short",
                year: "numeric",
                month: "short",
                day: "numeric",
                hour: "2-digit",
                minute: "2-digit",
              })
            }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import {
  collection,
  // addDoc,
  getFirestore,
  // serverTimestamp,
  getDocs,
  // doc,
  // deleteDoc,
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
import LodingIcon from "../components/LodingIcon.vue";
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

import AddFreeBooks from "./AddFreeBooks.vue";
export default {
  name: "FreeBooks",
  emits: ["close_modal_2", "close_AddFreeBooks"],
  props: ["Class"],
  components: {
    AddFreeBooks,
    LodingIcon,
  },
  computed: {
    filteredData() {
      return this.Data[0].filter((item) => item.approval);
    },
  },
  data() {
    return {
      Admin_State: null,
      Data: [],
      Ids: [],
      counter: "",
      showLoading: "",
      ShowAddFreeBooks: null,
    };
  },
  mounted() {
    this.test();
    this.GetData();
    setTimeout(() => {
      this.Counter();
    }, 1000);
  },

  methods: {
    Counter() {
      document.querySelector(".container.fit.In .counter span").innerHTML =
        document.querySelectorAll(
          ` .container.fit.In.popup .Content .box:not(.hidden)`
        ).length;
    },
    copyTextSvg(event) {
      event.stopPropagation();
      event.target.parentElement.parentElement.classList.add("green");
      setTimeout(() => {
        event.target.parentElement.parentElement.classList.remove("green");
      }, 5000);

      navigator.clipboard.writeText(
        event.target.parentElement.parentElement.children[0].innerHTML
      );
    },
    copyText(event) {
      event.stopPropagation();
      event.target.parentElement.classList.add("green");
      setTimeout(() => {
        event.target.parentElement.classList.remove("green");
      }, 5000);
      navigator.clipboard.writeText(
        event.target.parentElement.parentElement.children[0].innerHTML
      );
    },
    copyTextDad(event) {
      event.stopPropagation();
      event.target.classList.add("green");
      setTimeout(() => {
        event.target.classList.remove("green");
      }, 5000);
      console.log(event.target.parentElement.children[0]);
      navigator.clipboard.writeText(
        event.target.parentElement.children[0].innerHTML
      );
    },
    close_AddFreeBooks() {
      this.ShowAddFreeBooks = !this.ShowAddFreeBooks;
    },
    closeModal() {
      this.$emit("close_modal_2");
    },

    async GetData() {
      let TheClass = this.Class;
      const querySnapshot = await getDocs(collection(db, "طلبات كتب مجانية"));

      querySnapshot.forEach((doc) => {
        if (doc.id === TheClass) {
          this.Data.push(doc.data().books);
          if (this.Data[0].Time) {
            this.Data[0]?.sort((a, b) => b.Time.toMillis() - a.Time.toMillis());
            console.log(doc.data().books);
            console.log(this.Data);
          }
        }
      });
    },

    test() {
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
.container.fit.In.popup header div > svg {
  font-size: 35.5px;
}
.container.fit.In.popup header div {
  & > span {
    cursor: pointer;
    background: #eee;
    padding: 5px 10px;
    border-radius: 5px;
    display: flex;
    align-items: center;
    gap: 10px;
    font-size: 17px;
    color: var(--main-color);
    font-weight: bold;
    > svg {
      font-size: 17px;
    }
  }
}
nav {
  color: var(--main-color);
  font-size: 23px;
  font-weight: bold;
}
.box {
  .header {
    display: flex;
    gap: 10px;
    .count {
      width: 30px;
      height: 30px;
      display: flex;
      align-items: center;
      justify-content: center;
      background: var(--main-color);
      color: #fff;
      border-radius: 5px;
    }
  }
  .body {
    display: flex;
    align-items: center;
    background: #eee;
    padding: 5px 10px;
    border-radius: 5px;
    justify-content: space-between;
    .btn {
      background: #fff;
      display: flex;
      align-items: center;
      gap: 10px;
      color: var(--main-color);
      padding: 5px 10px;
      span {
        font-size: 14px !important;
      }
    }
  }
  .bottom {
    margin-right: auto;
  }
}
.green {
  color: #3fbb3f !important;
}
</style>
