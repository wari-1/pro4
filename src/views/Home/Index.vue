<template>
  <div>主页
    <header-comp />
    <p>{{ val }}</p>
  </div>
</template>

<script>
import HeaderComp from './HeaderComp'
import nav from './nav'
export default {
  mixins: [nav],
  components: {
    HeaderComp
  },
  data() {
    return {
      val: ''
    }
  },
  mounted() {
    this.val = this.$enums.getLabel('boolYes', true)
  }
}
</script>