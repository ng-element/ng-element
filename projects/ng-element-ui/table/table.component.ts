import { Component, Input, AfterViewInit, AfterContentInit, ContentChildren, QueryList, ViewChild, ElementRef, Renderer2 } from '@angular/core';
import { NelTableColumnComponent } from './table-column.component';

@Component({
    selector: 'nel-table',
    templateUrl: './table.component.html',
    standalone: false
})

export class NelTableComponent implements AfterContentInit, AfterViewInit {
  @Input() data: any[] = [];
  @ViewChild('table', { static: false }) tableRef!: ElementRef;
  @ViewChild('tableHeader', { static: false }) tableHeaderRef!: ElementRef;
  @ViewChild('tableBody', { static: false }) tableBodyRef!: ElementRef;
  @ContentChildren(NelTableColumnComponent, { descendants: false }) columns?: QueryList<NelTableColumnComponent>;
  labels: any[] = [];
  props: any[] = [];

  constructor(
    private renderer: Renderer2
  ) { }

  ngAfterContentInit(): void {
    if (!this.columns || this.columns.length === 0) {
      return;
    }
    const columns = this.columns.toArray();
    const labels = [];
    const props = [];
    for (let i = 0; i < columns.length; i++) {
      labels.push(columns[i].label);
      props.push(columns[i].prop);
    }
    this.labels = labels;
    this.props = props;
  }

  ngAfterViewInit(): void {
    const client = this.tableRef.nativeElement.getBoundingClientRect();
    this.renderer.setStyle(this.tableHeaderRef.nativeElement, 'width', client.width + 'px');
    this.renderer.setStyle(this.tableBodyRef.nativeElement, 'width', client.width + 'px');
  }
}
