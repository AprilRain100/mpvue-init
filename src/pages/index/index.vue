<template>
  <div class="container" @click="clickHandle('test click', $event)">

    <div class="userinfo" @click="bindViewTap">
      <img class="userinfo-avatar" v-if="userInfo.avatarUrl" :src="userInfo.avatarUrl" background-size="cover" />
      <div class="userinfo-nickname">
        <card :text="userInfo.nickName"></card>
      </div>
    </div>

    <div class="usermotto">
      <div class="user-motto">
        <card :text="motto"></card>
      </div>
    </div>

    <form class="form-container">
      <input type="text" class="form-control" v-model="motto" placeholder="v-model" />
      <input type="text" class="form-control" v-model.lazy="motto" placeholder="v-model.lazy" />
    </form>
        <a href="/pages/detail/main" class="counter">去详情页</a>
  </div>
</template>

<script>
import card from '@/components/card'
import { mapState, mapActions } from "vuex";
import api from '../../config/api'
export default {
  data () {
    return {
      motto: 'Hello World',
      userInfo: {}
    }
  },

  components: {
    card
  },
  computed: {
    ...mapState([
        'test',
        'testMutation'
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
              this.userInfo = res.userInfo
            }
          })
        }
      })
    },
    clickHandle (msg, ev) {
      console.log('clickHandle:', msg, ev)
    }
  },

  created () {
    // 调用应用实例的方法获取全局数据
    this.getUserInfo()
    api.in_theaters().then(res => {
        const {subjects} = res;
        console.log(subjects)
        this.$store.commit('TESTMUTATION', subjects);
        console.log(this.testMutation)
    });
  },
  async mounted() {
      const res = await this.searchMoive({tag: '国产'});
      console.log(this.test, this.testMutation, 'res', res)
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

.usermotto {
  margin-top: 150px;
}

.form-control {
  display: block;
  padding: 0 12px;
  margin-bottom: 5px;
  border: 1px solid #ccc;
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
