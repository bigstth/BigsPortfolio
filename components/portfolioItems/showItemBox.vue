<template lang="html">
  <div
    :workProp="workBoxInfo"
    @click="
      $router.push({
        name: 'works-workName',
        params: { workName: workBoxInfo.to, workInfo: workBoxInfo },
      })
    "
    class="work-box"
  >
    <img
      :src="workBoxInfo.coverImage"
      :alt="workBoxInfo.title"
      class="workBoxCoverImage"
    />
    <div class="" style="width: 100%">
      <div class="work-box-text">
        <h3>{{ workBoxInfo.title }}</h3>
        <p>{{ workBoxInfo.category }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    workBoxProps: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      workBoxInfo: {
        id: this.workBoxProps.id,
        title: this.workBoxProps.title || 'Work',
        category: this.workBoxProps.category || 'Work',
        coverImage: this.workBoxProps.coverImage || '',
        to: this.workBoxProps.to || '',
        description: this.workBoxProps.description || '',
        skills: this.workBoxProps.skills || '',
      },
    }
  },
}
</script>

<style lang="css" scoped>
.work-box {
  display: flex;
  position: relative;
  max-width: 350px;
  width: 100%;
  height: 350px;
  background-size: cover;
  transition: opacity 0.4s ease-out;
  overflow: hidden;
  cursor: pointer;
}
.work-box::after {
  content: '';
  position: absolute;
  max-width: 350px;
  width: 100%;
  height: 350px;
  opacity: 0;
  background: rgba(0, 214, 240, 0.95);
  transition: opacity 0.4s ease-in-out;
}

.work-box-text {
  position: relative;
  text-align: center;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  top: 0;
  left: 0;
  padding: 14px;
  z-index: 3;
  opacity: 0;
  transition: opacity 0.2s ease-in;
}
.work-box-text h3 {
  font-size: 22px;
  word-break: break-all;
  color: white;
}
.work-box-text p {
  font-size: 14px;
  color: white;
}
.workBoxCoverImage {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: 0.4s ease-in;
}
.work-box:hover::after {
  opacity: 1;
  background: rgba(0, 214, 240, 0.95);
}
.work-box:hover .work-box-text {
  display: flex;
  opacity: 1;
}
.work-box:hover .workBoxCoverImage {
  transform: scale(1.5);
}
</style>
