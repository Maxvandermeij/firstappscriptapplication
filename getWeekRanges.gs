function getWeekRangesHours(y) {
  
  var year = y;
  var sheet = SpreadsheetApp.getActiveSpreadsheet().getSheets();
  var daysinmonth = getNumberofDaysperMonth(year);
    
  var weekrangeshours = new Array();
  var weeknumber = 0;
  
  for (i = 0; i < 12; i++) {      
    
      for (d = 0; d < daysinmonth[i]-1; d=d+7) {   
      
       weeknumber = weeknumber + 1
       
       weekrangeshours[weeknumber] = sheet[i].getRange(2+d*3,3,21).getA1Notation();
      }
  }
  
  return weekrangeshours;
}

function getWeekRangesKms(y) {
  
  var year = y;
  var sheet = SpreadsheetApp.getActiveSpreadsheet().getSheets();
  var daysinmonth = getNumberofDaysperMonth(year);
    
  var weekrangeskms = new Array();
  var weeknumber = 0;
  
  for (i = 0; i < 12; i++) {      
    
      for (d = 0; d < daysinmonth[i]-1; d=d+7) {   
      
       weeknumber = weeknumber + 1
       
       weekrangeskms[weeknumber] = sheet[i].getRange(2+d*3,5,21).getA1Notation();
      }
  }
  
  return weekrangeskms;
}