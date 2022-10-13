'use strict'

import { Router } from 'express';

// 4. Import routes
import routes from './externalAPI.js';
import hotelRoutes from './hotel-router.js';

const router = Router({
  caseSensitive: true
});

// 5. Use imported routes in router
router.get('*', routes);
router.use('/hotel', hotelRoutes);

export default router;