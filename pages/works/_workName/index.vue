<template lang="html">
  <div class="workName-container">
    <subpageHeader class="subpageHeader" navigationNameTwo="true">
      <template slot="headerTitle">{{ workInfo.title }}</template>
      <template slot="navigationName">{{ pageInfo.navigationName }}</template>
      <template slot="navigationName2">{{ workInfo.title }}</template>
    </subpageHeader>
    <div class="workDescription">
      <img
        :src="workInfo.coverImage"
        :alt="workInfo.title"
        style="max-width: 650px; width: 100%; border-radius: 5px"
      />
      <div :style="{ padding: '24px 12px 24px 12px' }">
        <h4><b>Description : </b>{{ workInfo.description }}</h4>
        <h4><b>Skills : </b>{{ workInfo.skills }}</h4>
      </div>
    </div>
  </div>
</template>

<script>
import subpageHeader from '@/components/subpageHeader'
export default {
  head() {
    return this.$headUtil({
      title: `Sitthi's Portfolio | ${this.workInfo.title}`,
    })
  },
  components: {
    subpageHeader,
  },
  data() {
    return {
      pageInfo: {
        title: 'Works',
        navigationName: 'Works',
      },
      workInfo: {
        id: '',
        title: 'Work',
        category: 'Work',
        coverImage: '',
        to: '',
        description: '',
        skills: '',
      },
    }
  },
  mounted() {
    this.workInfo = this.$route.params.workInfo
  },
}
</script>

<style lang="css" scoped>
.workName-container {
  height: 100%;
}
.workDescription {
  padding: 24px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
</style>
