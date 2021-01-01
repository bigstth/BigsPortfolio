<template lang="html">
  <div class="info-container">
    <subpageHeader class="subpageHeader">
      <template slot="headerTitle">{{ pageInfo.title }}</template>
      <template slot="navigationName">{{ pageInfo.navigationName }}</template>
    </subpageHeader>
    <infoBox :profileInfo="profileInfo"></infoBox>
    <skillsBox></skillsBox>
  </div>
</template>

<script>
import subpageHeader from '@/components/subpageHeader'
import infoBox from '@/components/my-info/infoBox'
import skillsBox from '@/components/my-info/skillsBox'
export default {
  head() {
    return this.$headUtil({
      title: `Sitthi's Portfolio | Information`,
    })
  },
  components: {
    subpageHeader,
    infoBox,
    skillsBox,
  },
  data() {
    return {
      pageInfo: {
        title: 'Personal Information',
        navigationName: 'Info',
      },
      profileInfo: {
        profilePic: require('@/assets/images/me.jpg'),
        name: 'Sitthi Thammawong',
        nickName: 'Big',
        age: 22,
        sex: 'Male',
        nationality: 'Thai',
        address:
          'Bueng-Yitho Sub-area Thanyaburi Area Pathumthani 12130 Thailand',
        email: 'sitthi.tham@bumail.net',
        tel: '0917374500',
      },
    }
  },
}
</script>

<style lang="css" scoped>
.info-container {
  height: 100%;
  background-color: #f7f7f7;
}
</style>
