<template lang="html">
  <div class="progressBarBox">
    <p>{{ progressInfo.title }}</p>
    <Progress
      :percent="progressInfo.percent"
      :stroke-color="progressInfo.colors"
      status="active"
    />
  </div>
</template>

<script>
export default {
  props: {
    progressInfo: {
      type: Object,
      required: true,
    },
  },
}
</script>

<style lang="css" scoped>
.progressBarBox {
  width: 100%;
}
</style>
