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

//notused
function getWeekRangesJobs(y) {
  
  var year = y;
  var sheet = SpreadsheetApp.getActiveSpreadsheet().getSheets();
  var daysinmonth = getNumberofDaysperMonth(year);
    
  var weekrangesjobs = new Array();
  var weeknumber = 0;
  
  for (i = 0; i < 12; i++) {      
    
      for (d = 0; d < daysinmonth[i]-1; d=d+7) {   
      
       weeknumber = weeknumber + 1
       
       weekrangesjobs[weeknumber] = sheet[i].getRange(2+d*3,4,21).getA1Notation();
      }
  }
  
  return weekrangesjobs;
}