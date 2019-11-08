<template>
  <div class="purpose">
    <PurpInfo></PurpInfo>
  </div>
</template>

<script>
// @ is an alias to /src
import PurpInfo from "@/components/PurpInfo.vue";
export default {
  name: "Purpose",
  components: {
    PurpInfo
  }
};
</script>
