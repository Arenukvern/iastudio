<template>
  <div class="header">
    <TreeSvg/>
    <div class="header__title">
      {{title}}
    </div>
    <div>
      <LangSvg />
    </div>
  </div>
</template>

<script>
import LangSvg from "@/assets/lang.svg";
import TreeSvg from "@/components/TreeSvg.vue";
export default {
  name: "Header",
  props: {
    title: String
  },
  components: {
    LangSvg,
    TreeSvg
  }
};
</script>