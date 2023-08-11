import axios from "axios";

const BASE_URL = "http://localhost:5000/api/";
const TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0ZDE4ZjNhYTNiNWZlZDBjMjAyMWMwZCIsImlzQWRtaW4iOmZhbHNlLCJpYXQiOjE2OTE0NTU5NDQsImV4cCI6MTY5MTcxNTE0NH0.WGUM1szvDoHQlnDx7OIQ7BRoOT5OrWwm37VEwrm0EDk";

// console.log(JSON.parse(localStorage.getItem("persist:root")));
// console.log(JSON.parse(JSON.parse(localStorage.getItem("persist:root")).currentUser).accessToken)//wrong
console.log(JSON.parse(JSON.parse(localStorage.getItem("persist:root")).user).currentUser.accessToken)//true

try {
  const localStorageData = localStorage.getItem("persist:root");

  if (localStorageData) {
    const parsedData = JSON.parse(localStorageData);

    if (parsedData && parsedData.user) {
      const userObject = JSON.parse(parsedData.user);

      if (userObject && userObject.currentUser && userObject.currentUser.accessToken) {
        console.log(userObject.currentUser.accessToken);
        console.log(JSON.parse(JSON.parse(localStorageData).user).currentUser.accessToken)
      } else {
        console.log("Access token not found in user data.");
      }
    } else {
      console.log("User data not found in localStorage.");
    }
  } else {
    console.log("localStorage data not found.");
  }
} catch (error) {
  console.error("An error occurred:", error.message);
}

export const publicRequest = axios.create({
  baseURL: BASE_URL,
});

export const userRequest = axios.create({
  baseURL: BASE_URL,
  headers: { token: `Bearer ${TOKEN}` },
});