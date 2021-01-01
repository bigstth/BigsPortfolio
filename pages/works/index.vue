<template lang="html">
  <div class="works-container">
    <subpageHeader class="subpageHeader">
      <template slot="headerTitle">{{ pageInfo.title }}</template>
      <template slot="navigationName">{{ pageInfo.navigationName }}</template>
    </subpageHeader>
    <showListItems></showListItems>
  </div>
</template>

<script>
import subpageHeader from '@/components/subpageHeader'
import showListItems from '@/components/portfolioItems/showListItems'
export default {
  head() {
    return this.$headUtil({
      title: `Sitthi's Portfolio | Works`,
    })
  },
  components: {
    subpageHeader,
    showListItems,
  },
  data() {
    return {
      pageInfo: {
        title: 'Works',
        navigationName: 'Works',
      },
    }
  },
}
</script>

<style lang="css" scoped>
.container {
  height: 100%;
}
</style>
