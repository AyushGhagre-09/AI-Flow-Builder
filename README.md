# MERN AI Flow App

A simple **MERN (MongoDB, Express.js, React, Node.js)** application that allows users to type a prompt, get AI-generated responses, visualize the flow between input and output nodes using **React Flow**, and save the data to **MongoDB**. AI responses are generated via the **OpenRouter API**.

---

## Features

- **Interactive Flow Chart**: Two connected nodes
  - **Input Node**: User types a prompt.
  - **Result Node**: Displays AI response.
- **Run Flow**: Send prompt to backend and fetch AI response.
- **Save Data**: Store prompt and AI response in MongoDB.
- **Secure Backend**: API key is hidden; no direct frontend calls to AI API.
- **Visual Representation**: Uses React Flow to connect nodes visually.

---

## Tech Stack

- **Frontend**: React, React Flow
- **Backend**: Node.js, Express.js
- **Database**: MongoDB
- **AI Integration**: OpenRouter API
- Free models:  `mistralai/mistral-7b-instruct:free`

---

```
# 🚀 Project Setup Guide
```

Follow these steps to run the project locally:

## 1. Clone the Repository

```sh
git clone <your-repository-url>
cd project
```
## 2 Backend Setup

sh

```
cd server
npm install

```

### 🔧 Environment Variables

env

```
MONGO_URI=<your_mongodb_url>
OPENROUTER_API_KEY=<your_api_key>
PORT=3000

```

### ▶️ Start Backend Server

sh

```
npm run server

```

## 3 Frontend Setup



```
cd ../client
npm install

```

### 🔧 Environment Variables



```
VITE_SERVER_URL=http://localhost:3000

```

### ▶️ Start React App



```
npm run dev
```


## Live Link

```
https://ai-flow-builder-client.vercel.app/
