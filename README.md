## Real-Time Product Search with AJAX and Debounce 🛍️

This project simulates a real-time product search feature, where **AJAX** dynamically sends user input to the server and displays the corresponding results without refreshing the page. This approach provides immediate feedback to users, significantly improving interactivity and the overall user experience.

### Key Features:
- **Real-Time Search**: As users type in the search input, the relevant product results are displayed instantly, without page reload.
- **AJAX Implementation**: AJAX is used to send the search input asynchronously to the server and display the results without needing to refresh the page.
- **Static JSON Data**: The product data is stored in a static JSON file, simplifying the process by avoiding server-side logic. The search is handled entirely in JavaScript.
- **Debounce Effect**: When the checkbox is checked, a debounce mechanism is activated, meaning the search function will only be triggered after a delay in typing, reducing the number of requests sent to the server and improving performance.

### Bonus Feature:
- **Checkbox for Debounce**: A checkbox allows users to enable or disable the debounce effect. When checked, the search request will only be made after a brief delay, preventing excessive searches while typing.

### How It Works:
1. **Search Bar**: Users type a product query into the search bar.
2. **AJAX Request**: The search input is sent to the server asynchronously using AJAX.
3. **JSON Data**: The server (or local file in this case) returns matching products from the static JSON data.
4. **Dynamic Results**: The matching products are displayed dynamically without refreshing the page.
5. **Debounce (Bonus)**: When the checkbox is checked, the debounce mechanism ensures that the search is triggered only after a small pause in typing, reducing the load on the server.

### Technologies Used:
- **AJAX**: For asynchronous requests to fetch matching products without refreshing the page.
- **JavaScript**: To handle the AJAX requests, product search, and debounce logic.
- **JSON**: A static file to simulate a product database.
- **HTML/CSS**: For structuring and styling the page.
  
This project demonstrates a highly interactive, real-time product search experience, with improved performance using AJAX and debounce functionality.
