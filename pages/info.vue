<template lang="html">
  <div class="container">
    <subpageHeader class="subpageHeader">
      <template slot="headerTitle">Personal Information</template>
      <template slot="navigationName">Info</template>
    </subpageHeader>
  </div>
</template>

<script>
import subpageHeader from '@/components/subpageHeader'
export default {
  components: {
    subpageHeader,
  },
}
</script>

<style lang="css" scoped>
.container {
  height: 100vh;
}
</style>
