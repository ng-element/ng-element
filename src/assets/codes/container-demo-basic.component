import { Component } from '@angular/core';

@Component({
  selector: 'nel-demo-container-basic',
  template: `
    <div class="common-layout">
      <nel-container>
        <nel-header>Header</nel-header>
        <nel-main>Main</nel-main>
      </nel-container>

      <nel-container>
        <nel-header>Header</nel-header>
        <nel-main>Main</nel-main>
        <nel-footer>Footer</nel-footer>
      </nel-container>

      <nel-container>
        <nel-aside>Aside</nel-aside>
        <nel-main>Main</nel-main>
      </nel-container>

      <nel-container>
        <nel-header>Header</nel-header>
        <nel-container>
          <nel-aside>Aside</nel-aside>
          <nel-main>Main</nel-main>
        </nel-container>
      </nel-container>

      <nel-container>
        <nel-header>Header</nel-header>
        <nel-container>
          <nel-aside>Aside</nel-aside>
          <nel-container>
            <nel-main>Main</nel-main>
            <nel-footer>Footer</nel-footer>
          </nel-container>
        </nel-container>
      </nel-container>

      <nel-container>
        <nel-aside>Aside</nel-aside>
        <nel-container>
          <nel-header>Header</nel-header>
          <nel-main>Main</nel-main>
        </nel-container>
      </nel-container>

      <nel-container>
        <nel-aside>Aside</nel-aside>
        <nel-container>
          <nel-header>Header</nel-header>
          <nel-main>Main</nel-main>
          <nel-footer>Footer</nel-footer>
        </nel-container>
      </nel-container>
    </div>
  `,
  styles: [
    `
      nel-header, nel-footer {
        background-color: #B3C0D1;
        color: #333;
        text-align: center;
        line-height: 60px;
      }

      nel-aside {
        width: 200px;
        background-color: #D3DCE6;
        color: #333;
        text-align: center;
        line-height: 200px;
      }

      nel-main {
        background-color: #E9EEF3;
        color: #333;
        text-align: center;
        line-height: 160px;
      }

      nel-container {
        margin-bottom: 40px;
      }

      nel-container:last-child {
        margin-bottom: 0;
      }

      nel-container:nth-child(5) nel-aside,
      nel-container:nth-child(6) nel-aside {
        line-height: 260px;
      }

      nel-container:nth-child(7) nel-aside {
        line-height: 320px;
      }
    `
  ]
})

export class NelDemoContainerBasicComponent { }
