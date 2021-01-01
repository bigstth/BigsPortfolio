<template lang="html">
  <div :style="{ textAlign: textAlignTitle }" class="sectionTitleBox">
    <h1 class="sectionTitle">{{ title }}</h1>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: true,
    },
    textAlignTitle: {
      type: String,
      required: false,
      default: 'center',
    },
  },
}
</script>

<style lang="css" scoped>
.sectionTitleBox {
  height: 45px;
  width: 100%;
}
.sectionTitle {
  font-size: 2.05rem;
  font-weight: 600;
  letter-spacing: 2px;
  line-height: 42px;
  text-transform: uppercase;
  color: black;
}
</style>
