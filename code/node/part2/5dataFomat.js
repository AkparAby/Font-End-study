//创建格式化时间的函数
function dataFomat(dtStr) {
  const dt = new Date(dtStr);

  const y = dt.getFullYear();
  const m = padZero(dt.getMonth() + 1); //月份是0~11，所以加1
  const d = padZero(dt.getDate());

  const hh = padZero(dt.getHours());
  const mm = padZero(dt.getMinutes());
  const ss = padZero(dt.getSeconds());

  return `${y}-${m}-${d} ${hh}:${mm}:${ss}`;
}

//创建补零函数
function padZero(n) {
  return n > 9 ? n : "0" + n;
}

//导出格式化时间的函数
module.exports = {
    dataFomat
};
