export interface Question {
  id: number;
  question: string;
  options: string[];
  correctAnswer: string;
  category: string;
  explanation: string;
}

export const triviaQuestions: Question[] = [
  // Mental Health Questions
  {
    id: 1,
    question: "What percentage of teenagers experience some form of mental health challenge?",
    options: ["10%", "25%", "40%", "60%"],
    correctAnswer: "40%",
    category: "Mental Health",
    explanation: "Research shows that approximately 40% of teenagers experience mental health challenges. It's important to know that seeking help is normal and healthy."
  },
  {
    id: 2,
    question: "Which of these is a healthy way to manage stress as a teenager?",
    options: ["Isolating yourself completely", "Regular exercise and sleep", "Avoiding all challenging situations", "Only talking to online friends"],
    correctAnswer: "Regular exercise and sleep",
    category: "Mental Health",
    explanation: "Regular exercise, adequate sleep, and maintaining social connections are proven ways to manage stress and support mental health."
  },
  {
    id: 3,
    question: "What should you do if you're having thoughts of self-harm?",
    options: ["Keep it to yourself", "Tell a trusted adult immediately", "Wait to see if it gets better", "Only talk about it online"],
    correctAnswer: "Tell a trusted adult immediately",
    category: "Mental Health",
    explanation: "If you're having thoughts of self-harm, it's crucial to tell a trusted adult immediately. You can also call 988 (Suicide & Crisis Lifeline) for immediate support."
  },

  // Reproductive Health Questions
  {
    id: 4,
    question: "At what age do most girls typically start menstruating?",
    options: ["8-10 years", "10-15 years", "16-18 years", "18-20 years"],
    correctAnswer: "10-15 years",
    category: "Reproductive Health",
    explanation: "Most girls start menstruating between ages 10-15, with the average being around 12-13 years old. This timing can vary widely and is still considered normal."
  },
  {
    id: 5,
    question: "What is the most important thing to know about consent?",
    options: ["It's only needed for adults", "It can be given once and applies forever", "It must be clear, ongoing, and can be withdrawn anytime", "It's not necessary between people who know each other"],
    correctAnswer: "It must be clear, ongoing, and can be withdrawn anytime",
    category: "Reproductive Health",
    explanation: "Consent must be clear, enthusiastic, ongoing, and can be withdrawn at any time. This applies to all sexual activity regardless of relationship status."
  },
  {
    id: 6,
    question: "Which STI is most common among teenagers?",
    options: ["HIV", "Chlamydia", "Syphilis", "Gonorrhea"],
    correctAnswer: "Chlamydia",
    category: "Reproductive Health",
    explanation: "Chlamydia is the most commonly reported STI among teenagers. The good news is it's easily treatable with antibiotics when caught early."
  },

  // Personal Hygiene Questions
  {
    id: 7,
    question: "How often should teenagers wash their face?",
    options: ["Once a week", "Once a day", "Twice a day", "Every few hours"],
    correctAnswer: "Twice a day",
    category: "Personal Hygiene",
    explanation: "Washing your face twice daily (morning and evening) with a gentle cleanser helps manage oil production and prevent acne without over-drying the skin."
  },
  {
    id: 8,
    question: "What's the best way to prevent body odor during puberty?",
    options: ["Use strong perfume", "Shower daily and use deodorant", "Avoid physical activity", "Change clothes once a week"],
    correctAnswer: "Shower daily and use deodorant",
    category: "Personal Hygiene",
    explanation: "Daily showering and using deodorant or antiperspirant helps manage the increased sweating and body odor that comes with puberty."
  },
  {
    id: 9,
    question: "How long should you brush your teeth for optimal oral health?",
    options: ["30 seconds", "1 minute", "2 minutes", "5 minutes"],
    correctAnswer: "2 minutes",
    category: "Personal Hygiene",
    explanation: "Dentists recommend brushing for 2 minutes twice daily with fluoride toothpaste to effectively remove plaque and prevent cavities."
  },

  // COVID-19 Questions
  {
    id: 10,
    question: "Why are teenagers generally at lower risk for severe COVID-19?",
    options: ["They can't get COVID-19", "Their immune systems are stronger", "They don't spread the virus", "They don't need vaccines"],
    correctAnswer: "Their immune systems are stronger",
    category: "COVID-19",
    explanation: "Teenagers typically have stronger immune systems, making severe COVID-19 less likely. However, they can still get sick and spread the virus to others."
  },
  {
    id: 11,
    question: "What's the most effective way for teens to protect themselves and others from COVID-19?",
    options: ["Only wearing masks indoors", "Getting vaccinated and boosted", "Avoiding school", "Taking vitamins only"],
    correctAnswer: "Getting vaccinated and boosted",
    category: "COVID-19",
    explanation: "Vaccination and staying up-to-date with boosters is the most effective protection against COVID-19 for teenagers and helps protect their community."
  },

  // Contraceptives Questions
  {
    id: 12,
    question: "What is the only contraceptive method that also protects against STIs?",
    options: ["Birth control pills", "Condoms", "IUD", "Withdrawal method"],
    correctAnswer: "Condoms",
    category: "Contraceptives",
    explanation: "Condoms are the only contraceptive method that provides dual protection against both pregnancy and sexually transmitted infections."
  },
  {
    id: 13,
    question: "At what age can teenagers access contraceptive information and services?",
    options: ["Only after 18", "Only with parent permission", "Varies by state, often without parental consent", "Only when married"],
    correctAnswer: "Varies by state, often without parental consent",
    category: "Contraceptives",
    explanation: "Laws vary by state, but many allow teenagers to access contraceptive services confidentially. Check your local laws or ask a healthcare provider."
  },

  // Nutrition Questions
  {
    id: 14,
    question: "How many servings of fruits and vegetables should teenagers eat daily?",
    options: ["2-3 servings", "5-9 servings", "10-12 servings", "1-2 servings"],
    correctAnswer: "5-9 servings",
    category: "Nutrition",
    explanation: "Teenagers should aim for 5-9 servings of fruits and vegetables daily to support growth, development, and overall health."
  },
  {
    id: 15,
    question: "Which nutrient is most important for bone development during teenage years?",
    options: ["Vitamin C", "Calcium", "Iron", "Protein"],
    correctAnswer: "Calcium",
    category: "Nutrition",
    explanation: "Calcium is crucial during teenage years as this is when most bone mass is built. Good sources include dairy products, leafy greens, and fortified foods."
  },
  {
    id: 16,
    question: "What's a healthy approach to weight management for teenagers?",
    options: ["Extreme dieting", "Skipping meals", "Balanced eating and regular activity", "Only eating one meal a day"],
    correctAnswer: "Balanced eating and regular activity",
    category: "Nutrition",
    explanation: "Healthy weight management involves balanced eating, regular physical activity, and avoiding extreme diets that can harm growth and development."
  },

  // Exercise & Fitness Questions
  {
    id: 17,
    question: "How much physical activity should teenagers get daily?",
    options: ["15 minutes", "30 minutes", "60 minutes", "2 hours"],
    correctAnswer: "60 minutes",
    category: "Exercise & Fitness",
    explanation: "The CDC recommends teenagers get at least 60 minutes of moderate to vigorous physical activity daily for optimal health and development."
  },
  {
    id: 18,
    question: "What's the best way to prevent sports injuries?",
    options: ["Avoid all sports", "Proper warm-up and cool-down", "Only play competitive sports", "Exercise only on weekends"],
    correctAnswer: "Proper warm-up and cool-down",
    category: "Exercise & Fitness",
    explanation: "Proper warm-up before activity and cool-down afterward, along with using appropriate equipment, significantly reduces the risk of sports injuries."
  },

  // Substance Awareness Questions
  {
    id: 19,
    question: "What is the legal drinking age in the United States?",
    options: ["18 years old", "19 years old", "21 years old", "25 years old"],
    correctAnswer: "21 years old",
    category: "Substance Awareness",
    explanation: "The legal drinking age in the US is 21. Underage drinking can lead to serious health, legal, and safety consequences."
  },
  {
    id: 20,
    question: "Which of these is true about vaping and e-cigarettes?",
    options: ["They're completely safe", "They contain nicotine and can be addictive", "They're only water vapor", "They help you quit smoking"],
    correctAnswer: "They contain nicotine and can be addictive",
    category: "Substance Awareness",
    explanation: "Most vaping products contain nicotine, which is highly addictive and can harm brain development in teenagers. They're not safe alternatives."
  },

  // Sleep & Rest Questions
  {
    id: 21,
    question: "How much sleep do teenagers need each night?",
    options: ["6-7 hours", "8-10 hours", "10-12 hours", "4-6 hours"],
    correctAnswer: "8-10 hours",
    category: "Mental Health",
    explanation: "Teenagers need 8-10 hours of sleep per night for proper physical and mental development, academic performance, and emotional well-being."
  },

  // Body Image & Self-Esteem Questions
  {
    id: 22,
    question: "What's a healthy way to deal with body image concerns?",
    options: ["Compare yourself to social media images", "Focus on what your body can do", "Avoid mirrors completely", "Only eat when others are watching"],
    correctAnswer: "Focus on what your body can do",
    category: "Mental Health",
    explanation: "Focusing on your body's abilities and functions rather than just appearance helps build a healthier relationship with your body and improves self-esteem."
  },

  // Peer Pressure & Decision Making
  {
    id: 23,
    question: "What's the best way to handle peer pressure?",
    options: ["Always go along with the group", "Have prepared responses and know your values", "Avoid all social situations", "Never express your opinion"],
    correctAnswer: "Have prepared responses and know your values",
    category: "Mental Health",
    explanation: "Knowing your values and having prepared responses helps you make decisions that align with your beliefs and resist negative peer pressure."
  },

  // Digital Health & Screen Time
  {
    id: 24,
    question: "What's a healthy approach to social media use?",
    options: ["Use it 24/7 to stay connected", "Set time limits and take regular breaks", "Never use social media", "Only follow influencers"],
    correctAnswer: "Set time limits and take regular breaks",
    category: "Mental Health",
    explanation: "Setting time limits, taking regular breaks, and being mindful of how social media affects your mood helps maintain a healthy relationship with technology."
  },

  // Additional Reproductive Health
  {
    id: 25,
    question: "What should you do if you think you might have an STI?",
    options: ["Wait and see if symptoms go away", "Get tested by a healthcare provider", "Ask friends for advice only", "Use home remedies"],
    correctAnswer: "Get tested by a healthcare provider",
    category: "Reproductive Health",
    explanation: "If you think you might have an STI, it's important to get tested by a healthcare provider. Many STIs are easily treatable when caught early."
  }
];