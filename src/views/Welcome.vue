<template>
  <div class="welcome page">
    <WeInfo></WeInfo>
  </div>
</template>

<script>
// @ is an alias to /src
import WeInfo from "@/components/WeInfo.vue";

export default {
  name: "welcome",
  components: {
    WeInfo
  }
};
</script>
