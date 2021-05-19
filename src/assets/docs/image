### Image Attributes

| 参数              | 说明                                      | 类型                  | 可选值                                     | 默认值 |
| ----------------- | ----------------------------------------- | --------------------- | ------------------------------------------ | ------ |
| nelAlt            | 原生 alt                                  | string                | —                                          | —      |
| nelFit            | 确定图片如何适应容器框，同原生 object-fit | string                | fill / contain / cover / none / scale-down | —      |
| nelLazy           | 是否开启懒加载                            | boolean               | —                                          | false  |
| nelPreviewSrcList | 开启图片预览功能                          | Array                 | —                                          | —      |
| nelSrc            | 图片源，同原生                            | string                | —                                          | —      |
| nelPlaceholder    | 图片未加载的占位内容                      | string / TemplateRef  | —                                          | —      |
| nelError          | 加载失败的内容                            | string  / TemplateRef | —                                          | —      |

### Image Events

| 事件名称   | 说明             | 回调参数   |
| ---------- | ---------------- | ---------- |
| nelOnLoad  | 图片加载成功触发 | (e: Event) |
| nelOnError | 图片加载失败触发 | (e: Error) |

### ImageService Attributes

| 参数            | 说明                                   | 类型          | 可选值 | 默认值 | 回调参数                     |
| --------------- | -------------------------------------- | ------------- | ------ | ------ | ---------------------------- |
| nelUrlList      | 用于预览的图片链接列表                 | Array<string> | —      | —      | —                            |
| nelInitialIndex | 预览的首张图片的位置, 小于等于数组长度 | number        | int    | 0      | —                            |
| nelInfinite     | 是否可以无限循环预览                   | boolean       | —      | true   | —                            |
| nelOnClose      | 当图片关闭时触发                       | —             | —      | —      | —                            |
| nelOnSwitch     | 当图片切换时触发                       | —             | —      | —      | (val: number) 切换目标的下标 |
