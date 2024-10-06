
GreenMinds
GreenMinds is a web application aimed at mapping potholes in a city and allowing residents to report their locations. This project uses the MERN stack (MongoDB, Express, React, Node.js) for seamless interaction between the client and server.

Clone the Repository
To get started, clone the project repository from GitHub:
''' 
git clone https://github.com/mooazsayyed/greenminds.git
'''
Project Setup
1. Root Setup
Navigate to the project directory and initialize the project with npm:

bash
Copy code
cd greenminds
npm init -y
npm install mongodb
2. Server Setup
Move to the server folder and install the necessary dependencies:

bash
Copy code
cd server
npm install mongoose bcrypt dotenv express jsonwebtoken multer nodemon cors cookie-parser
npm start
This will start the server using Nodemon.

3. Client Setup
Move to the client folder and install the client dependencies:

''' 
cd client
npm install
'''
Dependencies Installed
The following dependencies are installed for the client:

React: ^18.3.1
React DOM: ^18.3.1
React Router DOM: ^6.26.2
Bootstrap: ^5.3.3
Axios: ^1.7.7
Chart.js: ^4.4.4
React Chart.js: ^5.2.0
Leaflet: ^1.9.4
React Leaflet: ^4.2.1
React Simple Maps: ^3.0.0
Testing Library: @testing-library/react, @testing-library/jest-dom, @testing-library/user-event
Web Vitals: ^2.1.4
4. Start the Client
After installation, you can start the client by running the following command in the client folder:

bash
Copy code
npm run start
This will launch the development server for the frontend application.

