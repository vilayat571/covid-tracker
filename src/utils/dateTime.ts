let date = new Date();
let current_date =
  date.getFullYear() + "-" + (date.getMonth() + 1) + "-" + date.getDate();
let current_time =
  date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds();
let date_time = current_date + " " + current_time;

export const today = `Last Updated at : ${date_time}`;
