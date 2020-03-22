<template>
    <div class="page">
        <Header :title="'About'" />

        <Bottom />
    </div>
</template>

<script>
// @ is an alias to /src
import Bottom from '@/components/Bottom.vue'
import Header from '@/components/Header.vue'
export default {
    name: 'About',
    components: {
        Bottom,
        Header,
    },
}
</script>
