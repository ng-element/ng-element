import { Component } from '@angular/core';

@Component({
    selector: 'nel-demo-descriptions-direction',
    template: `
    <nel-descriptions [nelTitle]="'垂直带边框列表'" [nelDirection]="'vertical'" [nelColumn]="3" nelBorder>
      <nel-descriptions-item [nelLabel]="'用户名'">kooriookami</nel-descriptions-item>
      <nel-descriptions-item [nelLabel]="'手机号'">18100000000</nel-descriptions-item>
      <nel-descriptions-item [nelLabel]="'居住地'" :span="2">苏州市</nel-descriptions-item>
      <nel-descriptions-item [nelLabel]="'备注'">
        <nel-tag [nelSize]="'small'">学校</nel-tag>
      </nel-descriptions-item>
      <nel-descriptions-item [nelLabel]="'联系地址'">江苏省苏州市吴中区吴中大道 1188 号</nel-descriptions-item>
    </nel-descriptions>

    <nel-descriptions class="margin-top" [nelTitle]="'垂直无边框列表'" [nelColumn]="3" [nelDirection]="'vertical'">
      <nel-descriptions-item [nelLabel]="'用户名'">kooriookami</nel-descriptions-item>
      <nel-descriptions-item [nelLabel]="'手机号'">18100000000</nel-descriptions-item>
      <nel-descriptions-item [nelLabel]="'居住地'" :span="2">苏州市</nel-descriptions-item>
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
    ],
    standalone: false
})

export class NelDemoDescriptionsDirectionComponent { }
