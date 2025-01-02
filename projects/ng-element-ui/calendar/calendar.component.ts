import { ChangeDetectionStrategy, Component, forwardRef, ChangeDetectorRef, Input, ContentChild, TemplateRef, AfterContentInit, OnInit, AfterViewInit, SimpleChanges, OnChanges } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { addDays, addWeeks, differenceInDays, format, getDate, getDay, getMonth, getWeek, getWeekOfMonth, getYear, startOfMonth, startOfWeek, subMonths } from 'date-fns';
import { NelDateCellDirective } from './calendar-cell.component';

type NelCalendarDateTemplate = TemplateRef<{ $implicit: Date }>;

@Component({
    selector: 'nel-calendar',
    templateUrl: './calendar.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [
        {
            provide: NG_VALUE_ACCESSOR,
            useExisting: forwardRef(() => NelCalendarComponent),
            multi: true
        }
    ],
    standalone: false
})

export class NelCalendarComponent implements ControlValueAccessor {
  @Input() set nelRange(val: Array<Date>) {
    this.showButton = false;
    if (val && val.length !== 2) {
      throw Error('nelRang need [Date, Date]');
    }
    if (val[0].getDay() !== 1) {
      throw Error('First Date need is Monday');
    }
    if (val[1].getDay() !== 0) {
      throw Error('Second Date need is Sunday');
    }
    const days = differenceInDays(val[1], val[0]);
    if (days < 0) {
      throw Error('Second Date need after first Date');
    }
    const week = (days + 1) / 7;
    if (week > 8) {
      throw Error('The time span cannot exceed two months');
    }

    this.initCalendar(val[0], week);
  }
  @Input() nelDateCell?: NelCalendarDateTemplate;
  @ContentChild(NelDateCellDirective, { static: false, read: TemplateRef }) nzDateCellChild?: NelCalendarDateTemplate;
  get dateCell(): NelCalendarDateTemplate {
    return (this.nelDateCell || this.nzDateCellChild)!;
  }
  current = {
    year: 0,
    month: 0
  };
  data!: Date;
  temporaryDate!: Date;
  calendarList: any[] = [];
  showButton = true;
  change = (value: any) => { };

  constructor(
    private cdf: ChangeDetectorRef
  ) { }

  initCalendar(date: Date, weeks: number, selectedDay: Date | null = null): void {
    this.current = {
      year: getYear(date),
      month: getMonth(date) + 1
    };

    const firstDay = startOfWeek(date, { weekStartsOn: 1 });

    const calendarList = [];
    for (let i = 0; i < weeks; i++) {
      const weekItem = [];
      for (let j = 0; j < 7; j++) {
        const dateItem = addDays(firstDay, i * 7 + j);
        const today = this.data ? format(this.data, 'yyyy-MM-dd') === format(dateItem, 'yyyy-MM-dd') : false;
        const selected = !selectedDay ? today : (format(selectedDay, 'yyyy-MM-dd') === format(dateItem, 'yyyy-MM-dd'));
        weekItem.push({
          text: getDate(dateItem),
          day: format(dateItem, 'yyyy-MM-dd'),
          date: dateItem,
          isToday: today,
          isSelected: selected,
          type: this.current.month > getMonth(dateItem) + 1 ? 'next' : this.current.month < getMonth(dateItem) + 1 ? 'prev' : 'current'
        });
      }
      calendarList.push(weekItem);
    }
    this.calendarList = calendarList;
    this.cdf.markForCheck();
  }

  selectDay(dayItem: any): void {
    this.temporaryDate = dayItem.date;
    this.data = dayItem.date;
    this.change(this.data);
    if (dayItem.type === 'current') {
      for (let i = 0; i < 6; i++) {
        for (let j = 0; j < 7; j++) {
          this.calendarList[i][j].isSelected = false;
        }
      }
      dayItem.isSelected = true;
    } else {
      this.initCalendar(startOfMonth(dayItem.date), 6, dayItem.date);
    }
  }

  prevMonth(): void {
    const prev = subMonths(this.temporaryDate, 1);
    const prevMonthDays = this.getMonthDate(prev);
    const day = this.temporaryDate.getDate();

    if (prevMonthDays < day) {
      prev.setDate(prevMonthDays);
    } else {
      prev.setDate(day);
    }
    this.temporaryDate = prev;
    this.initCalendar(startOfMonth(this.temporaryDate), 6, prev);
  }

  getMonthDate(date: Date): number {
    const year = date.getFullYear();
    const month = date.getMonth() + 1;
    const d = new Date(year, month, 0);
    return d.getDate();
  }

  currentMonth(): void {
    this.temporaryDate = new Date();
    this.initCalendar(this.data, 6);
  }

  nextMonth(): void {
    const prev = subMonths(this.temporaryDate, -1);
    const prevMonthDays = this.getMonthDate(prev);
    const day = this.temporaryDate.getDate();

    if (prevMonthDays < day) {
      prev.setDate(prevMonthDays);
    } else {
      prev.setDate(day);
    }
    this.temporaryDate = prev;
    this.initCalendar(startOfMonth(this.temporaryDate), 6, this.temporaryDate);
  }

  writeValue(val: any): void {
    if (val) {
      this.data = val;
      this.temporaryDate = val;
      this.initCalendar(startOfMonth(this.data), 6);
    }
  }

  registerOnChange(fn: any): void {
    this.change = fn;
  }

  registerOnTouched(fn: any): void { }
}
