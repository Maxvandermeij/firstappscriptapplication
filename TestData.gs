function setTestData() {
  var sheets = SpreadsheetApp.getActiveSpreadsheet().getSheets();
  
  for (i = 0; i < 5; i++) {  
  
    sheets[0].getRange(150+i,2).setValue("Job " + i);
  }
      
}
