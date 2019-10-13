function cleanSheets() {    
  
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  var sheets = ss.getSheets();
  
  try {
    for (i = 1; i < 12; i++) {
      
      ss.deleteSheet(sheets[i]);  
    }
  } 
  
  catch (e) {  
  }
  
  finally {
   
  var sheetnul = ss.getSheets()[0];
  sheetnul.clearFormats().clearContents().clearConditionalFormatRules();
  sheetnul.deleteColumns(1, 5);
  sheetnul.insertColumns(1, 5);
  } 
}
