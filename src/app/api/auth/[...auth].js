// pages/api/auth/[...auth].js

import nextConnect from 'next-connect';
import session from 'express-session';
import cookieParser from 'cookie-parser';

const handler = nextConnect();

handler.use(cookieParser());
handler.use(session({
    secret: 'your-secret',
    resave: false,
    saveUninitialized: false,
    cookie: { secure: process.env.NODE_ENV === 'production' }
}));

export default handler;
