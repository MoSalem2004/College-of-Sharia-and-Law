<template>
  <div class="main_popup" @click="closeModal"></div>
  <div class="Container_Form container">
    <header class="login">
      <h3>طلبات التبرع بالكتب</h3>
      <font-awesome-icon :icon="['fas', 'window-close']" @click="closeModal" />
    </header>
    <div class="content">
      <div class="title">
        الفرقة الأولي
        <span>( <span>0</span> ) متبرعين</span>
      </div>
      <div>
        <div
          class="box"
          v-for="smalldata in data_0[0]"
          :key="smalldata"
          :class="{ true: smalldata.approval }"
        >
          <div>
            <div class="name">
              {{ smalldata.name }}
            </div>
            <div class="email">{{ smalldata.Phone }}</div>
            <div class="class">
              {{
                new Date(smalldata.Time.toMillis()).toLocaleString(["ar"], {
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
          <span class="main_icon">
            <font-awesome-icon :icon="['fas', 'check']" />
            <font-awesome-icon :icon="['fas', 'trash-alt']" />
          </span>
        </div>
      </div>
    </div>
    <div class="content">
      <div class="title">
        الفرقة الثانية
        <span>( <span>0</span> ) متبرعين</span>
      </div>
      <div>
        <div
          class="box"
          v-for="smalldata in data_1[0]"
          :key="smalldata"
          :class="{ true: smalldata.approval }"
        >
          <div>
            <div class="name">
              {{ smalldata.name }}
            </div>
            <div class="email">{{ smalldata.Phone }}</div>
            <div class="class">
              {{
                new Date(smalldata.Time.toMillis()).toLocaleString(["ar"], {
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
          <span class="main_icon">
            <font-awesome-icon :icon="['fas', 'check']" />
            <font-awesome-icon :icon="['fas', 'trash-alt']" />
          </span>
        </div>
      </div>
    </div>

    <div class="content">
      <div class="title">
        الفرقة الثالثة
        <span>( <span>0</span> ) متبرعين</span>
      </div>
      <div>
        <div
          class="box"
          v-for="smalldata in data_2[0]"
          :key="smalldata"
          :class="{ true: smalldata.approval }"
        >
          <div>
            <div class="name">
              {{ smalldata.name }}
            </div>
            <div class="email">{{ smalldata.Phone }}</div>
            <div class="class">
              {{
                new Date(smalldata.Time.toMillis()).toLocaleString(["ar"], {
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
          <span class="main_icon">
            <font-awesome-icon :icon="['fas', 'check']" />
            <font-awesome-icon :icon="['fas', 'trash-alt']" />
          </span>
        </div>
      </div>
    </div>

    <div class="content">
      <div class="title">
        الفرقة الرابعة
        <span>( <span>0</span> ) متبرعين</span>
      </div>
      <div>
        <div
          class="box"
          v-for="smalldata in data_3[0]"
          :key="smalldata"
          :class="{ true: smalldata.approval }"
        >
          <div>
            <div class="name">
              {{ smalldata.name }}
            </div>
            <div class="email">{{ smalldata.Phone }}</div>
            <div class="class">
              {{
                new Date(smalldata.Time.toMillis()).toLocaleString(["ar"], {
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
          <span class="main_icon">
            <font-awesome-icon :icon="['fas', 'check']" />
            <font-awesome-icon :icon="['fas', 'trash-alt']" />
          </span>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import {
  collection,
  getFirestore,
  getDocs,
  getDoc,
  doc,
  // deleteDoc,
  updateDoc,
  // arrayUnion,
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
  name: "BookRequests",
  emits: {
    close_modal_5: null,
  },
  mounted() {
    this.GetData();
    setTimeout(() => {
      setTimeout(() => {
        this.MoSalem();
      }, 200);
      this.DeleteData_0();
      this.UpdateData_0();
      this.DeleteData_1();
      this.UpdateData_1();
      this.DeleteData_2();
      this.UpdateData_2();
      this.DeleteData_3();
      this.UpdateData_3();
      this.Counter();
    }, 1000);
  },
  data() {
    return {
      Ids: [],
      data_0: [],
      data_1: [],
      data_2: [],
      data_3: [],
      Allclass: [
        "الفرقة الأولي",
        "الفرقة الثانية",
        "الفرقة الثالثة",
        "الفرقة الرابعة",
      ],
    };
  },
  methods: {
    Counter() {
      let counter = document.querySelectorAll(".title span span");
      for (let i = 0; i < counter.length; i++) {
        counter[i].innerHTML =
          counter[
            i
          ].parentElement.parentElement.parentElement.children[1].children.length;
      }
    },
    closeModal() {
      this.$emit("close_modal_5");
    },
    MoSalem() {
      document.querySelectorAll(".content .box .email").forEach((e) => {
        if (e.innerHTML === "mas2022mas2004@gmail.com") {
          e.parentElement.parentElement.children[1].classList.add("hidden");
          e.parentElement.parentElement.classList.add("none");
        }
      });
    },
    async UpdateData_0() {
      let btn = document
        .querySelectorAll(".Container_Form .content  ")[0]
        .querySelectorAll(".main_icon > svg:first-child");
      //  document.querySelectorAll(".Container_Form .content")
      // .children[1].children[0].children[1].children[0]
      for (let i = 0; i < btn.length; i++) {
        btn[i].onclick = async () => {
          let deletebtn;
          btn[i].parentElement.parentElement.classList.add("true");
          deletebtn = true;
          if (deletebtn) {
            const bookRef = doc(db, "طلبات كتب مجانية", this.Allclass[0]);

            const docSnapshot = await getDoc(bookRef);
            if (docSnapshot.exists()) {
              const books = docSnapshot
                .data()
                .books.sort((a, b) => b.Time.toMillis() - a.Time.toMillis());
              const updatedBooks = books.map((book, index) => {
                if (index === i) {
                  return { ...book, approval: true };
                } else {
                  return book;
                }
              });

              await updateDoc(bookRef, { books: updatedBooks });
            }
          }
        };
      }
    },
    async UpdateData_1() {
      let btn = document
        .querySelectorAll(".Container_Form .content  ")[1]
        .querySelectorAll(".main_icon > svg:first-child");
      for (let i = 0; i < btn.length; i++) {
        btn[i].onclick = async () => {
          let deletebtn;
          btn[i].parentElement.parentElement.classList.add("true");
          deletebtn = true;
          if (deletebtn) {
            const bookRef = doc(db, "طلبات كتب مجانية", this.Allclass[1]);

            const docSnapshot = await getDoc(bookRef);
            if (docSnapshot.exists()) {
              const books = docSnapshot
                .data()
                .books.sort((a, b) => b.Time.toMillis() - a.Time.toMillis());
              const updatedBooks = books.map((book, index) => {
                if (index === i) {
                  return { ...book, approval: true };
                } else {
                  return book;
                }
              });

              await updateDoc(bookRef, { books: updatedBooks });
            }
          }
        };
      }
    },
    async UpdateData_2() {
      let btn = document
        .querySelectorAll(".Container_Form .content  ")[2]
        .querySelectorAll(".main_icon > svg:first-child");
      for (let i = 0; i < btn.length; i++) {
        btn[i].onclick = async () => {
          let deletebtn;
          btn[i].parentElement.parentElement.classList.add("true");
          deletebtn = true;
          if (deletebtn) {
            const bookRef = doc(db, "طلبات كتب مجانية", this.Allclass[2]);

            const docSnapshot = await getDoc(bookRef);
            if (docSnapshot.exists()) {
              const books = docSnapshot
                .data()
                .books.sort((a, b) => b.Time.toMillis() - a.Time.toMillis());
              const updatedBooks = books.map((book, index) => {
                if (index === i) {
                  return { ...book, approval: true };
                } else {
                  return book;
                }
              });

              await updateDoc(bookRef, { books: updatedBooks });
            }
          }
        };
      }
    },
    async UpdateData_3() {
      let btn = document
        .querySelectorAll(".Container_Form .content  ")[3]
        .querySelectorAll(".main_icon > svg:first-child");
      for (let i = 0; i < btn.length; i++) {
        btn[i].onclick = async () => {
          let deletebtn;
          btn[i].parentElement.parentElement.classList.add("true");
          deletebtn = true;
          if (deletebtn) {
            const bookRef = doc(db, "طلبات كتب مجانية", this.Allclass[3]);

            const docSnapshot = await getDoc(bookRef);
            if (docSnapshot.exists()) {
              const books = docSnapshot
                .data()
                .books.sort((a, b) => b.Time.toMillis() - a.Time.toMillis());
              const updatedBooks = books.map((book, index) => {
                if (index === i) {
                  return { ...book, approval: true };
                } else {
                  return book;
                }
              });

              await updateDoc(bookRef, { books: updatedBooks });
            }
          }
        };
      }
    },
    async DeleteData_0() {
      let btn = document
        .querySelectorAll(".Container_Form .content  ")[0]
        .querySelectorAll(".main_icon > svg:last-child");
      for (let i = 0; i < btn.length; i++) {
        btn[i].onclick = async () => {
          let deletebtn;

          deletebtn = true;
          if (deletebtn) {
            const querySnapshot = await getDocs(
              collection(db, "طلبات كتب مجانية")
            );
            querySnapshot.forEach(async (doc) => {
              if (doc.id === this.Allclass[0]) {
                const data = doc.data();
                data.books.sort(
                  (a, b) => b.Time.toMillis() - a.Time.toMillis()
                );
                const newArray = data.books.filter(
                  (item, index) => index !== i
                );
                await updateDoc(doc.ref, { books: newArray });
                btn[i].parentElement.parentElement.remove();
              }
            });
          }
          setTimeout(() => {
            this.Counter();
          }, 1000);
        };
      }
    },
    async DeleteData_1() {
      let btn = document
        .querySelectorAll(".Container_Form .content  ")[1]
        .querySelectorAll(".main_icon > svg:last-child");
      for (let i = 0; i < btn.length; i++) {
        btn[i].onclick = async () => {
          let deletebtn;

          deletebtn = true;
          if (deletebtn) {
            const querySnapshot = await getDocs(
              collection(db, "طلبات كتب مجانية")
            );
            querySnapshot.forEach(async (doc) => {
              if (doc.id === this.Allclass[1]) {
                const data = doc.data();
                data.books.sort(
                  (a, b) => b.Time.toMillis() - a.Time.toMillis()
                );
                const newArray = data.books.filter(
                  (item, index) => index !== i
                );
                await updateDoc(doc.ref, { books: newArray });
                btn[i].parentElement.parentElement.remove();
              }
            });
          }
          setTimeout(() => {
            this.Counter();
          }, 1000);
        };
      }
    },
    async DeleteData_2() {
      let btn = document
        .querySelectorAll(".Container_Form .content  ")[2]
        .querySelectorAll(".main_icon > svg:last-child");
      for (let i = 0; i < btn.length; i++) {
        btn[i].onclick = async () => {
          let deletebtn;

          deletebtn = true;
          if (deletebtn) {
            const querySnapshot = await getDocs(
              collection(db, "طلبات كتب مجانية")
            );
            querySnapshot.forEach(async (doc) => {
              if (doc.id === this.Allclass[2]) {
                const data = doc.data();
                data.books.sort(
                  (a, b) => b.Time.toMillis() - a.Time.toMillis()
                );
                const newArray = data.books.filter(
                  (item, index) => index !== i
                );
                await updateDoc(doc.ref, { books: newArray });
                btn[i].parentElement.parentElement.remove();
              }
            });
          }
          setTimeout(() => {
            this.Counter();
          }, 1000);
        };
      }
    },
    async DeleteData_3() {
      let btn = document
        .querySelectorAll(".Container_Form .content  ")[3]
        .querySelectorAll(".main_icon > svg:last-child");
      for (let i = 0; i < btn.length; i++) {
        btn[i].onclick = async () => {
          let deletebtn;

          deletebtn = true;
          if (deletebtn) {
            const querySnapshot = await getDocs(
              collection(db, "طلبات كتب مجانية")
            );
            querySnapshot.forEach(async (doc) => {
              if (doc.id === this.Allclass[3]) {
                const data = doc.data();
                data.books.sort(
                  (a, b) => b.Time.toMillis() - a.Time.toMillis()
                );
                const newArray = data.books.filter(
                  (item, index) => index !== i
                );
                await updateDoc(doc.ref, { books: newArray });
                btn[i].parentElement.parentElement.remove();
              }
            });
          }
          setTimeout(() => {
            this.Counter();
          }, 1000);
        };
      }
    },
    async GetData() {
      const querySnapshot = await getDocs(collection(db, "طلبات كتب مجانية"));

      querySnapshot.forEach((doc) => {
        if (doc.id === this.Allclass[0]) {
          this.data_0.push(doc.data().books);
          this.data_0[0]?.sort((a, b) => b.Time.toMillis() - a.Time.toMillis());
        } else if (doc.id === this.Allclass[1]) {
          this.data_1.push(doc.data().books);
          this.data_1[0]?.sort((a, b) => b.Time.toMillis() - a.Time.toMillis());
        } else if (doc.id === this.Allclass[2]) {
          this.data_2.push(doc.data().books);
          this.data_2[0]?.sort((a, b) => b.Time.toMillis() - a.Time.toMillis());
        } else if (doc.id === this.Allclass[3]) {
          this.data_3.push(doc.data().books);
          this.data_3[0]?.sort((a, b) => b.Time.toMillis() - a.Time.toMillis());
        }
      });
    },
  },
};
</script>
<style lang="scss" scoped>
.Container_Form {
  width: 90%;
  overflow: scroll;
  height: 90vh !important;
}
.title {
  background: #eee;
  padding: 10px;
  border-radius: 5px;
  font-size: 20px;
  font-weight: bold;
  color: var(--main-color);
  margin: 10px 0;
  display: flex;
  justify-content: space-between;
}
.content {
  display: flex;
  gap: 10px;
  flex-direction: column;
  margin: 10px 0;
  & > div:last-child {
    display: flex;
    flex-direction: column;
    gap: 10px;
  }
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
  }
}
.main_icon {
  display: flex;
  align-items: center;
  gap: 10px;
  & > svg {
    background: var(--main-color);
    color: #fff;
    height: 40px;
    width: 40px;
    padding: 10px;
    border-radius: 5px;
    &:last-child {
      background: red;
    }
  }
}
.true {
  text-decoration: line-through;
  background: #fafafa;
  order: 1;
  border-color: #3fbb3f !important;
  .main_icon > svg:first-child {
    background: #3fbb3f;
  }
}
</style>
