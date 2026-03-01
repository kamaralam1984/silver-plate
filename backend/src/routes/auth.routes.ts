import { Router } from 'express';
import { customerRegister, customerLogin, devResetPassword } from '../controllers/auth.controller';

const router = Router();

// Customer auth routes (mounted at /api/auth)
router.post('/register', customerRegister);
router.post('/login', customerLogin);
// Dev-only: POST /api/auth/dev-reset-password { email, newPassword, secret: 'dev-reset-123' }
router.post('/dev-reset-password', devResetPassword);

export default router;
