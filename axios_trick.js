import axios from "axios";
// Create an axios instance
const instance = axios.create();

// Use axios-retry with the instance
axiosRetry(instance, {
    retries: 3, // Number of retries
    retryDelay: (retryCount) => {
        return retryCount * 1000; // Time interval between retries
    },
    retryCondition: (error) => {
        // Return true if you want to retry based on some condition
        return error.response.status === 500; // Retry only if status code is 500
    },
});

// Make a request with the instance
instance
    .get("https://example.com/api/users")
    .then((response) => {
        // Handle success
        console.log(response.data);
    })
    .catch((error) => {
        // Handle error
        console.error(error.message);
        console.error(error.response);
    });

    // Made with ❤️ by tesfaye girma
