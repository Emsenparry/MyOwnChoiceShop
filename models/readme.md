# Model Documentation
*A quick rundown of what all the models do*

```js
/*
First of all we import sequelize from our config folder, and afterwards we import DataTypes and Model from the sequelize package since we're gonna use them later.
*/
import sequelize from '../config/sequelize.config.js'
import { DataTypes, Model } from 'sequelize'

// Extends our Model
class BrandModel extends Model{}

/*
Now we're gonna use whatever data we want in our table, in this case it's id and name.

So we're gonna call the method init on BrandModel which consists of two objects
1st: consists of properties
2nd: consists of objects

Here the DataTypes from our important comes to use and we also write what kind of datatype it is which is most likely either a INTERGER or a STRING
*/
BrandModel.init({
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false
    }
}, {
/**
 * Has our sequelize connection and makes a new table in HeidiSQL
 * Have our modelName 'brand'
 * freezeTableName makes it singular (ental)
 * underscored makes a _ if necessary
*/
    sequelize, 
    modelName: 'brand',
    freezeTableName: true,
    underscored: true
})
// Exporting the model as a default
export default BrandModel
```