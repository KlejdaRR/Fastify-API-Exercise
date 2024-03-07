
# Joinrs Backend Challenge Exercise

The scope of the exercise is to implement some basic functionality for a simple REST API.

The project is a Node.js application using Fastify as the web framework. The project structure has been already set up.
An example endpoint has been implemented to serve as a starting point.

## Getting Started

### Run in Development Mode

- Clone the repository
- Run `npm install` to install the dependencies
- Run `npm run dev` to start the server in development mode
- The server will be running on http://localhost:8080

### Run in Production Mode

- Run `npm install` to install the dependencies
- Run `npm start` to start the server in production mode

The application can be run in production mode using docker. The Dockerfile is already provided.

- Run `docker build -t joinrs-backend-challenge .` to build the docker image
- Run `docker run -p 8080:8080 joinrs-backend-challenge` to start the container
- The server will be running on http://localhost:8080

### Run Tests

- Run `npm test` to run the tests

## Exercise

The exercise consists of implementing the following endpoints:

- An endpoint to return a job offer given an id
  - The job offer returned should include:
    - The job offer id
    - The job offer position
    - The job offer employer name
    - The job offer summary
    - The job offer description
  - The endpoint should return a 404 status code if the job offer is not found or its state is expired
- An endpoint to search for job offers given a search query
  - The search query should be used to search for job offers in the job offer position
  - The search should be case-insensitive
  - The search should return a list of job offers that match the search query
  - The search should include only job offers with state published
  - The job offers returned should include:
    - The job offer id
    - The job offer position
    - The job offer employer name
- An endpoint to update the state of a job offer
  - The endpoint should receive a job offer id and a status
  - The status should be one of the following: published, expired
  - The endpoint should return a 404 status code if the job offer is not found
  - The endpoint should return a 400 status code if the state is not valid
  - The endpoint should return a 201 status code if the job offer status is updated successfully
  - The endpoint don't need to persist the state of the job offer, just update it in memory
- Write tests (integration and unit) for the implemented endpoints
- Add notes on your architectural decisions, assumptions and how you would improve the app if you had more time.

The job offers are provided in the `src/repositories/files/job-offers.json` file. The file contains a list of 100 job.

## Presentation

- We will ask you to present your solution and discuss your architectural decisions.
- We will ask you clarifying questions about your solution and your architectural decisions.
- We will ask you to refactor code or add new features to your solution in a pair programming fashion, so be prepared to write code during the presentation.
