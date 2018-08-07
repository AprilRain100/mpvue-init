<template>
  <div class="container" >
    <div class="userinfo" @click="bindViewTap">
      <img class="userinfo-avatar" v-if="userInfo.avatarUrl" :src="userInfo.avatarUrl" background-size="cover" />
      <div class="userinfo-nickname">
        <card :text="userInfo.nickName"></card>
      </div>
    </div>
    <a href="/pages/detail/main" class="counter">去详情页</a>
    <a href="/pages/plugIn/main" class="counter">组件</a>

  </div>
</template>

<script>
import card from '@/components/card'
import { mapState, mapActions } from "vuex";
import api from '../../config/api'

export default {
  data () {
    return {
    }
  },

  components: {
    card
  },
  computed: {
    ...mapState([
      'userInfo'
    ])
  },
  methods: {
      ...mapActions([
          'searchMoive'
      ]),
    bindViewTap () {
      const url = '../logs/main'
      wx.navigateTo({ url })
    },
    getUserInfo () {
      // 调用登录接口
      wx.login({
        success: () => {
          wx.getUserInfo({
            success: (res) => {
              this.$store.commit('USERINFO', res.userInfo);
            }
          })
        }
      })
    }
  },

  onShow () {
    wx.getSetting({
      success: res => {
        console.log(res);
        if(res && res.authSetting['scope.userInfo']) {
          console.log('授权');
          this.getUserInfo(); // 调用应用实例的方法获取全局数据
        } else {
          wx.navigateTo({url: '../login/main'});
          console.log('没有授权')
        }
      }
    });
    api.in_theaters().then(res => {
        const {subjects} = res || {};
    });
  },
  async mounted() {
    console.log('mounted')
      const res = await this.searchMoive({tag: '国产'});
  }
}
</script>

<style lang="scss" scoped>
.userinfo {
  display: flex;
  flex-direction: column;
  align-items: center;

}

.userinfo-avatar {
  width: 128rpx;
  height: 128rpx;
  margin: 20rpx;
  border-radius: 50%;
}

.userinfo-nickname {
  color: #aaa;
}
.container {

.counter {
  display: inline-block;
  margin: 10px auto;
  padding: 5px 10px;
  color: red;
  border: 1px solid blue;
    }
}
</style>
