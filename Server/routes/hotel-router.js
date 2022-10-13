'use strict'

import { Router } from 'express';
import HotelController from '../controllers/hotel-ctrl.js';

const router = Router({
    caseSensitive: true
});
  
router.post('/hotel', HotelController.createHotel)
router.put('/hotel/:id', HotelController.updateHotel)
router.delete('/hotel/:id', HotelController.deleteHotel)
router.get('/hotel/:id', HotelController.getHotelByPropertyCode)
router.get('/hotels', HotelController.getHotels)

export default router;
