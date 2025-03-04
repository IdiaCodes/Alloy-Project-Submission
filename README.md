# Alloy-Project-Submission

# Assignment

JavaScript, write a script that:
a. Collects applicant details (these can be hardcoded into your script or done
via a simple console input)
b. Submits the details to Alloy’s sandbox API
c. Processes the API response and prints an appropriate message 3. Collect the following applicant details:
a. First Name
b. Last Name
c. Date of Birth (ISO-8601 format: YYYY-MM-DD)

d. SSN (9 digits, no dashes)
e. Email Address (valid format)
f. Address
i. Line 1
ii. Line 2
iii. City
iv. State (must be a two-letter code, ex. NY, CA, etc.)
v. Zip/Postal Code
vi. Country (must be “US” for sake of this assignment)

4. Submit to our API
   a. Send the above details as a JSON payload via an HTTP POST request.
   b. Process the API Response
   i. If the response is {"summary": {"outcome": "Approved"}}
   → Print: "Congratulations! You are approved."
   ii. If the response is {"summary": {"outcome": "Manual
   Review"}} → Print: "Your application is under review. Please wait
   for further updates."
   iii. If the response is {"summary": {"outcome": "Deny"}} →
   Print: "Unfortunately, we cannot approve your application at this
   time."

</br>
The API call referenced only name_first and name_last as its required fields so I created an alternate code snippet to validate just that field 
 // if (
  //   !data.name_last ||
  //   !data.name_first
  //   //handle required fields in API call
  // ) {
  //   console.error(
  //     "Validation failed: 'name_last' and 'name_first' are required  "
  //   );
  //   return;
