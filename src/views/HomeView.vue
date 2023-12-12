<template>
  <div>
    <LandingVue/>
    <!-- Posts  -->
    <div v-if="error">{{ error }}</div>
    <div v-if="posts.length">
        <PostsListVue  :posts="posts"/>
    </div>
    <div v-else> 
      <LoadingVue/>
    </div>
  </div>
</template>

<script>
import LandingVue from "@/components/Landing.vue";
import PostsListVue from '@/components/PostsList.vue';
import LoadingVue from '@/components/Loading.vue';

export default {
  components : { LandingVue , PostsListVue , LoadingVue},
  props: { 
    posts: {
      type: Array, 
      required: true 
    },
    error: {
      type: String,
      default: '' 
    }
   }
}
</script>