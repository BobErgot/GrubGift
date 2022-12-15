# GrubGift
GrubGift is a comprehensive social media web application designed for the sharing and discovery of food resources within communities. Developed using the MERN stack (MongoDB, Express.js, React, and Node.js), the platform facilitates a streamlined and interactive user experience. It leverages advanced web technologies such as React for the frontend, Redux for state management, Express.js as the server framework, MongoDB as the database, and socket.io for real-time communication.  

Explore the Server code at [GrubGift-Server](https://github.com/BobErgot/GrubGift-Server)

## Product Overview
GrubGift aims to connect individuals and organizations with surplus food to those seeking meals, thereby contributing to the reduction of food wastage and supporting community welfare. The application provides a platform for users to post, discover, and share information about food availability, leveraging technology to address societal challenges.

## Features and Technical Specifications
### Core Features
- **Explore View**: Allows users to browse through posts without authentication, leveraging React and Redux for a dynamic and responsive UI.
- **CRUD Operations for Posts**: Employs MongoDB for data storage, with Express.js routes handling the creation, retrieval, updating, and deletion of posts.
- **Likes and Nested Comments**: Implements interactive features for community engagement, utilizing React for the frontend components and MongoDB for storing user interactions.
- **JWT Authentication**: Secures user accounts and sessions with JWT (JSON Web Tokens), integrating Express.js middleware for authentication processes.
- **Real-Time Private Messaging**: Utilizes socket.io for real-time bidirectional event-based communication, enhancing user interaction.
- **User Profiles**: Features dedicated user profile pages, displaying posts, likes, and comments, with React rendering user-specific data.
- **Infinite Scrolling with Pagination**: Improves content discovery through infinite scrolling, efficiently loading data as the user scrolls, facilitated by React and MongoDB's pagination capabilities.
- **Content Sorting and Filtering**: Offers sorting by likes, comments, and date, plus profanity filtering and cooldowns for posts/comments, maintaining a positive user environment.
- **Search Functionality**: Includes a search feature for post titles, using MongoDB's text search capabilities, optimized with React components for real-time feedback.
- **Role-Based Access Control (RBAC)**: Differentiates between user roles—user, moderator, promoter—with distinct permissions and functionalities, implemented through Express.js route authorization.

### Planned Enhancements
- **Map Integration**: To visualize the location of food sharing events, considering the use of APIs like Google Maps for geolocation services.
- **Calendar Integration**: For organizing and tracking food-related events, potentially integrating with third-party calendar services for better event management.
- **Notification System**: Implementing a system to alert users about new posts and messages, considering the use of Web Push Notifications for real-time alerts.
- **Deals and Discounts Discovery**: Proposing the addition of functionality to share and find discounts on food items, requiring integration with external APIs for real-time deals and discount data.

### Starting the Server
To start the GrubGift server, navigate to the project directory in your terminal and run the following command:

```bash
npm start
```

This command executes the `react-scripts start` script defined in the `package.json` file, launching the development server. Ensure that you have Node.js and npm installed on your machine and that all dependencies listed in the `package.json` are correctly installed in your project directory.

For installing dependencies, you can run:

```bash
npm install
```

## Contributors
This project exists thanks to all the people who contribute.
- Abdul Haseeb Hussain Mohammed [@haseeb8888](https://github.com/haseeb8888)
- Satvik Khetan [@satvikkhetan33](https://github.com/satvikkhetan33)
- Sristika Bora [@sristika](https://github.com/sristika)

## Contributing
Contributions are welcome! Fork the repository, make changes, and submit a pull request.

## License
This project is licensed under the MIT License.
