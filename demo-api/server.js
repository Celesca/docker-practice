const app = require('express');

app.use(cors());

app.get('/api' , (req,res) => {
    res.json({
        message : "Hello from server"
    });
})

app.listen(3000, () => {
    console.log('Server is running on port 3000')
})