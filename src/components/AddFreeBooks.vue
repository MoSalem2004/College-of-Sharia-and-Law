<template>
  <div>
    <div class="main_popup" @click="AddFreeBooksFunction"></div>
    <div class="book_box">
      <div class="header">
        <span>
          تبرع لطلاب
          {{ this.Class }}
        </span>
        <font-awesome-icon
          :icon="['fas', 'window-close']"
          @click="AddFreeBooksFunction"
        />
      </div>
      <div class="MSG">
        <div>
          تذكر : قول رسول الله صلى الله عليه وسلم: “وَاللَّهُ في عَوْنِ العَبْدِ
          ما كانَ العَبْدُ في عَوْنِ أَخِيهِ” رواه مسلم.
        </div>
        <div>
          وتذكر أيضا : قال الرسول صلى الله عليه وسلم: "إذا مات ابن آدم انقطع
          عمله إلا من ثلاث: صدقة جارية، أو علم ينتفع به، أو ولد صالح يدعو له"
          رواه مسلم.
        </div>
      </div>
      <div class="body">
        <div class="input-group mb-3">
          <div class="form-floating">
            <input
              type="text"
              class="form-control"
              id="Name"
              placeholder="الإسم ثنائي"
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
              type="number"
              class="form-control"
              id="number"
              placeholder="الإسم ثنائي"
              required
            />

            <label for="number"
              ><font-awesome-icon :icon="['fas', 'phone']" /> رقم تلفونك
            </label>
          </div>
        </div>
      </div>
      <div class="error" v-show="error">{{ errormsg }}</div>
      <div class="toast show" v-if="Show_msg">
        <span class="toast-body">
          <font-awesome-icon :icon="['fas', 'check-circle']" />
          <span>
            {{ msg }}
          </span>
        </span>
      </div>
      <div class="footer">
        <button @click="SendData">
          <font-awesome-icon :icon="['fas', 'paper-plane']" />
          <span>إرسال</span>
        </button>
      </div>
    </div>
  </div>
  <!-- <div
    class="toast show"
    role="alert"
    aria-live="assertive"
    aria-atomic="true"
    v-if="Show_msg"
  >
    <div class="toast-header">
      <strong class="me-auto">مشرف الموقع</strong>
      <small class="text-body-secondary">الآن</small>
      <button
        type="button"
        class="btn-close"
        data-bs-dismiss="toast"
        aria-label="Close"
      ></button>
    </div>
    <div class="toast-body msg">
      <font-awesome-icon :icon="['fas', 'check-circle']" />
      <span>
        {{ msg }}
      </span>
    </div>
  </div> -->
</template>
<script>
import {
  // collection,
  // addDoc,
  getFirestore,
  // serverTimestamp,
  setDoc,
  getDoc,
  updateDoc,
  arrayUnion,
  doc,
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
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
export default {
  name: "AddFreeBooks",
  emits: ["close_AddFreeBooks"],
  props: ["Class"],
  data() {
    return {
      Show_msg: null,
      msg: "تم إرسال بيناتك للمشرف , وعند الموافقة عليها سوف يتم عرضها ",
      error: null,
      errormsg: "أدخل بيناتك صحيحة",
    };
  },
  methods: {
    async SendData() {
      let TheClass = this.Class;
      if (
        document.getElementById("Name").value !== "" &&
        document.getElementById("number").value !== "" &&
        document.getElementById("number").value.length === 11
      ) {
        document.querySelector(".footer button").classList.add("none");
        const bookRef = doc(db, "طلبات كتب مجانية", TheClass);
        const docSnap = await getDoc(bookRef);

        let Object = {
          name: document.getElementById("Name").value,
          Phone: document.getElementById("number").value,
          Time: new Date(),
          approval: false,
        };

        if (docSnap.data()?.books) {
          const previousBooks = docSnap.data()?.books;
          await updateDoc(bookRef, {
            books: arrayUnion(Object, ...previousBooks),
          });
        } else {
          await setDoc(bookRef, {
            books: [Object],
          });
        }

        this.Show_msg = true;
        setTimeout(() => {
          this.Show_msg = false;
          document.querySelector(".footer button").classList.remove("none");
          this.AddFreeBooksFunction();
        }, 5000);
        this.error = false;
      } else {
        this.error = true;
      }
    },
    AddFreeBooksFunction() {
      this.$emit("close_AddFreeBooks");
    },
  },
};
</script>
<style lang="scss" scoped>
.book_box {
  position: fixed;
  width: 100%;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 14;
  display: flex;
  flex-direction: column;
  gap: 10px;
  background: #fff;
  padding: 20px;
  border-radius: 5px;
  .header {
    width: 100%;
    justify-content: space-between;
    display: flex;
    align-items: center;
    font-size: 25px;
    color: var(--main-color);
  }
  .footer {
    margin-right: auto;
    button {
      border-radius: 5px;
      border: none;
      padding: 10px;
      display: flex;
      align-items: center;
      gap: 7px;
      background: #eee;
      color: var(--main-color);
      font-weight: bold;
    }
  }
}
.msg {
  display: flex;
  align-items: center;
  gap: 10px;
  background: #fff;
  padding: 10px;
  border-radius: 5px;
  justify-content: flex-start;
  color: var(--main-color);
  font-weight: bold;

  svg {
    font-size: 20px;
  }
}
.toast {
  width: 100%;
  padding: 10px;
  margin: 10px 0;
}
.me-auto {
  margin: 0 10px 0 auto !important;
  color: var(--main-color);
  color: #35b635;
  font-size: 17px;
  font-weight: bold;
}
.toast-header .btn-close {
  margin-left: calc(-0.5 * var(--bs-toast-padding-x));
  margin-right: var(--bs-toast-padding-x);
}
.toast-body {
  color: #35b635;
  display: flex;
  gap: 10px;
  align-items: center;
  padding: 0;
}
.MSG {
  background: #eee;
  padding: 10px;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  font-weight: bold;
  margin: 5px 0;
}
.error {
  color: red;
  text-align: center;
}
@media (max-width: 500px) {
  .header {
    span {
      font-size: 20px;
    }
  }
}
</style>
