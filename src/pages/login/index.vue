<template>
  <div>
    <button open-type="getUserInfo" lang="zh_CN" @getuserinfo="onGotUserInfo">立即开启</button>
  </div>
</template>

<script>
import { formatTime } from '@/utils/index'
import card from '@/components/card'

export default {
  components: {
    card
  },

  data () {
    return {
      logs: []
    }
  },
  methods: {
    onGotUserInfo(e) {
      if(e.target.userInfo) {
        wx.navigateBack()
      } else {
        wx.showModal({
          title: '提示',
          content: '请先允许授权再进行操作！',
          showCancel: false,
          success: function(res) {
          }
        })
      }
    }
  },
  created () {
    const logs = (wx.getStorageSync('logs') || [])
    this.logs = logs.map(log => formatTime(new Date(log)))
  }
}
</script>

<style lang="scss" scoped>
button {
  position: absolute;
  bottom: 30px;
  left: -50%;
  right: -50%;
  width: 40%;
}
</style>
