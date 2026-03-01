import { Router } from 'express';
import { adminLogin } from '../controllers/auth.controller';

const router = Router();

// Admin auth routes (mounted at /api/admin)
router.post('/login', adminLogin);

export default router;
