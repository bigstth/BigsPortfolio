<template lang="html">
  <div class="container">
    <div class="backgroundOverlay"></div>
    <div class="middleBox">
      <div class="title">
        <h2 class="headerTitle">
          <slot name="headerTitle">{{ defaultTitleName }}</slot>
        </h2>
      </div>
      <div class="breadCrumbs">
        <Breadcrumb separator=">">
          <BreadcrumbItem :to="{ name: 'index' }"
            ><span :style="{ color: '#ccc' }">{{
              mainPage
            }}</span></BreadcrumbItem
          >
          <BreadcrumbItem>
            <span :style="{ color: '#ccc' }"
              ><slot name="navigationName">{{
                defaultBreadcrumbName
              }}</slot></span
            ></BreadcrumbItem
          >
        </Breadcrumb>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      defaultTitleName: `Sitthi's Portfolio`,
      mainPage: 'Home',
      defaultBreadcrumbName: 'Page',
    }
  },
}
</script>

<style lang="css" scoped>
.container {
  background: url('../assets/images/bg.png');
  background-size: cover;
  height: 340px !important;
  display: flex;
  background-position: 50% 50%;
}
.middleBox {
  z-index: 2;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 340px;
  width: 100%;
}
.title {
  display: flex;
  align-items: center;
  flex: 1 1 auto;
}
.breadCrumbs {
  flex: 0 0 auto;
  padding-bottom: 1.5rem;
  display: flex;
}

.headerTitle {
  font-family: 'Montserrat';
  font-size: 25px;
  color: white;
}
.backgroundOverlay {
  background-color: #000;
  z-index: 1;
  position: absolute;
  width: 100%;
  height: 340px;
  opacity: 0.3;
}
</style>
