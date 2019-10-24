<template>
    <el-dialog
        :title="title"
        :visible.sync="flag"
        :close-on-click-modal="close || false"
        :width="width || '600px'"
        custom-class="dialog-full"
        :show-close="showclose || false"
        @close="closeCallBack">
        <div class="dialog-title" slot="title">
            <p>{{ title }}</p>
        </div>
        <div v-if="content" class="dialog-content" :style="{padding: contentPadding || '0 40px'}">
            <slot name="content"></slot>
        </div>
        <div v-if="footer" slot="footer" class="dialog-footer">
            <slot name="footer"></slot>
        </div>
    </el-dialog>
</template>
<script>
export default {
    name: 'Dialog',
    props: ['title', 'visible', 'width', 'close', 'showclose', 'contentPadding'],
    data(){
        return {
            flag: this.visible,
            footer: this.$slots.footer ? true : false,
            content: this.$slots.content ? true : false
        }
    },
    methods: {
        closeCallBack(){
            this.$emit('close', true)
        }
    },
    watch: {
        visible(newVal){
            this.flag = newVal
        }
    }
}
</script>
<style lang="scss">
@import '../../../static/css/var.scss';
.dialog-title{
  background-color: $--base-color;
  padding-bottom: 10px;
  font-size: 16px;
}
.el-dialog__header{
  background-color: $--base-color;
  color: $--white;
}
.dialog-content{
  padding: 0 40px;
}
.dialog-footer{
  text-align: center;
  display: flex;
  justify-content: space-around;
  padding: 0 100px;
  button{
    width: 150px;
  }
}
.el-dialog__footer{
  border-top: 1px solid $--border-color;
  padding: 30px 0;
}

</style>