<template>
  <div class="page">
    <Header :title="'Sketches'"/>

    <Bottom/>
  </div>
</template>

<script>
// @ is an alias to /src
import Bottom from "@/components/Bottom.vue";
import Header from "@/components/Header.vue";
export default {
  name: "Sketches",
  components: {
    Bottom,
    Header
  }
};
</script>
