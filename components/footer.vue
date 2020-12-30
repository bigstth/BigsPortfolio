<template lang="html">
  <div class="footer">
    <div class="footerBox">
      <div class="">
        <img src="~/assets/images/logo.png" alt="Sitthi's Portfolio Logo" />
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
}
.footerBox {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 72px 0px;
  flex-direction: column;
}
.socialIcons {
  display: flex;
  flex-direction: row;
}
</style>
