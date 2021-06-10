### Api

#### NelMessageService

- `NelMessageService.success(content, [options])`
- `NelMessageService.warning(content, [options])`
- `NelMessageService.info(content, [options])`
- `NelMessageService.error(content, [options])`

| 参数    | 说明                                     | 类型                 | 可选值 | 默认值 |
| ------- | ---------------------------------------- | -------------------- | ------ | ------ |
| content | 消息文字                                 | string / TemplateRef | —      | —      |
| options | 支持设置针对当前提示框的参数，见下方表格 | object               | —      | —      |

#### options

| 参数      | 说明                                  | 类型     | 可选值 | 默认值 |
| --------- | ------------------------------------- | -------- | ------ | ------ |
| showClose | 是否显示关闭按钮                      | boolean  | —      | false  |
| duration  | 显示时间, 毫秒。设为 0 则不会自动关闭 | number   | —      | 3000   |
| center    | 文字是否居中                          | boolean  | —      | false  |
| onClose   | 关闭时的回调函数                      | function | —      | false  |


### Events

调用 NelMessageService.success 会返回当前 Message 的实例。如果需要手动关闭实例，可以调用它的 close 方法。

| 事件名称 | 说明               | 回调参数 |
| -------- | ------------------ | -------- |
| close    | 关闭当前的 Message | —        |