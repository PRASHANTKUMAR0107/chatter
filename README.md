# Chatter - MERN Auth & Chat App

A real-time chat application built using the MERN stack with secure JWT-based authentication and authorization. This project demonstrates how to integrate real-time messaging using **Socket.io** with a full authentication system.

## Tech Stack
- **Frontend**: React, React Router, Context API, TailwindCSS
- **Backend**: Node.js, Express.js
- **Authentication**: JWT (stored in HTTP-only cookies)
- **Database**: MongoDB (Mongoose)
- **Real-time Communication**: Socket.io

---

## Features

### 1. Authentication & Authorization
- **JWT-based Authentication**: Secure login and registration system.
- **Authorization Middleware**: Restricts access to protected routes.
- **HTTP-only Cookies**: Tokens are stored securely to prevent client-side tampering.
  
### 2. Real-Time Chat
- **Socket.io Integration**: Real-time chat with WebSocket communication.
- **Online/Offline Status**: Users can see who is currently online.
- **Group & Private Chats**: Chat with individuals or groups.

### 3. User Interface
- **Responsive Design**: Built using **TailwindCSS** for a seamless experience on all devices.
- **React Router**: Single-page application (SPA) navigation.
- **Context API**: Global state management for user session and chat data.

---