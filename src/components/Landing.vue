<template>
    <section> 
        <div class="container">
        <span>👋 Meet Personally</span>
        <h2>Minimal blog template for creative expressions</h2>
        <p>100% customisable and SEO-friendly blog template for personal and commercial purposes.</p>
        </div>
    </section>
</template>
<script>
export default {
    name:"LandingVue",
}
</script>
<style scoped lang="scss">
@import '../global.scss';
section{
    height: calc(100vh  - 75px);
    display: flex;
    text-align: center;
    align-items: center;
    span{
        background-color : #F2F4F7;
        border-radius: 100px;
        padding: 10px 15px;
        text-align: center;
    }
    h2{
        margin: 60px 0px 40px;
        font-size: 76px ;
        font-weight: bold;
        background: linear-gradient(97deg, #C41740 4.8%, #EA9C28 100%);
        -webkit-background-clip: text;
        background-clip: text;
        color: transparent; /* Hide the text color */
    }
    p{
        color: #475467;
        font-size: 28px;
        font-weight: 400;
    }
}
</style>