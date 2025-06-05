// routes/example.js
import express from 'express';
import db from '../db.js';

const router = express.Router();

router.get('/', async (req, res) => {
    const [rows] = await db.query('SELECT NOW() as now');
    res.json({ time: rows[0].now });
});

export default router;
