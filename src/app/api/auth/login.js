// pages/api/auth/login.js

export default function handler(req, res) {
    if (req.method === 'POST') {
        // Validate user credentials (e.g., username and password)
        const { username, password } = req.body;

        // Simulated authentication, replace with your actual logic
        if (username === 'admin' && password === 'password') {
            req.session.user = { username: 'admin' };
            return res.status(200).json({ message: 'Logged in successfully' });
        } else {
            return res.status(401).json({ message: 'Invalid credentials' });
        }
    } else {
        return res.status(405).json({ message: 'Method Not Allowed' });
    }
}
