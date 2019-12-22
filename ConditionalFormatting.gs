function setConditionalFormatting(y) {
  
  var sheet = SpreadsheetApp.getActiveSpreadsheet().getSheets();
  var year = y; 
  var weeknumber = 0;
  var daysinmonth = getNumberofDaysperMonth(year);
  var rangehours;
  var rangejobs;
  var rangejobvalidation;
  
  for (i = 0; i < 12; i++) {      
     
      for (d = 0; d < daysinmonth[i]-1; d=d+7) {   
       
       rangehours = sheet[i].getRange(2+d*3,3,21);
       rangejobs = sheet[i].getRange(2+d*3,4,21);
       weeknumber = weeknumber + 1;
        
       var rule1 = SpreadsheetApp.newDataValidation().requireNumberGreaterThan(0).setAllowInvalid(false).setHelpText("Value must be above 0").build();
       rangehours.setDataValidation(rule1);
       
       rangejobvalidation = sheet[0].getRange(150,1,200);
       var rule2 = SpreadsheetApp.newDataValidation().requireValueInRange(rangejobvalidation, true).setAllowInvalid(false).setHelpText("Must choose an existing job").build();
       rangejobs.setDataValidation(rule2);
        
        
        
      
       //var rule = SpreadsheetApp.newConditionalFormatRule().whenNumberEqualTo(0).setFontColor('white').setRanges([range]).build();
       //var rules = sheet[i].getConditionalFormatRules();
       //rules.push(rule);
       //sheet[i].setConditionalFormatRules(rules);
      }
  }
}