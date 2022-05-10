# Komodor skeleton

## #1 Bug fix: has more events indication broken.

**Expected behavior:** Show the loading and appropriate text when there are more events and show static square when there are no events.
![#1 expected behavior.](public/images/1Expected.png)

---

**Current behavior:** Always show a static square.
![#1 current behavior.](/public/images/1Current.png)
**Impact:** The user has no indication if there are any more events.
**Focus:** The styling and functionality implemented. Only to understand why the switch is not working and fix it.

## #2 New feature: Add an infinite scroll to the Events page.

**Expected behavior:** Fetch a few events (fill the screen) and fetch more when the scroll bar near the end of the list.
**Current behavior:** The page fetches the first 20 events.
**Impact:** The user will see all the events, without overloading the browser unnecessarily.

## #3 New feature: Add style to event by kind.

**Expected behavior:** Event row has style by the kind.
style:  
![#3 expected behavior.](/public/images/3Expected.png)
Instructions:
| | Color | image* |
| ------------- |:-------------:|:-------------:|
| Node failure | #ff6464 | error.png |
| HealthChange | #ffe162 | change.png |
| PodRestart | #91c483 | restart.png |
*The images are located in ‘/utils/icons’

**Current behavior:** All events look the same.
![#3 expected behavior.](/public/images/3Current.png)
**Impact:** A clear visual difference to the user.

## #4 Bug fix: Navigation to event view broken.

**Expected behavior:** Clicking on event navigate to the event view with the right event id ‘/events/:id’.  
**Current behavior:** Clicking on event navigate to ‘/:id’.
**Impact:** The user cant navigate to the event view page.

## #5 New Page: Show event details.

**URL:** ‘/events/:id’
**Flow:**

- Request to ‘POST: /jobs/:eventId’
- Getting the job id
- Try to pull data from ‘GET: /jobs/:jobId’ every 400 milliseconds.
- Show loading until there is data.
- Show the data about the job.
  **Style:**
  ![#5 Style.](/public/images/5Style.png)

## #6 Styling: Style event view page.

**Style:**
![#6 Style.](/public/images/6Style.png)

## #7 New features: Show the next 6 events.

**Expected behavior:** Show the next 6 events.
**Impact:** The user will see the next 6 events, this allows for a quick navigation to another event.
**Style:**
![#7 Style.](/public/images/7Style.png)
