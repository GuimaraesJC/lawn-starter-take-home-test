# SWAPI Full Stack Application by Jean Guimarães

## Description

This project is a full-stack web application developed for a job interview coding assignment. It allows users to retrieve information about Star Wars characters and movies from the public SWAPI API. The backend is built with Laravel and serves as a middle layer, exposing endpoints for a React (TypeScript) frontend.

## Setup

These instructions are for testing the application locally. Unfortunately, I wasn't able to configure Docker with Sail for this application within the given timeframe. I provide more details about this below.

### Prerequisites

Ensure you have the following installed:

- Node.js (Latest LTS version recommended)
- NPM
- PHP 8.1+
- Composer

### Steps

After cloning the project and navigating to the root folder, run the following commands:

```
composer install
```

```
cp .env.example .env
```

```
php artisan key:generate
```

```
php artisan migrate --seed    # if asked for confirmation, answer 'yes'
```

```
cd resources/js
```

```
npm install
```

```
npm run build
```

```
cd ../..
```

```
php artisan serve
```

The web application runs in the browser at http://localhost:8000.

API endpoints are available at http://localhost:8000/api and can be tested using tools like Postman.
For example, you can fetch all characters whose names contain **"bi"** by making a request to:
http://localhost:8000/api/people?name=bi.

## Stack of Choice

- Laravel - Although I have more experience with Node.js (which was an option for this assignment), I chose Laravel because it is the framework used by the company.
- React (TypeScript) - Set up with Vite, which comes pre-configured with Laravel.
- Tailwind - Used for styling.
- React Query - Handles data fetching and validations.
- Zustand - Manages global state.
- Axios - Handles HTTP requests.

## Features

### Available endpoints

You can search for characters using a keyword and view detailed information about a selected character.

Similarly, you can search for movies and access details about a specific movie.

### Responsiviness 

Ensures that all pages are fully responsive, providing an optimal viewing experience across desktop, tablet, and smartphone devices.

### 404 Page (Front-End)

Handles navigation for non-existent pages in the router, displaying a user-friendly error message and offering clear options to navigate back to the homepage.

## What is missing?

Unfortunately, a few requirements were not completed. For example, clicking on a character's name while viewing a movie's details does not navigate to the character's details page. Similarly, when viewing a character's details, it's not possible to navigate to a movie's details from the list of movies they appear in.

I was also unable to implement the metrics requirement outlined in item 3 of the challenge. While I have a general idea of how I would approach it and could discuss it further with the team, my background is primarily in Front-End development, with most of my Back-End experience being in Node.js. Due to the limited timeframe, I couldn't complete this part of the task.

All other requirements, both for the Back-End and Front-End, including UX validations and other specified features, have been completed.

## "Short Answer Questions" from the challenge

**What are you hoping to find in your next position that would make us the right next step in your career?**

A: I'm looking to grow as a Full-Stack developer, and from what I've seen, the company seems to offer the right environment and challenges to help me take that next step. 

---

**What have you learned so far about us that has excited you?**

A: I’m really excited about the collaborative environment and the knowledge-sharing initiatives here. It seems like a great place to improve my Back-End skills while also helping others grow in their Front-End expertise, which would be a win-win for both my personal growth and the success of the company.

---

**Have you worked in an environment where developers own delivering features all the way to production? We have QA (Quality Assurance) and a Product Operations team, however, they exist to provide support to engineers. Are you comfortable going to a place where the quality buck stops with the engineers and you have the ability to deploy and observe your own code in production?**

A: Yes, in my previous role at Inter Digital Bank, I was responsible for writing code and tests, acting as my own QA, and supporting my peers. The QA team was there for edge cases and business rules. I also handled deployments to DEV and STAGING and initiated production deployments, where I monitored logs to ensure everything ran smoothly. In fact, one of my first projects there involved taking charge of both the UX design and the development/deployment process. I’ve had similar experiences in roles at 123 Milhas and UOL as well.

---

**What is the next technology or subject you are hoping to learn about?**

A: I’m focusing on getting better at back-end development, possibly with Laravel, but I’m open to learning other tools too. Down the road, I’d love to keep growing and work towards becoming a specialist or architect.

## Improvements for the Future

Since my main expertise is in Front-End development, I put extra effort into making sure everything runs smoothly. I focused on making the app fully responsive, so it works well on all screen sizes, and ensured that all validations are working perfectly.

One thing that could be improved would be adding tools like ESLint and Prettier. These would help keep the code consistent, more readable, and easier to maintain over time by enforcing coding standards across the project.

On the Back-End side, I made sure to follow a clear separation of concerns. The controller takes care of the logic, while the service layer is responsible for making HTTP requests to the SWAPI API. This makes the code cleaner, easier to maintain, and more modular in the long run.

While Docker would have been a great way to streamline the deployment process and make the application more accessible to other developers, I was unable to fullfil theis requirement within the given timeframe using Sail. Docker would’ve helped streamline deployment, manage dependencies, and ensure the app runs consistently across different systems, but I couldn’t finalize the setup in time.
