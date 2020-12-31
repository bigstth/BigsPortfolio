<template lang="html">
  <div class="infoBox-container">
    <Row type="flex" justify="center" class="infoSection">
      <Col
        :sm="{ span: 24, offset: 0 }"
        :md="{ span: 24, offset: 0 }"
        :lg="{ span: 12, offset: 0 }"
        :style="{
          padding: '0px',
          display: 'flex',
          justifyContent: 'center',
        }"
      >
        <img :src="infoToShow.profilePic" alt="" class="profilePic" />
      </Col>
      <Col
        :sm="{ span: 24, offset: 0 }"
        :md="{ span: 24, offset: 0 }"
        :lg="{ span: 12, offset: 0 }"
        class="personInfo"
      >
        <sectionTitle :title="infoTitle" textAlignTitle="left"></sectionTitle>
        <ul>
          <li><b>Name </b>: {{ infoToShow.name }}</li>
          <li><b>Nicknam </b>: {{ infoToShow.nickName }}</li>

          <li><b>Age </b>: {{ infoToShow.age }}</li>

          <li><b>Sex </b>: {{ infoToShow.sex }}</li>

          <li><b>Nationality </b>: {{ infoToShow.nationality }}</li>

          <li><b>Address </b>: {{ infoToShow.address }}</li>

          <li><b>Email </b>: {{ infoToShow.email }}</li>

          <li><b>Tel </b>: {{ infoToShow.tel }}</li>
        </ul>
      </Col>
    </Row>
  </div>
</template>

<script>
import sectionTitle from '@/components/text-items/sectionTitle'

export default {
  components: {
    sectionTitle,
  },
  props: {
    profileInfo: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      infoTitle: 'INFORMATION',
      infoToShow: this.profileInfo || null,
    }
  },
}
</script>

<style lang="css" scoped>
.infoBox-container {
  position: relative;
  padding: 72px 24px;
  display: flex;
  align-items: center;
}
.infoSection {
  padding-left: 24px;
  padding-right: 24px;
  width: 100%;
}
.profilePic {
  max-width: 340px;
  max-height: 475px;
  margin-bottom: 24px;
}
.personInfo {
  font-size: 14px;
}
.personInfo ul {
  list-style-type: none;
  padding-top: 20px;
  line-height: 40px;
}
</style>
