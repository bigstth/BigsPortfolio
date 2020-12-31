<template lang="html">
  <div class="footer">
    <div class="footerBox">
      <div class="">
        <Nuxt-link :to="logo.to">
          <img :src="logo.url" alt="Sitthi's Portfolio Logo" class="logoFooter"
        /></Nuxt-link>
      </div>
      <div class="socialIcons">
        <div
          v-for="item in socialIcons"
          :key="item.id"
          style="padding: 0px 5px"
        >
          <a :href="item.to">
            <Icon :type="item.name" size="20" style="color: white"></Icon>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      logo: {
        url: require('@/assets/images/logo.png'),
        to: { name: 'index' },
      },
      socialIcons: [
        {
          id: 1,
          name: 'logo-github',
          to: 'https://github.com/bigstth',
        },
        {
          id: 2,
          name: 'logo-facebook',
          to: 'https://www.facebook.com/sitthi.thammawong/',
        },
        {
          id: 3,
          name: 'ios-mail',
          to: 'mailto:sitthi.thambumail.net',
        },
      ],
    }
  },
}
</script>

<style lang="css" scoped>
.footer {
  background-color: #1c1d1f;
  position: relative;
}
.footerBox {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 72px 0px;
  flex-direction: column;
}
.logoFooter {
  padding-bottom: 32px;
}
.socialIcons {
  display: flex;
  flex-direction: row;
}
</style>
