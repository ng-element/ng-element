export const getScrollContainer = (
  el: HTMLElement,
  isVertical?: boolean,
): HTMLElement => {
  let parent: HTMLElement = el;
  while (parent) {
    if ([window, document, document.documentElement].includes(parent)) {
      return window.document.body
    }
    if (isScroll(parent, isVertical)) {
      return parent
    }
    parent = parent.parentNode as HTMLElement
  }
  return parent
}

export const isScroll = (
  el: HTMLElement,
  isVertical?: boolean,
): RegExpMatchArray | null => {
  const determinedDirection = isVertical === null || isVertical === undefined
  const overflow = determinedDirection
    ? getStyle(el, 'overflow')
    : isVertical
      ? getStyle(el, 'overflow-y')
      : getStyle(el, 'overflow-x')

  if(overflow) {
    return overflow.match(/(scroll|auto)/);
  } else {
    return null;
  }
}

export const getStyle = function (
  element: HTMLElement,
  styleName: string,
): string | null {
  if (!element || !styleName) {
    return null;
  }
  // styleName = camelize(styleName)
  if (styleName === 'float') {
    styleName = 'cssFloat'
  }
  try {
    const style = element.style[styleName as any]
    if (style) return style
    const computed = getComputedStyle(element, '')
    return computed ? computed[styleName as any] : ''
  } catch (e) {
    return element.style[styleName as any]
  }
}
