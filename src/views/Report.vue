<template>
  <div class="main_popup" @click="closeModal"></div>
  <div class="container fit In popup">
    <LodingIcon v-if="showLoading" />
    <header>
      <nav aria-label="breadcrumb">
        <ol class="breadcrumb" style="direction: ltr">
          <li class="breadcrumb-item active" aria-current="page">
            التقارير الأسبوعية
          </li>
          <li class="breadcrumb-item">{{ Class }}</li>
          <li class="breadcrumb-item">
            <router-link to="/"> الفرق الدراسية </router-link>
          </li>
        </ol>
      </nav>
      <div>
        <span v-show="Admin_State">
          <label for="upload_file"
            ><font-awesome-icon :icon="['fas', 'plus']"
          /></label>
          <input
            type="file"
            id="upload_file"
            style="display: none"
            @change="Add_Report"
          />
        </span>

        <font-awesome-icon
          :icon="['fas', 'window-close']"
          @click="closeModal"
        />
      </div>
    </header>
    <div class="src"></div>
    <div class="counter">
      ( <span>{{ counter }}</span> ) تقارير
    </div>
    <div class="Content">
      <div
        class="box"
        v-for="(ReportsArray, index) in ReportsArrays"
        :key="ReportsArray"
      >
        <font-awesome-icon :icon="['fas', 'trash-alt']" v-show="Admin_State" />
        <span
          >تقرير الأسبوع رقم <span>{{ index + 1 }}</span></span
        >
        <div class="bottom">
          <button><a :href="ReportsArray.report"> تنزيل </a></button>
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
  addDoc,
  getFirestore,
  serverTimestamp,
  getDocs,
  doc,
  deleteDoc,
} from "firebase/firestore";
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";
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
export default {
  name: "TheReport",
  props: ["Class"],
  components: {
    LodingIcon,
  },
  data() {
    return {
      Admin_State: null,
      ReportsArrays: [],
      Ids: [],
      counter: "",
      showLoading: "",
    };
  },
  mounted() {
    this.test();
    this.Getdata();
    setTimeout(() => {
      this.Remove_Report();
    }, 1000);
  },

  methods: {
    closeModal() {
      this.$emit("close_modal");
    },
    Remove_Report() {
      let TheClass = this.Class;
      let button = document.querySelectorAll(
        ".container.fit.In .Content .box svg"
      );
      for (let i = 0; i < button.length; i++) {
        button[i].onclick = async () => {
          await deleteDoc(
            doc(db, `تقارير ${TheClass}`, button[i].parentElement.classList[1])
          );
          button[i].parentElement.remove();
          this.counter = this.counter - 1;
        };
      }
    },
    async Getdata() {
      let TheClass = this.Class;
      const querySnapshot = await getDocs(collection(db, `تقارير ${TheClass}`));
      this.ReportsArrays = [];
      querySnapshot.forEach((doc) => {
        this.ReportsArrays.push(doc.data());
        this.Ids.push(doc.id);
        setTimeout(() => {
          let boxes = document.querySelectorAll(
            `.container.fit.In .Content .box`
          );
          for (let i = 0; i < boxes.length; i++) {
            boxes[i].classList.add(this.Ids[i]);
          }
        }, 10);
        setTimeout(() => {
          this.ReportsArrays.sort(
            (a, b) => b.Time.toMillis() - a.Time.toMillis()
          );
        }, 1000);
      });
      this.counter = this.ReportsArrays.length;
    },

    async Add_Report() {
      let TheClass = this.Class;
      let state;
      let file = document.querySelector("#upload_file").files[0];
      if (file instanceof Blob) {
        state = true;
        const filePath = file.name;
        const fileName = filePath.split("\\").pop();
        const reader = new FileReader();

        reader.onload = async function () {
          document.querySelector(".src").innerHTML =
            document.querySelector("#upload_file").value;

          const storage = getStorage(app);
          const storageRef = ref(storage, fileName);

          await uploadBytes(storageRef, file);
          const downloadURL = await getDownloadURL(storageRef);
          await addDoc(collection(db, `تقارير ${TheClass}`), {
            week: document.querySelectorAll(".Content > .box")?.length + 1,
            report: downloadURL,
            Time: serverTimestamp(),
          });
        };
        reader.readAsDataURL(file);
        this.showLoading = true;
        setTimeout(() => {
          this.showLoading = false;
        }, 5000);
      } else {
        state = false;
      }
      if (state) {
        setTimeout(() => {
          this.Getdata();
        }, 5000);
      }
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
<style lang="scss">
.src {
  background: #eee;
  margin-top: 10px;
  text-align: left;
}
.container.fit.In.popup {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 3;
  background: #fff;
  padding: 10px;
  border-radius: 5px;
  width: 90%;
  max-height: 90vh;
  min-height: 50vh;
  overflow: auto;
  header {
    display: flex;
    width: 100%;
    justify-content: space-between;
    padding-bottom: 10px;
    border-bottom: 1px solid #ddd;
    nav {
      background: #fff;
    }
    div {
      padding: 10px;
      display: flex;
      gap: 10px;
      margin-right: auto;
      align-items: center;
      svg {
        font-size: 25px;
        color: var(--main-color);
        cursor: pointer;
      }
    }
  }
  .Content {
    margin-bottom: 10px;
    display: flex;
    gap: 10px;
    flex-wrap: wrap;
    justify-content: center;
    .box {
      width: 48%;
      display: flex;
      justify-content: space-between;
      gap: 10px;
      border: 1px solid #ddd;
      padding: 10px;
      border-radius: 5px;
      flex-direction: column;
      position: relative;
      a {
        color: #fff !important;
      }
      svg {
        position: absolute;
        left: 12px;
        color: var(--main-color);
        cursor: pointer;
      }
      span {
        font-size: 20px;
        span {
          color: var(--main-color);
          font-weight: bold;
        }
      }
      .size {
        display: flex;
        gap: 10px;
      }
      .bottom {
        display: flex;
        gap: 10px;
        justify-content: space-between;
        button {
          border: none;
          padding: 5px 15px;
          background: var(--main-color);
          color: #fff;
          border-radius: 5px;
          font-size: 14px;
        }
        .time {
          display: flex;
          justify-content: center;
          align-items: center;
          color: #767575;
          font-weight: bold;
          font-size: 12px;
        }
      }
    }
  }
}
@media (max-width: 500px) {
  header:not(.login) {
    flex-direction: column-reverse;
    nav {
      padding: 10px !important;
      ol {
        font-size: 14px !important;
        justify-content: end;
      }
    }
  }
  .Content {
    .box {
      width: 100% !important;
    }
  }
}
@media (min-width: 500px) and (max-width: 600px) {
  header:not(.login) {
    flex-direction: column-reverse;
    nav {
      padding: 10px !important;
      ol {
        font-size: 15px !important;
        justify-content: end;
      }
    }
  }
  .Content {
    .box {
      min-width: 48%;
      width: fit-content !important;
    }
  }
}

@media (min-width: 600px) and (max-width: 993px) {
  .Content {
    .box {
      width: 48% !important;
    }
  }
}

@media (min-width: 993px) {
}
</style>
