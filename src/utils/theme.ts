/*
 * @Author       : wfl
 * @LastEditors  : wfl
 * @description  : 
 * @updateInfo   : 
 * @Date         : 2023-06-07 18:21:06
 * @LastEditTime : 2023-06-07 18:22:51
 */
export const watchTheme = (cb: Function) => {
  // 获取 HTML 元素
  const element = document.querySelector('html');

  // 创建 MutationObserver 实例
  const observer = new MutationObserver((mutations) => {
    mutations.forEach((mutation) => {
      // 判断是否是 class 属性变化
      if (mutation.attributeName === 'class') {
        cb(mutation.target.classList.value)
      }
    });
  });

  // 配置观察选项
  const config = { attributes: true };

  // 开始观察
  observer.observe(element, config);
}
