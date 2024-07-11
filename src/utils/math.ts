export const formatNumber = (num: number) => {
  if (num % 1 === 0) { // 如果是整数
    return num.toString(); // 直接返回字符串形式
  } else { // 如果有小数
    return num.toFixed(2); // 使用 toFixed() 方法保留两位小数并返回字符串形式
  }
}

export const formatFileSize = (bytes: number, fixed = 2) => {
  if (bytes === undefined) return '';
  if (bytes === 0) return '0 B';

  const units = ['B', 'KB', 'MB', 'GB', 'TB'];
  const index = Math.floor(Math.log(bytes) / Math.log(1024));
  let size = bytes / Math.pow(1024, index);

  // 判断是否为整数，如果不是则保留两位小数
  const formattedSize = (size % 1 === 0) ? size.toFixed(fixed || 0) : size.toFixed(fixed);

  return formattedSize + ' ' + units[index]
}

export const setFileUrl = (base: string, url: string) => {
  return url
    ? url.startsWith('http')
      ? url
      : `${base || location.origin}${url}`
    : ''
}