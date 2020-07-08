<template>
  <div id="app">
    <MainHeader />
    <Event />
    <div class="content">
      <MainNav />
      <Content />
    </div>
    <MainFooter />
  </div>
</template>

<script>
import MainHeader from './components/MainHeader'
import MainNav from './components/MainNav'
import Content from './components/Content'
import MainFooter from './components/MainFooter'
import Event from './components/Event'

export default {
  name: 'App',
  components: {
    MainHeader,
    Event,
    MainNav,
    Content,
    MainFooter
  }
}
</script>

<style>
  a {
    text-decoration: none;
    color: black;
  }

  #app > .content {
    display: flex;
  }
</style>
