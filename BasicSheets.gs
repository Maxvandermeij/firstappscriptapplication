function setAllBasicSheets() {
  
  var ss = SpreadsheetApp.getActiveSpreadsheet();  
  setFirstBasicSheet();
 
  var templateSheet = ss.getActiveSheet();    
  var monthnames = getMonthNames(); 
  
  for (i = 1; i < 12; i++){
    
     ss.insertSheet(monthnames[i], i, {template: templateSheet});  
  }
}


function setFirstBasicSheet(){
  
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  var sheet = ss.getSheets()[0];
  
  // Sets the Basic column width
  sheet.setColumnWidth(1, 19);
  sheet.setColumnWidth(2, 80);
  sheet.setColumnWidth(3, 50);
  sheet.setColumnWidth(4, 100);  
  sheet.setColumnWidth(5, 100);
 
  //set Alignment
  sheet.getRange('A1:E106').setHorizontalAlignment("center").setVerticalAlignment("middle");  
   
  //set UI
  sheet.getRange('A1:D1').setBackground("#737373").setFontColor("white").setValues([["", "Date", "Hours", "Job"]]).setFontWeight("bold").setFontFamily('Arial').setFontSize(10);
  sheet.setFrozenRows(1);
                 
  //rename first sheet
  var firstsheetname = sheet.getName();
  var first = ss.getSheetByName(firstsheetname);
  first.activate();
  ss.renameActiveSheet("Jan");  
}