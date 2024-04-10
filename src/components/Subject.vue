<template>
  <div class="Add_Book" v-if="Show_Add">
    <font-awesome-icon :icon="['fas', 'window-close']" @click="closeModal_1" />
    <div class="input-group mb-3">
      <div class="form-floating">
        <input
          type="text"
          class="form-control"
          id="TheBook"
          placeholder="اسم الكتاب"
          v-model="TheBook"
          required
        />

        <label for="TheBook"
          ><font-awesome-icon :icon="['fas', 'book']" /> اسم الكتاب</label
        >
      </div>
    </div>
    <div class="input-group mb-3">
      <div class="form-floating">
        <input
          type="text"
          class="form-control"
          id="BookLink"
          placeholder="لينك الكتاب"
          required
        />

        <label for="BookLink"
          ><font-awesome-icon :icon="['fas', 'book']" /> لينك الكتاب من جوجل
          دريف</label
        >
      </div>
    </div>

    <div class="input-group mb-3">
      <div class="form-floating">
        <input
          type="text"
          class="form-control"
          id="BookSize"
          placeholder="حجم الكتاب"
          required
          v-model="BookSize"
        />

        <label for="BookSize"
          ><font-awesome-icon :icon="['fas', 'book']" /> حجم الكتاب من جوجل
          دريف</label
        >
      </div>
    </div>
    <div class="File_Name" id="File_Name"></div>
    <div class="File_Size" id="File_Size"></div>
    <div class="main_msg" v-if="Mian_Msg">أنتظر قليلاً</div>
    <button class="done" @click="Add_Book" :disabled="isClicked">تم</button>
  </div>
  <div class="Add_Book" v-if="Show_Add_1">
    <font-awesome-icon :icon="['fas', 'window-close']" @click="closeModal_2" />
    <div class="input-group mb-3">
      <div class="form-floating">
        <input
          type="text"
          class="form-control"
          id="SummarieBook"
          placeholder="اسم الملخص"
          v-model="SummarieBook"
          required
        />

        <label for="SummarieBook"
          ><font-awesome-icon :icon="['fas', 'book']" /> اسم الملخص</label
        >
      </div>
    </div>
    <div class="input-group mb-3">
      <div class="form-floating">
        <input
          type="text"
          class="form-control"
          id="SummarieLink"
          placeholder="لينك الملخص"
          required
        />

        <label for="SummarieLink"
          ><font-awesome-icon :icon="['fas', 'book']" /> لينك الملخص من جوجل
          دريف</label
        >
      </div>
    </div>

    <div class="input-group mb-3">
      <div class="form-floating">
        <input
          type="text"
          class="form-control"
          id="SummarieSize"
          placeholder="حجم الملخص"
          required
          v-model="SummarieSize"
        />

        <label for="SummarieSize"
          ><font-awesome-icon :icon="['fas', 'book']" /> حجم الملخص من جوجل
          دريف</label
        >
      </div>
    </div>
    <div class="File_Name" id="File_Name_1"></div>
    <div class="File_Size" id="File_Size_1"></div>
    <div class="main_msg" v-if="Mian_Msg">أنتظر قليلاً</div>
    <button class="done" @click="Add_Book_1" :disabled="isClicked_1">تم</button>
  </div>
  <div class="Add_Book" v-if="Show_Add_2">
    <font-awesome-icon :icon="['fas', 'window-close']" @click="closeModal_3" />
    <div class="input-group mb-3">
      <div class="form-floating">
        <input
          type="text"
          class="form-control"
          id="Recordings"
          placeholder="اسم التسجيل"
          v-model="Recordings"
          required
        />

        <label for="Recordings"
          ><font-awesome-icon :icon="['fas', 'book']" /> اسم التسجيل</label
        >
      </div>
    </div>
    <div class="input-group mb-3">
      <div class="form-floating">
        <input
          type="text"
          class="form-control"
          id="RecordingsLink"
          placeholder="لينك التسجيل"
          required
        />

        <label for="RecordingsLink"
          ><font-awesome-icon :icon="['fas', 'book']" /> لينك التسجيل من جوجل
          دريف</label
        >
      </div>
    </div>
    <div class="input-group mb-3">
      <div class="form-floating">
        <input
          type="text"
          class="form-control"
          id="RecordingsSize"
          placeholder="حجم التسجيل"
          required
          v-model="RecordingsSize"
        />

        <label for="RecordingsSize"
          ><font-awesome-icon :icon="['fas', 'book']" /> حجم التسجيل من جوجل
          دريف</label
        >
      </div>
    </div>
    <div class="File_Name" id="File_Name_2"></div>
    <div class="File_Size" id="File_Size_2"></div>
    <div class="main_msg" v-if="Mian_Msg">أنتظر قليلاً</div>
    <button class="done" @click="Add_Book_2" :disabled="isClicked_2">تم</button>
  </div>
  <div class="main_popup" @click="closeModal"></div>
  <div class="main_popup" style="z-index: 4" v-if="Show_Add"></div>
  <div class="main_popup" style="z-index: 4" v-if="Show_Add_1"></div>
  <div class="main_popup" style="z-index: 4" v-if="Show_Add_2"></div>
  <div class="container fit In popup m-0">
    <div class="main_popup" v-if="DeleteState" @click="DeleteFunction"></div>
    <div class="delete_box" v-if="DeleteState">
      <div>متأكد من أنك تريد حذف جميع الكتب ؟</div>
      <div>
        <span class="remove" @click="Delete_Data">حذف</span>
        <span @click="DeleteFunction">لا</span>
      </div>
    </div>

    <div
      class="main_popup"
      v-if="Main_Delete"
      @click="Main_Delete_Function"
    ></div>
    <div class="delete_box" v-if="Main_Delete">
      <div>متأكد من أنك تريد الحذف ؟</div>
      <div>
        <span class="remove">حذف</span>
        <span @click="Main_Delete_Function">لا</span>
      </div>
    </div>

    <div
      class="main_popup"
      v-if="DeleteState_2"
      @click="DeleteFunction_2"
    ></div>
    <div class="delete_box" v-if="DeleteState_2">
      <div>متأكد من أنك تريد حذف جميع التسجيلات ؟</div>
      <div>
        <span class="remove" @click="Delete_Data_2">حذف</span>
        <span @click="DeleteFunction_2">لا</span>
      </div>
    </div>
    <div
      class="main_popup"
      v-if="DeleteState_1"
      @click="DeleteFunction_1"
    ></div>
    <div class="delete_box" v-if="DeleteState_1">
      <div>متأكد من أنك تريد حذف جميع الملخصات ؟</div>
      <div>
        <span class="remove" @click="Delete_Data_1">حذف</span>
        <span @click="DeleteFunction_1">لا</span>
      </div>
    </div>
    <LodingIcon v-if="showLoading" />
    <header>
      <nav aria-label="breadcrumb">
        <ol class="breadcrumb" style="direction: ltr">
          <li class="breadcrumb-item active" aria-current="page">
            {{ this.Subject_Name }}
          </li>
          <li class="breadcrumb-item order">{{ Class }}</li>
          <li class="breadcrumb-item order">
            <router-link to="/"> الفرق الدراسية </router-link>
          </li>
        </ol>
      </nav>
      <div>
        <div id="App">
          <span
            ref="popoverButton"
            @mouseover="showPopover = true"
            @mouseleave="showPopover = false"
          >
            <font-awesome-icon
              :icon="['fas', 'trash-alt']"
              @click="DeleteFunction"
              style="font-size: 20px"
              v-show="Admin_State"
            />
            <!-- this.showPopover="false" -->
          </span>
          <div v-if="showPopover" class="popover">
            <div class="popover-content">حذف جميع الكتب</div>
          </div>
        </div>
        <span v-show="Admin_State" @click="closeModal_1" class="Add_Books">
          <span> إضافة كتاب </span>
          <font-awesome-icon :icon="['fas', 'plus']" />
        </span>
        <font-awesome-icon
          :icon="['fas', 'window-close']"
          @click="closeModal"
        />
      </div>
    </header>

    <div class="body">
      <div class="box" v-for="Book in Books" :key="Book">
        <font-awesome-icon
          :icon="['fas', 'trash-alt']"
          style="font-size: 20px"
          v-show="Admin_State"
        />
        <div class="title">{{ Book.BookName }}</div>
        <div class="size">{{ Book.BookSize }}</div>
        <a class="UploadBook" :href="Book.BookLink">
          <font-awesome-icon :icon="['fas', 'upload']" />
          <span>تحميل الكتاب</span>
        </a>
      </div>
    </div>
    <div class="feat feat_1">
      <div class="Head">
        <div class="header" @click="SummarieFunction">
          <span>الملخصات ( <span>0</span> ) </span>
          <span>
            <font-awesome-icon :icon="['fas', 'arrow-circle-down']" />
          </span>
        </div>
        <span>
          <font-awesome-icon
            :icon="['fas', 'trash-alt']"
            class="plus"
            @click="DeleteFunction_1"
            v-show="Admin_State"
          />
          <font-awesome-icon
            :icon="['fas', 'plus-circle']"
            class="plus"
            @click="closeModal_2"
            v-show="Admin_State"
          />
        </span>
      </div>
      <div class="body hidden">
        <div class="box" v-for="(Book, index) in Books_1" :key="Book">
          <font-awesome-icon
            :icon="['fas', 'trash-alt']"
            style="font-size: 20px"
            v-show="Admin_State"
          />
          <div class="number">{{ index + 1 }}</div>
          <div class="title">{{ Book.BookName }}</div>
          <div class="size">{{ Book.BookSize }}</div>
          <div class="time">
            <!-- {{
              new Date(Book.Time.toMillis()).toLocaleString(["ar"], {
                weekday: "short",
                year: "numeric",
                month: "short",
                day: "numeric",
                hour: "2-digit",
                minute: "2-digit",
              })
            }} -->
          </div>
          <a class="UploadBook" :href="Book.BookLink">
            <font-awesome-icon :icon="['fas', 'upload']" />
            <span>تحميل الملخص</span>
          </a>
        </div>
      </div>
    </div>
    <div class="feat feat_2">
      <div class="Head">
        <div class="header" @click="RecordingsFunction">
          <span>التسجيلات ( <span>0</span> ) </span>
          <span>
            <font-awesome-icon :icon="['fas', 'arrow-circle-down']" />
          </span>
        </div>
        <span>
          <font-awesome-icon
            :icon="['fas', 'trash-alt']"
            class="plus"
            @click="DeleteFunction_2"
            v-show="Admin_State"
          />
          <font-awesome-icon
            :icon="['fas', 'plus-circle']"
            class="plus"
            @click="closeModal_3"
            v-show="Admin_State"
          />
        </span>
      </div>
      <div class="body hidden">
        <div class="box" v-for="(Book, index) in Books_2" :key="Book">
          <font-awesome-icon
            :icon="['fas', 'trash-alt']"
            style="font-size: 20px"
            v-show="Admin_State"
          />
          <div class="number">{{ index + 1 }}</div>
          <div class="title">{{ Book.BookName }}</div>
          <div class="size">{{ Book.BookSize }}</div>
          <div class="time">
            <!-- {{
              new Date(Book.Time.toMillis()).toLocaleString(["ar"], {
                weekday: "short",
                year: "numeric",
                month: "short",
                day: "numeric",
                hour: "2-digit",
                minute: "2-digit",
              })
            }} -->
          </div>
          <a class="UploadBook" :href="Book.BookLink">
            <font-awesome-icon :icon="['fas', 'upload']" />
            <span>تحميل التسجيل</span>
          </a>
        </div>
      </div>
    </div>
  </div>
  <div class="online" v-if="online">{{ MSG_Online }}</div>
