<h1 align="center">
Ng-Element-UI
</h1>

<div align="center">

An enterprise-class UI components based on Element UI and Angular.

</div>

## Components completion status

- [x] icon
- [x] alert
- [x] empty
- [x] button
- [x] link
- [x] container
- [x] divider
- [x] layout
- [x] page-header
- [x] dialog
- [x] card
- [x] tooltip
- [x] backtop
- [x] collapse
- [x] scrollbar
- [x] infinite-scroll
- [x] radio
- [x] image
- [x] timeline
- [x] popconfirm
- [x] popover
- [x] avatar
- [x] tag
- [x] badge
- [x] affix
- [x] space
- [x] breadcrumb
- [x] descriptions
- [x] steps
- [x] skeleton
- [x] calendar
- [x] drawer
- [x] carousel
- [x] message
- [x] notification
- [x] message-box
- [x] loading
- [x] dropdown
- [x] tabs
- [x] switch
- [x] progress
- [x] result
- [x] input

## Environment Support

- Angular `^11.0.0` [![npm package](https://img.shields.io/npm/v/ng-element-ui.svg?style=flat-square)](https://www.npmjs.com/package/ng-element-ui)

## Installation

```bash
npm install ng-element-ui
```

## Usage

Import the component modules you want to use into your `app.module.ts`

```typescript
import { NelButtonModule } from 'ng-element-ui/button';

@NgModule({
  imports: [ NelButtonModule ]
})
export class AppModule {
}
```


## Development

```bash
$ git clone https://github.com/ng-element/ng-element.git
$ cd ng-element
$ npm install
$ ng serve
```

## License

MIT
