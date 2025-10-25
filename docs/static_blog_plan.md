# Plan for Static and Blog Sections of the Website

## Overview

This plan outlines the structure and implementation details for creating the static (non-admin dashboard) and blog sections of the Education Support Initiative website. These sections will complement the admin dashboard by providing informational content and updates to users.

---

## Static Pages

### 1. **Home Page**

- **Purpose**: Introduce the initiative, highlight its mission, and provide quick links to key sections.
- **Content**:
  - Hero section with a tagline and call-to-action button.
  - Overview of the initiative's mission and vision.
  - Testimonials or success stories.
  - Quick links to the blog, contact, and about pages.
- **Design**:
  - Full-width hero image.
  - Responsive grid layout for content sections.

### 2. **About Page**

- **Purpose**: Provide detailed information about the initiative, its history, and its goals.
- **Content**:
  - Mission and vision statements.
  - Team profiles with photos and roles.
  - Timeline of key milestones.
- **Design**:
  - Vertical timeline for milestones.
  - Card layout for team profiles.

### 3. **Contact Page**

- **Purpose**: Allow users to get in touch with the initiative.
- **Content**:
  - Contact form (name, email, message).
  - Address and phone number.
  - Embedded Google Map for location.
- **Design**:
  - Two-column layout: form on the left, contact details on the right.

---

## Blog Section

### 1. **Blog Listing Page**

- **Purpose**: Display a list of blog posts with summaries.
- **Content**:
  - Blog post cards with title, summary, author, and date.
  - Pagination for navigating through posts.
- **Design**:
  - Grid layout for blog cards.
  - Sidebar with categories and recent posts.

### 2. **Blog Detail Page**

- **Purpose**: Display the full content of a single blog post.
- **Content**:
  - Blog title, author, and publication date.
  - Main content with images and formatting.
  - Comments section (optional).
- **Design**:
  - Single-column layout for the blog content.
  - Sticky sidebar for related posts or categories.

---

## Technical Implementation

### 1. **Routing**

- Use React Router DOM for navigation.
- Define routes for each static page and blog section.

### 2. **Components**

- **Shared Components**:
  - Header and Footer.
  - Button and Card components.
- **Page-Specific Components**:
  - HeroSection for the Home Page.
  - BlogCard for the Blog Listing Page.

### 3. **Styling**

- Use Tailwind CSS for consistent and responsive design.
- Define utility classes for typography, spacing, and colors.

### 4. **Data Management**

- Use LocalStorage or a JSON file for blog data (if no backend is available).
- Fetch data dynamically for the blog listing and detail pages.

---

## Next Steps

1. Create the folder structure for static pages and blog components.
2. Design and implement the shared Header and Footer components.
3. Build the Home, About, and Contact pages.
4. Develop the Blog Listing and Blog Detail pages.
5. Test responsiveness and accessibility.
