const db = require('../models')

// model
const Review = db.reviews

// functions

//  1. Add Review

const addReview = async (req, res) =>{
    let data = {
        rating: req.body.rating,
        description: req.body.description
    }

    const review = await Review.create(data)
    res.status(200).send(review)
}

//  2. Get All Review

const getAllReviews = async (req, res) => {
    let reviews = await Review.findAll({})
    res.status(200).send(reviews)
}

module.exports =  {
    addReview,
    getAllReviews
}