<template>
  <div>
    <div>
      <i-alert type="error">
      你长的真好看！
      </i-alert>
      <i-button type="ghost" @click="handleWarning">警告</i-button>
      <i-button type="ghost" @click="handleError">错误</i-button>
      <i-button type="ghost" @click="handleLoading">Loading</i-button>
      <i-toast id="toast" />
    </div>
  </div>
</template>

<script>

  const {$Toast} = require('../../../static/iview/base/index')

  export default {
    components: {
    },

    data () {
      return {
      }
    },
    methods: {
      handleWarning () {
        $Toast({
          content: '警告的提示',
          type: 'warning'
        })
      },
      handleError () {
        $Toast({
          content: '错误的提示',
          type: 'error'
        })
      },
      handleLoading () {
        $Toast({
          content: '加载中',
          type: 'loading'
        })
      },
    },
    created () {

    }
  }
</script>

<style>

</style>
