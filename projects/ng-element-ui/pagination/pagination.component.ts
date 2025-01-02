import { Component, Input, Output, TemplateRef, EventEmitter, OnInit } from '@angular/core';

@Component({
    selector: 'nel-pagination',
    templateUrl: './pagination.component.html',
    standalone: false
})

export class NelPaginationComponent implements OnInit {
  @Input() small = false;
  @Input() background = false;
  @Input() pageSize = 10;
  @Input() total: number = 0;
  @Input() pagerCount = 7;
  @Input() currentPage = 1;
  pageCount = 0;
  pageIndexList: any[] = [];
  prevLen = 0;
  nextLen = 0;

  ngOnInit(): void {
    this.pageCount = Math.ceil(this.total / this.pageSize);
    if (this.pageCount < this.pagerCount) {
      this.pagerCount = this.pageCount;
    }
    this.initLen();
    this.initPageIndex();
  }

  initLen(): void {
    if (this.pageCount > this.pagerCount) {
      const len = (this.pagerCount - 1) / 2;
      if ((this.pagerCount - 1) % 2 === 0) {
        this.prevLen = len;
        this.nextLen = len;
      } else {
        this.prevLen = Math.floor(len);
        this.nextLen = Math.ceil(len);
      }
    }
  }

  initPageIndex() {
    let prevMore = false;
    let nextMore = false;
    if (this.pageCount > this.pagerCount) {
      prevMore = this.currentPage - 1 > this.prevLen;
      nextMore = this.pageCount - this.currentPage > this.nextLen;
    }
    const pageIndexList = [];
    if (!prevMore && !nextMore) {
      for (let i = 0; i < this.pagerCount; i++) {
        pageIndexList.push({
          type: 'number',
          value: i + 1
        });
      }
    } else if (prevMore && !nextMore) {
      pageIndexList.push({
        type: 'number',
        value: 1
      });
      pageIndexList.push({
        type: 'more-prev',
        value: 0
      });
      const startIndex = this.pageCount - this.pagerCount + 1;
      for (let i = startIndex; i < this.pageCount; i++) {
        pageIndexList.push({
          type: 'number',
          value: i + 1
        });
      }
    } else if (!prevMore && nextMore) {
      const endIndex = this.pagerCount - 1;
      for (let i = 0; i < endIndex; i++) {
        pageIndexList.push({
          type: 'number',
          value: i + 1
        });
      }
      pageIndexList.push({
        type: 'more-next',
        value: 0
      });
      pageIndexList.push({
        type: 'number',
        value: this.pageCount
      });
    } else {
      pageIndexList.push({
        type: 'number',
        value: 1
      });
      pageIndexList.push({
        type: 'more-prev',
        value: 0
      });
      const startIndex = this.currentPage - this.prevLen + 1;
      const endIndex = this.currentPage + this.nextLen;
      for (let i = startIndex; i < endIndex; i++) {
        pageIndexList.push({
          type: 'number',
          value: i
        });
      }
      pageIndexList.push({
        type: 'more-next',
        value: 0
      });
      pageIndexList.push({
        type: 'number',
        value: this.pageCount
      });
    }
    this.pageIndexList = pageIndexList;
  }

  prevPage() {
    let currentPage = this.currentPage - 1;
    if (currentPage < 1) {
      currentPage = 1;
    }
    this.currentPage = currentPage;
    this.initPageIndex();
  }

  nextPage() {
    let currentPage = this.currentPage + 1;
    if (currentPage > this.pageCount) {
      currentPage = this.pageCount;
    }
    this.currentPage = currentPage;
    this.initPageIndex();
  }

  prevMore() {
    let currentPage = this.currentPage - 5;
    if (currentPage < 1) {
      currentPage = 1;
    }
    this.currentPage = currentPage;
    this.initPageIndex();
  }

  nextMore() {
    let currentPage = this.currentPage + 5;
    if (currentPage > this.pageCount) {
      currentPage = this.pageCount;
    }
    this.currentPage = currentPage;
    this.initPageIndex();
  }

  selectPage(index: number) {
    this.currentPage = index;
    this.initPageIndex();
  }
}
