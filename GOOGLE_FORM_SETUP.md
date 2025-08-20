# Google Form Setup Guide

## Step-by-Step Instructions

### 1. Create Your Google Form

1. Go to [forms.google.com](https://forms.google.com)
2. Click "Create a new form"
3. Name it "Michigan Gameday Email List"

### 2. Add Form Questions

**Email Question:**
- Click the "+" button to add a question
- Select "Short answer"
- Type "Email Address"
- Click the three dots (⋮) → "Response validation" → "Text" → "Email address"
- Make it required by toggling the "Required" switch

**Phone Question:**
- Click "+" to add another question
- Select "Short answer"
- Type "Phone Number (Optional)"
- Leave it as optional (don't toggle required)

### 3. Get Your Form ID

1. Click the "Send" button (top right)
2. Click the "Embed" tab (</> icon)
3. Copy the URL from the iframe code
4. Look for the part that says `d/e/FORM_ID/viewform`
5. Copy the `FORM_ID` part (it's a long string of letters and numbers)

### 4. Update Your HTML

Replace `YOUR_FORM_ID` in two places in your `index.html`:

```html
<!-- Line 1: In the iframe src -->
<iframe 
    src="https://docs.google.com/forms/d/e/YOUR_FORM_ID/viewform?embedded=true" 
    width="100%" 
    height="400" 
    frameborder="0" 
    marginheight="0" 
    marginwidth="0">
    Loading…
</iframe>

<!-- Line 2: In the direct link -->
<a href="https://docs.google.com/forms/d/e/YOUR_FORM_ID/viewform" 
   target="_blank" 
   class="form-link-btn">
    Open Form in New Tab
</a>
```

### 5. Set Up Response Collection

1. In your Google Form, click the "Responses" tab
2. Click the green Google Sheets icon (📊)
3. Choose "Create a new spreadsheet"
4. Name it "Michigan Gameday Email List Responses"
5. Click "Create"

### 6. Test Your Form

1. Open your `index.html` in a browser
2. Fill out the form
3. Submit it
4. Check your Google Sheet to see the response

## Benefits of This Method

✅ **Automatic**: No coding required for form handling
✅ **Responses**: Automatically saved to Google Sheets
✅ **Analytics**: Google Forms provides built-in analytics
✅ **Spam Protection**: Google handles spam filtering
✅ **Mobile Friendly**: Works perfectly on all devices
✅ **Free**: No cost for basic usage

## Customization Options

- **Form Theme**: In Google Forms, click the paint palette to customize colors
- **Questions**: Add more fields like "Name", "Favorite Team", etc.
- **Validation**: Add more validation rules for phone numbers
- **Confirmation Message**: Customize the "Thank you" message in form settings

## Troubleshooting

**Form not showing up?**
- Make sure you replaced `YOUR_FORM_ID` with the actual ID
- Check that the form is published (should be by default)

**Responses not appearing in sheet?**
- Make sure you connected the form to a spreadsheet
- Check the "Responses" tab in your form

**Form looks different?**
- Google Forms has its own styling that you can customize
- The iframe will inherit some of your page's styling 