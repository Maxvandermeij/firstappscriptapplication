function setDates(y) {
  var year = y;
  var sheets = SpreadsheetApp.getActiveSpreadsheet().getSheets();
  
  var allfirstmonthdays = getAllFirstMonthDays(year);
  var monthnames = getMonthNames();
  var daysinmonth = getNumberofDaysperMonth(year)
 
  for (i = 0; i < 12; i++) {
    
    if (sheets[i].getName() == monthnames[i]) {      
     
      //zet eerste dag van de maand
      sheets[i].getRange(3,2).setValue(allfirstmonthdays[i]).setNumberFormat("ddd dd mmm");   
      
      for (d = 1; d < daysinmonth[i]; d++) {        
         
         //vult rest van de dagen tot eerst volgende eerstedag van volgende maand
         sheets[i].getRange(3+d*3,2).setValue(allfirstmonthdays[i].addDays(d)).setNumberFormat("ddd dd mmm");
      }
     }        
  }    
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
