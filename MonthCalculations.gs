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


function getNumberofDaysperMonth(y) {
   
   var year = y;

   var firstdaynextyear = calculateFirstMonthDays(year+1, 0);
   var allfirstmonthdays = getAllFirstMonthDays(year);
   var daysinmonth = new Array();
  
   for (i = 0; i < 11; i++) {
    
     daysinmonth[i] = DateDiff.inDays(allfirstmonthdays[i], allfirstmonthdays[i+1]);     
   }

   daysinmonth[11] = DateDiff.inDays(allfirstmonthdays[11], firstdaynextyear);
  
  //TODO: try add timezone to getTime()  
   //march difference is not calculated right, thus trying this
   daysinmonth[2] = 1 + DateDiff.inDays(allfirstmonthdays[2], allfirstmonthdays[3]);
  
   return daysinmonth;   
}


function getMonthNames() {
  
 var monthnames = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  
 return monthnames;
}


//imported stuff
Date.prototype.addDays = function(days) {
    var date = new Date(this.valueOf());
    date.setDate(date.getDate() + days);
    return date;
  }

//DateDiff-formula
var DateDiff = {    
    inDays: function(d1, d2) {
        var t2 = d2.getTime();
        var t1 = d1.getTime();

        return parseInt((t2-t1)/(24*3600*1000));
 }
}