<template>
    <div class="menu__ancestor">
        <TreeSvg @click="changeState" />
        <div class="menu" @click.stop :class="activeClass">
            <CircleSvg />
            <div class="menu__icon">
                <TreeSvg :is-dark="isActive" @click="changeState" />
            </div>
            <div class="menu__item --on-top" @click.prevent="changeRoute('')">
                Home
            </div>
            <div
                class="menu__item --in-middle"
                @click.prevent="changeRoute('sketches')"
            >
                Sketches
            </div>
            <div
                class="menu__item --on-bottom"
                @click.prevent="changeRoute('dev')"
            >
                Dev
            </div>
            <!-- <div
                class="menu__item --on-bottom"
                @click.prevent="changeRoute('about')"
            >
                About
            </div> -->
        </div>
        <div
            class="menu__dimmer"
            @click="changeState"
            :class="activeClass"
        ></div>
    </div>
</template>

<script>
import TreeSvg from '@/components/TreeSvg.vue'
import CircleSvg from '@/assets/Circle.svg'
export default {
    name: 'Menu',
    data() {
        return {
            isActive: false,
        }
    },
    components: {
        CircleSvg,
        TreeSvg,
    },
    computed: {
        activeClass() {
            if (this.$data.isActive) return '--is-active'
            return ''
        },
    },
    methods: {
        changeRoute(routeName) {
            this.$router.push(`/${routeName}`)
        },
        changeState() {
            console.log(this.isActive)
            this.$data.isActive = !this.$data.isActive
        },
    },
}
</script>

<style></style>
