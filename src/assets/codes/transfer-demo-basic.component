import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'nel-demo-transfer-basic',
    template: `
    <nel-transfer [data]="data"></nel-transfer>
  `,
    standalone: false
})

export class NelDemoTransferBasicComponent implements OnInit {
  data: any[] = [];

  ngOnInit(): void {
    for (let i = 1; i < 15; i++) {
      this.data.push({
        key: i,
        label: `Option ${i}`
      });
    }
  }
}
