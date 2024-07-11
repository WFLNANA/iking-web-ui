export  class Event {
  // 唯一标识
  id: string | number | undefined = new Date().getTime();
  // 日程标题
  title: string = '';
  // 开始时间
  start:  string = '';
  // 结束时间
  end: string = '';
  // 是否全天
  allDay: boolean = false;
  // 详情
  extendedProps: any = {}
}
