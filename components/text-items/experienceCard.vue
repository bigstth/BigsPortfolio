<template lang="html">
  <Card :bordered="false" shadow :style="{ margin: '4px 4px 8px 4px' }">
    <h2
      slot="title"
      style="text-align: center; font-size: 16px; line-height: 24px"
    >
      {{ expCardInfo.title }}
    </h2>
    <div style="display: flex; justify-content: center">
      <img
        :src="expCardInfo.imgUrl"
        :alt="expCardInfo.title"
        class="expCardImg"
      />
    </div>
  </Card>
</template>

<script>
export default {
  props: {
    expCardInfo: {
      type: Object,
      required: true,
    },
  },
}
</script>

<style lang="css" scoped>
.expCardImg {
  max-width: 460px;
  width: 100%;
  max-height: 350px;
  object-fit: cover;
  border-radius: 5px;
}
</style>
