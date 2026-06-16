# ScholarGuide AI - Scholarship Discovery and Assistance System

## 🌐 Live Demo

**Visit the live website:** [ScholarGuide AI on Vercel](https://scholarshipguide.vercel.app)

## Overview

**ScholarGuide AI** is a multilingual, speech-enabled, NLP-based scholarship discovery and eligibility recommendation system designed specifically for rural and low-income students. The system simplifies scholarship searches by providing intelligent matching based on student profiles.

## Features

### 🎤 Voice & Text Input
- Students can interact using **voice commands** (Speech Recognition)
- Supports **text input** for seamless interaction
- Web Speech API integration for cross-browser compatibility

### 🌍 Multilingual Support
- Designed for regional language support (Hindi, Tamil, Telugu, Kannada, etc.)
- Easy-to-understand interface with simplified language

### 🤖 NLP-Based Profile Extraction
The system intelligently extracts from student input:
- **Educational Qualification** (10th, 12th, Graduation, Postgraduate)
- **Income Level** (Below 1 lakh, 2 lakh, 3 lakh, 4 lakh)
- **Location** (Rural or Urban)
- **Social Category** (General, SC, ST, OBC)
- **Gender** (Male, Female)
- **Academic Performance** (High, Average, Low)

### 🎯 Smart Scholarship Matching
- Matches student profiles against a comprehensive scholarship database
- Calculates match percentage for each scholarship
- Ranks results by relevance

### 📋 Detailed Information
For each matching scholarship, the system provides:
- Scholarship name and amount
- Eligibility criteria
- Required documents
- Application deadlines
- Links to official websites

## How to Use

### Step 1: Access the Website
Open `index.html` in your web browser.

### Step 2: Provide Your Information
Choose one of two methods:

**Method A - Voice Input:**
1. Click "Start Voice Input" button
2. Speak clearly about your profile
3. Example: "I am from a rural area, 12th pass, my family income is below 2 lakh, I am from SC category"

**Method B - Text Input:**
1. Type in the text area describing your profile
2. Include details about education, income, location, category, gender

### Step 3: Find Scholarships
Click "Find Scholarships" button

### Step 4: Review Results
- View all matching scholarships ranked by match percentage
- Read eligibility criteria and requirements
- Click "Learn More" to visit official scholarship websites

## Example Inputs

```
"I am a girl from a rural village, completed 12th with good marks, my family income is below 2 lakh, I belong to OBC category"

"12th pass, low income below 1 lakh, dalit student, need scholarship for studies"

"I am from rural area, girl student, family income under 3 lakh, want to pursue graduation"
```

## Scholarship Database

The system includes 6 types of scholarships:

1. **National Scholarship for Rural Students** - ₹50,000/year
2. **SC/ST Category Scholarship** - ₹1,00,000/year
3. **Merit Scholarship for High Achievers** - ₹75,000/year
4. **OBC Scholarship** - ₹60,000/year
5. **Women Empowerment Scholarship** - ₹80,000/year
6. **Low-Income Family Support Scheme** - ₹1,20,000/year

## Technical Details

### Files Included

- **index.html** - Main website structure
- **styles.css** - Responsive design and styling
- **script.js** - NLP engine, speech recognition, matching algorithm

### Technologies Used

- **Speech Recognition API** - Web Speech API for voice input
- **Natural Language Processing** - Keyword extraction and profile analysis
- **Responsive Design** - Mobile-friendly interface
- **Modern CSS** - Gradient backgrounds, animations, and transitions

### Browser Compatibility

- Chrome/Edge 25+
- Firefox 25+
- Safari 14+
- Mobile browsers (iOS Safari, Chrome Mobile)

**Note:** Speech recognition works best in Chrome, Edge, and newer versions of Firefox and Safari.

## Key Features Explained

### Speech Recognition
The browser's native Speech Recognition API converts spoken words to text:
- Supports Indian English (en-IN) by default
- Can be configured for other languages
- Continuous listening mode for natural conversation

### NLP Extraction
The system uses keyword matching to understand:
- Educational levels (10th, 12th, degree, masters)
- Income ranges (specific rupee amounts mentioned)
- Geographic location (rural, urban, village)
- Social categories (SC, ST, OBC, General)
- Gender indicators (girl, female, woman, boy, male, man)
- Academic performance (excellent, good, average, weak)

### Matching Algorithm
- Each extracted attribute is scored against scholarship eligibility
- Match percentage is calculated as: (Attributes Matched / Total Attributes Checked) × 100
- Results are sorted by match percentage (highest first)

## Accessibility Features

✓ Large, readable fonts
✓ High contrast colors for clarity
✓ Semantic HTML structure
✓ Keyboard navigation support
✓ Mobile-responsive layout
✓ Simple, jargon-free language
✓ Clear call-to-action buttons

## Future Enhancements

- Integration with live scholarship APIs
- Real-time database updates
- Regional language support (Hindi, Tamil, Telugu, etc.)
- Application status tracking
- Document upload and verification
- Personalized dashboard for students
- Administrator panel for scholarship management
- SMS/Email notifications for deadlines

## Installation & Deployment

### Local Usage
1. Save all three files (index.html, styles.css, script.js) in the same folder
2. Open `index.html` in a web browser
3. No server or dependencies required

### Deploy to Vercel (Recommended)

**Easy 1-Click Deployment:**

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/rohithreddy79971-dot/scholarshipguide)

Or manually:

1. Go to https://vercel.com/new
2. Import the GitHub repository: `rohithreddy79971-dot/scholarshipguide`
3. Click "Deploy"
4. Your app will be live at `scholarshipguide.vercel.app`

**Live Deployment:** https://scholarshipguide.vercel.app

### Deployment
- Deploy to any static hosting (GitHub Pages, Netlify, Vercel, AWS S3)
- No backend server required for basic functionality
- Connect to a database for expanded scholarship listings

## Support & Feedback

For issues or suggestions regarding:
- **Voice Recognition** - Check browser permissions
- **Scholarship Matches** - Ensure profile details are clear
- **Technical Problems** - Check browser console (F12) for errors

## License & Attribution

This project is developed for educational and social welfare purposes to support rural and low-income students in accessing scholarship opportunities.

## Contact

**ScholarGuide AI Team**
Email: info@scholarguide.ai
Website: www.scholarguide.ai

---

**Last Updated:** June 2026
**Version:** 1.0
