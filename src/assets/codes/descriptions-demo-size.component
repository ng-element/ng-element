import { Component } from '@angular/core';

@Component({
  selector: 'nel-demo-descriptions-size',
  template: `
    <nel-radio-group [(ngModel)]="size">
      <label nel-radio [nelValue]="">默认</label>
      <label nel-radio [nelValue]="'medium'">中等</label>
      <label nel-radio [nelValue]="'small'">小型</label>
      <label nel-radio [nelValue]="'mini'">超小</label>
    </nel-radio-group>

    <nel-descriptions class="margin-top" [nelTitle]="'带边框列表'" [nelColumn]="3" [nelSize]="size" nelBorder [nelExtra]="extra">
      <ng-template #extra>
        <button nel-button [nelType]="'primary'" [nelSize]="'small'">操作</button>
      </ng-template>
      <nel-descriptions-item [nelLabel]="label1">
        <ng-template #label1>
          <i nel-icon [nelType]="'user'"></i>
          用户名
        </ng-template>
        kooriookami
      </nel-descriptions-item>
      <nel-descriptions-item [nelLabel]="label2">
        <ng-template #label2>
          <i nel-icon [nelType]="'mobile-phone'"></i>
          手机号
        </ng-template>
        18100000000
      </nel-descriptions-item>
      <nel-descriptions-item [nelLabel]="label3">
        <ng-template #label3>
          <i nel-icon [nelType]="'location-outline'"></i>
          居住地
        </ng-template>
        苏州市
      </nel-descriptions-item>
      <nel-descriptions-item [nelLabel]="label4">
        <ng-template #label4>
          <i nel-icon [nelType]="'tickets'"></i>
          备注
        </ng-template>
        <nel-tag [nelSize]="'small'">学校</nel-tag>
      </nel-descriptions-item>
      <nel-descriptions-item [nelLabel]="label5">
        <ng-template #label5>
          <i nel-icon [nelType]="'office-building'"></i>
          联系地址
        </ng-template>
        江苏省苏州市吴中区吴中大道 1188 号
      </nel-descriptions-item>
    </nel-descriptions>

    <nel-descriptions class="margin-top" [nelTitle]="'无边框列表'" [nelColumn]="3" [nelSize]="size" [nelExtra]="extra2">
      <ng-template #extra2>
        <button nel-button [nelType]="'primary'" [nelSize]="'small'">操作</button>
      </ng-template>
      <nel-descriptions-item [nelLabel]="'用户名'">kooriookami</nel-descriptions-item>
      <nel-descriptions-item [nelLabel]="'手机号'">18100000000</nel-descriptions-item>
      <nel-descriptions-item [nelLabel]="'居住地'">苏州市</nel-descriptions-item>
      <nel-descriptions-item [nelLabel]="'备注'">
        <nel-tag [nelSize]="'small'">学校</nel-tag>
      </nel-descriptions-item>
      <nel-descriptions-item [nelLabel]="'联系地址'">江苏省苏州市吴中区吴中大道 1188 号</nel-descriptions-item>
    </nel-descriptions>
  `,
  styles: [
    `
      .margin-top {
        margin-top: 20px;
      }
    `
  ]
})

export class NelDemoDescriptionsSizeComponent {
  size = '';
}
