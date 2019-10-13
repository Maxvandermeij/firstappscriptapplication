function setWeeklyHourFormula(y) {
  
  var sheet = SpreadsheetApp.getActiveSpreadsheet().getSheets();
  var year = y; 
  var weeknumber = 0;
  var formula;  
  var daysinmonth = getNumberofDaysperMonth(year);
  var weekrangeshours = getWeekRangesHours(year);
  
  for (i = 0; i < 12; i++) {      
     
      for (d = 0; d < daysinmonth[i]-1; d=d+7) {   
        
        weeknumber = weeknumber + 1
       formula = "=SUM("+ weekrangeshours[weeknumber] +")";
       sheet[i].getRange(22+d*3,5).setFormula(formula);
      }
  }
}