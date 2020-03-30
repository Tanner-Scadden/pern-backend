import * as express from 'express';
import event from './event';
import user from './user';

const router = express.Router();

router.use('/event', event);
router.use('/user', user);

export default router;
