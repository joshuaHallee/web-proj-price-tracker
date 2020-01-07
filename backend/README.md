# Back-end
This is the back-end portion of the application. Here you can find the supporting documentation for this project.

## Install
Run the command
```
npm install
```

## Setup Environment Variables
Create a .env file in the same directory as the app.js file. The .env file will need to contain these variables.
```
PORT_LOCAL=value
DB_CONNECTION_LOCAL=value
```

### Environment Variables Explained
`PORT_LOCAL`: contains a port number (example: 3001)

`DB_CONNECTION_LOCAL`: contains a MongoDB connection string (example: mongodb://localhost/price-tracker)

## Create the MongoDB Server
It is recommended that you install MongoDB Community Server in order to help get you started. Download can be found [here](https://www.mongodb.com/download-center/community).

Once installed, you will want to open MongoDB Community Server and start a new connection, leaving everything as the default. You will be unable to see your database even if your application is running, you will only be able to view your database after a collection is created.

## Create a collection
It is recommended that you install an API/REST client such as [Postman](https://www.getpostman.com/) or [Insomnia](https://insomnia.rest/).

Using the task CRUD example, you can use these endpoints to test your MongoDB Server.

### GET
`/api/task`

### POST
`/api/task/create`
```json
{
	"task": "Buy some milk."
}
```

### PATCH
`/api/task/update/{taskId}`
```json
{
	"task": "Buy some milk, bread, and butter."
}
```

### DELETE
`/api/task/{taskId}`

Once a collection is created, you will be able to view the contents of your MongoDB Server.