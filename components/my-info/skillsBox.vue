<template lang="html">
  <div class="skills-container">
    <sectionTitle textAlignTitle="center" :title="title"></sectionTitle>
    <Row type="flex" justify="space-around">
      <Col
        :xs="{ span: 24 }"
        :sm="{ span: 24 }"
        :lg="{ span: 12, offset: 0 }"
        class="skillsBoxSubSection"
      >
        <div v-for="cardProp in cardProps" :key="cardProp.id">
          <smallCard :cardProps="cardProp"></smallCard>
        </div>
      </Col>
      <Col
        :xs="{ span: 24 }"
        :sm="{ span: 24 }"
        :lg="{ span: 12, offset: 0 }"
        class="skillsBoxSubSection"
      >
        <div v-for="item in progressBoxs" :key="item.id">
          <progressBarBox :progressInfo="item"></progressBarBox>
        </div>
      </Col>
    </Row>
  </div>
</template>

<script>
import sectionTitle from '@/components/text-items/sectionTitle'
import smallCard from '@/components/text-items/smallCard'
import progressBarBox from '@/components/text-items/progressWithTitle'
export default {
  components: {
    sectionTitle,
    smallCard,
    progressBarBox,
  },
  data() {
    return {
      title: 'Education & Skills',
      cardProps: [
        {
          id: 1,
          name: 'Bangkok University',
          date: '2019-Present',
          icon: 'md-school',
          description:
            'Banchelor of Information Technology and Innovation , Major Software Engineering.',
        },
        {
          id: 2,
          name: 'Suankularb Wittayalai Rangsit School',
          date: '2011-2017',
          icon: 'ios-ribbon',
          description: 'Major English-Chinese.',
        },
      ],
      progressBoxs: [
        {
          id: 1,
          title: 'HTML/CSS/Boostrap v4',
          percent: 80,
          colors: ['#FF6726', '#FF0000'],
        },
        {
          id: 2,
          title: 'Javascript, PHP, Database / SQL, Git',
          percent: 60,
          colors: ['#FF9E00', '#FF4C00'],
        },
        {
          id: 3,
          title: 'Java, Laravel, C, OOP Concept',
          percent: 50,
          colors: ['#FF6DC3', '#FF0097'],
        },
        {
          id: 4,
          title: 'Wordpress, Photoshop, English',
          percent: 60,
          colors: ['#00FFD8', '#00C5FF'],
        },
        {
          id: 5,
          title: 'Communication & Friendly',
          percent: 99,
          colors: ['#40FF69', '#00D845'],
        },
      ],
    }
  },
}
</script>

<style lang="css" scoped>
.skills-container {
  padding: 72px 0px;
  margin-bottom: 72px;
  background: white;
  width: 100%;
}
.skillsBoxSubSection {
  padding: 64px 16px 0px 16px;
}
</style>
