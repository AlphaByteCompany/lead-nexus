let ActualyDayWeek = new Date();
let ActualyMonthYear = new Date();
let actualMonth = ActualyMonthYear.getMonth();
let today = ActualyDayWeek.getDay();

function GeralViewShowDataToday(day) {
  let countToday = 0;
  let database = JSON.parse(localStorage.getItem(LocalStorageKey) || "[]");
  for (let i = 0; i < database.length; i++) {
    if (database[i]["Day"] != day) {
      countToday = 0;
      document.getElementById("today-count").innerHTML = countToday;
    } else {
      if (database[i]["Day"] == day) {
        countToday++;
      document.getElementById("today-count").innerHTML = countToday;
      }
    } 
    
  }
}  


function GeralViewShowDataMonth(month) {
  let database = JSON.parse(localStorage.getItem(LocalStorageKey) || "[]"); 
  let monthCount = 0; 
  for (let i = 0; i < database.length; i++) {
    if (database[i]["Month"] != month) {
      monthCount=0;
      document.getElementById("count-month").innerHTML = monthCount;
    } else {
      if (database[i]["Month"] == month) {
        monthCount++; 
        document.getElementById("count-month").innerHTML = monthCount;
      }
    }
  }
}

GeralViewShowDataToday(today);
GeralViewShowDataMonth(actualMonth);