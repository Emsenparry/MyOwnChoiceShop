import UserModel from '../models/user.model.js'

class UserController {
    list = async (req, res) => {
        let { limit, attributes } = req.query
        limit = parseInt(limit) || 1000
        const attr = attributes ? attributes.split(',') : new Array
        ('id', 'username', 'password')


        const result = await UserModel.findAll({
            attributes: attr,
            limit: limit
        })
        res.json(result)
    }

details = async (req, res) => {
    const { id } = req.params || 0
    const result = await UserModel.findOne({
        attributes: ['id', 'username', 'password', 'firstname', 'lastname', 
        'email', 'address', 'zipcode', 'city', 'phone_nr'],
        where: { id: id }
    })
    res.json(result)
}

create = async (req, res) => {
    const { username, password, firstname, lastname, 
    email, address, zipcode, city, phone_nr } = req.body;

    if(username && password && firstname && lastname &&
        email && address && zipcode && city && phone_nr) {
        const model = await UserModel.create(req.body)
        res.json({ newId: model.id })
    } else {
        res.sendStatus(418)
    }
}

update = async (req, res) => {
    const { id } = req.params || 0
    const { username, password, firstname, lastname, 
        email, address, zipcode, city, phone_nr } = req.body;

    if(id && username && password && firstname && lastname &&
        email && address && zipcode && city && phone_nr) {
        const model = await UserModel.update(req.body, {
            where: { id: id }
        })
        res.json({
            msg: 'User updated'
        })
    } else {
        res.sendStatus(418)
    }
}
delete = async (req, res) => {
    try {
        await UserModel.destroy({ where: { id: req.params.id }});
        res.sendStatus(200)
    } catch(err) {
        res.send(err)
    }
}

}

export default UserController