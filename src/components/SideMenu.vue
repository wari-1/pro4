<template>
  <Menu active-name="1-2" :open-names="['1']">
    <template v-for="menu in menuItems">
      <Submenu :name="menu.name" :key="menu.name">
        <template slot="title" v-if="menu.iconType">
          <Icon :type="`ios-${menu.iconType}`" />
          {{ menu.label }}
        </template>
        <span v-else>{{ menu.label }}</span>
        <template v-for="item in menu.items">
          <MenuItem :name="item.name" :key="item.name">{{ item.label }}</MenuItem>
        </template>
      </Submenu>
    </template>
  </Menu>
</template>

<script>
export default {
  name: 'SideMenu',
  data() {
    return {
      menuItems: [
        {
          name: 'content',
          label: '内容管理',
          iconType: 'paper',
          items: [
            {
              name: 'content-article',
              label: '文章管理'
            },
            {
              name: 'content-comment',
              label: '评论管理'
            },
            {
              name: 'content-report',
              label: '举报管理'
            }
          ]
        },
        {
          name: 'user',
          label: '用户管理',
          iconType: 'people',
          items: [
            {
              name: 'user-add',
              label: '新增用户'
            },
            {
              name: 'user-active',
              label: '活跃用户'
            }
          ]
        },
        {
          name: 'analysis',
          label: '统计分析',
          iconType: 'stats'
          // items: [
          //   {
          //     name: 'analysis-time',
          //     label: '时段分析'
          //   }
          // ]
        }
      ]
    }
  }
}
</script>