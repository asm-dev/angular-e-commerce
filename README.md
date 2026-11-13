# Online Store - Angular Project

This project is part of an activity from the advanced web development master's program, focused on applying key concepts of the Angular framework. The main goal is to implement an online store that consumes data from an external API using a modern approach based on _standalone components_. The activity requirements included creating dynamic routes, using a service to manage data retrieval from a public API, creating and using custom _pipes_, and structuring the project following best practices in both style and architecture.

Additionally, this is a chance to **deploy** this POC on **Firebase**; you can see it at [this link](https://poc-angular-shop.web.app/).

## Functional structure of the project

The project is organized into independent components that reflect a clear view-based architecture. Angular's routing system has been used to navigate dynamically between the different sections of the application.

### Data service

All interaction with the API is done through a centralized service (`ProductService`). This service uses `HttpClient` to make HTTP requests to the different endpoints exposed by the Fake Store API. This way, the service encapsulates the data access logic and makes it easy for components to reuse it.

The routes consumed from the service are:

- `/products/categories`: returns an array of strings with the names of the available product categories
- `/products/category/:category`: returns all the products of a specific category
- `/products/:id`: returns the details of a specific product

### Components

- `CategoriesComponent`: shows the categories available in the API. Each category is presented as a button that redirects to the list of corresponding products.
- `ProductsComponent`: shows a grid of products belonging to a category. Each product contains an image, a title, a price and a button to access its detail view.
- `ProductDetailComponent`: presents complete information about a specific product, including the description, the category it belongs to, the price and the corresponding image.

### Custom pipes

A custom pipe called `CapitalizePipe` has been created that converts the first letter of a string to uppercase, leaving the rest in lowercase. This pipe has been used, for example, to improve the presentation of category names.

### Styles and visual structure

Styles have been implemented using SCSS files specific to each component, in order to keep a clear separation of concerns and ease maintenance. A modern typeface, a neutral color palette with dark blue accents, and a card-based design system (_cards_) have been used to present the products in a clear and consistent way. The visual structure has been built with techniques such as _Flexbox_ and _Grid_, ensuring a balanced and centered presentation on both desktop and small screens.

## Possible extensions

This project can easily be extended to include features such as:

- Shopping cart management with local storage or shared state
- Adding pagination or scroll-based loading
- Adding advanced filters by price or category
- Implementing an authentication and login system to simulate a real e-commerce experience
- Continuous deployment with Firebase Hosting, GitHub Actions or other platforms
