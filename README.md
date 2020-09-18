# Software Mini Project
Sadie Allen (sadiela@bu.edu) and Hazim Ab Halim (zimlim@bu.edu)

#### Note:
On occasion, we have issues with our firestore database *rules changing automatically. If you are unable to view or save data, please contact us so we can change the rules.

## Project Description

For this software mini project, we have implemented a COVID-19 Attestation web application. The app performs a similar function to https://patientconnect.bu.edu/, the website BU students and faculty use to track their symptoms and schedule appointments. It has the following components: 

* **SSO login**: Secure login through Google
* **Daily symptom tracker**: Users can fill out a survey once daily detailing their COVID-19 symptoms.
* **User dashboard**: This is the home page of our application. It shows data specific to the user (past symptom survey results, compliance status) as well as regional (Massachusetts) COVID data from https://covid19api.com/.
* **Admin dashboard**: shows community data to privileged users. 

We use Firebase to host our application. View it at https://covid-attestation.web.app/

Meeting notes from project meetings can be found in the documentation directory.

## Learning Objectives
Over the course of this project, we have gained experience with the following: 
* **Agile SW Development**: We had to quickly design and deploy a functional web application in a matter of days.
* **Code Management**: We used Github to collaborate on code over the course of development.
* **Firebase**: We learned how to deploy and host a web application using Firebase. 
* **Cloud Database Management**: We learned how to read from and write to a Firestore cloud database. We also had to make smart decisions concerning the structure of our data in the database.
* **APIs**: We used APIs for both the SSO login as well as for retrieving regional COVID data.
* **Basic Web Development**: We had to quickly pick up JavaScript and HTML to create our application. 
* **Testing**: We designed tests and verified that our application correctly performed the required tasks. 

## Testing
* **SSO login**: Tested signing in with valid and invalid gmail logins. The application only allows you to log in with valid Google credentials.
* **Admin login**: to access the admin page, you use the password "iamanadmin" in the input box on the homepage. We verified that this works by entering the password and pressing the submit button. This navigated us to the admin dashboard as desired. 
* **Staying signed in**: every page checks that you are signed in and immediately redirects you to the login page if you are not. To test this, we tried navigating to the homepage before signing in. As expected, we were redirected to the login page.  
* **Fetching data from database**: The admin dashboard prints database data to the screen. This verifies that we are able to read data from the database. 
* **Symptom survey**:
    * **Data saved to database**: To test if the data was being saved to the database, we fill out a survey and observe the database in the Firebase project dashboard. We observe that a new test result entry is added to the corresponding user's document each time that user fills out their survey. 
    * **Only one survey per day**:
        * To test: attempted to fill out survey twice in one day on a single account. An alert pops up and you are not redirected to the survey page. 
    * **Do not allow submission if all questions are not answered**
        * We tested this by attempting to submit an incompleted survey. An alert pops up and the results are not submitted, which we verified by confirming that there was no new entry in our database. 

## Remaining Tasks
* **Formatting data on admin dashboard**: Ideally we would show 
    * users who have not yet taken the daily survey
    * % of daily population showing symptoms
    * other community info
* **Display personal data on homepage**
* **Survey**:
    * Reset button functionality
    * Return home once survey is submitted
* **Add images of some of our unit tests to README**

## Known issues
* Since currently the survey does not navigate to home after you fill it out, users could repeatedly submit the survey as many times as they want on that page.