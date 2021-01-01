<template lang="html">
  <div class="show-list-container">
    <div class="btnLists">
      <Button @click="filterBox('All')">ALL</Button>
      <Button @click="filterBox('Develop')">DEVELOP</Button>
      <Button @click="filterBox('Design')">DESIGN</Button>
      {{ btnFilters }}
    </div>
    <div class="list-items">
      <showItemBox
        v-for="workBoxProp in workBoxProps"
        :key="workBoxProp.id"
        :workBoxProps="workBoxProp"
        class="workItemBox"
      ></showItemBox>
    </div>
  </div>
</template>

<script>
import showItemBox from '@/components/portfolioItems/showItemBox'
export default {
  components: {
    showItemBox,
  },
  data() {
    return {
      btnFilters: '',
      workBoxDatas: [
        {
          id: 1,
          title: 'bigNovel',
          category: 'Develop',
          coverImage: require('@/assets/images/portfolios/bignovel/bignovelcover.jpg'),
          to: 'bignovel',
          description:
            'Novels reading platform for everyone who love to read novels. This project is made for learning about Laravel.',
          skills: 'HTML, CSS, PHP, SQL, Laravel',
        },
        {
          id: 2,
          title: 'Esports Competition Center',
          category: 'Develop',
          coverImage: require('@/assets/images/portfolios/ecc/cover.png'),
          to: 'esports-competition-center',
          description:
            'E-sports Competition Center is a Senior Project website for make everyone can create and management e-sports tournament easier.',
          skills: 'HTML, CSS, JAVASCRIPT, PHP, SQL',
        },
        {
          id: 3,
          title: 'Cheap Toon',
          category: 'Develop',
          coverImage: require('@/assets/images/portfolios/cheaptoon/ctcover.jpg'),
          to: 'cheaptoon',
          description: 'A website center for buying-selling used comic books.',
          skills: 'HTML, CSS, PHP, SQL',
        },
        {
          id: 4,
          title: 'Search Travel Place Website',
          category: 'Develop',
          coverImage: require('@/assets/images/portfolios/prasittichoklada/coverprasittichoklada.jpg'),
          to: 'search-travel-place-website',
          description:
            'This project is created for search a travel place in database. You can search travelplace, add new travel place.',
          skills: 'HTML, CSS, PHP, JAVASCRIPT',
        },
        {
          id: 5,
          title: 'BPMN Registration System',
          category: 'Design',
          coverImage: require('@/assets/images/portfolios/BPMN/coverbpmn.png'),
          to: 'bpmn-registration-system',
          description:
            'Redesign the Registration system of Bangkok University by using BPMN . This work is as a part of subject Software Process Improvement.',
          skills: 'BPMN Design.',
        },
        {
          id: 6,
          title: 'COVID 19 Statistics',
          category: 'Develop',
          coverImage: require('@/assets/images/portfolios/covid/covercovid.png'),
          to: 'covid-19-statistics',
          description:
            'Show statistics that happened on COVID-19 situation by using data from public API.',
          skills: 'HTML/CSS/JS',
        },
        {
          id: 7,
          title: 'APPLICATION "BU SHUTTLE BUS"',
          category: 'Design',
          coverImage: require('@/assets/images/portfolios/shuttlebusapp/coverphoneapp.jpg'),
          to: 'bu-shuttle-bus',
          description:
            'This project is a work in Mobile Application subject. User can see all bus stop in university. (concept feature: User can see time to wait the shuttle bus and distance between user and shuttle bus.)',
          skills: 'Design UI/UX , Swift',
        },
      ],
      workBoxProps: [],
      btnStyle: {
        color: 'black',
        borderColor: 'black',
      },
    }
  },
  mounted() {
    this.workBoxProps = this.workBoxDatas
  },
  methods: {
    filterBox(category) {
      if (category !== 'All') {
        this.workBoxProps = this.workBoxDatas.filter(function (workBoxData) {
          return workBoxData.category.includes(category)
        })
      } else {
        this.workBoxProps = this.workBoxDatas
      }
    },
  },
}
</script>

<style lang="css" scoped>
.show-list-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 24px 12px 24px 12px;
}
.list-items {
  display: flex;
  width: 100%;
  justify-content: center;
  flex-wrap: wrap;
}
.btnLists {
  margin: 12px 0px 16px 0px;
}
.workItemBox {
  margin: 4px 4px 6px 4px;
}
</style>
