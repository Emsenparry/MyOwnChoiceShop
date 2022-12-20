# Documentation of project

```js
/*
* We import all the necessary packages that 
* we are gonna use for the project.
*/
import express from 'express'
import dotenv from 'dotenv'
import path from 'path'
import bcrypt from 'bcrypt'
import sequelize from 'sequelize'
```

```js
/**
 * We import routes from our folder called routes.
 * INITROUTER is the one where we use sequelize to
 * sync our data, so tables appear in our HeidiSQL
 */
import InitRouter from './routes/init.router.js'
import GenderRouter from './routes/gender.router.js'
```

```js
/**
 * IMPORTANT: The routes can not be called before the const app = express() is called.
 * 
 * app.use(InitRouter)
 * app.use(GenderRouter)
 * /
```
**.gitignore**
```
The .gitignore file is for files we dont want to be visible on our github. Usually it's unnecessary files such as 'node_modules' and important file where you dont wanna show things such as password and secret keys.
```
**.env**
```
The .env file is where we have all the important stuff, such as which host we use, what name, password and keys we have.
```
**Package.json**
```
Package.json is the file with all of our package and dependencies.
```
