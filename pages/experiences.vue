<template lang="html">
  <div class="exp-container">
    <subpageHeader class="subpageHeader">
      <template slot="headerTitle">{{ pageInfo.title }}</template>
      <template slot="navigationName">{{ pageInfo.navigationName }}</template>
    </subpageHeader>
    <Row class="expCardSection">
      <div v-for="expCardInfo in expCardInfos" :key="expCardInfo.id" class="">
        <experienceCard
          :expCardInfo="expCardInfo"
          class="expCard"
        ></experienceCard>
      </div>
    </Row>
  </div>
</template>

<script>
import subpageHeader from '@/components/subpageHeader'
import experienceCard from '@/components/text-items/experienceCard'
export default {
  head() {
    return this.$headUtil({
      title: `Sitthi's Portfolio | Experiences`,
    })
  },
  components: {
    subpageHeader,
    experienceCard,
  },
  data() {
    return {
      pageInfo: {
        title: 'Experiences',
        navigationName: 'Experiences',
      },
      expCardInfos: [
        {
          id: 1,
          title: 'Has been staff of "BU OPEN HOUSE" ',
          imgUrl: require('@/assets/images/contents/openHouse.jpg'),
        },
        {
          id: 2,
          title: 'Has Been a Teacher Assistant in "GENERAL EDUCATION" subject',
          imgUrl: require('@/assets/images/contents/GEclass.jpg'),
        },
        {
          id: 3,
          title: 'Has Been a Staff of Team Organizing "BU E-SPORTS SEMINAR"',
          imgUrl: require('@/assets/images/contents/IMG_2821-2048x1536.jpg'),
        },
        {
          id: 4,
          title:
            'Worked Part-Time job at "THE PIZZA COMPANY" as Customer Service',
          imgUrl: require('@/assets/images/contents/pizza-379x485.png'),
        },
        {
          id: 5,
          title:
            'Has Been a Staff of Organizing Team "BU E-SPORTS COMPETITIONS"',
          imgUrl: require('@/assets/images/contents/IMG_3146-scaled-379x485.jpg'),
        },
        {
          id: 6,
          title: 'Good Study Award 2019',
          imgUrl: require('@/assets/images/contents/1.png'),
        },
        {
          id: 7,
          title: 'Good Study Award 2020',
          imgUrl: require('@/assets/images/contents/2.png'),
        },
      ],
    }
  },
}
</script>

<style lang="css" scoped>
.exp-container {
  height: 100%;
}
.expCardSection {
  background: #f7f7f7;
  padding: 20px;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  flex-wrap: wrap;
}
.expCardLists {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
}
.expCard {
  width: 450px;
}
@media screen and (max-width: 500px) {
  .expCard {
    width: 350px;
  }
}
</style>
