/*
 * @Author       : wfl
 * @LastEditors  : wfl
 * @description  : 
 * @updateInfo   : 
 * @Date         : 2023-03-31 10:31:31
 * @LastEditTime : 2023-04-03 18:13:45
 */
import { _ } from 'iking-utils-pro'
export const useFilter = () => {
  const handFilter = _.debounce((list, filterText, fixPropOpt, cb) => {
    const _list = filterText ? list.filter((v: any) =>
      v[fixPropOpt.name]
        .toUpperCase()
        .includes(filterText.toUpperCase())
    )
      : _.cloneDeep(list);
    cb(_list)
  }, 200);

  return {
    handFilter
  }
}