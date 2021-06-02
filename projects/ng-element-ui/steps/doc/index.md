### Steps Attributes

| 参数            | 说明                                               | 类型            | 可选值                                    | 默认值     |
| --------------- | -------------------------------------------------- | --------------- | ----------------------------------------- | ---------- |
| nelSpace        | 每个 step 的间距，不填写将自适应间距。支持百分比。 | number / string | —                                         | —          |
| nelDirection    | 显示方向                                           | string          | vertical/horizontal                       | horizontal |
| nelActive       | 设置当前激活步骤                                   | number          | —                                         | 0          |
| nelFinishStatus | 设置结束步骤的状态                                 | string          | wait / process / finish / error / success | finish     |
| nelAlignCenter  | 进行居中对齐                                       | boolean         | —                                         | false      |
| nelSimple       | 是否应用简洁风格                                   | boolean         | —                                         | false      |

### Step Attributes

| 参数           | 说明       | 类型                                 | 可选值 | 默认值 |
| -------------- | ---------- | ------------------------------------ | ------ | ------ |
| nelTitle       | 标题       | string / TemplateRef                 | —      | —      |
| nelDescription | 描述性文字 | string / TemplateRef                 | —      | —      |
| nelIcon        | 图标       | 传入 icon 的 class 全名来自定义 icon | —      | —      |