// 防抖动函数
const debounce = (func, wait, immediate) => {
  let timeout: any;
  return function() {
      const context = this, args = arguments;
      const later = function() {
          timeout = null;
          if (!immediate) func.apply(context, args);
      };
      const callNow = immediate && !timeout;
      clearTimeout(timeout);
      timeout = setTimeout(later, wait);
      if (callNow) func.apply(context, args);
  };
};

// 贝塞尔曲线函数
const cubic = (value: number): number => Math.pow(value, 3);

const easeInOutCubic = (value: number): number =>
  value < 0.5 ? cubic(value * 2) / 2 : 1 - cubic((1 - value) * 2) / 2;


export {
  debounce,
  easeInOutCubic
}