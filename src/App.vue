<template>
  <div id="app">
    <MainHeader />
    <MainNav />
    <Content />
    <MainFooter />
  </div>
</template>

<script>
import MainHeader from './components/MainHeader'
import MainNav from './components/MainNav'
import Content from './components/Content'
import MainFooter from './components/MainFooter'

export default {
  name: 'App',
  components: {
    MainHeader,
    MainNav,
    Content,
    MainFooter
  }
}
</script>

<style>

</style>
