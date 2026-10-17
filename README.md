
# Sustainable Cities – Online Learning Tool (OLT)

**LUT University | Sustainable Cities | Academic Year 2026–2027**

## 1. Project Overview

The Online Learning Tool (OLT) is a Sustainable Cities course
project at LUT University, Finland.

The aim is to further develop and test an accessible,
interactive, and engaging online learning experience
focused on stormwater management and urban flood resilience.

Urbanization, impermeable surfaces, and changing precipitation
patterns contribute to stormwater management challenges.

The project explores how digital education can improve
understanding of these challenges and the solutions
available to create more sustainable and resilient cities.

The work combines environmental education, web application
development, user-centered design, and scientific evaluation.

## 2. Project Objectives

### Main Objective

Further develop and evaluate an accessible and engaging
online learning experience for stormwater and flood resilience.

### Specific Objectives

1. Examine existing online learning approaches and identify
   opportunities for improvement.

2. Develop educational content explaining stormwater,
   urban flooding, and flood resilience.

3. Improve the usability, accessibility, and interactivity
   of the online learning experience.

4. Implement learning activities, interactive questions,
   and visual educational components.

5. Evaluate the learning tool through structured testing
   and user feedback.

6. Assess usability, accessibility, user engagement,
   and learning effectiveness.

7. Identify limitations and recommend future improvements.

## 3. Educational Scope

The proposed learning experience covers:

### Stormwater Management

- Urban water cycle
- Rainfall and surface runoff
- Impermeable surfaces
- Stormwater drainage systems
- Effects of urbanization

### Urban Flooding

- Flood causes and mechanisms
- Urban flood risks
- Environmental and societal impacts
- Climate adaptation
- Flood preparedness

### Sustainable Solutions

- Sustainable urban drainage systems
- Nature-based solutions
- Green infrastructure
- Permeable pavements
- Rain gardens and green roofs

### Flood Resilience

- Flood risk awareness
- Community preparedness
- Risk reduction strategies
- Resilient urban infrastructure
- Individual and collective responsibilities

## 4. Web Application Development

The OLT is being developed as a browser-based learning
application using React, JavaScript, Vite, and CSS.

The initial prototype includes:

- Educational learning modules
- Multiple-choice knowledge checks
- Immediate answer feedback
- Learning progress indicators
- Responsive user interface
- Basic accessibility-oriented controls

Further development will be guided by the project
requirements and evaluation findings.

The initial implementation is a prototype and has not
yet been established as fully accessible or effective.

## 5. Research and Development Methodology

The project follows an iterative development and
evaluation approach.

### Phase 1 – Background Research

Review literature and educational resources related to
stormwater, flooding, sustainability education, and
accessible digital learning.

### Phase 2 – Requirements and Design

Identify learning objectives, user needs, accessibility
requirements, and opportunities to improve the OLT.

### Phase 3 – Implementation

Develop and improve the learning modules, interface,
interactive elements, and educational activities.

### Phase 4 – Testing and Evaluation

Evaluate the application using appropriate methods,
potentially including:

- Accessibility checks against WCAG 2.2
- Task-based usability testing
- User feedback questionnaires
- Learning assessments
- Mobile and desktop testing

### Phase 5 – Analysis and Improvement

Analyze collected evidence, identify problems,
implement feasible improvements, and evaluate limitations.

These are planned phases; individual activities must
be documented as completed only when performed.

## 6. Academic Report

The scientific report documents the development and
evaluation of the Online Learning Tool.

It follows an IMRAD-oriented structure adapted to the
engineering project and LUT report formatting.

### Report Organization

**Front Matter**
- LUT University title page
- Abstract
- Acknowledgments
- Symbols and Abbreviations
- Table of Contents

**Main Report**
1. Introduction
2. Theoretical Background
3. Methodology
4. Design and Implementation
5. Testing and Results
6. Discussion
7. Conclusions

**Back Matter**
- References
- Appendices

### Scientific Reporting Requirements

The report should explain:

- The problem and its significance
- Relevant scientific and technical background
- Project objectives and research questions
- Development methodology
- Application architecture and implementation
- Testing methods and participant information
- Actual results and evaluation evidence
- Interpretation and limitations
- Conclusions and future recommendations

Results must be supported by actual tests, observations,
measurements, or documented evidence.

Planned experiments must not be presented as completed.

## 7. LUT LaTeX Report Template

The report uses formatting files adapted from the
original LUT University LaTeX thesis template.

The academic formatting is retained while the
content is adapted to a Sustainable Cities course report.

Official LUT template information:

https://elut.lut.fi/en/completing-studies/theses/masters-thesis

The report is NOT a submitted Bachelor's or Master's thesis.

### Important Files

- Thesis.tex – Main LaTeX document
- Document_properties.tex – LUT formatting configuration
- Chapters/ – Report chapters and front matter
- Figures/ – Illustrations and LUT logo
- References.bib – Bibliographic references
- build-report.ps1 – PowerShell compilation script
- build/ – Generated PDF and auxiliary files

### PDF Compilation

From the repository root, use:

    powershell.exe -NoProfile -ExecutionPolicy Bypass -File ".\report\build-report.ps1"

The build script uses XeLaTeX and Biber.

The generated PDF is intended to appear at:

    report/build/Thesis.pdf

The Windows compilation workflow is still being
troubleshot and must be verified before final submission.

## 8. Team Collaboration

The project uses Git and GitHub for version control,
documentation, and team collaboration.

Repository:

https://github.com/SUPERITHAKA/SUSTCITIES-OLT3

Team members should use separate branches for major
changes and submit pull requests for review.

Project source code, report chapters, figures,
references, and testing documentation should be
maintained together in the repository.

## 9. Expected Deliverables

The planned project deliverables are:

1. Improved Online Learning Tool web application
2. Educational content and interactive activities
3. Documentation of design and development
4. Accessibility and usability evaluation
5. Analysis of user feedback and learning outcomes
6. Scientific report using LUT formatting
7. Final demonstration of the developed learning tool

Deliverable completion will be updated as the
project progresses.

## 10. Project Status

**Status: Development and evaluation in progress**

The initial React prototype is implemented and
builds successfully.

The learning experience, formal testing,
scientific report, and final evaluation
remain under development.

---

LUT University – Sustainable Cities

Online Learning Tool (OLT)

Stormwater Management and Flood Resilience
'@ | Set-Content "report\README.md" -Encoding UTF8

Write-Host "OLT REPORT README UPDATED SUCCESSFULLY!" -ForegroundColor Green
code "report\README.md"
