// import { Client, Account, ID  } from 'appwrite';

// const client = new Client();

// client
//   .setEndpoint('https://cloud.appwrite.io/v1') // Your Appwrite Endpoint
//   .setProject('656ac2f1a9a3ffdb9631'); // Your project ID

// const account = new Account(client);

// // console.log('Appwrite Client:', client);
// // console.log('Appwrite Account:', account);
// await account.createPhoneSession(ID.unique(), '7735432994')
//     .then(function (response) {
//         console.log(response);
//     }, function (error) {
//         console.log(error);
//     });
//   // const sessionToken = await account.createPhoneSession(
//   //     ID.unique(),
//   //     '+917735432994'
//   // );
  
// export { client, account };
// appwriteService.js
import { Client, Account, ID } from 'appwrite';

// Initialize the Appwrite client
const client = new Client()
    .setEndpoint('https://cloud.appwrite.io/v1') // Your API Endpoint
    .setProject('664cc1510025520f484b'); // Your project ID

// Initialize the Account service
const account = new Account(client);

const createPhoneSession = async (phone) => {
  try {
      // Assuming that you handle the backend part for sending OTP to phone and then verifying it
      // Here is a simplified example using custom endpoint
      const response = await fetch('https://cloud.appwrite.io/v1/account/sessions/phone', {
          method: 'POST',
          headers: {
              'Content-Type': 'application/json',
              'X-Appwrite-Project': '664cc1510025520f484b',
          },
          body: JSON.stringify({
              userId: ID.unique(),
              phone: phone,
          }),
      });

      if (!response.ok) {
          throw new Error('Failed to create phone session');
      }

      const session = await response.json();
      return session;
  } catch (error) {
      console.error('Error creating phone session:', error);
      throw error;
  }
};

const verifyOtp = async (userId, otp) => {
  console.log(userId,otp);
  try {
      const response = await fetch(`https://cloud.appwrite.io/v1/account/sessions/${userId}`, {
          method: 'POST',
          headers: {
              'Content-Type': 'application/json',
              'X-Appwrite-Project': '664cc1510025520f484b',
          },
          body: JSON.stringify({
              userId: userId,
              secret: otp,
          }),
      });

      // const data = await response.json();

      // if (!response.ok) {
      //     console.error('Response error:', data); // Log the response error for debugging
      //     throw new Error(`Failed to verify OTP: ${data.message}`);
      // }

      // return data;
       // Check if the response is not OK
       if (!response.ok) {
        // Log the raw response text for debugging
        const errorText = await response.text();
        console.error('Response error:', errorText);
        throw new Error(`Failed to verify OTP: ${response.statusText}`);
    }

    // Parse and return the JSON response
    const data = await response.json();
    return data;
  } catch (error) {
      console.error('Error verifying OTP:', error);
      throw error;
  }
};


export { createPhoneSession ,verifyOtp};

