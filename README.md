# Alloy-Project-Submission

# Assignment

JavaScript
</br>
Write a script that:
</br>
a. Collects applicant details (these can be hardcoded into your script or done
via a simple console input)
</br>
b. Submits the details to Alloy’s sandbox API
</br>
c. Processes the API response and prints an appropriate message
</br>
3. Collect the following applicant details:
</br>
-  First Name
-  Last Name
-  Date of Birth (ISO-8601 format: YYYY-MM-DD)
-  SSN (9 digits, no dashes)
-  Email Address (valid format)
-  Address
  - i. Line 1
-  Line 2
-  City
- State (must be a two-letter code, ex. NY, CA, etc.)
-  Zip/Postal Code
- Country (must be “US” for sake of this assignment)
</br>
4. Submit to our API
  
   - Send the above details as a JSON payload via an HTTP POST request.
  - Process the API Response
   i. If the response is {"summary": {"outcome": "Approved"}}
   → Print: "Congratulations! You are approved."
   ii. If the response is {"summary": {"outcome": "Manual
   Review"}} → Print: "Your application is under review. Please wait
   for further updates."
   iii. If the response is {"summary": {"outcome": "Deny"}} →
   Print: "Unfortunately, we cannot approve your application at this
   time."
</br> 
Technologies used:
</br>
Postman : GET request
</br>
Autoregex : Validation Regex code

</br>
The API call referenced only name_first and name_last as its required fields so I created an alternate code snippet to validate just that field 
</br>

```
if (
    !data.name_last ||
    !data.name_first
    //handle required fields in API call
  ) {
    console.error(
     "Validation failed: 'name_last' and 'name_first' are required  "
   );
     return;
```
