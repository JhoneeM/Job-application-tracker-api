# Job Application Tracker API

A full-stack REST API for managing and analyzing job applications, built with Node.js, Express, and PostgreSQL (Supabase), and deployed on Render.

## 🚀 Live API
https://job-application-tracker-api-ncyq.onrender.com

## 📌 Features
- Create, read, update, and delete job applications (CRUD)
- Track application status (Applied, Interview, Offer, Rejected)
- Store company, role, and application dates
- Structured database design for efficient querying
- SQL queries for analyzing application trends

## 🧠 Data Analysis (SQL)
Includes custom SQL queries to analyze:
- Applications in the last 30 days
- Application status breakdown
- Average response time
- Most applied-to companies
- Weekly application trends

## 🛠 Tech Stack
- Node.js
- Express.js
- PostgreSQL (Supabase)
- Render (Deployment)

## 📡 API Endpoints
- GET /jobs → Get all jobs
- GET /jobs/:id → Get single job
- POST /jobs → Add new job
- PUT /jobs/:id → Update job
- DELETE /jobs/:id → Delete job

## 📂 Project Structure
