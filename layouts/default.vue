<template>
  <div>
    <bheads/>
    <div class="main">
      <nuxt class="ng"/>
    </div>
    <bfooter/>
  </div>
</template>
<script>
import bheads from '~/components/bhead'
import bfooter from '~/components/bfooter'
export default {
  components: {
    bheads,bfooter
  },
  mounted () {
    
  },
}
</script>
