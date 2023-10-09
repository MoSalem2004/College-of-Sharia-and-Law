<template>
  <div class="home">
    <LandingPage />
    <AllClasses />
    <WhyCollege />
  </div>
</template>

<script>
import LandingPage from "@/components/LandingPage.vue";
import WhyCollege from "@/components/WhyCollege.vue";
import AllClasses from "@/components/AllClasses.vue";

export default {
  name: "HomeView",
  components: {
    LandingPage,
    WhyCollege,
    AllClasses,
  },
};
</script>
