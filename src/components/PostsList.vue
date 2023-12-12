<template>
    <section>
      <div class="container" v-if="posts">
        <template v-if="!showAll">
          <template v-for="(category, index) in categories" :key="index">
            <div v-if="index === 0" class="first-cat">
              <h2>{{ category }}</h2>
              <span @click="toggleShowAll()">View all</span>
            </div>
            <h2 v-else>{{ category }}</h2>
            <template v-for="post in filteredData(category).slice(0, 3)" :key="post.id">
              <SinglePostVue :post="post" />
            </template>
          </template>
        </template>
        <template v-else>
            <template v-for="post in posts" :key="post.id">
              <SinglePostVue :post="post" />
            </template>
        </template>
      </div>
      <div v-else>
        <LoadingVue/>
      </div>
    </section>
  </template>

<script>
import { ref } from 'vue'
import SinglePostVue from './SinglePost.vue'
import LoadingVue from './Loading.vue'

export default {
    props:["posts"],
    components: {SinglePostVue , LoadingVue},
    setup(props)
    {
        const categories = ref([])
        const showAll = ref(false)

        categories.value =[...new Set (props.posts.map((post) => post.category))]
        
        const filteredData = (category) => {
            return props.posts.filter((post) => post.category === category)
        }
        const toggleShowAll =()=> {
            showAll.value = !showAll.value
        }
        return { categories , filteredData, showAll, toggleShowAll}
    }
}
</script>
<style scoped lang="scss">
section{
    background: #F2F4F7;
    padding: 20px 0px;
    h2{
        margin-bottom: 20px;
        text-transform: capitalize;
    }
    .first-cat{
        display: flex;
        justify-content: space-between;
        span{
            background: white;
            border-radius: 8px;
            border: 1px solid #eee;
            height: fit-content;
            padding: 5px;
            cursor: pointer;
        }
    }
}
</style>