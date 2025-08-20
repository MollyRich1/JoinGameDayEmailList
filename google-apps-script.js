// Google Apps Script for Michigan Gameday Email List
// Copy this code into your Google Apps Script project

function doPost(e) {
  try {
    const sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
    const data = JSON.parse(e.postData.contents);
    
    // Validate email
    if (!data.email || !isValidEmail(data.email)) {
      return ContentService.createTextOutput(JSON.stringify({
        success: false,
        error: 'Invalid email address'
      })).setMimeType(ContentService.MimeType.JSON);
    }
    
    // Add timestamp, email, and phone to sheet
    sheet.appendRow([
      new Date(),           // Timestamp
      data.email,           // Email
      data.phone || ''      // Phone (optional)
    ]);
    
    // Return success response
    return ContentService.createTextOutput(JSON.stringify({
      success: true,
      message: 'Successfully added to mailing list'
    })).setMimeType(ContentService.MimeType.JSON);
    
  } catch (error) {
    // Return error response
    return ContentService.createTextOutput(JSON.stringify({
      success: false,
      error: 'Server error: ' + error.toString()
    })).setMimeType(ContentService.MimeType.JSON);
  }
}

// Email validation function
function isValidEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

// Optional: Function to get all submissions
function getAllSubmissions() {
  const sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
  const data = sheet.getDataRange().getValues();
  
  // Skip header row if you have one
  const submissions = data.slice(1).map(row => ({
    timestamp: row[0],
    email: row[1],
    phone: row[2]
  }));
  
  return submissions;
}

// Optional: Function to export data as CSV
function exportAsCSV() {
  const sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
  const data = sheet.getDataRange().getValues();
  
  let csv = 'Timestamp,Email,Phone\n';
  
  data.forEach(row => {
    csv += `"${row[0]}","${row[1]}","${row[2]}"\n`;
  });
  
  return csv;
} 