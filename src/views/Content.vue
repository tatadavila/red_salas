<template>
  <div class="content page">
    <Table></Table>
  </div>
</template>

<script>
// @ is an alias to /src
import Table from "@/components/Table.vue";

export default {
  name: "content",
  components: {
    Table
  }
};
</script>
