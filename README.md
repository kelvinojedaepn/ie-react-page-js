# Hacker News Entry List

This project is a React application that displays entries from Hacker News.

## Setup

### 1. API Setup

This project relies on an external API to fetch data. You can find the API and instructions for setup and execution at the following link: [Hacker News API](https://github.com/kelvinojedaepn/IE_Express_JS). Please follow the README in that repository to install and run the API.

### 2. Project Setup

Once the API is up and running, proceed with the following steps to set up this project:

* **Clone the repository**:

   ```bash
   git clone https://github.com/kelvinojedaepn/ie-react-page-js
   cd https://github.com/kelvinojedaepn/ie-react-page-js
    ```
* **Install project dependencies fo this project**:
    ```bash
   npm install
   ```
* **Run the project**:
    ```bash
   npm start
   ```
### 3. Components

* **App**: The root component of the application, which renders the EntryList component.
* **EntryList**: This component fetches data from the API, filters the entries based on the number of words in the title, and displays them. It includes buttons to filter entries with titles having more than five words or five words or fewer.

### 4. Testing
Tests are included to verify the functionality of the `countWords` utility function. The tests check if the function correctly counts the number of words, ignoring symbols and special characters.

* To run the tests, use the following command:
    ```bash
    npm test
  ```

### 5. Notes
* Ensure that the API is operational before starting the application.
* Refer to the [Readme](https://github.com/kelvinojedaepn/IE_Express_JS) in the API repository for detailed instructions on its setup and execution.
* For detailed instructions on how to run these projects, please refer to the README files of the respective repositories. Watch the video here: [Technical Challenge: Running API and Frontend Code](https://github.com/kelvinojedaepn/IE_Express_JS)
