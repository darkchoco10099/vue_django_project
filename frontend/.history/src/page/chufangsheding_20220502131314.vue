<template>
  <div>
    <Home></Home>
    <template>
  <el-select v-model="value" clearable placeholder="请选择">
    <el-option
      v-for="item in options"
      :key="item.value"
      :label="item.label"
      :value="item.value">
    </el-option>
  </el-select>
</template>
  </div>
</template>

<script>
import Home from './home.vue'

export default {
  components: {
    Home
  },
  name: 'App'
}
</script>
