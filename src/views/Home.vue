<template>
  <div class="page">
    <Header :title="'Home'"/>
    <SvgHome />
    <Buttom/>
  </div>
</template>

<script>
// @ is an alias to /src
import SvgHome from "@/components/SvgHome.vue";
import Buttom from "@/components/Buttom.vue";
import Header from "@/components/Header.vue";
export default {
  name: "Home",
  components: {
    SvgHome,
    Buttom,
    Header
  }
};
</script>
