# ✈️ Trip Pilot

Trip Pilot is a full-stack SaaS application that takes the hassle out of travel planning. By leveraging the Google Gemini API, it generates highly personalized, day-by-day travel itineraries based on user preferences, complete with intelligent scheduling and budget breakdowns.

## ✨ Features
* **AI-Powered Itineraries:** Generates custom travel plans in seconds using Google Gemini.
* **Secure Authentication:** Custom email/password authentication using bcrypt, `jose` for JWTs, and Next.js Server Actions with HTTP-only cookies.
* **Dynamic Markdown Rendering:** Parses and styles AI-generated markdown into beautiful, readable UI components using `@tailwindcss/typography`.
* **Fully Responsive Design:** Fluid layouts optimized for mobile, tablet, and desktop viewing using Tailwind CSS v4.

## 🛠️ Tech Stack
* **Framework:** Next.js (App Router, Server Actions, Api)
* **Language:** TypeScript
* **Styling:** Tailwind CSS v4
* **Database:** MongoDB & Mongoose
* **Authentication:** JWT (jose), bcrypt
* **AI Integration:** Google Gemini API

## 🚀 Getting Started

### Prerequisites
Make sure you have Node.js installed on your machine.

### Installation
1. Clone the repository:
   ```bash
   git clone [https://github.com/Rishabingh/trip-pilot.git](https://github.com/Rishabingh/trip-pilot.git)
  ```
2. Insstall dependencies
    ```bash
    npm install
    ```
3. Set up your environment variables. Create a .env.local file in the root directory:
    ```bash
    MONGODB_URI=your_mongodb_connection_string
    SECRET=your_jwt_secret_key
    GEMINI_API_KEY=your_google_gemini_api_key
    ```
4. Start the development server:
    ```bash
    npm run dev
    ```
4. Open [http://localhost:3000](http://localhost:3000) in your browser.:
