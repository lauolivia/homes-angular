# Angular Homes

This project is an Angular application for managing homes. It uses Angular 16.0, RxJS 7.6, and TypeScript 5.0.

## Prerequisites

Make sure you have the following installed on your machine:

- Node.js (https://nodejs.org/)
- npm (https://www.npmjs.com/)
- Angular CLI

## Installation

1. **Install Angular CLI** (if you don't have it installed):

   ```sh
   npm install -g @angular/cli

   - Install the depencies

  `npm install` 

- Run the application 

  `ng serve`# homes-angular


This will start the development server and you can view the application by navigating to http://localhost:4200/ in your web browser.

#### Project Structure
src/ - The source code of the application.
app/ - The main application module and components.
home/ - Contains the HomeComponent which is the main component for displaying housing locations.
housing-location/ - Contains the HousingLocationComponent and related files.
assets/ - Static assets like images and styles.
environments/ - Environment-specific configuration.
HomeComponent
The HomeComponent is responsible for displaying a list of housing locations and providing a filter functionality to search by city.