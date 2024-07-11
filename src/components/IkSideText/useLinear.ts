import { ikColor } from 'iking-utils-pro'

// 获取渐变 背景
export const useLinear = () => {
  const getLinearGradient = (color: string) => {
    const rgb = ikColor.hexToRGB(color).replace(/[^\d,]/g, '') // 去除非数字和逗号的字符
      .split(',') // 使用逗号分割成数组
      .map(Number) // 将字符串转换为数字
    return `linear-gradient(to top, ${color} 4%, rgb(${rgb[0]},${rgb[1] + 50},${rgb[2]}) 88%)`
  }

  return {
    getLinearGradient,
  }
}
