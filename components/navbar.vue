<template lang="html">
  <Row type="flex" justify="space-between" class="mainTopbar">
    <div class="siteName">
      <Nuxt-link :to="logo.to">
        <img :src="logo.url" alt="Sitthi's Portfolio Logo"
      /></Nuxt-link>
    </div>
    <Menu
      mode="horizontal"
      theme="light"
      active-name="1"
      width="auto"
      class="menuLists"
      :style="{
        backgroundColor: 'transparent',
        border: 'none',
      }"
    >
      <div class="siteMenus">
        <MenuItem
          v-for="item in menuItems"
          :key="item.id"
          :name="item.id"
          :to="item.to"
        >
          <Icon :type="item.icon" />
          {{ item.name }}
        </MenuItem>
      </div>
    </Menu>
  </Row>
</template>

<script>
export default {
  data() {
    return {
      logo: {
        url: require('@/assets/images/logo.png'),
        to: { name: 'index' },
      },
      menuItems: [
        {
          id: 1,
          name: 'HOME',
          icon: 'ios-home',
          to: { name: 'index' },
        },
        {
          id: 2,
          name: 'PERSONAL INFORMATION',
          icon: 'ios-person',
          to: { name: 'info' },
        },
        {
          id: 3,
          name: 'WORKS',
          icon: 'ios-paper',
          to: { name: 'works' },
        },
        {
          id: 4,
          name: 'EXPERIENCES',
          icon: 'ios-bulb',
          to: { name: 'experiences' },
        },
      ],
    }
  },
}
</script>

<style lang="css" scoped>
.siteName {
  color: white;
  padding: 0.6rem 2rem;
  z-index: 990;
}
.ivu-menu-item {
  color: white !important;
  border: none !important;
  font-size: 0.75rem;
}
.siteMenus {
  display: flex;
  flex-wrap: wrap;
}
.menuLists {
  display: block;
}
.ivu-menu-item:hover {
  color: #ccc !important;
  border-top: 2px solid #ccc !important;
  border-bottom: none !important;
}
.ivu-menu-item-active {
  color: #ccc !important;
  border-top: 2px solid #ccc !important;
  border-bottom: none !important;
}
.ivu-menu-horizontal.ivu-menu-light:after {
  background: none;
}
@media screen and (max-width: 830px) {
  .menuLists {
  }
}
</style>
