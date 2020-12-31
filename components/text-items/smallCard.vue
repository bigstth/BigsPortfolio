<template lang="html">
  <Card class="smallCardStyle">
    <Row type="flex" justify="center">
      <Col class="smallCardIcon">
        <Icon :type="cardProps.icon" size="48"></Icon>
      </Col>
      <Col class="smallCardInfo">
        <div class="">
          <h2>{{ cardProps.name }}</h2>
          <small>{{ cardProps.date }}</small>
          <p>{{ cardProps.description }}</p>
        </div>
      </Col>
    </Row>
  </Card>
</template>

<script>
export default {
  props: {
    cardProps: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      cardInfo: this.cardProps,
    }
  },
}
</script>

<style lang="css" scoped>
.smallCardStyle {
  margin: 5px 0px;
  display: flex;
  flex-direction: row;
  align-items: center;
}
.smallCardIcon {
  width: 100px;
  height: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
}
.smallCardInfo {
  display: flex;
  align-items: center;
}
</style>
