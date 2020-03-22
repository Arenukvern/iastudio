<template>
    <div class="header">
        <Menu />

        <div class="header__title">
            {{ title }}
        </div>
        <div>
            <LangSvg />
        </div>
    </div>
</template>

<script>
import Menu from '@/components/Menu.vue'
import LangSvg from '@/assets/lang.svg'
export default {
    name: 'Header',
    props: {
        title: String,
    },
    components: {
        LangSvg,
        Menu,
    },
}
</script>
