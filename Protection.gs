function setProtection(y) {
  
  var sheet = SpreadsheetApp.getActiveSpreadsheet().getSheets();
  var year = y;
  var daysinmonth = getNumberofDaysperMonth(year);
  var unprotectedfields;
  
  for (i = 0; i < 12; i++) {    
    
    for (d = 21; d < daysinmonth[i]-1; d=d+7) {   
      
        var protection = sheet[i].protect().setDescription('No touch');    
        unprotectedfields = sheet[i].getRange(2,3,(d+7)*3,2);       
        protection.setUnprotectedRanges([unprotectedfields]); 
    }
    
    var me = Session.getEffectiveUser();
    protection.addEditor(me);
    protection.removeEditors(protection.getEditors());
    
    if (protection.canDomainEdit()) {
      
      protection.setDomainEdit(false);
    }
  } 
}
