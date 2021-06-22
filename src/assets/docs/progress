### Attributes

| 参数             | 说明                                                          | 类型                                                             | 可选值                    | 默认值                   |
| ---------------- | ------------------------------------------------------------- | ---------------------------------------------------------------- | ------------------------- | ------------------------ |
| nelPercentage    | 百分比（必填）                                                | number                                                           | 0-100                     | 0                        |
| nelType          | 进度条类型                                                    | string                                                           | line/circle/dashboard     | line                     |
| nelStrokeWidth   | 进度条的宽度，单位 px                                         | number                                                           | —                         | 6                        |
| nelTextInside    | 进度条显示文字内置在进度条内（只在 type=line 时可用）         | boolean                                                          | —                         | false                    |
| nelStatus        | 进度条当前状态                                                | string                                                           | success/exception/warning | —                        |
| nelIndeterminate | 是否为动画进度条                                              | boolean                                                          | —                         | false                    |
| nelDuration      | 控制动画进度条速度                                            | number                                                           | —                         | 3                        |
| nelColor         | 进度条背景色（会覆盖 status 状态颜色）                        | string/function/array                                            | —                         | —                        |
| nelWidth         | 环形进度条画布宽度（只在 type 为 circle 或 dashboard 时可用） | number                                                           | —                         | 126                      |
| nelStrokeLinecap | circle/dashboard 类型路径两端的形状                           | string                                                           | butt/round/square         | round                    |
| nelFormat        | 指定进度条文字内容                                            | (percent: number) => string / TemplateRef<{ $implicit: number }> | —                         | percent => percent + '%' |