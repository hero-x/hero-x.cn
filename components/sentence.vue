<template>
  <div class='textWrapItem left_item'>
    <p class="name"><i class="iconfont">&#xe658;</i>OneTalk</p>
    <div class="textWrapItem_wrap">
      {{text}}
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      text:'间歇性踌躇满志，持续性混吃等死。'
    }
  },
  components: {
  },
  methods: {
  },
  mounted () {
    let _self = this
    this.$axios.get('https://v1.hitokoto.cn/?c=f&encode=text')
      .then(res=>{
        _self.text = res.data;
      })
  }
}
</script>
<style src='~/assets/css/global.less' lang="less"></style>
<style src='~/assets/css/index.less' lang="less" scoped></style>