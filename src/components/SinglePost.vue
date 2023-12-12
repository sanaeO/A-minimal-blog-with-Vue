<template>
    <router-link :to="{ name: 'PostView' , params: { id : post.id }}">
    <div class="post">   
        <div>
            <p>{{ getDate(post.publishedAt) }}</p>
            <h3>{{ post.title  }}</h3>
            <p>{{ getDescription() }}</p>
        </div>
        <img :src="post.thumbnail" />
    </div>
    </router-link>
</template>

<script>
import { getDate } from "@/helpers/getDate"
export default {
    props: ["post"],
    setup(props) {
      const getDescription = () => {
        return props.post.content.substring(0 , 150) + ' ..';
      }  
      return{ getDescription , getDate}
    },
}
</script>

<style scoped lang="scss">
.post{
    background: #FFF;
    color:#000;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 100px;
    padding: 20px;
    border-radius: 20px;
    margin-bottom: 20px;
    div{
        p:first-of-type{
            padding-bottom: 20px;
            font-size: 13px;
            font-weight: 400;
            color: #667085;
            text-transform: uppercase;
        }
        h3{
            font-size: 26px;
            font-weight: 600;
            padding-bottom: 10px;
        }
    }
    img{
        border-radius: 10px;
    }
}
</style>
