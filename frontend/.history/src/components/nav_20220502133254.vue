<template>
  <div>
    <el-menu
      :default-active="activeIndex2"
      class="el-menu-demo"
      mode="horizontal"
      @select="handleSelect"
      background-color="#545b65"
      text-color="#fff"
      active-text-color="#ffd04b"
    >
    <div class="l-con">
      <el-menu-item v-model="isCollapse">
        <i class="el-icon-s-fold" @click="isC"></i>
      </el-menu-item>
      </div>
      <el-menu-item index="1">处理中心</el-menu-item>
      <!-- <el-submenu index="2">
        <template slot="title">我的工作台</template>
        <el-menu-item index="2-1">选项1</el-menu-item>
        <el-menu-item index="2-2">选项2</el-menu-item>
        <el-menu-item index="2-3">选项3</el-menu-item>
        <el-submenu index="2-4">
          <template slot="title">选项4</template>
          <el-menu-item index="2-4-1">选项1</el-menu-item>
          <el-menu-item index="2-4-2">选项2</el-menu-item>
          <el-menu-item index="2-4-3">选项3</el-menu-item>
        </el-submenu>
      </el-submenu> -->
      <!-- <el-menu-item index="3" disabled>消息中心</el-menu-item> -->
      <!-- <el-menu-item index="4"
        ><a href="https://www.ele.me" target="_blank">订单管理</a></el-menu-item
      > -->
      <el-menu-item class="topfront"
        >智能食物热量测量仪物联网操作系统</el-menu-item
      >
    </el-menu>
    <div class="asidenav">
      <el-row>
        <el-col :span="12">
          <el-menu
            default-active="2"
            class="el-menu-vertical-demo"
            @open="handleOpen"
            @close="handleClose"
            background-color="#ffffff"
            text-color="#545b65"
            active-text-color="#ffd04b"
            :collapse="isCollapse"
          >
            <!-- <el-submenu index="1"> -->
              <el-menu-item index="1">
              <template slot="title">
                <i class="el-icon-s-order"></i>
                <span>处方设定</span>
              </template>
              </el-menu-item>
              <!-- <el-menu-item-group>
                <template slot="title">分组一</template>
                <el-menu-item index="1-1">选项1</el-menu-item>
                <el-menu-item index="1-2">选项2</el-menu-item>
              </el-menu-item-group>
              <el-menu-item-group title="分组2">
                <el-menu-item index="1-3">选项3</el-menu-item>
              </el-menu-item-group>
              <el-submenu index="1-4">
                <template slot="title">选项4</template>
                <el-menu-item index="1-4-1">选项1</el-menu-item>
              </el-submenu> -->
            <!-- </el-submenu> -->
            <el-menu-item index="2">
              <i class="el-icon-platform-eleme"></i>
              <span slot="title">菜肴及每餐定义</span>
            </el-menu-item>
            <el-menu-item index="3">
              <i class="el-icon-user-solid"></i>
              <span slot="title">个人处方管理与配餐</span>
            </el-menu-item>
            <el-menu-item index="4">
              <i class="el-icon-s-claim"></i>
              <span slot="title">膳食营养分析</span>
            </el-menu-item>
            <el-menu-item index="5">
              <i class="el-icon-edit"></i>
              <span slot="title">营养成分查询</span>
            </el-menu-item>
            <el-menu-item index="6">
              <i class="el-icon-folder"></i>
              <span slot="title">聚合打包程序</span>
            </el-menu-item>
            <el-menu-item index="7">
              <i class="el-icon-printer"></i>
              <span slot="title">打印及其他设置</span>
            </el-menu-item>
            <el-menu-item index="8">
              <i class="el-icon-notebook-1"></i>
              <span slot="title">数据管理</span>
            </el-menu-item>
          </el-menu>
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    handleOpen (key, keyPath) {
      console.log(key, keyPath)
    },
    handleClose (key, keyPath) {
      console.log(key, keyPath)
    },
    isC () {
      this.isCollapse = !this.isCollapse
    },
    handleSelect (key, keyPath) {
      console.log(key, keyPath)
    }
  },
  data () {
    return {
      isCollapse: false,
      activeIndex: '1',
      activeIndex2: '1'
    }
  }
}
</script>

<style>
.el-menu-demo {
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.14);
  justify-content: space-between;
}
.el-menu-vertical-demo {
  height: 100vh;
  /* width: 25vh; */
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.14);
}
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 25vh;
  min-height: 400px;
}
.topfront {
  float: right;
}
</style>
