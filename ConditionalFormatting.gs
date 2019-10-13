function setConditionalFormatting(y) {
  
  var sheet = SpreadsheetApp.getActiveSpreadsheet().getSheets();
  var year = y; 
  var weeknumber = 0;
  var daysinmonth = getNumberofDaysperMonth(year);
  var range;
  
  for (i = 0; i < 12; i++) {      
     
      for (d = 0; d < daysinmonth[i]-1; d=d+7) {   
       
       range = sheet[i].getRange(2+d*3,3,21);
       weeknumber = weeknumber + 1;
        
       var rule = SpreadsheetApp.newConditionalFormatRule().whenNumberEqualTo(0).setFontColor('white').setRanges([range]).build();
       var rules = sheet[i].getConditionalFormatRules();
       rules.push(rule);
       sheet[i].setConditionalFormatRules(rules);
      }
  }
}