### Api

#### NelMessageBoxService

- `NelMessageBoxService.blank(title, content, [options])`
- `NelMessageBoxService.alert(title, content, [options])`
- `NelMessageBoxService.confirm(title, content, [options])`

| 参数    | 说明                                     | 类型                 | 可选值 | 默认值 |
| ------- | ---------------------------------------- | -------------------- | ------ | ------ |
| content | 标题                                     | string / TemplateRef | —      | —      |
| content | 消息文字                                 | string / TemplateRef | —      | —      |
| options | 支持设置针对当前提示框的参数，见下方表格 | object               | —      | —      |

#### options

| 参数              | 说明                   | 类型     | 可选值                           | 默认值 |
| ----------------- | ---------------------- | -------- | -------------------------------- | ------ |
| cancelButtonText  | 取消按钮的文本内容     | string   | —                                | 取消   |
| confirmButtonText | 确定按钮的文本内容     | string   | —                                | 确定   |
| cancel            | 取消时的回调函数       | function | —                                | —      |
| confirm           | 确定时的回调函数       | function | —                                | —      |
| type              | 消息类型，用于显示图标 | string   | success / info / warning / error | —      |
| beforeConfirm     | 确定前的回调函数       | function | —                                | —      |
| center            | 是否居中布局           | boolean  | —                                | false  |