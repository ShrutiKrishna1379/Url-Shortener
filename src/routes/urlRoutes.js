import express from 'express';
import { urlShort, getOriginalUrl } from '../controllers/urlController.js';

const router = express.Router();

router.post('/shorten', urlShort);
router.get('/:shortCode', getOriginalUrl);

export default router;