<template>
    <div class="landing container">
        <h2>{{ name }}</h2>
        <p>
            A description of the respective category goes right here. Be as expressive as possible, but in brief.
        </p>
    </div>
    <section>
        <div class="container">
        <!-- Posts  -->
        <div v-if="error">{{ error }}</div>
        <div v-if="postsCat.length">
            <template v-for="(post , index) in postsCat" :key="index">
            <SinglePost  :post="post"/>
            </template>
        </div>
        <div v-else> 
            <LoadingVue/>
        </div>
    </div>
    </section>
</template>

<script>
import { watch , ref } from 'vue'
import SinglePost from '@/components/SinglePost.vue'
import LoadingVue from '@/components/Loading.vue'

export default {
    components : {SinglePost , LoadingVue},
    props:{name:String, posts:Array , error:String},
    setup(props) {
        const postsCat = ref(props.posts.filter(post => post.category === props.name))
        watch(()=> props.name, ()=>{
        postsCat.value = props.posts.filter((post)=> post.category == props.name)
    })
        return { postsCat }
    },
}
</script>
<style lang="scss" scoped>
 .landing{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 300px;
    h2{
        font-size: 76px ;
        font-weight: bold;
        background: linear-gradient(97deg, #C41740 4.8%, #EA9C28 100%);
        -webkit-background-clip: text;
        background-clip: text;
        color: transparent; 
        display: block;
    }
    p{
        max-width: 60%;
        color : #475467;
        font-size: 28px;
        font-style: normal;
        font-weight: 400;
    }
}
section{
    background: #F2F4F7;
    padding: 30px 0;
}

</style>