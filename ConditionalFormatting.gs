function setConditionalFormatting(y) {
  
  var sheet = SpreadsheetApp.getActiveSpreadsheet().getSheets();
  var year = y; 
  var daysinmonth = getNumberofDaysperMonth(year);
  var rangehours;
  var rangejobs;
  var rangejobvalidation = sheet[0].getRange(150,2,50);
  
  for (i = 0; i < 12; i++) {      
     
      for (d = 0; d < daysinmonth[i]-1; d=d+7) {   
       
       rangehours = sheet[i].getRange(2+d*3,3,21);
       rangejobs = sheet[i].getRange(2+d*3,4,21);       
       
       //Validate Hours > 0
       var rule1 = SpreadsheetApp.newDataValidation().requireNumberGreaterThan(0).setAllowInvalid(false).setHelpText("Value must be above 0").build();
       rangehours.setDataValidation(rule1);
       
       //Validate job is from list
       var rule2 = SpreadsheetApp.newDataValidation().requireValueInRange(rangejobvalidation, true).setAllowInvalid(false).setHelpText("Must choose an existing job").build();
       rangejobs.setDataValidation(rule2);
       
       //Red Job, if hours > 0 and job empty
       var rule3 = SpreadsheetApp.newConditionalFormatRule().whenFormulaSatisfied('=AND($D2="", $C2>0)').setBackground("#FF0000").setRanges([rangejobs]).build();       
        
       //Red Hours, if job not empty and hours = 0
       var rule4 = SpreadsheetApp.newConditionalFormatRule().whenFormulaSatisfied('=AND($C2="", NOT($D2="")').setBackground("#FF0000").setRanges([rangehours]).build();
       
       var rules = sheet[i].getConditionalFormatRules();
       rules.push(rule3);
       rules.push(rule4);
       sheet[i].setConditionalFormatRules(rules); 
      }
  }
}