### Attributes

| 参数                 | 说明               | 类型    | 可选值                                                                                                                          | 默认值   |
| -------------------- | ------------------ | ------- | ------------------------------------------------------------------------------------------------------------------------------- | -------- |
| nelTitle             | 标题               | string  | —                                                                                                                               | —        |
| nelPlacement         | Tooltip 的出现位置 | string  | top / top-start / top-end / bottom / bottom-start / bottom-end / left / left-start / left-end / right / right-start / right-end | bottom   |
| nelConfirmButtonText | 确认按钮文字       | string  | —                                                                                                                               | 确认     |
| nelCancelButtonText  | 取消按钮文字       | string  | —                                                                                                                               | 取消     |
| nelConfirmButtonType | 确认按钮类型       | string  | —                                                                                                                               | primary  |
| nelCancelButtonType  | 取消按钮类型       | string  | —                                                                                                                               | text     |
| nelIcon              | Icon               | string  | —                                                                                                                               | question |
| nelIconColor         | Icon 颜色          | string  | —                                                                                                                               | #f90     |
| nelHideIcon          | 是否隐藏 Icon      | boolean | —                                                                                                                               | false    |

### Events

| 事件名称     | 说明               | 回调参数 |
| ------------ | ------------------ | -------- |
| nelOnConfirm | 点击确认按钮时触发 | —        |
| nelOnCancel  | 点击取消按钮时触发 | —        |

### 非 body 滚轴事件需要更新 CDK 的位置

在 popconfirm 相关(包括 tooltip popover) 的组件使用中，body 的滚轴事件会刷新 tooltip 的位置。如果是自定义容器的滚轴事件则不会刷新，你可以在自定义容器上添加 ` cdkScrollable ` 指令以达到该目的。注意，这里需要导入相关的包 ` import {ScrollingModule} from '@angular/cdk/scrolling'; `，更多信息请参考 [scrolling/api](https://material.angular.io/cdk/scrolling/api)。
