/*
 * @Author: qiye
 * @LastEditors: qiye
 * @description: page description
 * @Date: 2023-11-10 11:19:19
 * @LastEditTime: 2023-11-10 11:50:09
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