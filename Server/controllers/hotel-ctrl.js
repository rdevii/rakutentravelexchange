'use strict'

import HotelModel from '../models/hotel-model.js';

// TODO: This is currently for mongodb (need to convert to postgresql)
const HotelControllers = {
    createHotel: (req, res) => {
        const body = req.body
    
        if (!body) {
            return res.status(400).json({
                success: false,
                error: 'You must provide a hotel',
            })
        }
    
        const hotel = new HotelModel(body)
    
        if (!hotel) {
            return res.status(400).json({ success: false, error: err })
        }
    
        hotel
            .save()
            .then(() => {
                return res.status(201).json({
                    success: true,
                    id: hotel._id,
                    message: 'Hotel created!',
                })
            })
            .catch(error => {
                return res.status(400).json({
                    error,
                    message: 'Hotel not created!',
                })
            })
    },
    
    updateHotel: async (req, res) => {
        const body = req.body
    
        if (!body) {
            return res.status(400).json({
                success: false,
                error: 'You must provide a body to update',
            })
        }
    
        Hotel.findOne({ _id: req.params.id }, (err, hotel) => {
            if (err) {
                return res.status(404).json({
                    err,
                    message: 'Hotel not found!',
                })
            }
            hotel.name = body.name
            hotel.time = body.time
            hotel.rating = body.rating
            hotel
                .save()
                .then(() => {
                    return res.status(200).json({
                        success: true,
                        id: hotel._id,
                        message: 'Hotel updated!',
                    })
                })
                .catch(error => {
                    return res.status(404).json({
                        error,
                        message: 'Hotel not updated!',
                    })
                })
        })
    },
    
    deleteHotel: async (req, res) => {
        await Hotel.findOneAndDelete({ _id: req.params.id }, (err, hotel) => {
            if (err) {
                return res.status(400).json({ success: false, error: err })
            }
    
            if (!hotel) {
                return res
                    .status(404)
                    .json({ success: false, error: `Hotel not found` })
            }
    
            return res.status(200).json({ success: true, data: hotel })
        }).catch(err => console.log(err))
    },
    
    getHotelByPropertyCode: async (req, res) => {
        await Hotel.findOne({ _id: req.params.id }, (err, hotel) => {
            if (err) {
                return res.status(400).json({ success: false, error: err })
            }
    
            if (!hotel) {
                return res
                    .status(404)
                    .json({ success: false, error: `Hotel not found` })
            }
            return res.status(200).json({ success: true, data: hotel })
        }).catch(err => console.log(err))
    },
    
    getHotels: async (req, res) => {
        await Hotel.find({}, (err, hotels) => {
            if (err) {
                return res.status(400).json({ success: false, error: err })
            }
            if (!hotels.length) {
                return res
                    .status(404)
                    .json({ success: false, error: `Hotel not found` })
            }
            return res.status(200).json({ success: true, data: hotels })
        }).catch(err => console.log(err))
    },
};



export default HotelControllers;