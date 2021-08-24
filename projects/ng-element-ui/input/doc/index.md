### Attributes

| 参数            | 说明                                     | 类型    | 可选值                | 默认值 |
| --------------- | ---------------------------------------- | ------- | --------------------- | ------ |
| ngModel         | 绑定值（双向绑定）                       | any     | —                     | —      |
| nelPlaceHolder  | 输入框占位文本                           | string  | —                     | —      |
| nelClearable    | 是否可清空                               | boolean | —                     | false  |
| nelShowPassword | 是否显示切换密码图标                     | boolean | —                     | false  |
| nelDisabled     | 是否禁用                                 | boolean | —                     | false  |
| nelSize         | 输入框尺寸，只在 type!="textarea" 时有效 | string  | medium / small / mini | —      |

### Events

| 事件名称 | 说明                                        | 回调参数 |
| -------- | ------------------------------------------- | -------- |
| onClear  | 在点击由 clearable 属性生成的清空按钮时触发 | —        |
