import { app } from "./app.js";

app.listen(8000, () => {
    console.log("Listening on port 8000");
})

app.post('/api/cookie', (req, res) => {
    console.log('Setting cookies');
    // const options = {
    //     // httpOnly: true,
    //     domain: 'http://localhost:5173',
    //     path: '/',
    //     sameSite: 'None',
    //     secure: true,
    // };
    return res.status(200).cookie('TestCookie', 'helloIamatestcookie').json({ message: 'Cookies set'})
})