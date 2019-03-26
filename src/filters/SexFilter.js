// 根据时间戳获取具体日期/时间
export default (num) => {
  let sex
  if (num === 0) {
    sex = '男'
  } else if (num === 1) {
    sex = '女'
  } else {
    sex = '性别不限'
  }
  return sex
}
