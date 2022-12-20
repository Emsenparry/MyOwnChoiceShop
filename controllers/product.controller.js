import ProductModel from '../models/product.model.js'
import ReviewModel from '../models/review.model.js'

ProductModel.hasMany(ReviewModel)
ReviewModel.belongsTo(ProductModel)


class ProductController {
    list = async (req, res) => {
        let { limit, attributes } = req.query
        limit = parseInt(limit) || 1000
        const attr = attributes ? attributes.split(',') : new Array
        ('id', 'item_number', 'img', 'name', 'content', 'stock', 'size',
        'price', 'gender_id', 'brand_id', 'type_id')


        const result = await ProductModel.findAll({
            attributes: attr,
            limit: limit
        })
        result.forEach(element =>{
            let img = new Buffer.from(element.img).toString('utf8')
            element.img = img
           })
        console.log(result);
        res.json(result)
    
    }

details = async (req, res) => {
    const { id } = req.params || 0
    const result = await ProductModel.findOne({
        attributes: ['item_number', 'img', 'name', 'content', 'stock', 'size',
        'price', 'gender_id', 'brand_id', 'type_id'],
        where: { id: id }
    })
    res.json(result)
}

create = async (req, res) => {
    const { item_number, img, name, content, stock, size,
    price, gender_id, brand_id, type_id } = req.body;
    if( item_number && img && name && content && stock && size &&
        price && gender_id && brand_id && type_id ) {
        const model = await ProductModel.create(req.body)
        res.json({ newId: model.id })
    } else {
        res.sendStatus(418)
    }
}

update = async (req, res) => {
    const { id } = req.params || 0
    const { item_number, img, name, content, stock, size,
        price, gender_id, brand_id, type_id  } = req.body;

    if(id && item_number && img && name && content && stock && size &&
        price && gender_id && brand_id && type_id ) {
        const model = await ProductModel.update(req.body, {
            where: { id: id }
        })
        res.json({
            msg: 'Product updated'
        })
    } else {
        res.sendStatus(418)
    }
}
delete = async (req, res) => {
    try {
        await ProductModel.destroy({ where: { id: req.params.id }});
        res.sendStatus(200)
    } catch(err) {
        res.send(err)
    }
}
}
export default ProductController
