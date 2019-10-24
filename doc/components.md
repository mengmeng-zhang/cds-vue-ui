#### svg-Icon 组件

> 组件需要把svg文件放到assets/svg目录中

- 组件目录：conponents/pubilc/icon
- 组件props: 
  - name:  svg的名称
  - style: 组件的样式，默认为{width: 20px, height: 20px}
- 用法：

```js
import Icon from '@/components/pubilc/icon'
<Icon name="logo"/>
```



#### dialog 组件
> 组件为element-ui中dialog组件的二次封装，统一样式，同时省去了繁琐的配置
- 组件目录: components/pubilc/dialog
- 组件props: 
  - title: 组件标题
  - visible： 控制组件显示的变量
  - close: 组件关闭的回调
  - width: 组件的宽度
  - showclose：是否显示头部关闭按钮
- slot: 
  - content: dialog主体内容
  - footer: dialog底部内容
- 用法：
``` javascript
<Dialog 
    :visible="visible" 
    title="dialog标题" 
    width="800px" 
    :showclose="true"
    contentPadding="0"
    @close="visible = false">
    <template slot="content"></template>
    <template slot="fotter"></template>
</Dialog>

import Icon from '@/components/pubilc/dialog'
{
    data(){
        return {
            visible: false
        }
    }
}
```

#### toolTip组件

- 组件目录: components/pubilc/tooltip
- 组件props: 
  - content:  提示内容
  - addclass： 附加class
  - color：  图标颜色
  - icon：   图标样式，默认为：el-icon-warning-outline
  - size：   图标大小
- slot:
  - content: 自定义tooltip内容
- 用法：

```js
<Tooltip content="提示内容" />
<Tooltip>
	<telplate slot="content">
        提示内容
	</template>
</Tooltip>
```

