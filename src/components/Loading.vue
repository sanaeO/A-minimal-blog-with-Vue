<template>
    <div class="loading-container">
    <div class="loading-dots">
      <div class="loading-dot"></div>
      <div class="loading-dot"></div>
      <div class="loading-dot"></div>
    </div>
  </div>
</template>
<script>
export default ({
    name:"LoadingVue"
    // setup() {
        
    // },
})
</script>

<style scoped>
.loading-container{
   width: 100%;
   display: flex;
   justify-content: center;
}
.loading-dot {
  width: 10px;
  height: 10px;
  background-color: #3498db;
  border-radius: 50%;
  display: inline-block;
  margin: 0 2px;
  animation: moveAndChangeColor 1.9s infinite linear alternate;
}
.loading-dot:nth-child(2) {
  animation-delay: 0.25s;
}
.loading-dot:nth-child(3) {
  animation-delay: 0.5s;
}
@keyframes moveAndChangeColor {
  0%,
  100% {
    transform: translateY(0);
    background-color: #3498db;
  }
  25%,
  75% {
    transform: translateY(-20px);
    background-color: #e74c3c;
  }
}

@keyframes moveAndChangeColor {
  0%,
  100% {
    transform: translateY(0);
    background-color: #3498db;
  }
  50% {
    transform: translateY(-20px);
    background-color: #e74c3c;
  }
}
</style>