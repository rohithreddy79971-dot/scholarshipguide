// ScholarGuide AI - Script
// Scholarship database with sample data
const scholarshipDatabase = [
  {
    id: 1,
    name: "National Scholarship for Rural Students",
    eligibility: ["rural", "below 2 lakh", "12th", "10th"],
    description: "Scholarship for students from rural areas with family income below 2 lakh.",
    criteria: "Family income < 2 lakh, Agricultural background preferred",
    deadline: "31st July 2026",
    documents: ["Aadhar", "Income Certificate", "10th/12th Mark Sheet", "Bank Passbook"],
    amount: "₹50,000 per year",
    website: "https://scholarships.gov.in",
    matchScore: 0
  },
  {
    id: 2,
    name: "SC/ST Category Scholarship",
    eligibility: ["sc", "st", "category"],
    description: "Special scholarship for students from Scheduled Caste and Scheduled Tribe categories.",
    criteria: "Valid SC/ST certificate required",
    deadline: "30th August 2026",
    documents: ["Caste Certificate", "Aadhar", "Bank Passbook", "Mark Sheet"],
    amount: "₹1,00,000 per year",
    website: "https://scholarships.gov.in",
    matchScore: 0
  },
  {
    id: 3,
    name: "Merit Scholarship for High Achievers",
    eligibility: ["merit", "above 80", "12th pass"],
    description: "Scholarship for students with excellent academic performance.",
    criteria: "12th pass with 80% or above marks",
    deadline: "15th September 2026",
    documents: ["Mark Sheet", "Aadhar", "Birth Certificate"],
    amount: "₹75,000 per year",
    website: "https://scholarships.gov.in",
    matchScore: 0
  },
  {
    id: 4,
    name: "OBC Scholarship",
    eligibility: ["obc", "category", "below 3 lakh"],
    description: "Scholarship available for students from Other Backward Classes.",
    criteria: "Valid OBC certificate, Family income below 3 lakh",
    deadline: "20th August 2026",
    documents: ["OBC Certificate", "Income Certificate", "Aadhar", "Mark Sheet"],
    amount: "₹60,000 per year",
    website: "https://scholarships.gov.in",
    matchScore: 0
  },
  {
    id: 5,
    name: "Women Empowerment Scholarship",
    eligibility: ["female", "girl", "woman", "below 4 lakh"],
    description: "Special scholarship for girl students to promote women's education.",
    criteria: "Female student, Any educational qualification, Family income below 4 lakh",
    deadline: "10th September 2026",
    documents: ["Birth Certificate (Female)", "Aadhar", "Income Certificate", "Enrollment Letter"],
    amount: "₹80,000 per year",
    website: "https://scholarships.gov.in",
    matchScore: 0
  },
  {
    id: 6,
    name: "Low-Income Family Support Scheme",
    eligibility: ["below 1 lakh", "low income", "any", "disadvantaged"],
    description: "Financial support for extremely poor students with family income below 1 lakh.",
    criteria: "Family income below 1 lakh annually",
    deadline: "31st August 2026",
    documents: ["BPL Certificate", "Income Certificate", "Aadhar", "Mark Sheet"],
    amount: "₹1,20,000 per year",
    website: "https://scholarships.gov.in",
    matchScore: 0
  }
];

// Keywords for NLP extraction
const nlpKeywords = {
  qualification: {
    "10th": ["10th", "ssc", "class 10", "secondary"],
    "12th": ["12th", "hsc", "class 12", "intermediate"],
    "graduation": ["graduation", "bachelor", "b.a", "b.sc", "b.com", "degree"],
    "postgraduate": ["masters", "m.a", "m.sc", "postgraduate", "pg"]
  },
  income: {
    "below 1 lakh": ["below 1 lakh", "under 1 lakh", "poor", "bpl"],
    "below 2 lakh": ["below 2 lakh", "under 2 lakh"],
    "below 3 lakh": ["below 3 lakh", "under 3 lakh"],
    "below 4 lakh": ["below 4 lakh", "under 4 lakh"]
  },
  location: {
    "rural": ["rural", "village", "gram", "taluka"],
    "urban": ["urban", "city", "metro"]
  },
  category: {
    "sc": ["sc", "scheduled caste", "dalit"],
    "st": ["st", "scheduled tribe", "adivasi"],
    "obc": ["obc", "backward"],
    "general": ["general", "forward"]
  },
  gender: {
    "female": ["girl", "female", "woman", "women"],
    "male": ["boy", "male", "man"]
  },
  academics: {
    "high": ["good", "excellent", "high", "above 75", "above 80", "merit"],
    "average": ["average", "medium", "ok", "pass"],
    "low": ["weak", "low", "below average"]
  }
};

