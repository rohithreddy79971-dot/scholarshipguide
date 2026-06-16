# ScholarGuide AI - Quick Start Guide

## Getting Started in 2 Minutes

### Step 1: Open the Website
1. Navigate to your project folder
2. Double-click `index.html` to open it in your default browser
3. Or right-click → "Open with" and select your preferred browser

### Step 2: Try the Features

#### Test with Text Input (Easiest)
Copy and paste one of these examples into the text area:

**Example 1 - Rural Girl Student:**
```
I am a girl from a rural village, completed 12th with good marks, 
my family income is below 2 lakh, I belong to SC category
```
Expected Result: Multiple scholarships including Women Empowerment, SC/ST, Rural, and Low-Income scholarships

**Example 2 - Merit-Based Student:**
```
I passed 12th with 85 marks, from urban area, general category, 
my family income is about 3 lakh
```
Expected Result: Merit Scholarship for High Achievers will be top match

**Example 3 - Low-Income Student:**
```
My family income is below 1 lakh, I am from a rural area, 
I am from OBC category, 12th pass
```
Expected Result: Low-Income Family Support Scheme will have highest match

#### Test Voice Input (Chrome/Edge Recommended)
1. Click "Start Voice Input"
2. Allow microphone permissions when prompted
3. Speak clearly: "I am a student from a rural area, 12th pass, family income below 2 lakh"
4. Click "Stop Listening" or wait for auto-stop
5. The text will appear in the input field
6. Click "Find Scholarships"

### Step 3: Review Results
- See all matching scholarships ranked by percentage
- Read eligibility criteria
- Click "Learn More" to see official links

## What You Can Do

### Input Your Profile Using Keywords

**Education:**
- "10th", "12th", "graduation", "bachelor", "masters", "degree"

**Income:**
- "below 1 lakh", "below 2 lakh", "below 3 lakh", "below 4 lakh"
- "poor", "low income", "BPL"

**Location:**
- "rural", "village", "urban", "city"

**Category:**
- "SC" (Scheduled Caste)
- "ST" (Scheduled Tribe)
- "OBC" (Other Backward Classes)
- "general", "forward"

**Gender:**
- "girl", "female", "woman"
- "boy", "male", "man"

**Academic Performance:**
- "good", "excellent", "80%", "merit"
- "average", "ok", "pass"
- "weak", "low"

### Example Queries

**Query 1:**
```
I am a girl student from rural area, my 12th marks are above 85%, 
family income is below 3 lakhs, OBC category
```

**Query 2:**
```
Low income, disabled student, 40% disability, graduation student, 
urban area, general category
```

**Query 3:**
```
First time learner in my family, parents uneducated, 12th pass, 
family income 2.5 lakh, female student from rural area
```

## Browser Support & Voice Recognition

### Works Best In:
✅ Google Chrome (Desktop & Mobile)
✅ Microsoft Edge
✅ Firefox 25+
✅ Safari 14.1+

### To Enable Voice:
1. Use a supported browser
2. Allow microphone access when prompted
3. Speak clearly in English or regional Indian accents

### If Voice Doesn't Work:
- Use text input instead (works everywhere)
- Check microphone permissions in browser settings
- Ensure you've allowed the website to access microphone

## Testing Smartphone Compatibility

1. Save index.html, styles.css, script.js on a USB drive or cloud
2. Open on your phone's browser
3. Test on different screen sizes
4. Verify touch buttons are easily clickable
5. Check that the page is fully responsive

## Customization

### Add More Scholarships
Edit `script.js` and add entries to the `scholarshipDatabase` array:

```javascript
{
  id: 11,
  name: "Your Scholarship Name",
  eligibility: ["rural", "below 2 lakh", "female"],
  description: "Description here",
  criteria: "Eligibility criteria",
  deadline: "31st December 2026",
  documents: ["Document1", "Document2"],
  amount: "₹60,000 per year",
  website: "https://example.com",
  matchScore: 0
}
```

### Change Colors
Edit `styles.css` color variables:

```css
:root {
  --primary-color: #0066cc;      /* Main blue */
  --secondary-color: #00b4d8;    /* Light blue */
  --accent-color: #ff6b35;       /* Orange buttons */
}
```

### Modify Text
- Hero section: Edit h1 and p in `index.html`
- Buttons: Current labels in `index.html` and `script.js`
- Status messages: Edit text in `script.js`

## Expected Matching Algorithm

The system calculates matches as:
```
Match % = (Matched Criteria / Total Criteria Found) × 100
```

**Scoring:**
- 100% match = All found criteria match the scholarship
- 75% match = 3 out of 4 criteria match
- 50% match = 2 out of 4 criteria match
- 0% match = No criteria match

## Performance Tips

- Page loads instantly (no backend needed)
- Voice recognition may take 2-3 seconds
- Scholarship matching is calculated client-side (very fast)
- All data is processed in the browser (privacy-safe)

## Common Issues & Solutions

| Issue | Solution |
|-------|----------|
| Voice input not working | Use text input instead; check microphone permissions |
| No scholarships found | Add more details (income, location, category) |
| Page looks broken | Clear browser cache (Ctrl+Shift+Delete) and refresh |
| Buttons not clickable on mobile | Tap center of button; try landscape orientation |
| Text too small | Use browser zoom (Ctrl/Cmd + scroll wheel) |

## Next Steps

1. **Deploy Online**: Upload to GitHub Pages, Netlify, or Vercel
2. **Add Database**: Connect to MongoDB or Firebase for live scholarships
3. **Real ML**: Integrate actual NLP API (Google NLP, AWS Comprehend)
4. **User Accounts**: Add login to save student profiles
5. **Email Alerts**: Send deadline reminders to students
6. **Admin Panel**: Allow admins to update scholarship database

## File Structure Reference

```
SCHOLARSHIP GUIDE/
├── index.html          # Main HTML file
├── styles.css          # Styling & responsive design
├── script.js           # NLP logic & scholarship matching
├── scholarships.json   # Scholarship database (expandable)
├── README.md           # Detailed documentation
└── QUICKSTART.md       # This file
```

## Support

For issues:
1. Check browser console (F12 → Console tab)
2. Read error messages
3. Try a different browser
4. Clear cache and try again

---

**Enjoy exploring ScholarGuide AI! Happy scholarship hunting! 🎓**
