# E-commerce Back End Starter Code

## Description

For this challenge I was assigned to create the back end for the e-commerce website using Sequelize, API routes, Models, Seeds file, and an env file. The motivation for completing this challenge was to better my skills in backend web development. I build this project to create a back end for a retail website; the problems this challenge solves are providing the retail company a back end database for their website that there employees can access. It allows employees to find products in their inventory, add new products, delete products. It also allows them to check the products price, availability, and IDs. The biggest challenge with this application was getting the put route and post routes to function without errors. The only post route I was able to get to work was in the categories route. The other post and put routes are still a work in progress.

## User Story

```md
AS A manager at an internet retail company
I WANT a back end for my e-commerce website that uses the latest technologies
SO THAT my company can compete with other e-commerce companies
```

## Acceptance Criteria

```md
GIVEN a functional Express.js API
WHEN I add my database name, MySQL username, and MySQL password to an environment variable file
THEN I am able to connect to a database using Sequelize
WHEN I enter schema and seed commands
THEN a development database is created and is seeded with test data
WHEN I enter the command to invoke the application
THEN my server is started and the Sequelize models are synced to the MySQL database
WHEN I open API GET routes in Insomnia for categories, products, or tags
THEN the data for each of these routes is displayed in a formatted JSON
WHEN I test API POST, PUT, and DELETE routes in Insomnia
THEN I am able to successfully create, update, and delete data in my database
```
## Installation

This application is not deployed and can only be used through node.js with dependencies dotenv, express, mysql2, and sequelize. After running npm start the application will run and console.log "Now Listening". From this point on the user will need to check the routes through a desktop application such as Insomnia to check the routes and see the data. 

## Usage

This application is meant to be used for companies that want to build a company website for users to shop online or check what/ if an item in available. This application is only the backend but it can be paired with front end technologies to create a full stack web application like the one described above. 

## License

Mit License