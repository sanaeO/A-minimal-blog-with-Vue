<template>
    <div class="container"  v-if="post">
        <div class="landing">
            <h2>{{post.title}}</h2>
            <p>
                {{ getDate(post.publishedAt) }} . <span>{{ post.category }}</span>
            </p>
        </div>
        <div class="content">
            <img :src="post.thumbnail" alt="post's image" />
           <p>{{ post.content }}</p>
           <img :src="post.image" alt="post's image" />
        </div>
    </div>
</template>
<script>

// import {getPost} from "@/composables/getPost"
import {getDate} from "@/helpers/getDate"
import { ref } from "vue"

export default {
    props : ['id'],
    setup(props) {

    const post = ref(null)
    const error = ref(null)

    const load = async () => {
        try{
            let data =await fetch(`https://jsonplaceholder.org/posts/${props.id}`)
            if(!data.status === 200)
            {
                throw Error("No data available !")
            }else{
                post.value = await data.json()
            }

        }catch(err){
            error.value = err.message
        }
       
    }
    // const { post , error , load } = getPost(props.id)
    load()
    return { post , error ,load , getDate}
    },
}
</script>
<style lang="scss" scoped>
.container{
    padding-bottom: 50px;
    .landing{
        height: 450px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        h2 {
            font-size: 70px ;
            font-weight: bold;
            background: linear-gradient(97deg, #C41740 4.8%, #EA9C28 100%);
            -webkit-background-clip: text;
            background-clip: text;
            color: transparent; /* Hide the text color */
            text-align: center;
        }
        p{
            span{
                font-weight: bold;
                text-transform: uppercase;
            }
        }
    }
    .content{
        img{
            width: 100%;
            max-height: 500px;
            border-radius: 10px;
        }
        p{
            padding: 30px 0;
            line-height:1.8 ;
        }
    }
}

</style>