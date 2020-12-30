<template lang="html">
  <div class="">
    <Menu
      mode="horizontal"
      theme="light"
      active-name="1"
      :style="{
        display: 'flex',
        justifyContent: 'space-between',
        backgroundColor: 'transparent',
        border: 'none',
        flexWrap: 'wrap',
      }"
    >
      <div class="siteName">
        <img src="~/assets/images/logo.png" alt="Sitthi's Portfolio Logo" />
      </div>
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
  </div>
</template>

<script>
export default {
  data() {
    return {
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
}
.ivu-menu-item {
  color: white !important;
  border: none !important;
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
</style>
