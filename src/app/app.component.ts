import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent {
  groupList = [
    {
      title: 'Basic 10',
      menuList: [
        { link: 'layout', name: 'Layout 布局' },
        { link: 'container', name: 'Container 布局容器' },
        // { link: 'color', name: 'Color 色彩' },
        // { link: 'typography', name: 'Typography 字体' },
        // { link: 'border', name: 'Border 边框' },
        { link: 'icon', name: 'Icon 图标' },
        { link: 'button', name: 'Button 按钮' },
        { link: 'link', name: 'Link 文字链接' },
        // { link: 'space', name: 'Space 间距' },
        { link: 'scrollbar', name: 'Scrollbar 滚动条' },
      ]
    },
    {
      title: 'Form 17',
      menuList: [
        { link: 'radio', name: 'Radio 单选框' },
        // { link: 'checkbox', name: 'Checkbox 多选框' },
        // { link: 'input', name: 'Input 输入框' },
        // { link: 'input-number', name: 'InputNumber 计数器' },
        // { link: 'select', name: 'Select 选择器' },
        // { link: 'cascader', name: 'Cascader 级联选择器' },
        // { link: 'switch', name: 'Switch 开关' },
        // { link: 'slider', name: 'Slider 滑块' },
        // { link: 'time-picker', name: 'TimePicker 时间选择器' },
        // { link: 'time-select', name: 'TimeSelect 时间选择器' },
        // { link: 'date-picker', name: 'DatePicker 日期选择器' },
        // { link: 'datetime-picker', name: 'DateTimePicker 日期时间选择器' },
        // { link: 'upload', name: 'Upload 上传' },
        // { link: 'rate', name: 'Rate 评分' },
        // { link: 'color-picker', name: 'ColorPicker 颜色选择器' },
        // { link: 'transfer', name: 'Transfer 穿梭框' },
        // { link: 'form', name: 'Form 表单' },
      ]
    },
    {
      title: 'Data 11',
      menuList: [
        // { link: 'table', name: 'Table 表格' },
        // { link: 'tag', name: 'Tag 标签' },
        // { link: 'progress', name: 'Progress 进度条' },
        // { link: 'tree', name: 'Tree 树形控件' },
        // { link: 'pagination', name: 'Pagination 分页' },
        // { link: 'badge', name: 'Badge 标记' },
        // { link: 'avatar', name: 'Avatar 头像' },
        // { link: 'skeleton', name: 'Skeleton 骨架屏' },
        { link: 'empty', name: 'Empty 空状态' },
        // { link: 'descriptions', name: 'Descriptions 描述列表' },
        // { link: 'result', name: 'Result 结果' },
      ]
    },
    {
      title: 'Notice 5',
      menuList: [
        { link: 'alert', name: 'Alert 警告' },
        // { link: 'loading', name: 'Loading 加载' },
        // { link: 'message', name: 'Message 消息提示' },
        // { link: 'message-box', name: 'MessageBox 弹框' },
        // { link: 'notification', name: 'Notification 通知' },
      ]
    },
    {
      title: 'Navigation 7',
      menuList: [
        // { link: 'affix', name: 'Affix 固钉' },
        // { link: 'menu', name: 'NavMenu 导航菜单' },
        // { link: 'tabs', name: 'Tabs 标签页' },
        // { link: 'breadcrumb', name: 'Breadcrumb 面包屑' },
        { link: 'page-header', name: 'PageHeader 页头' },
        // { link: 'dropdown', name: 'Dropdown 下拉菜单' },
        // { link: 'steps', name: 'Steps 步骤条' },
      ]
    },
    {
      title: 'Others 14',
      menuList: [
        { link: 'dialog', name: 'Dialog 对话框' },
        { link: 'tooltip', name: 'Tooltip 文字提示' },
        // { link: 'popover', name: 'Popover 弹出框' },
        // { link: 'popconfirm', name: 'Popconfirm 气泡确认框' },
        { link: 'card', name: 'Card 卡片' },
        // { link: 'carousel', name: 'Carousel 走马灯' },
        { link: 'collapse', name: 'Collapse 折叠面板' },
        // { link: 'timeline', name: 'Timeline 时间线' },
        { link: 'divider', name: 'Divider 分割线' },
        // { link: 'calendar', name: 'Calendar 日历' },
        // { link: 'image', name: 'Image 图片' },
        { link: 'backtop', name: 'Backtop 回到顶部' },
        { link: 'infinite-scroll', name: 'InfiniteScroll 无限滚动' },
        // { link: 'drawer', name: 'Drawer 抽屉' },
      ]
    },
  ];
}
