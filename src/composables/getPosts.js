import { ref } from 'vue'

const getPosts = () => {
    const posts = ref([])
    const error = ref(null)
    const load = async() => {
        try {
            let data = await fetch("https://jsonplaceholder.org/posts")
            if(!data.status === 200)
            {
                throw Error("No data available !")
            }else{
                posts.value = await data.json()
            }
        }catch(err){
            error.value = err.message
        }
    }
        return { posts , error , load }
}
export default getPosts;