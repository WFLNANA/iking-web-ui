/*
 * @Author: qiye
 * @LastEditors: zqf
 * @description: page description
 * @Date: 2023-11-10 11:19:19
 * @LastEditTime: 2024-06-07 14:27:00
 */

// export const demoList = [
//   {name: '', component: null}
// ];

const comps = {};
const modules: any[] = import.meta.glob('./**/*.vue', {eager: true}) as any;
for(const path in modules){
  let cname = modules[path].default.__name;
  comps[cname] = modules[path].default;
}

export default comps;