<template>
  <div class="home">
    <LandingPage />
    <AllClasses />
    <WhyCollege />
    <TheFooter />
  </div>
</template>

<script>
import LandingPage from "@/components/LandingPage.vue";
import WhyCollege from "@/components/WhyCollege.vue";
import AllClasses from "@/components/AllClasses.vue";
import TheFooter from "@/components/TheFooter.vue";
export default {
  name: "HomeView",
  components: {
    LandingPage,
    WhyCollege,
    AllClasses,
    TheFooter,
  },
};
</script>
