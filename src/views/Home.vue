<template>
  <div class="page">
    <Header :title="'Home'"/>
    <SvgHome />
    <Bottom/>
  </div>
</template>

<script>
// @ is an alias to /src
import SvgHome from "@/components/SvgHome.vue";
import Bottom from "@/components/Bottom.vue";
import Header from "@/components/Header.vue";
export default {
  name: "Home",
  components: {
    SvgHome,
    Bottom,
    Header
  }
};
</script>
