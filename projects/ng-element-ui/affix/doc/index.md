### Attribute

| 参数        | 说明     | 类型       | 可选值       | 默认值 |
| ----------- | -------- | ---------- | ------------ | ------ |
| nelOffset   | 偏移距离 | number     | —            | 0      |
| nelPosition | 固钉位置 | string     | top / bottom | top    |
| nelTarget   | 指定容器 | ElementRef | —            | —      |
| nelZIndex   | 固钉层级 | number     | —            | 100    |

### Events


| 事件名称    | 说明                     | 回调参数                                     |
| ----------- | ------------------------ | -------------------------------------------- |
| nelOnChange | 固钉状态改变时触发的事件 | (value: boolean)                             |
| nelOnScroll | 滚动时触发的事件         | (value: {scrollTop: number: affix: boolean}) |
