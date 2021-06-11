### Api

#### NelNotificationService

- `NelNotificationService.blank(content, [options])`
- `NelNotificationService.success(content, [options])`
- `NelNotificationService.warning(content, [options])`
- `NelNotificationService.info(content, [options])`
- `NelNotificationService.error(content, [options])`

| 参数    | 说明                                     | 类型                 | 可选值 | 默认值 |
| ------- | ---------------------------------------- | -------------------- | ------ | ------ |
| title   | 标题                                     | string / TemplateRef | —      | —      |
| content | 消息文字                                 | string / TemplateRef | —      | —      |
| options | 支持设置针对当前提示框的参数，见下方表格 | object               | —      | —      |

#### options

| 参数      | 说明                                                                     | 类型     | 可选值                                      | 默认值    |
| --------- | ------------------------------------------------------------------------ | -------- | ------------------------------------------- | --------- |
| showClose | 是否显示关闭按钮                                                         | boolean  | —                                           | false     |
| duration  | 显示时间, 毫秒。设为 0 则不会自动关闭                                    | number   | —                                           | 3000      |
| position  | 自定义弹出位置                                                           | string   | top-right/top-left/bottom-right/bottom-left | top-right |
| onClose   | 关闭时的回调函数                                                         | function | —                                           | false     |
| offset    | 偏移的距离，在同一时刻，所有的 Notification 实例应当具有一个相同的偏移量 | number   | —                                           | 0         |


### Events

调用 NelNotificationService.success 会返回当前 Notification 的实例。如果需要手动关闭实例，可以调用它的 close 方法。

| 事件名称 | 说明                    | 回调参数 |
| -------- | ----------------------- | -------- |
| close    | 关闭当前的 Notification | —        |