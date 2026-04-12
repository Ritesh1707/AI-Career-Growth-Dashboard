# PRD - AI Career Growth Dashboard

## Overview

AI Career Growth Dashboard is a frontend product concept that helps users track their career development in a structured and motivating way.

The application combines a cinematic landing page with a dashboard experience. It helps users understand current readiness, skill gaps, learning priorities, project progress, certifications, education, and job alignment.

Phase 1 uses mock data only.


## Problem

People who are trying to grow in their careers often track learning, projects, certifications, and job preparation in disconnected places.

This creates problems:
- no single view of progress,
- unclear priorities,
- no visible gap between current skills and target role,
- poor motivation,
- no polished personal career command center.


## Goal

Create a polished product-like web app that:
- looks impressive,
- demonstrates strong frontend engineering practice,
- feels like a real SaaS product,
- supports future backend/API integration,
- is resume-worthy as a serious frontend project.


## Target User

Primary user:
- a learner or early-career professional trying to grow toward a target role

Possible examples:
- frontend developer
- full-stack learner
- cloud engineer
- job seeker preparing for role transitions


## Product Experience

The product has two major parts:

1. Cinematic landing page
- premium first impression
- strong storytelling selling the "AI Copilot" vision
- clear value proposition (Skill gaps, Predictive Actions, Market Trends)
- CTA into dashboard

2. Dashboard application
- overview of career state
- actionable modules driven by "predictive" rather than "descriptive" data
- progress-driven UX with gamified elements (Career Score, XP)
- visual clarity and premium feel
- simulated AI Copilot chat/side-panel for coaching and explanations

## MVP Modules

### 1. Overview
Purpose:
- show headline summary of the user’s career growth status

Includes:
- **Predictive Next Action:** A smart summary card stating exactly what the user should do next.
- career score and gamified progress rings
- current goal
- top priorities

### 2. Skills
Purpose:
- show current skills and skill gaps

Includes:
- **Skill-Gap Visualizer:** Heatmaps or comparison bars showing current skills vs. target role.
- skill categories
- missing skill tags

### 3. Jobs
Purpose:
- align current profile with job targets

Includes:
- **Market Intelligence:** Data cards showing salary benchmarks and hot skills.
- **Explainability Badges:** Tooltips explaining *why* a job is recommended.
- target job roles
- readiness indicator
- missing requirements

### 4. Roadmap
Purpose:
- show what the user should do next

Includes:
- learning stages
- milestones
- short-term and long-term goals
- current next action

### 5. Certifications
Purpose:
- track completed and planned certifications

Includes:
- certification status
- progress percentage
- exam timeline
- importance/prioritization

### 6. Projects
Purpose:
- connect learning to visible output

Includes:
- ongoing projects
- project status
- skill mapping
- readiness value for resume/interviews

### 7. Education
Purpose:
- show formal and self-driven learning journey

Includes:
- education entries
- learning tracks
- key subjects
- current focus areas


## Non-Goals for Phase 1

Do not include these in the first version:
- backend
- authentication
- real database
- multi-user system
- AI model integration
- real API fetching
- admin panel
- notifications system


## Design Direction

The UI should feel:
- modern
- premium
- cinematic in the landing section
- structured and elegant in the dashboard
- dark/light mode aware
- polished but not noisy

Avoid:
- generic portfolio style
- beginner dashboard look
- random effects with no product purpose


## Data Strategy

Phase 1 uses:
- local mock JSON or JS objects
- realistic sample user data
- modular data shape that can later be mapped to APIs


## Acceptance Criteria

The MVP is successful when:
- landing page feels visually impressive and intentional
- dashboard layout feels product-like
- all main modules exist with realistic mock data
- dark mode and light mode work
- components are reusable and organized clearly
- architecture is scalable for future API integration
- the project is understandable enough to explain in interviews


## Risks

- scope becoming too large too early
- focusing too much on visuals before structure
- too many sections with weak implementation quality
- overusing animations
- poor state/data organization even with mock data


## Phase Plan

### Phase 1
- project setup
- design system
- landing page
- dashboard shell
- mock data structure

### Phase 2
- overview module
- skills module
- roadmap module

### Phase 3
- jobs module
- certifications module
- projects module
- education module

### Phase 4
- polish
- responsiveness
- dark/light refinement
- empty/loading states
- review and cleanup