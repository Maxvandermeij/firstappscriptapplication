function setWeeklyFormula(y) {
  
  var sheet = SpreadsheetApp.getActiveSpreadsheet().getSheets();
  var year = y; 
  var weeknumber = 0;
  var formulahours;
  var formulakms;  
  var daysinmonth = getNumberofDaysperMonth(year);
  var weekrangeshours = getWeekRangesHours(year);
  var weekrangeskms = getWeekRangesKms(year);
  
  for (i = 0; i < 12; i++) {      
     
      for (d = 0; d < daysinmonth[i]-1; d=d+7) {   
        
       weeknumber = weeknumber + 1
       formulahours = "=SUM("+ weekrangeshours[weeknumber] +")";
       sheet[i].getRange(22+d*3,6).setFormula(formulahours);
        
       formulakms = "=SUM("+ weekrangeskms[weeknumber] +")";
       sheet[i].getRange(22+d*3,7).setFormula(formulakms);
      }
  }
}