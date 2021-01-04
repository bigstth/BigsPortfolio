<template lang="html">
  <div class="container">
    <div class="backgroundOverlay"></div>
    <div class="middleBox">
      <h1>{{ siteHeader.title }}</h1>
      <p>{{ siteHeader.description }}</p>
      <Button :to="siteHeader.button.to" class="middleBtn" type="default" ghost
        ><Icon
          :type="siteHeader.button.icon"
          size="23"
          style="padding-right: 0.3rem,font-weight:700;"
        />{{ siteHeader.button.name }}</Button
      >
      Hello Hello2
    </div>
  </div>
</template>

<script>
import '@/assets/main.css'
export default {
  data() {
    return {
      siteHeader: {
        title: 'PORTFOLIO',
        description: 'Sitthi Thammawong',
        button: {
          name: 'Discover More',
          to: { name: 'info' },
          icon: 'ios-information-circle-outline',
        },
      },
    }
  },
}
</script>

<style lang="css" scoped>
.backgroundOverlay {
  background-color: #141619;
  z-index: 1;
  position: absolute;
  width: 100%;
  height: 100%;
  opacity: 0.25;
}
.container {
  background: url('../assets/images/bg.png');
  background-size: cover;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-position: 50% 50%;
}
.middleBox {
  text-align: center;
  color: white;
  z-index: 2;
}
.middleBox h1 {
  font-family: 'Oswald';
  letter-spacing: 2px !important;
  text-transform: none !important;
  font-size: 4rem;
}
.middleBox p {
  font-family: 'sans-serif';
  font-size: 1.6rem;
  margin: 0px 0px 20px;
}
.middleBox .middleBtn {
  font-family: 'Montserrat';
  font-size: 0.8rem;
  padding: 0.7rem 2rem;
  margin: 0px 0.5rem;
}
.middleBox .middleBtn:hover {
  font-family: 'Montserrat';
  color: black;
  border-color: #fff;
  background-color: #fff;
  font-size: 0.8rem;
  padding: 0.7rem 2rem;
  margin: 0px 0.5rem;
}
</style>
