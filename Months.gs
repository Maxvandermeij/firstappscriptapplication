function getAllFirstMonthDays(y) {
   
   var year = y;
   var firstmonthdays = new Array();
  
   for (i = 0; i < 12; i++) {
     
    var firstdayofcalendarmonth = calculateFirstMonthDays(year, i);
    firstmonthdays[i] = firstdayofcalendarmonth;
   }
  
   return firstmonthdays;
}


function calculateFirstMonthDays(y, m) {
   
  var calendaryear = y;
  var month = m;
  
  var firstdayofmonth = new Date(calendaryear,m,1);
  var weekdayfirstdayofmonth = firstdayofmonth.getDay();  
  
  //addDays function
  Date.prototype.addDays = function(days) {
    var date = new Date(this.valueOf());
    date.setDate(date.getDate() + days);
    return date;
  }
  
  //determine first day of the month  
  var firstdayofcalendarmonth;  

  if (weekdayfirstdayofmonth >= 1 && weekdayfirstdayofmonth <= 4){   
    
    firstdayofcalendarmonth = firstdayofmonth.addDays(1 - weekdayfirstdayofmonth);
    
  } else {
    
    switch(weekdayfirstdayofmonth) {         
      case 5:
        firstdayofcalendarmonth = firstdayofmonth.addDays(3);
        break;
      case 6:
        firstdayofcalendarmonth = firstdayofmonth.addDays(2);
        break;
      case 0:
        firstdayofcalendarmonth = firstdayofmonth.addDays(1);
        break;
    }
  }
  return firstdayofcalendarmonth;  
}


function getMonthNames() {
  
 var monthnames = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  
 return monthnames;
}