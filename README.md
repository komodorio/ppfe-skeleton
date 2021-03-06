# Komodor skeleton

---

## #1 Bug fix: "Has more events" indication is broken.

**Current behavior:** The has more events indication always shows no more events with a static square.\
![#1 current behavior.](/public/images/1Current.png)

**Expected behavior:** Show the loading square animation and loading more events text when there are more events.
![#1 expected behavior.](public/images/1Expected.png)

**Focus:** The styling and functionality are already implemented but not wired to the API indication.

## #2 New feature: Add an infinite scroll to the Events page.

**Current behavior:** The page fetches only the first 20 events.

**Expected behavior:** When scrolling the page to the bottom more events should be loaded from the API until there are no more events.

## #3 New feature: Add style to event by kind.

**Current behavior:** All events in the table look the same.
![#3 expected behavior.](/public/images/3Current.png)

**Expected behavior:** Event row has style by the kind. The colored background should be of the same width as the ID column is.
style:
![#3 expected behavior.](/public/images/3Expected.png)
Instructions per event kind:
| | Color |
| ------------- |:-------------:|
| NodeFailure | #ff6464 |
| HealthChange | #ffe162 |
| PodRestart | #91c483 |

## #4 Bug fix: Navigation to event view broken.

**Current behavior:** Clicking on event navigates to ‘/:id’.

**Expected behavior:** Clicking on event navigates to the event view with the correct event id ‘/events/:id’. Back button should work properly and lead back to /events page.

## #5 New Page: Show event details.

**URL:** ‘/events/:id’\
**Flow:**

- jobUID = Request to `POST: /jobs/:eventId`
- Try to pull data with `GET: /jobs/:jobUID` every 400 milliseconds.
- Show loading until a non-null result is received
- Polling should start as soon as you have a `jobUID` and stop once you have a result.
- You can use the existing `useInterval` hook under the utils folder.
- When you have a result, render the JSON as-is to the page

## #6 Styling: Style event view page.

**Style:**
![#6 Style.](/public/images/6Style.png)

## #7 New feature: Add images to event by kind.

**Current behavior:** Each event is characterized by color according to kind .
![#7 current behavior.](/public/images/7Current.png)

**Expected behavior:** Event row style also contain image by kind.\
style:
![#7 expected behavior.](/public/images/7Expected.png)
Instructions per event kind:
| | image |
| ------------- |:-------------:|
| NodeFailure | /src/utils/icons/error.png |
| HealthChange | /src/utils/icons/change.png |
| PodRestart | /src/utils/icons/restart.png |

## #8 New features: Show the next 6 events.

**Expected behavior:** Show the next 6 events that clicking on them will show us the details of the clicked event.
**Impact:** The user will see the next 6 events, this allows for a quick navigation to another event.\
**Style:**
![#8 Style.](/public/images/8Style.png)
