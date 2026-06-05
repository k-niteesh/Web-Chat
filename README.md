# Web Chat Application

This is a real-time web chat application built with Node.js, Express, and Socket.io. The application allows users to join specific chat rooms and communicate with each other in real-time.

## Features

- **Real-time Communication**: Users can chat with each other in real-time.
- **Room-based Chat**: Users can create or join specific chat rooms.
- **Bidirectional Communication**: Messages are sent and received instantly using WebSockets.

## Tech Stack

- **Backend**: Node.js, Express, Socket.io
- **Frontend**: HTML, CSS, JavaScript

## Installation

### Prerequisites

- Node.js and npm should be installed on your machine.

### Steps

1. **Clone the Repository**:
    ```bash
   git clone https://github.com/Chokkakuyaswanth/Web-Chat
   cd WebChat

    ```

2. **Install Dependencies**:
    ```bash
    npm install
    ```

3. **Run the Server**:
    ```bash
    npm start
    ```

4. **Open the Application**:
    Open your browser and go to `http://localhost:3000`

## Usage

1. **Open the application in your browser**.
2. **Enter a username and the room you want to join**.
3. **Start chatting** with other users in the room.

## Project Structure

- `server.js`: Main server file that sets up the Express server and Socket.io.
- `public/`: Contains the frontend files (HTML, CSS, JavaScript).
  - `index.html`: Main HTML file.
  - `style.css`: CSS file for styling.
  - `index.js`: Client-side JavaScript for handling Socket.io connections and DOM manipulation.


