# First Meeting 9/4/20

## Agenda
* Choose project (home monitor or COVID app)
* Choose application type (iOS, Android, web)
* Assign initial tasks
* Plan next meeting, goals for progress by next meeting

## Design Decisions
* **COVID app**: both of us were more interested in designing the COVID attestation application due to its  relevance to current events
* **Web app**: we decided to create a web application as neither of us have ever designed a website end-to-end and we thought it would be a fun challenge
* **Integrating AppleHealthkit**: time permitting, we will try to integrate Apple Healthkit for temperature data

## Task Breakdown: 
* SSO authentication
* Symptom tracker
    * symptom survey
    * database to store user responses
    * Notify if "dangerous" number of symptoms? 
    * separate accounts lead to separate symptom tracker, dashboard, etc.
    * ensure that an individual user can only fill out their survey once a day
* Dashboard to monitor symptoms
    * symptom history
* COVID statistics and data displayed from outside sources https://covid19api.com/
    * likely will live on the dashboard
    * would it be possible to get data from BU? 
* Apple Healthkit integration

## Misc. Notes
* Use Firebase to host our application; watch tutorial! (https://youtu.be/9kRgVxULbag)

## Goals for Next Meeting: 
* **Hazim**: finish SSO authentication by next meeting
* **Sadie**: finish symptom tracker survey by next meeting
* Finish entire app by the 14th to have time for tweaking, testing, etc. 
* **Final due date**: 9/17

Next meeting: Tuesday, 9/8 at 6pm