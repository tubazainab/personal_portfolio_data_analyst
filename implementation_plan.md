# Data Analyst Portfolio Implementation Plan

Based on your requirements, here is an analysis and proposed structure for your Data Analyst portfolio website. Please review this plan and provide your feedback before we begin coding.

## Goal Description
Build a professional, modern, and responsive personal portfolio website for Tuba Zainab, aimed at securing a Data Analyst role with a target salary of ₹5 LPA. The design will be tailored to a Data Analyst persona (corporate, clean, data-focused) rather than a generic developer portfolio, highlighting skills in Excel, SQL, Python, and Power BI without using fake data.

## Open Questions

> [!IMPORTANT]
> **1. Technology Stack Selection**
> Since you have knowledge of HTML, CSS, and JavaScript, I recommend we build this using **React (via Vite)** with **Vanilla CSS**. This provides excellent component reusability (making it easy to add projects/skills later) while letting you use standard CSS. Alternatively, we can use plain HTML/CSS/JS if you prefer not to use a framework. Which do you prefer?
> 
> **2. Design Palette**
> For a Data Analyst, a "Corporate Modern" palette works best—think deep navy blues, slate grays, and crisp whites to convey trust and professionalism. Does this aesthetic sound good to you?
> 
> **3. Resume Section**
> Do you have a PDF of your resume ready to be linked/downloaded, or should we create a placeholder button for now?

## Website Structure and Layout

I propose a **Single Page Application (SPA)** layout with smooth scrolling. This is highly effective for recruiters as they can view your entire profile quickly by scrolling down without waiting for page loads.

### 1. Navigation (Header)
- **Layout**: Sticky top navigation bar.
- **Content**: Logo/Name on the left, links to sections (About, Skills, Projects, Experience, Contact) on the right.
- **Style**: Glassmorphism effect (slightly transparent blur) so it looks premium when scrolling.

### 2. Home (Hero Section)
- **Vibe**: Strong, confident, and professional.
- **Content**: 
  - Headline: "Hi, I'm Tuba Zainab"
  - Sub-headline: "Data Analyst | Transforming Data into Actionable Insights"
  - **Badge**: A highly visible, green-tinted badge stating: "Actively Looking for Data Analyst Opportunities"
- **Actions**: Two prominent buttons: "View My Projects" (Primary) and "Contact Me" (Secondary).
- **Background**: Subtle, abstract data-related background (e.g., faint grid lines or soft geometric shapes) to differentiate from a developer's portfolio.

### 3. About Me
- **Layout**: Two-column layout on desktop (Photo/Illustration on left, Text on right). Stacked on mobile.
- **Content**: A concise, professional summary of your background, your passion for data, and your specific goal of securing a Data Analyst role.

### 4. Skills
- **Layout**: Grid of clean, modern "Technology Badges".
- **Structure**: Categorized for easy reading:
  - **Data Visualization & BI**: Power BI, Power Query, DAX
  - **Data Manipulation**: Microsoft Excel, Advanced Excel, SQL, Python
  - **Core Concepts**: Data Analysis, Data Cleaning, Statistics and Probability
  - **Other Tools**: Git, GitHub, HTML, CSS, JavaScript
- **Style**: Each badge will have a subtle hover animation (slight lift and shadow).

### 5. Projects
- **Layout**: Responsive Grid (1 column on mobile, 2 or 3 on desktop).
- **Project Cards**:
  - **Thumbnail Image**: High-quality screenshot of the dashboard/analysis.
  - **Title & Description**: Clear and concise business problem solved.
  - **Tech Stack Tags**: e.g., `[Power BI]`, `[SQL]`, `[DAX]`
  - **Action Buttons**: "Live Demo" and "View GitHub".
- **Note**: The structure will be built so you can easily add new projects in the future by just updating a data file.

### 6. Experience
- **Layout**: Vertical Timeline.
- **Content**: Since we are strictly avoiding fake data, this section will include your genuine academic background, any relevant courses/certifications, freelance work, or personal major study projects. We will leave placeholders that you can easily fill in with your real details.

### 7. Resume
- **Layout**: A dedicated banner section.
- **Content**: A brief call-to-action (e.g., "Want to know more about my qualifications?") and a prominent "Download Resume" button.

### 8. Contact
- **Layout**: Centered, clean layout at the bottom.
- **Content**: Professional closing statement, your email address, LinkedIn link, and GitHub link.
- **Footer**: Copyright text and simple links.

## Verification Plan
1. **Scaffold the project**: Setup Vite, React, and CSS structure (or HTML/CSS/JS based on your choice).
2. **Implement Sections**: Build out the layout step-by-step (Hero, Skills, Projects, etc.).
3. **Responsive Design Check**: Ensure the site looks perfect on mobile, tablet, and desktop views.
4. **Animations & Polish**: Add smooth scrolling, hover effects, and ensure the visual hierarchy guides the recruiter's eye to your key strengths.
