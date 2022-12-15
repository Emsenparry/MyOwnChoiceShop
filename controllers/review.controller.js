import ReviewModel from '../models/review.model.js'
// Import the model you want a relationship to
import UserModel from '../models/user.model.js'
// JOINING THE TABLES
UserModel.hasMany(ReviewModel)
ReviewModel.belongsTo(UserModel)

class ReviewController {
    list = async (req, res) => {
        let { limit, attributes } = req.query
        limit = parseInt(limit) || 1000
        const attr = attributes ? attributes.split(',') : new Array
        ('id', 'date', 'rating')


        const result = await ReviewModel.findAll({
            attributes: attr,
            limit: limit
        })
        res.json(result)
    }

details = async (req, res) => {
    const { id } = req.params || 0
    const result = await ReviewModel.findOne({
        attributes: ['id', 'date', 'user_id', 'comment', 'title', 'rating', 'product_id'],
        where: { id: id }
    })
    res.json(result)
}

create = async (req, res) => {
    const { date, user_id, comment, title, rating, product_id } = req.body;
    if(date && user_id && comment && title && rating && product_id) {
        const model = await ReviewModel.create(req.body)
        res.json({ newId: model.id })
    } else {
        res.sendStatus(418)
    }
}

update = async (req, res) => {
    const { id } = req.params || 0
    const { date, user_id, comment, title, rating, product_id } = req.body;

    if(id && date && user_id && comment && title && rating && product_id) {
        const model = await ReviewModel.update(req.body, {
            where: { id: id }
        })
        res.json({
            msg: 'Review updated'
        })
    } else {
        res.sendStatus(418)
    }
}
delete = async (req, res) => {
    try {
        await ReviewModel.destroy({ where: { id: req.params.id }});
        res.sendStatus(200)
    } catch(err) {
        res.send(err)
    }
}
}
export default ReviewController