</template>
<script>
import {
  collection,
  getFirestore,
  getDocs,
  getDoc,
  doc,
  setDoc,
  updateDoc,
  deleteField,
  arrayUnion,
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
import isOnline from "is-online";
export default {
  name: "TheSubject",
  props: ["Subject_Name", "Class"],
  emits: ["close_modal_1"],
  components: {
    LodingIcon,
  },
  data() {
    return {
      Admin_State: null,
      SubjectArrays: 1,
      Ids: [],
      counter: "",
      showLoading: null,
      Show_Add: null,
      Show_Add_1: null,
      Show_Add_2: null,
      Books: [],
      Books_1: [],
      Books_2: [],
      progress: null,
      progress_2: null,
      showPopover: false,
      SummarieState: true,
      RecordingsState: true,
      DeleteState: null,
      DeleteState_1: null,
      DeleteState_2: null,
      DeleteState_3: null,
      TheBook: "مثال : كتاب أصول الفقه -  (غير حنفي) - موضوعي",
      SummarieBook: "مثال : الباب الأول - د / محمد - (شافعي) ",
      Recordings: " مثال :   رقم المحاضرة - د / محمد - (شافعي) ",
      BookSize: "مثال : 2.5 MB",
      SummarieSize: "مثال : 2.5 MB",
      RecordingsSize: "مثال : 2.5 MB",
      isClicked: false,
      isClicked_1: false,
      isClicked_2: false,
      Main_Delete: null,
      Mian_Msg: null,
      MSG_Online: "انت غير متصل بالإنترنت !",
      online: null,
    };
  },
  async created() {
    const online = await isOnline();
    if (!online) {
      setTimeout(() => {
        this.showLoading = false;
      }, 1000);
      this.online = true;
      setTimeout(() => {
        this.online = false;
      }, 10000);
    }
  },
  mounted() {
    this.showLoading = true;
    setTimeout(() => {
      this.test();
      this.Get_Data_1();

      this.Get_Data_2();
    }, 2000);
    setTimeout(() => {
      this.Get_Data();
    }, 2000);
    setTimeout(() => {
      this.DeleteBook();
      this.DeleteSummarie();
      this.DeleteRecordings();
    }, 4000);
  },
  methods: {
    async DeleteRecordings() {
      let subject = this.Subject_Name;
      let TheClass = this.Class;
      let btn = document.querySelectorAll(".feat_2 .body .box > svg");
      for (let i = 0; i < btn.length; i++) {
        btn[i].onclick = () => {
          let deletebtn;
          this.Main_Delete_Function();
          setTimeout(() => {
            document.querySelector(".delete_box > div span.remove").onclick =
              async () => {
                deletebtn = true;
                if (deletebtn) {
                  const querySnapshot = await getDocs(
                    collection(db, `تسجيلات ${TheClass}`)
                  );
                  querySnapshot.forEach(async (doc) => {
                    if (doc.id === subject) {
                      const data = doc.data();
                      data.books.sort(
                        (a, b) => b.Time.toMillis() - a.Time.toMillis()
                      );
                      const newArray = data.books.filter(
                        (item, index) => index !== i
                      );
                      await updateDoc(doc.ref, { books: newArray });
                      btn[i].parentElement.remove();
                    }
                  });
                }
                this.Main_Delete_Function();
                setTimeout(() => {
                  this.CounterRecordings();
                }, 500);
              };
          }, 10);
        };
      }
    },
    async DeleteSummarie() {
      let subject = this.Subject_Name;
      let TheClass = this.Class;
      let btn = document.querySelectorAll(".feat_1 .body .box > svg");
      for (let i = 0; i < btn.length; i++) {
        btn[i].onclick = () => {
          let deletebtn;
          this.Main_Delete_Function();
          setTimeout(() => {
            document.querySelector(".delete_box > div span.remove").onclick =
              async () => {
                deletebtn = true;
                if (deletebtn) {
                  const querySnapshot = await getDocs(
                    collection(db, `ملخصات ${TheClass}`)
                  );
                  querySnapshot.forEach(async (doc) => {
                    if (doc.id === subject) {
                      const data = doc.data();
                      data.books.sort(
                        (a, b) => b.Time.toMillis() - a.Time.toMillis()
                      );
                      const newArray = data.books.filter(
                        (item, index) => index !== i
                      );
                      await updateDoc(doc.ref, { books: newArray });
                      btn[i].parentElement.remove();
                    }
                  });
                }
                this.Main_Delete_Function();
                setTimeout(() => {
                  this.CounterSummarie();
                }, 500);
              };
          }, 10);
        };
      }
    },
    DeleteBook() {
      let subject = this.Subject_Name;
      let TheClass = this.Class;
      let btn = document.querySelectorAll(" .body .box > svg");
      for (let i = 0; i < btn.length; i++) {
        btn[i].onclick = () => {
          let deletebtn;
          this.Main_Delete_Function();
          setTimeout(() => {
            document.querySelector(".delete_box > div span.remove").onclick =
              async () => {
                deletebtn = true;
                if (deletebtn) {
                  const querySnapshot = await getDocs(
                    collection(db, `كتب ${TheClass}`)
                  );
                  querySnapshot.forEach(async (doc) => {
                    if (doc.id === subject) {
                      const data = doc.data();

                      const newArray = data.books.filter(
                        (item, index) => index !== i
                      );
                      await updateDoc(doc.ref, { books: newArray });
                      btn[i].parentElement.remove();
                    }
                  });
                }
                this.Main_Delete_Function();
              };
          }, 10);
        };
      }
    },
    Main_Delete_Function() {
      this.Main_Delete = !this.Main_Delete;
    },
    DeleteFunction_2() {
      this.DeleteState_2 = !this.DeleteState_2;
    },
    DeleteFunction_1() {
      this.DeleteState_1 = !this.DeleteState_1;
    },
    DeleteFunction() {
      this.DeleteState = !this.DeleteState;
      this.showPopover = false;
    },
    CounterRecordings() {
      if (document.querySelector(".feat.feat_2 .Head .header > span span")) {
        document.querySelector(
          ".feat.feat_2 .Head .header > span span"
        ).innerHTML = document.querySelectorAll(
          ".feat.feat_2 .body .box "
        ).length;
      }
    },
    CounterSummarie() {
      if (document.querySelector(".feat.feat_1 .Head .header > span span")) {
        document.querySelector(
          ".feat.feat_1 .Head .header > span span"
        ).innerHTML = document.querySelectorAll(
          ".feat.feat_1 .body .box "
        ).length;
      }
    },
    SummarieFunction() {
      if (this.SummarieState) {
        document.querySelector(".feat_1 .body").classList.remove("hidden");
      } else {
        document.querySelector(".feat_1 .body").classList.add("hidden");
      }
      this.SummarieState = !this.SummarieState;
    },
    RecordingsFunction() {
      if (this.RecordingsState) {
        document.querySelector(".feat_2 .body").classList.remove("hidden");
      } else {
        document.querySelector(".feat_2 .body").classList.add("hidden");
      }
      this.RecordingsState = !this.RecordingsState;
    },
    async Delete_Data_2() {
      let subject = this.Subject_Name;
      let TheClass = this.Class;
      const cityRef = doc(db, `تسجيلات ${TheClass}`, subject);

      await updateDoc(cityRef, {
        books: deleteField(),
      });
      this.Books_2 = "";
      document.querySelector(
        ".feat.feat_2 .Head .header > span span"
      ).innerHTML = 0;
      this.DeleteFunction_2();
    },
    async Delete_Data_1() {
      let subject = this.Subject_Name;
      let TheClass = this.Class;
      const cityRef = doc(db, `ملخصات ${TheClass}`, subject);

      await updateDoc(cityRef, {
        books: deleteField(),
      });
      this.Books_1 = "";
      document.querySelector(
        ".feat.feat_1 .Head .header > span span"
      ).innerHTML = 0;
      this.DeleteFunction_1();
    },
    async Delete_Data() {
      let subject = this.Subject_Name;
      let TheClass = this.Class;
      const cityRef = doc(db, `كتب ${TheClass}`, subject);

      await updateDoc(cityRef, {
        books: deleteField(),
      });
      this.Books = "";
      this.DeleteFunction();
    },
    async Get_Data_2() {
      let subject = this.Subject_Name;
      let TheClass = this.Class;
      const querySnapshot = await getDocs(
        collection(db, `تسجيلات ${TheClass}`)
      );
      querySnapshot.forEach((doc) => {
        if (doc.id === subject) {
          this.Books_2 = doc.data().books;
        }
      });
      this.Books_2?.sort((a, b) => b.Time.toMillis() - a.Time.toMillis());
      this.showLoading = false;
      setTimeout(() => {
        this.CounterRecordings();
      }, 100);
    },
    async Get_Data_1() {
      let subject = this.Subject_Name;
      let TheClass = this.Class;
      const querySnapshot = await getDocs(collection(db, `ملخصات ${TheClass}`));
      querySnapshot.forEach((doc) => {
        if (doc.id === subject) {
          this.Books_1 = doc.data().books;
        }
      });
      this.Books_1?.sort((a, b) => b.Time.toMillis() - a.Time.toMillis());
      this.showLoading = false;
      setTimeout(() => {
        this.CounterSummarie();
      }, 100);
      //   }
    },
    async Get_Data() {
      let subject = this.Subject_Name;
      let TheClass = this.Class;
      const querySnapshot = await getDocs(collection(db, `كتب ${TheClass}`));
      querySnapshot.forEach((doc) => {
        if (doc.id === subject) {
          this.Books = doc.data().books;
        }
      });
      this.showLoading = false;
      setTimeout(() => {
        this.DeleteBook();
      }, 1000);
    },
    async Add_Book() {
      this.isClicked = true;
      let subject = this.Subject_Name;
      let TheClass = this.Class;
      let isCleanDataCalled = false;
      if (
        document.getElementById("TheBook").value !== "" &&
        document.getElementById("BookLink").value !== "" &&
        document.getElementById("BookSize").value !== ""
      ) {
        this.Mian_Msg = true;
        const bookRef = doc(db, `كتب ${TheClass}`, subject);
        const docSnap = await getDoc(bookRef);
        if (!isCleanDataCalled) {
          isCleanDataCalled = true;
          let Object = {
            BookName: document.getElementById("TheBook")?.value,
            BookLink: document.getElementById("BookLink")?.value,
            BookSize: document.getElementById("BookSize")?.value,
            Time: new Date(),
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
          setTimeout(() => {
            this.CleanData();
          }, 1000);
        }
      }
    },
    async Add_Book_1() {
      this.isClicked_1 = true;
      let subject = this.Subject_Name;
      let TheClass = this.Class;
      let isCleanDataCalled = false;
      if (
        document.getElementById("SummarieBook").value !== "" &&
        document.getElementById("SummarieLink").value !== "" &&
        document.getElementById("SummarieSize").value !== ""
      ) {
        this.Mian_Msg = true;
        const bookRef = doc(db, `ملخصات ${TheClass}`, subject);
        const docSnap = await getDoc(bookRef);
        if (!isCleanDataCalled) {
          isCleanDataCalled = true;
          let Object = {
            BookName: document.getElementById("SummarieBook")?.value,
            BookLink: document.getElementById("SummarieLink")?.value,
            BookSize: document.getElementById("SummarieSize")?.value,
            Time: new Date(),
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
          setTimeout(() => {
            this.CleanData_1();
          }, 1000);
        }
      }
    },
    async Add_Book_2() {
      this.isClicked_2 = true;
      let subject = this.Subject_Name;
      let TheClass = this.Class;
      let isCleanDataCalled = false;
      if (
        document.getElementById("Recordings").value !== "" &&
        document.getElementById("RecordingsLink").value !== "" &&
        document.getElementById("RecordingsSize").value !== ""
      ) {
        this.Mian_Msg = true;
        const bookRef = doc(db, `تسجيلات ${TheClass}`, subject);
        const docSnap = await getDoc(bookRef);
        if (!isCleanDataCalled) {
          isCleanDataCalled = true;
          let Object = {
            BookName: document.getElementById("Recordings")?.value,
            BookLink: document.getElementById("RecordingsLink")?.value,
            BookSize: document.getElementById("RecordingsSize")?.value,
            Time: new Date(),
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
          setTimeout(() => {
            this.CleanData_2();
          }, 1000);
        }
      }
    },
    CleanData_2() {
      this.isClicked_2 = false;
      this.Mian_Msg = false;
      this.Recordings = " مثال :   رقم المحاضرة - د / محمد - (شافعي) ";
      this.RecordingsSize = "مثال : 2.5 MB";
      setTimeout(() => {
        this.Get_Data_2();
        this.Show_Add_2 = false;
      }, 1000);
      setTimeout(() => {
        this.DeleteRecordings();
        this.CounterRecordings();
      }, 2000);
    },
    CleanData_1() {
      this.isClicked_1 = false;
      this.Mian_Msg = false;
      this.SummarieBook = "مثال : الباب الأول - د / محمد - (شافعي) ";
      this.SummarieSize = "مثال : 2.5 MB";
      setTimeout(() => {
        this.Get_Data_1();
        this.Show_Add_1 = false;
      }, 1000);
      setTimeout(() => {
        this.DeleteSummarie();
        this.CounterSummarie();
      }, 2100);
    },
    CleanData() {
      this.isClicked = false;
      this.Mian_Msg = false;
      this.TheBook = "مثال : كتاب أصول الفقه -  (غير حنفي) - موضوعي";
      this.BookSize = "مثال : 2.5 MB";
      setTimeout(() => {
        this.Get_Data();
        this.Show_Add = false;
      }, 100);
    },
    closeModal_3() {
      this.Show_Add_2 = !this.Show_Add_2;
    },
    closeModal_2() {
      this.Show_Add_1 = !this.Show_Add_1;
    },
    closeModal_1() {
      this.Show_Add = !this.Show_Add;
    },
    closeModal() {
      this.$emit("close_modal_1");
    },
    test() {
      if (
        localStorage.getItem("userclass") ===
          document.querySelector("h1 span")?.innerHTML ||
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
.Add_Book {
  display: flex;
  flex-direction: column;
  z-index: 5;

  background: #fff;
  border-radius: 5px;
  padding: 15px;
  position: fixed;
  top: 50%;
  left: 50%;
  width: 90%;
  transform: translate(-50%, -50%);
  //   min-height: 50vh;
  .File_Name {
    background: #eee;
    padding: 5px;
    border-radius: 5px;
  }
  .File_Size {
    font-weight: bold;
    margin: 10px 0;
  }
  & > svg {
    font-size: 20px;
    color: var(--main-color);
    margin: 10px auto 10px 0;
  }
  .done {
    background: var(--main-color);
    color: #fff;
    width: fit-content;
    margin: 10px auto 10px 0;
    border: none;
    border-radius: 5px;
    padding: 5px 15px;
  }
}
.body {
  margin-top: 10px;
  display: flex;
  //   flex-direction: column;
  justify-content: space-between;
  gap: 10px;
  flex-wrap: wrap;
  &.body.hidden {
    height: 0px;
    overflow: hidden;
  }
  .box {
    width: 48%;
    padding: 10px;
    display: flex;
    flex-direction: column;
    gap: 5px;
    border-radius: 5px;
    border: 1px solid #ddd;
    position: relative;
    & > svg {
      position: absolute;
      top: 10px;
      left: 10px;
      color: var(--main-color);
    }
    .number {
      width: 35px;
      height: 35px;
      background: var(--main-color);
      display: flex;
      align-items: center;
      justify-content: center;
      color: #fff;
      font-weight: bold;
      border-radius: 5px;
    }
    .size {
      color: rgb(125, 125, 125);
      font-size: 12px;
      font-weight: bold;
    }
    .time {
      color: var(--main-color);
      font-weight: bold;
    }
    .UploadBook {
      margin-top: 10px;
      display: flex;
      gap: 10px;
      width: 100%;
      border-radius: 5px;
      background: var(--main-color);
      color: #fff !important;
      border: none;
      justify-content: center;
      align-items: center;
      padding: 10px 0;
    }
  }
}
.Upload {
  label {
    width: 100%;
    cursor: pointer;
    border-radius: 5px;
    padding: 10px 0;
    background: var(--main-color);
    color: #fff;
    text-align: center;
  }
}
.progress {
  min-height: 29px;
  background: #fafafa;
  padding: 5px 10px;
  border-radius: 14px;
  font-weight: bold;
  min-width: 152px;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1;
  min-height: 29px;
  span.Progress {
    z-index: -1;
    position: absolute;
    top: 0;
    left: 0;
    width: 0;
    height: 100%;
    background: var(--main-color);
  }
}
#App {
  padding: 0;
}
.popover {
  position: absolute;
  background-color: #f8f8f8;
  border: 1px solid #ccc;
  padding: 10px;
  border-radius: 4px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.3);
  top: 54px;
  left: 14px;
}

.popover-content {
  font-size: 14px;
}

.feat {
  width: 100%;
  margin: 10px auto;
  background: #fafafa;
  border-radius: 5px;
  .Head {
    display: flex;
    gap: 10px;
    align-items: center;
    .header {
      border: 1px solid #ddd;
      width: 100%;
      display: flex;
      justify-content: space-between;
      padding: 10px;
      border-radius: 5px;
      cursor: pointer;
      color: var(--main-color);
      font-weight: bold;
      align-items: center;
      & > span {
        display: flex;
        gap: 10px;
      }
    }
    & > span {
      display: flex;
      gap: 10px;
      margin: 15px auto 5px 10px;
    }
    svg.plus {
      color: var(--main-color);
      font-size: 20px;
    }
  }
}
.delete_box {
  display: flex;
  flex-direction: column;
  gap: 10px;
  justify-content: center;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 90%;
  background: #fff;
  z-index: 5;
  align-items: center;
  padding: 20px;
  border-radius: 5px;
  border: 1px solid #ddd;
  & > div {
    display: flex;
    gap: 10px;
    span {
      width: 60px;
      height: 30px;
      background: var(--main-color);
      border-radius: 5px;
      color: #fff;
      font-weight: bold;
      display: flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;
      &.remove {
        background: red;
      }
    }
  }
}
.main_msg {
  background: #fafafa;
  text-align: center;
  padding: 5px;
  border-radius: 5px;
  margin-bottom: 10px;
}
.Add_Books {
  display: flex;
  align-items: center;
  gap: 10px;
  background: var(--main-color);
  padding: 1px 5px;
  color: #fff;
  border-radius: 5px;
  cursor: pointer;
  font-size: 14px;
  flex-direction: row-reverse;
  svg {
    color: #fff;
    color: #fff !important;
    font-size: 16px !important;
  }
}
.online {
  position: fixed;
  bottom: 0px;
  background: var(--main-color);
  width: 100%;
  z-index: 3;
  left: 0;
  text-align: center;
  color: #fff;
  padding: 5px;
  animation: online 0.3s linear;
  // transform: translateY(35px);
}
@keyframes online {
  from {
    transform: translatex(100%);
  }
  to {
    transform: translatex(0);
  }
}
@media (max-width: 500px) {
  .feat .Head {
    flex-direction: column-reverse;
    // & > span {
    //   margin-right: auto;
    // }
  }
  .body {
    flex-direction: column;
    .box {
      width: 100%;
    }
  }
}
@media (min-width: 500px) and (max-width: 993px) {
  .feat .Head {
    flex-direction: column-reverse;
    // & > span {
    //   margin-right: auto;
    // }
  }
  .body {
    flex-direction: column;
    .box {
      width: 100%;
    }
  }
}

@media (min-width: 993px) {
}
</style>
