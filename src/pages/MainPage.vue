<template>
  <div class="app">
    <MainHeader />
    <Event />
    <div class="content">
      <MainNav v-on:selectEvent='setSelectMenu' />
      <Content v-bind:selectMenu = 'selectMenu'/>
    </div>
    <MainFooter />
  </div>
</template>

<script>
import MainHeader from '../components/MainHeader'
import MainNav from '../components/MainNav'
import Content from '../components/Content'
import MainFooter from '../components/MainFooter'
import Event from '../components/Event'

export default {
  name: 'App',
  components: {
    MainHeader,
    Event,
    MainNav,
    Content,
    MainFooter
  },
  data: function() {
    return {
      selectMenu: {name:'all', view: '전체', config: 'category'},

    }
  },
  methods: {
    setSelectMenu: function(select) {
      this.selectMenu = select;
    }
  }
}
</script>

<style>
  a {
    text-decoration: none;
    color: black;
  }

  .app > .content {
    display: flex;
  }
</style>