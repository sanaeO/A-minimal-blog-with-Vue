<template>
<div class="footer">
    <h3>Personally Newsletter</h3>
    <p>A bi-weekly newsletter of design inspiration,<br/> resources and anything related to career development.</p>
    <form>
        <input type="text" placeholder="Email address"/>
        <button>Subscribe</button>
    </form>
</div>    
</template>

<script>

export default {
    name:"NewsletterVue",
    // setup() {
        
    // },
}
</script>
<style lang="scss" scoped>
.footer{
    text-align: center;
    padding: 40px 0 20px;
    h3{
        font-size: 28px;
        font-weight: bold;
        background: linear-gradient(97deg, #C41740 4.8%, #EA9C28 100%);
        -webkit-background-clip: text;
        background-clip: text;
        color: transparent; /* Hide the text color */
    }
    p{
        font-size: 18px;
        font-weight: 400;
        color: #475467;
        padding: 10px 0 30px;
    }
    form{
        position: relative;
        width: 35%;
        margin: auto;
        // display: flex;
        // justify-content: center;
        input{
            outline: none;
            height: 50px;
            border-radius: 8px;
            padding-left: 10px;
            border: 1px solid #D0D5DD;
            position: relative;
            width: 100%;
        }
        button{
            height: 50px;
            border-top-right-radius: 8px;
            border-bottom-right-radius: 8px;
            outline: 0;
            border: 0;
            background: #1D2939;
            color: #FFF;
            padding: 0px 20px;
            position: absolute;
            right: -10px;
            cursor: pointer;
            font-weight: 600;
        }
}
}
</style>
