<template>
<div>
        <Nav></Nav>
        <router-view/>
</div>
</template>

<script>
// import Top from '@/components/TopHeader.vue'
import Nav from '@/components/Nav.vue'
export default {
  components: {
    Nav
  },
  name: 'App'
}
</script>

<style>
html,
body,
#app,
.el-container{
    padding:0px;
    margin:0px;
    height:100%;
}
</style>
