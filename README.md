# MVP by Deborah Scordo

 This MVP will use Express, mySQL and Vue 3 to create an online shop for the business _Ariadna Scordo Handmade_.

## Set up instructions

 To initialise the backend server type `npm start` in the terminal.
 To initialise the frontend, type `npm run dev` in the client folder.

## Components

### The main components are

- PreviousWork: displays examples of work (already sold/gifted).
- Catalog: displays products available to purchase.
- Form for custom order requests (desireable but lower priority).
- Admin View component to receive custom orders and upload/update products (desireable but lower priority).

The first two components will use the table "products" and the form will use the table "customorders".

### Other components that may be produced if time permits include

- About Us.
- Contact Us.
- Terms and Conditions.
- Delivery and returns.

As these components are static they are low priority.

## Site map

![sitemap](/RMimages/MVP-ASH.png)

## Database schema

![database schema](/RMimages/drawSQL-MVP.png)

[API Routes list](https://docs.google.com/document/d/1-EI1td50GBRr9KnBUzMpUGFJmx_3-RltO0dmQZejzo4/edit?usp=sharing)

## Ideas for Featured Extension Project

a. Add functionality to Custom Order form

- The `customorder` table has already been created for the database (see sql file). You would need to create another file in the routes folder for it.
- Connect form to POST method.
- Where will the data from the form be displayed? You could create an "AdminView" component to display the information received or have it sent to an email address.
- Bonus: add PUT, POST and DELETE methods for `products` table in AdminView component.

b. Add search function in Catalog so potential customers can filter between different types (necklace, bracelet, etc). The GET method in routes/products already includes a filter function. I did some research on this but I wasn't very happy with the solutions I saw. Perhaps you find a better one?

## Notes

 _This is a student project that was created at [CodeOp](http://codeop.tech), a full stack development bootcamp in Barcelona._
