### Row Attributes

| 参数       | 说明                                  | 类型   | 可选值                                      | 默认值 |
| ---------- | ------------------------------------- | ------ | ------------------------------------------- | ------ |
| nelGutter  | 栅格间隔                              | number | —                                           | 0      |
| nelType    | 布局模式，可选 flex，现代浏览器下有效 | string | —                                           | —      |
| nelJustify | flex 布局下的水平排列方式             | string | start/end/center/space-around/space-between | start  |

### Col Attributes

| 参数      | 说明                                   | 类型                                        | 可选值 | 默认值 |
| --------- | -------------------------------------- | ------------------------------------------- | ------ | ------ |
| nelSpan   | 栅格占据的列数                         | number                                      | —      | 24     |
| nelOffset | 栅格左侧的间隔格数                     | number                                      | —      | 0      |
| nelXs     | `<768px` 响应式栅格数或者栅格属性对象  | number/object (例如： {span: 4, offset: 4}) | —      | —      |
| nelSm     | `≥768px` 响应式栅格数或者栅格属性对象  | number/object (例如： {span: 4, offset: 4}) | —      | —      |
| nelMd     | `≥992px` 响应式栅格数或者栅格属性对象  | number/object (例如： {span: 4, offset: 4}) | —      | —      |
| nelLg     | `≥1200px` 响应式栅格数或者栅格属性对象 | number/object (例如： {span: 4, offset: 4}) | —      | —      |
| nelXl     | `≥1920px` 响应式栅格数或者栅格属性对象 | number/object (例如： {span: 4, offset: 4}) | —      | —      |