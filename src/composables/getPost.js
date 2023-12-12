import ref from "vue"

export const getPost =(id)=> {
    const post = ref(null)
    const error = ref(null)

    const load = async () => {
        try{
            let data =await fetch(`https://jsonplaceholder.org/posts/${id}`)
           console.log("data ",data)
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
    return { post , error , load }
}