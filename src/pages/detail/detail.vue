<template>
  <div>
    <button @click="scanCode">扫描</button>
      <button @click="chooseImage">拍照</button>
      <div>{{scanCodeData || ''}}</div>
      <div>
          <h5>拍照返回的数据:</h5>
          {{chooseImageData}}
      </div>

    <button open-type="getUserInfo" lang="zh_CN" @getuserinfo="onGotUserInfo">获取用户信息</button>
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
      logs: [],
      scanCodeData: '',
      chooseImageData: ''
    }
  },
  methods: {
    onGotUserInfo (e) {
      console.log(e, '????');
        if (!e.target.userInfo) {
        wx.openSetting();
        return;
        }
    },
    scanCode () {
        wx.scanCode({
            success: (res) => {
                console.log(res);
                this.scanCodeData = res.result;
            }
        })
    },
    chooseImage() {
        wx.chooseImage({
            success: res => {
                console.log(res);
                this.chooseImageData = JSON.stringify(res);
            }
        })
    }
  },
  created () {
    const logs = (wx.getStorageSync('logs') || [])
    this.logs = logs.map(log => formatTime(new Date(log)))
  }
}
</script>

<style>
.log-list {
  display: flex;
  flex-direction: column;
  padding: 40rpx;
}

.log-item {
  margin: 10rpx;
}
</style>
