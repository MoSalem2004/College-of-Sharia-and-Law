<template>
  <div class="container fit In" id="logo" v-if="show">
    <nav aria-label="breadcrumb">
      <ol
        class="breadcrumb"
        style="direction: ltr; display: flex; justify-content: flex-end"
      >
        <li class="breadcrumb-item active" aria-current="page">
          الفرقة الثالثة
        </li>
        <li class="breadcrumb-item order">
          <a href="/#AllClasses"> الفرق الدراسية </a>
        </li>
      </ol>
    </nav>
    <h1>
      <span>الفرقة الثالثة</span>
      <div>
        <span @click="close_modal">
          <font-awesome-icon :icon="['fas', 'file-excel']" />
          <span>التقارير الأسبوعية</span>
        </span>
        <span @click="close_modal_2">
          <font-awesome-icon :icon="['fas', 'book']" />
          <span>كتب مجانية</span>
        </span>
      </div>
    </h1>
    <Report v-if="Active" :Class="this.class" @close_modal="close_modal" />
    <FreeBooks
      @close_modal_2="close_modal_2"
      v-if="Show_Book"
      :Class="this.class"
    />
    <TheSubject
      v-if="Show_Subject"
      :Subject_Name="this.Subject_Name"
      :Class="this.class"
      @close_modal_1="close_modal_1"
    />
    <div class="counter">( <span></span> ) مادة دراسية</div>
    <div class="content">
      <div
        class="box"
        v-for="(subject, index) in subjects"
        :key="subject"
        @click="close_modal_1"
      >
        <div class="count">{{ index + 1 }}</div>
        <div class="title">{{ subject.name }}</div>
        <div class="type">{{ subject.type }}</div>
      </div>
    </div>
  </div>
</template>
<script>
import Report from "./Report.vue";
import TheSubject from "../components/Subject.vue";
import FreeBooks from "../components/FreeBooks.vue";
export default {
  name: "ClassThree",
  emits: ["close_modal_2", "close_modal_1", "close_modal"],
  components: {
    Report,
    TheSubject,
    FreeBooks,
  },
  data() {
    return {
      show: null,
      Subject_Name: null,
      Show_Subject: null,
      Admin_State: null,
      Show_Book: null,
      Active: null,
      class: "",
      subjects: [
        {
          name: "القرآن الكريم",
          type: "ممتدة",
        },
        {
          name: "الفقه المذهبي",
          type: "ممتدة",
        },
        {
          name: "أصول الفقه",
          type: "ممتدة",
        },
        {
          name: "القانون الجنائي الخاص",
          type: "ممتدة",
        },
        {
          name: "القضاء الإداري و الدستوري",
          type: "ممتدة",
        },
        {
          name: "القانون المدني ( عقود )",
          type: "ترم أول",
        },
        {
          name: "الفقه المقارن",
          type: "ترم أول",
        },
        {
          name: "نقود و بنوك",
          type: "ترم أول",
        },
        {
          name: "مصطلحات قانونية",
          type: "ترم أول",
        },
        {
          name: "قانون المرافعات",
          type: "ترم ثاني",
        },
        {
          name: "القانون التجاري",
          type: "ترم ثاني",
        },
        {
          name: "الأحوال الشخصية للمسلمين",
          type: "ترم ثاني",
        },
      ],
    };
  },
  mounted() {
    setTimeout(() => {
      this.show = true;
    }, 1);
    setTimeout(() => {
      this.test();
      this.counter();
      this.SubjectName();
      this.Quran();
    }, 2);
  },
  methods: {
    Quran() {
      let boxes = document.querySelectorAll(".container.fit.In .content .box");
      for (let i = 0; i < boxes.length; i++) {
        if (boxes[i].children[1].innerHTML === "القرآن الكريم") {
          boxes[i].classList.add("none");
        }
      }
    },
    close_modal_2() {
      this.Show_Book = !this.Show_Book;
    },
    close_modal_1() {
      this.Show_Subject = !this.Show_Subject;
    },
    SubjectName() {
      let boxes = document.querySelectorAll(".container.fit.In .content .box");
      for (let i = 0; i < boxes.length; i++) {
        boxes[i].onclick = () => {
          this.Subject_Name = boxes[i].children[1].innerHTML;
        };
      }
    },
    close_modal() {
      this.Active = !this.Active;
    },
    counter() {
      this.class = document.querySelector("h1 span").innerHTML;
      document.querySelector(".counter span").innerHTML = this.subjects.length;
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
