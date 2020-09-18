# Software Mini Project
Sadie Allen and Hazim Ab Halim

## Project Description

For this software mini project, we have implemented a COVID-19 Attestation web application. The app performs a similar function to https://patientconnect.bu.edu/, the website BU students and faculty use to track their symptoms and schedule appointments. It has the following components: 

* **SSO login**: secure login through Google
* **Daily symptom tracker**: Users can fill out a survey once daily detailing their COVID-19 symptoms
* **User dashboard**: This is the home page of our application. It shows data specific to the user (past symptom survey results, compliance status) as well as regional COVID data from https://covid19api.com/
* **Admin dashboard**: 

We use Firebase to host our application. View it at https://covid-attestation.web.app/

Meeting notes from project meetings can be found in the documentation directory.

## Learning Objectives
Over the course of this project, we have gained experience with the following: 
* **Agile SW Development**: We had to quickly design and deploy a functional web application in a matter of days.
* **Code Management**: We used Github to collaborate on code over the course of development.
* **Firebase**: We learned how to deploy and host a web application using Firebase. 
* **Cloud Database Management**: We gained experience reading from and writing to a Firestore cloud database. We also had to make smart decisions concerning the structure of our data in the database.
* **APIs**: We used APIs for both the SSO login as well as for retrieving regional COVID data.
* **Basic Web Development**: We had to quickly pick up JavaScript and HTML to create our application. 
* **Testing**: We designed tests and verified that our application correctly performed the required tasks. 

## Testing
* SSO login:
* Admin login:
* Fetching data from database: 
* Symptom survey:
    * Data saved to database:
    * Only one survey per day:

## Remaining Tasks
* **Formatting data on admin dashboard**: Ideally we would show: 
    * 
* **Survey**:
    * Do not allow submission if all questions are not answered
    * Reset button functionality
* **Integrate API COVID data into homepage**