<template>
  <div class="whyCollege" id="Why">
    <div class="container fit">
      <h2 class="main-title">لماذا تختار كلية الشريعة و القانون ؟</h2>
      <div class="content">
        <div v-for="(why, index) in Why" :key="why">
          <span class="number">{{ index + 1 }}</span>
          <span>{{ why }}</span>
        </div>
      </div>
      <div class="msg">
        تذكر أن هذه الأسباب قد تختلف حسب اهتمامات وأهداف كل فرد، لذا يجب على
        الطالب أن يقيم ما يتوافق مع رؤيته الشخصية وما يتطلع إليه في مستقبله
        المهني
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "WhyCollege",
  data() {
    return {
      Why: [
        " تاريخ مرموق: تعود تاريخ كلية الشريعة والقانون في الأزهر الشريف إلى عدة قرون، مما يعني أنك ستكون جزءًا من تراث عريق وتاريخ طويل من العلم والمعرفة.",
        "تعليم متخصص: تقدم الكلية برامج تعليمية متخصصة في الشريعةالإسلامية والقانون، مما يمنحك فرصة فهم عميق للقوانين والأنظمة القانونية و الشرعية.",
        "قيم إسلامية: تعتمد الكلية على القيم والمبادئ الإسلامية في تعليمها وبحوثها، مما يساعدك على تطوير فهم أعمق للإسلام وتطبيقه في العمل القانوني.",
        " فرص العمل: بعد التخرج، ستكون لديك فرص واسعة للعمل في مجالات متعددة مثل المحاماة، القضاء، الدراسات الشرعية، الأبحاث القانونية، وغيرها.",
        "مجالات تخصص متعددة: توفر الكلية مجموعة متنوعة من المجالات التخصصية في الشريعة والقانون، مما يتيح لك اختيار مجال يتناسب مع اهتماماتك ومواهبك الشخصية.",
        "هيئة تدريس متميزة: تضم الكلية هيئة تدريس متميزة ومؤهلة تمتلك خبرة واسعة في مجالاتها، مما يضمن لك تعليمًا عالي الجودة وفرصًا للتعلم من خبراء في المجال.",
        " تواصل ثقافي: ستتعامل مع طلاب آخرين من خلفيات ثقافية مختلفة، مما يوسع آفاقك ويساعدك على فهم وتقدير التنوع الثقافي.",
        "مرافق متطورة: توفر الكلية مرافق حديثة  مثل المكتبات و  المحكمة التصويرية مما يساعدك على الاستفادة الكاملة من تجربتك الجامعية",
        "شبكة علاقات: ستتعرف على زملاء دراسة وأساتذة ومحاضرين من مختلف الخلفيات، مما يمنحك فرصًا لبناء شبكة علاقات اجتماعية ومهنية قوية.",
        "المساهمة في المجتمع: من خلال تعليمك في كلية الشريعة والقانون، ستكون قادرًا على المساهمة في تطوير المجتمع وتحقيق العدالة والقانون..",
      ],
    };
  },
};
</script>
<style lang="scss" scoped>
.whyCollege {
  .content {
    display: flex;
    flex-direction: column;
    gap: 10px;
    margin-bottom: 10px;
    > div {
      display: flex;
      align-items: center;
      gap: 10px;
      background: #eee;
      padding: 10px;
      border-radius: 5px;
      span:not(.number) {
        line-height: 1.6;
      }
      .number {
        background: var(--main-color);
        width: 40px;
        height: 40px;
        display: flex;
        justify-content: center;
        align-items: center;
        color: #fff;
        border-radius: 5px;
        font-weight: bold;
      }
    }
  }
  .msg {
    line-height: 1.6;
    padding: 10px;
    text-align: center;
    background: var(--main-color);
    color: #fff;
    font-weight: bold;
    border-radius: 5px;
  }
}
@media (max-width: 600px) {
  .whyCollege {
    .content {
      > div {
        flex-direction: column;
        align-items: flex-start;
      }
    }
  }
}
@media (min-width: 600px) and (max-width: 900px) {
  .whyCollege {
    .content {
      > div {
        flex-direction: column;
        align-items: flex-start;
      }
    }
  }
}

@media (min-width: 900px) {
}
</style>
