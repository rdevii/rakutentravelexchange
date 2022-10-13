'use strict'

import { Router } from 'express';
import handler from './handlers/externalAPIHandler.js';

const router = Router();

router.get(
  '/fromSource',
  async (req, res, next) => {
    // 6. Call handler to response with data
    await handler.getListFromAPI()
    .then( (result) => { return res.status(200).json(result); })
    .catch(err => {
      next(err);
    });
  }
)

export default router;