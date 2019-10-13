function setFormatting(y) {
  
  var year = y;
  
  setDailyFormat(year);
  setWeeklyFormat(year); 
}


function setWeeklyFormat(y) {
  
  var year = y;
  var sheet = SpreadsheetApp.getActiveSpreadsheet().getSheets();
  var daysinmonth = getNumberofDaysperMonth(year);
  var weeknumber = 0;     
  
  for (i = 0; i < 12; i++) {      
     
      for (d = 0; d < daysinmonth[i]-1; d=d+7) {   
        
        weeknumber = weeknumber + 1
        
        //setweeknummer
        sheet[i].getRange(2+d*3,1,21).mergeVertically().setBackground("#0F9D58").setBorder(true, true, true, true, true, false, 'white', null).setVerticalText(true).setFontColor("white").setValue("Week "+ weeknumber);
        
        //set endofweek line
        sheet[i].getRange(2+d*3,2,21,4).setBorder(null,null,true,null,null,null,'black', SpreadsheetApp.BorderStyle.DOUBLE);
        
        //set totalweek hours
        sheet[i].getRange(21+d*3,5).setValue("Total Week " +weeknumber).setFontColor('grey');
      }
  }
}

function setDailyFormat(y) {
  
  var year = y;
  var sheet = SpreadsheetApp.getActiveSpreadsheet().getSheets();
  var daysinmonth = getNumberofDaysperMonth(year);
  
   for (i = 0; i < 12; i++) {
   
      for (d = 0; d < daysinmonth[i]; d++) {         
        
        sheet[i].getRange(2+d*3,2,3).mergeVertically();
        sheet[i].getRange(2+d*3,2,3,3).setBorder(true, true, true, true, true, false, 'grey', SpreadsheetApp.BorderStyle.DOTTED); 
      }
  }
}
  

