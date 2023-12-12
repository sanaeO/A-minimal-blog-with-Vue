  <template>
  <div>
    <NavbarVue :posts="posts"/>
    <router-view :posts="posts" :error="error" />
    <FooterVue />
  </div>
  </template>

  <script>
  import NavbarVue from '@/components/Navbar.vue'
  import FooterVue from "@/components/footer/Footer.vue"
  import getPosts from "@/composables/getPosts";
  export default{
    components: { NavbarVue , FooterVue },
    setup() {
        const { error , posts , load } = getPosts()
        load()
        return { posts , error}
    },
  }
  </script>

  <style lang="scss">
  @import './global.scss';
  </style>
