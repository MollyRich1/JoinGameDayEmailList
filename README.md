# Michigan Gameday Email List

A simple webpage to collect emails and phone numbers for University of Michigan gameday merchandise updates.

## Features

- Clean, modern design with University of Michigan branding
- Responsive layout that works on all devices
- Email and phone number collection form
- Success/error message handling
- Ready to connect to Google Sheets

## Setup Instructions

### Option 1: Google Forms (Easiest)
1. Create a new Google Form
2. Add questions for Email and Phone Number
3. In the form settings, enable "Collect email addresses"
4. Get the form URL and replace the form action in the HTML
5. Responses will automatically go to a Google Sheet

### Option 2: Google Apps Script (More Control)
1. Create a new Google Sheet
2. Go to Extensions > Apps Script
3. Create a new script with the following code:

```javascript
function doPost(e) {
  const sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
  const data = JSON.parse(e.postData.contents);
  
  sheet.appendRow([
    new Date(),
    data.email,
    data.phone || ''
  ]);
  
  return ContentService.createTextOutput(JSON.stringify({success: true}))
    .setMimeType(ContentService.MimeType.JSON);
}
```

4. Deploy as a web app
5. Update the form submission in the HTML to send to your Apps Script URL

### Option 3: Formspree (No Setup Required)
1. Go to [Formspree.io](https://formspree.io)
2. Create a free account
3. Create a new form
4. Replace the form action in the HTML with your Formspree endpoint
5. Responses will be sent to your email and can be exported to Google Sheets

## Customization

- **Colors**: The page uses University of Michigan colors (#00274c blue and #ffcb05 yellow)
- **Logo**: Currently shows "M" - you can replace with an actual Michigan logo
- **Text**: Update the title, subtitle, and messages as needed
- **Fields**: Add or remove form fields as required

## File Structure

```
├── index.html          # Main webpage with form
├── README.md          # This file
└── .git/              # Git repository
```

## Testing

Open `index.html` in a web browser to test the form. The current version will show a success message and log the data to the browser console.

## Next Steps

1. Choose one of the setup options above to connect to Google Sheets
2. Host the page on a web server (GitHub Pages, Netlify, etc.)
3. Consider adding analytics to track form submissions
4. Add email validation and spam protection if needed 