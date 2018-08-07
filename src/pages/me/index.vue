<template>
    <div>
      <div class="userinfo" @click="bindViewTap">
        <img class="userinfo-avatar" v-if="userInfo.avatarUrl" :src="userInfo.avatarUrl" background-size="cover" />
        <div class="userinfo-nickname">
          <span v-text="userInfo.nickName"></span>
        </div>
      </div>
    </div>
</template>
<script>
  import { mapState, mapActions } from "vuex";
  export default {
    computed: {
      ...mapState([
        'userInfo'
      ])
    },
    mounted() {
      console.log(this.userInfo)
    }
}
</script>
<style lang="scss" scoped>
  .userinfo {
    display: flex;
    margin-top: 20px;
    flex-direction: column;
    align-items: center;
    .userinfo-avatar {
      width: 128rpx;
      height: 128rpx;
      margin: 20rpx;
      border-radius: 50%;
    }
    .userinfo-nickname {
      color: #aaa;
    }
  }
</style>
