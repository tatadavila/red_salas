<template>
  <div class="developPage">
    <DevTopic></DevTopic>
  </div>
</template>

<script>
// @ is an alias to /src
import DevTopic from "@/components/DevTopic.vue";

export default {
  name: "develop",
  components: {
    DevTopic
  }
};
</script>
