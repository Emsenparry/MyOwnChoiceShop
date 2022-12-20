# Controller documentation
*Other notes are inside the different controllers*


```
Our controllers is where we use the HTTP requests, such as GET, POST, PUT and DELETE. 

We can also join tables.
```

*Joining tables example*
```js
UserModel.hasMany(ReviewModel)
ReviewModel.belongsTo(UserModel)
```

```
It runs as async because sequelize is build on the promise technology. It's promise-based
```