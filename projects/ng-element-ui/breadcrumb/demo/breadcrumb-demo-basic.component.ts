import { Component } from '@angular/core';

@Component({
  selector: 'nel-demo-breadcrumb-basic',
  template: `
    <nel-breadcrumb separator="/">
      <nel-breadcrumb-item>
        <a [routerLink]="['/']">首页</a>
      </nel-breadcrumb-item>
      <nel-breadcrumb-item><a href="/">活动管理</a></nel-breadcrumb-item>
      <nel-breadcrumb-item>活动列表</nel-breadcrumb-item>
      <nel-breadcrumb-item>活动详情</nel-breadcrumb-item>
    </nel-breadcrumb>
  `
})

export class NelDemoBreadcrumbBasicComponent { }
