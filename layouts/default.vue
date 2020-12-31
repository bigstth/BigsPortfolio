<template>
  <div>
    <Navbar class="mainTopbar"></Navbar>
    <Nuxt />
    <Footer></Footer>
  </div>
</template>
<script>
import Navbar from '@/components/navbar'
import Footer from '@/components/footer'
export default {
  components: {
    Navbar,
    Footer,
  },
  data() {
    return {}
  },
}
</script>
<style>
html {
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
  margin: 0 auto;
}
.mainTopbar {
  position: absolute;
  width: 100%;
}
</style>