// Initialize speech recognition
const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
let recognition = null;
if (SpeechRecognition) {
  recognition = new SpeechRecognition();
  recognition.continuous = false;
  recognition.interimResults = true;
  recognition.lang = 'en-IN';
}

// DOM Elements
const studentInput = document.getElementById('student-input');
const listenBtn = document.getElementById('listen-btn');
const recommendBtn = document.getElementById('recommend-btn');
const statusDiv = document.getElementById('status');
const resultsDiv = document.getElementById('results');

// Update listen button availability
if (!recognition) {
  listenBtn.disabled = true;
  listenBtn.textContent = 'Voice Input Not Supported';
}

// Speech Recognition Handler
listenBtn.addEventListener('click', () => {
  if (!recognition) {
    statusDiv.textContent = 'Speech recognition is not supported in your browser.';
    statusDiv.classList.add('error');
    return;
  }

  const isListening = listenBtn.getAttribute('data-listening') === 'true';

  if (isListening) {
    recognition.stop();
    listenBtn.setAttribute('data-listening', 'false');
    listenBtn.textContent = 'Start Voice Input';
  } else {
    studentInput.value = '';
    recognition.start();
    listenBtn.setAttribute('data-listening', 'true');
    listenBtn.textContent = 'Stop Listening...';
    statusDiv.textContent = '🎤 Listening... Please speak clearly.';
    statusDiv.classList.remove('error', 'loading');
  }
});

recognition?.addEventListener('result', (event) => {
  let interimTranscript = '';
  for (let i = event.resultIndex; i < event.results.length; i++) {
    const transcript = event.results[i][0].transcript;
    if (event.results[i].isFinal) {
      studentInput.value += transcript + ' ';
    } else {
      interimTranscript += transcript;
    }
  }
  if (interimTranscript) {
    studentInput.value = studentInput.value.trim() + ' ' + interimTranscript;
  }
});

recognition?.addEventListener('end', () => {
  listenBtn.setAttribute('data-listening', 'false');
  listenBtn.textContent = 'Start Voice Input';
  statusDiv.textContent = '✓ Voice input completed.';
});

recognition?.addEventListener('error', (event) => {
  statusDiv.textContent = `❌ Error: ${event.error}. Please try again.`;
  statusDiv.classList.add('error');
  listenBtn.setAttribute('data-listening', 'false');
  listenBtn.textContent = 'Start Voice Input';
});

// NLP Extraction Function
function extractStudentProfile(inputText) {
  const text = inputText.toLowerCase();
  const profile = {
    qualification: null,
    incomeLevel: null,
    location: null,
    category: null,
    gender: null,
    academicPerformance: null
  };

  // Extract qualification
  for (const [level, keywords] of Object.entries(nlpKeywords.qualification)) {
    if (keywords.some(keyword => text.includes(keyword))) {
      profile.qualification = level;
    }
  }

  // Extract income level
  for (const [income, keywords] of Object.entries(nlpKeywords.income)) {
    if (keywords.some(keyword => text.includes(keyword))) {
      profile.incomeLevel = income;
    }
  }

  // Extract location
  for (const [loc, keywords] of Object.entries(nlpKeywords.location)) {
    if (keywords.some(keyword => text.includes(keyword))) {
      profile.location = loc;
    }
  }

  // Extract category
  for (const [cat, keywords] of Object.entries(nlpKeywords.category)) {
    if (keywords.some(keyword => text.includes(keyword))) {
      profile.category = cat;
    }
  }

  // Extract gender
  for (const [gen, keywords] of Object.entries(nlpKeywords.gender)) {
    if (keywords.some(keyword => text.includes(keyword))) {
      profile.gender = gen;
    }
  }

  // Extract academics
  for (const [perf, keywords] of Object.entries(nlpKeywords.academics)) {
    if (keywords.some(keyword => text.includes(keyword))) {
      profile.academicPerformance = perf;
    }
  }

  return profile;
}

