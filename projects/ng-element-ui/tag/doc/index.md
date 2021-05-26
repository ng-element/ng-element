### Attributes

| 参数        | 说明       | 类型    | 可选值                      | 默认值 |
| ----------- | ---------- | ------- | --------------------------- | ------ |
| nelType     | 类型       | string  | success/info/warning/danger | —      |
| nelClosable | 是否可关闭 | boolean | —                           | false  |
| nelSize     | 尺寸       | string  | medium / small / mini       | —      |
| nelEffect   | 主题       | string  | dark / light / plain        | light  |

### Events

| 事件名称   | 说明           | 回调参数              |
| ---------- | -------------- | --------------------- |
| nelOnClose | 显示隐藏的事件 | 关闭 Tag 时触发的事件 |

### CheckTag Attributes

| 参数       | 说明     | 类型    | 可选值 | 默认值 |
| ---------- | -------- | ------- | ------ | ------ |
| nelChecked | 是否选中 | boolean | —      | —      |