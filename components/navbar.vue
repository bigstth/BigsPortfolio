<template lang="html">
  <Row type="flex" justify="space-between" class="mainTopbar">
    <div class="siteName">
      <Nuxt-link :to="logo.to">
        <img :src="logo.url" alt="Sitthi's Portfolio Logo"
      /></Nuxt-link>
    </div>
    <div class="mobileMenu">
      <Button type="default" ghost @click="mobileMenuShow"
        ><Icon type="md-menu"
      /></Button>
    </div>
    <Menu
      mode="horizontal"
      theme="light"
      active-name="1"
      width="auto"
      class="menuLists"
      :style="{
        border: 'none',
        display: mobileMenu,
      }"
    >
      <MenuItem
        v-for="item in menuItems"
        :key="item.id"
        :name="item.id"
        :to="item.to"
        class="menuItem"
      >
        <Icon :type="item.icon" />
        {{ item.name }}
      </MenuItem>
    </Menu>
  </Row>
</template>

<script>
export default {
  data() {
    return {
      mobileMenu: 'flex',
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
  methods: {
    mobileMenuShow() {
      if (this.mobileMenu.includes('flex')) {
        this.mobileMenu = 'none !important'
      } else {
        this.mobileMenu = 'flex !important'
      }
    },
  },
}
</script>

<style lang="css" scoped>
.siteName {
  color: white;
  padding: 0.6rem 2rem;
}
.menuItem {
  color: white !important;
  border: none !important;
  font-size: 0.75rem;
}
.menuLists {
  display: flex;
  flex-wrap: wrap;
  background: transparent;
  transition: 0.5s;
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
.mobileMenu {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px 10px 10px 0px;
  display: none;
}
@media screen and (max-width: 820px) {
  .mobileMenu {
    display: flex;
  }
  .menuLists {
    justify-content: center;
    align-items: center;
    flex-grow: 2;
    display: none !important;
  }
  .mainTopbar {
    background: rgba(0, 0, 0, 0.8);
  }
  .menuItem {
    flex: 100%;
    background: rgba(0, 0, 0, 0.8);
  }
}
</style>
