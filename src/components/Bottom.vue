<template>
    <div class="bottom">
        <div
            class="bottom__item --is-text"
            @click.prevent="changeRoute('sketches')"
        >
            Sketches
        </div>
        <div class="bottom__item --is-text" @click.prevent="changeRoute('dev')">
            Development
        </div>
        <div class="bottom__item">
            <a
                href="https://www.instagram.com/antmalofeev/"
                target="_blank"
                rel="noopener noreferrer"
            >
                <i class="fab fa-instagram icon fa-2x"></i
            ></a>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Bottom',
    props: {},
    components: {},
    methods: {
        changeRoute(routeName) {
            this.$router.push(`/${routeName}`)
        },
    },
}
</script>
