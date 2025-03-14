const config = require("./config.js");

const apiKey = config.API_KEY;

// console.log("Your API Key:", apiKey);
const axios = require("axios");

const maryDoe = {
  email_address: "test@example.com",
  phone_number: "1234567890",
  name_first: "Mary",
  name_last: "Doe",
  address_line_1: "123 Main St",
  address_country_code: "US",
  address_line_2: "Apt 4B",
  address_city: "New York",
  address_state: "NY",
  address_postal_code: "10001",
  document_ssn: "123456789",
  birth_date: "1999-05-15",
};
const maryDeny = {
  email_address: "test@example.com",
  phone_number: "1234567890",
  name_first: "John",
  name_last: "Deny",
  address_line_1: "123 Main St",
  address_country_code: "US",
  address_line_2: "Apt 4B",
  address_city: "New York",
  address_state: "NY",
  address_postal_code: "10001",
  document_ssn: "123456789",
  birth_date: "1999-05-15",
};
const maryReview = {
  email_address: "test@example.com",
  phone_number: "1234567890",
  name_first: "Mary",
  name_last: "Review",
  address_line_1: "123 Main St",
  address_country_code: "US",
  address_line_2: "Apt 4B",
  address_city: "New York",
  address_state: "NY",
  address_postal_code: "10001",
  document_ssn: "123456789",
  birth_date: "1999-05-15",
};

function validateAndSendData(data) {
  const allValid = Object.values(data).every(
    (value) => value !== undefined && value !== null && value !== ""
  );
  if (
    !allValid
    //handle required fields
  ) {
    console.error("Validation failed: All fields are required  ");
    return;
  }

  if (/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email_address) == false) {
    console.error("Please enter valid email");
    return;
  }
  // validate email address
  if (/^\d{9}$/.test(data.document_ssn) == false) {
    console.error("Please enter your SSN with 9 digits and no dashes");
    return;
  }
  //validate SSN format
  if (/^\d{4}-\d{2}-\d{2}$/.test(data.birth_date) == false) {
    console.error("Please enter birthday format YYYY-MM-DD");
    return;
  }
  //validate bday format
  if (/^[A-Z]{2}$/.test(data.address_state) == false) {
    console.error("Please enter 2 letter to represent your state");
    return;
  }
  //validate state
  if (data.address_country_code != "US") {
    console.error("Sorry, we only support US at the moment!");
    return;
  }
  //validate country
  const config = {
    method: "post",
    url: "https://sandbox.alloy.co/v1/evaluations",
    headers: {
      authorization: "Basic" + apiKey,
      "Content-Type": "application/json",
    },
    data: data,
  };

  axios(config)
    .then(function (response) {
      // console.log(JSON.stringify(response.data));
      const outcome = response.data.summary.outcome;
      if (outcome === "Approved") {
        console.log("Congratulations! You are approved.");
      } else if (outcome === "Manual Review") {
        console.log(
          "Your application is under review. Please wait for further updates."
        );
      } else if (outcome === "Denied") {
        console.log(
          "Unfortunately, we cannot approve your application at this time."
        );
      } else {
        console.log("Unexpected response:", data, outcome);
      }
    })
    .catch(function (error) {
      console.log(error);
    });
}

validateAndSendData(maryDeny);

validateAndSendData(maryDoe);

validateAndSendData(maryReview);