// Matching Algorithm
function matchScholarships(profile) {
  const results = [];

  scholarshipDatabase.forEach(scholarship => {
    let matchScore = 0;
    let totalCriteria = 0;

    // Check qualification match
    if (profile.qualification) {
      totalCriteria++;
      const qualMatch = scholarship.eligibility.some(el => 
        el.includes(profile.qualification.toLowerCase().split(' ')[0]) ||
        profile.qualification.toLowerCase().includes(el)
      );
      if (qualMatch) matchScore++;
    }

    // Check income match
    if (profile.incomeLevel) {
      totalCriteria++;
      if (scholarship.eligibility.some(el => profile.incomeLevel.includes(el) || el.includes('lakh'))) {
        matchScore++;
      }
    }

    // Check location match
    if (profile.location) {
      totalCriteria++;
      if (scholarship.eligibility.includes(profile.location)) {
        matchScore++;
      }
    }

    // Check category match
    if (profile.category) {
      totalCriteria++;
      if (scholarship.eligibility.some(el => profile.category.includes(el) || el.includes(profile.category))) {
        matchScore++;
      }
    }

    // Check gender match
    if (profile.gender === 'female') {
      totalCriteria++;
      if (scholarship.eligibility.some(el => el.includes('female') || el.includes('woman') || el.includes('women'))) {
        matchScore++;
      }
    }

    // Check academic performance match
    if (profile.academicPerformance === 'high') {
      totalCriteria++;
      if (scholarship.eligibility.some(el => el.includes('80') || el.includes('merit'))) {
        matchScore++;
      }
    }

    // Calculate percentage (avoid division by zero)
    const percentage = totalCriteria > 0 ? (matchScore / totalCriteria) * 100 : 0;
    if (percentage > 0) {
      scholarship.matchScore = Math.round(percentage);
      results.push(scholarship);
    }
  });

  return results.sort((a, b) => b.matchScore - a.matchScore);
}

// Display Results
function displayResults(scholarships) {
  resultsDiv.innerHTML = '';

  if (scholarships.length === 0) {
    resultsDiv.innerHTML = '<p style="text-align: center; color: var(--text-light); padding: 20px;">No scholarships found matching your profile. Please provide more details about your background.</p>';
    return;
  }

  const title = document.createElement('h3');
  title.textContent = `Found ${scholarships.length} Matching Scholarships`;
  title.style.marginBottom = '20px';
  resultsDiv.appendChild(title);

  scholarships.forEach(scholarship => {
    const resultDiv = document.createElement('div');
    resultDiv.className = 'scholarship-result';
    resultDiv.innerHTML = `
      <h4>${scholarship.name}</h4>
      <p><strong>Amount:</strong> ${scholarship.amount}</p>
      <p><strong>Eligibility:</strong> ${scholarship.criteria}</p>
      <p><strong>Application Deadline:</strong> ${scholarship.deadline}</p>
      <p><strong>Required Documents:</strong> ${scholarship.documents.join(", ")}</p>
      <span class="match-percentage">Match: ${scholarship.matchScore}%</span>
      <p style="margin-top: 12px; font-size: 0.9rem; color: var(--text-light);">${scholarship.description}</p>
      <a href="${scholarship.website}" target="_blank" rel="noopener noreferrer" class="btn" style="margin-top: 12px; font-size: 0.9rem; padding: 8px 16px;">Learn More</a>
    `;
    resultsDiv.appendChild(resultDiv);
  });
}

// Recommend Button Handler
recommendBtn.addEventListener('click', () => {
  const inputText = studentInput.value.trim();

  if (!inputText) {
    statusDiv.textContent = '⚠️ Please enter or speak about your profile first.';
    statusDiv.classList.remove('loading', 'error');
    statusDiv.classList.add('error');
    return;
  }

  // Show loading state
  statusDiv.textContent = '🔍 Analyzing your profile...';
  statusDiv.classList.add('loading');
  statusDiv.classList.remove('error');
  resultsDiv.innerHTML = '';

  // Simulate processing delay
  setTimeout(() => {
    try {
      // Extract student profile using NLP
      const studentProfile = extractStudentProfile(inputText);

      // Match scholarships
      const matchedScholarships = matchScholarships(studentProfile);

      // Display results
      displayResults(matchedScholarships);

      // Update status
      if (matchedScholarships.length > 0) {
        statusDiv.textContent = `✓ Found ${matchedScholarships.length} scholarship(s) for you!`;
        statusDiv.classList.remove('error', 'loading');
      } else {
        statusDiv.textContent = '⚠️ No scholarships matched your profile. Try providing more details.';
        statusDiv.classList.add('error');
      }

      // Log extracted profile for debugging
      console.log('Extracted Profile:', studentProfile);
    } catch (error) {
      statusDiv.textContent = '❌ An error occurred. Please try again.';
      statusDiv.classList.add('error');
      console.error('Error:', error);
    }
  }, 800);
});

// Allow Enter key to submit
studentInput.addEventListener('keypress', (event) => {
  if (event.key === 'Enter' && event.ctrlKey) {
    recommendBtn.click();
  }
});

// Smooth scroll to features on button click
document.querySelector('a[href="#features"]').addEventListener('click', (e) => {
  e.preventDefault();
  document.querySelector('#features').scrollIntoView({ behavior: 'smooth' });
});

// Initialize with welcome message
window.addEventListener('load', () => {
  statusDiv.textContent = '👋 Welcome to ScholarGuide AI! Describe your profile to find matching scholarships.';
});
