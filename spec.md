# Facebook Creator Help

## Current State
New project. No existing backend or frontend code.

## Requested Changes (Diff)

### Add
- Full single-page landing site for "Facebook Creator Help" digital service
- Backend: contact form lead storage (name, page link, problem description, timestamp)
- Frontend: 7-section landing page with dark theme and neon green highlights

### Modify
N/A

### Remove
N/A

## Implementation Plan

### Backend
- `Lead` data type: { id, name, pageLink, problemDescription, submittedAt }
- `submitLead(name, pageLink, problemDescription)` -> async, returns ok/err
- `getLeads()` -> returns all leads (admin use)

### Frontend Sections
1. **Navbar** – Logo/brand name, single CTA button
2. **Hero** – Headline, subheadline, primary CTA "Send Your Page for Free Review" (scrolls to contact form)
3. **Problems** – 6 pain points in a grid with icons
4. **Services** – 8 services listed in a card grid
5. **Why Choose Us** – 3 trust signals with icons
6. **Process** – 3-step numbered process
7. **CTA Banner** – Full-width call to action
8. **Contact** – WhatsApp link + form (name, page link, problem description) wired to backend `submitLead`
9. **Footer** – Brand name, copyright

### Design
- Dark background (#0a0a0a / near-black)
- Neon green accent (#00ff66 or similar)
- Clean sans-serif typography
- Mobile-responsive grid layouts
- Smooth scroll behavior
