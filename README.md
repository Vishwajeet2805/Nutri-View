--------------------------------------------------
NutriView – Personal Ingredient Analyzer
--------------------------------------------------
NutriView is a smart web application that helps users understand what’s really inside packaged food products. 
It analyzes ingredients, flags potential health risks, and personalizes results based on the user’s health conditions, dietary preferences, and allergies.

In short: scan → analyze → decide smarter.

--------------------------------------------------
PROBLEM STATEMENT
--------------------------------------------------
Most people consume packaged foods without fully understanding harmful additives, hidden allergens, or ingredients 
that conflict with medical conditions like diabetes or blood pressure. Ingredient labels are complex, technical, 
and are not personalized.

NutriView solves this problem by simplifying and personalizing food ingredient analysis.

--------------------------------------------------
SOLUTION OVERVIEW
--------------------------------------------------
NutriView acts as a personal nutrition filter. Users create an account, set health preferences, analyze product ingredients, and receive clear insights on safety and suitability.

--------------------------------------------------
KEY FEATURES
--------------------------------------------------
• Secure Login & Signup
• Personalized health and diet profiles
• Ingredient breakdown and risk tagging
• Provide rating out of 100  
• Allergy and condition-based alerts
• Analytics dashboard for usage tracking

--------------------------------------------------
USER FLOW
--------------------------------------------------
1. Sign Up / Login
2. Set Health & Diet Preferences
3. Scan or Input Ingredients
4. View Ingredient Analysis
5. Make Informed Food Choices

--------------------------------------------------
TECH STACK
--------------------------------------------------
Frontend:
• React / Next.js
• Responsive modern UI

Backend:
• Supabase (Authentication & Database)
• Typescript 

Database:
• Supabase PostgreSQL

--------------------------------------------------
DATA STORAGE & RETENTION POLICY
--------------------------------------------------
NutriView uses Supabase as its primary database for storing user profiles, preferences, ingredient analysis results, 
and analytics data.

User session data is stored securely using browser cookies to maintain authentication state.

All scanned or analyzed ingredient data is stored temporarily for 8 weeks (56 days). After this period, the data is 
automatically deleted from the database to ensure user privacy and minimal data retention.

--------------------------------------------------
TARGET USERS
--------------------------------------------------
• Health-conscious individuals
• People with dietary restrictions
• Fitness enthusiasts
• Parents monitoring food safety

--------------------------------------------------
LIMITATIONS
--------------------------------------------------
• Depends on accuracy of ingredient input
• Not a substitute for professional medical advice

--------------------------------------------------
FUTURE ENHANCEMENTS
--------------------------------------------------
• Text and image-based scanning
• AI-powered ingredient risk scoring
• Personalized nutrition recommendations
• Mobile and desktop application support

--------------------------------------------------
CONCLUSION
--------------------------------------------------
NutriView turns confusing food labels into clear, actionable insights. It empowers users to make smarter food 
choices through personalization, transparency, and privacy-first design.

