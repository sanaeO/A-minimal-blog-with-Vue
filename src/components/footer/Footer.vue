<template>
    <div class="container">
    <NewsletterVue/>
    <CopyrightVue/>
    </div>
</template>
<script>
import CopyrightVue from "./Copyright.vue"
import NewsletterVue from "./Newsletter.vue"
export default {
    name:"FooterVue",
    components : {CopyrightVue , NewsletterVue},
    // setup() {
        
    // },
}
</script>
<style lang="scss" scoped>

</style>
