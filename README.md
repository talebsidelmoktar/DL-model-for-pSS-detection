# Sjögren Syndrome Detection & Healthcare Worker Management Platform

A full-stack AI-powered platform that uses a Convolutional Neural Network (CNN) to detect **Primary Sjögren's Syndrome** from medical images and provides a web interface to manage **healthcare professionals**. Built using **React** for the frontend, **FastAPI** for the backend API and model hosting, and **PyTorch/TensorFlow** for deep learning.

## Table of Contents

- [Features](#features)
- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [Installation](#installation)
- [Running the Application](#running-the-application)
- [API Endpoints](#api-endpoints)
- [Model Information](#model-information)
- [Screenshots](#screenshots)
- [License](#license)

---

## Features

- Upload an image (e.g. salivary gland histopathology) to detect Primary Sjögren's Syndrome.
- View detection results with prediction confidence.
- Manage healthcare workers (CRUD operations).
- View logs of past detections.
- Authentication for healthcare personnel (optional).

---

## Tech Stack

### Frontend
- **React.js** + **Tailwind CSS** (or Material UI)
- Axios for HTTP requests

### Backend
- **FastAPI** - REST API + Model inference endpoint
- **Pydantic** - Data validation
- **Uvicorn** - ASGI server

### AI/ML
- CNN (e.g. ResNet, MobileNet)
- Trained using **PyTorch** or **TensorFlow**
- Model is served via FastAPI

### Database
- SQLite or PostgreSQL
- SQLModel or SQLAlchemy

---

## Project Structure

## Installation

### 1. Clone the Repository

```bash
git clone https://github.com/your-username/sjogren-cnn-app.git
cd sjogren-cnn-app
