<template>
  <Layout>
    <Header>Header</Header>
    <Layout>
      <Sider hide-trigger>
        <side-menu />
      </Sider>
      <Content>Content</Content>
    </Layout>
  </Layout>
</template>

<script>
import SideMenu from './SideMenu'
export default {
  components: {
    SideMenu
  }
}
</script>

<style lang="scss">
.ivu-layout{
  width: 100%;
  height: 100%;
  .ivu-layout-sider{
    background: #fff;
    width: 240px !important;
    max-width: unset !important;
    min-width: 240px !important;
    flex: 0 !important;
  }
}
</style>