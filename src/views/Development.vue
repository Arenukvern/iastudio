<template>
    <div class="page">
        <Header :title="'Development'" />
        <div>
            <a href="https://sheetmanager.z16.web.core.windows.net/"
                >Sheet Manager</a
            >
        </div>
        <Bottom />
    </div>
</template>

<script>
// @ is an alias to /src
import Bottom from '@/components/Bottom.vue'
import Header from '@/components/Header.vue'
export default {
    name: 'Development',
    components: {
        Bottom,
        Header,
    },
}
</script>
