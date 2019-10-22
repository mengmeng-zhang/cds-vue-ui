<template>
    <el-tooltip :content="content" :popper-class="`light-color ${addclass || ''}`" placement="right" effect="light">
        <i :style="{color: color || '#455CC6', 'font-size': size || '16px'}" 
            :class="icon || 'el-icon-warning-outline'"></i>
        <template slot="content">
            <slot></slot>
        </template>
    </el-tooltip>
</template>
<script>
// params: content  提示内容
// params: addclass 附加class
// params  color    图标颜色
// params  icon     图标样式
// params  size     图标大小
export default {
    name: 'Tooltip',
    props: ['content', 'icon', 'color', 'size', 'addclass']
}
</script>
<style lang="scss">
.light-color{
  border-color: transparent !important;
  box-shadow: 0 0 8px 0 #c0c7da;
  .popper__arrow{
    border-color: transparent !important
  }
}
</style>
