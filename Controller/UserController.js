const router = require('express').Router();
const user = require('../Model/UserModel');

router.all('/',(req, res) => {
    res.setHeader('Content-Type','application/json')
    res.end(JSON.stringify({'status':'User Controller working...'}, null, 3));
});

router.post('/create', async (req, res) => {
    if (req.body.data) {
        await user.insertMany(req.body.data);
        res.status(200).end('User Created');
    }
    else {
        res.status(400).end('Invalid Request');
    }
});

router.get('/list', async (req, res) => {
    const array = await user.find();
    console.log(array);
    res.status(200).end(JSON.stringify(array));
});

router.put('/update/:id', async (req, res) => {
    const _user = await user.findOne({id:req.params.id});
    if (_user) {
        const updated = req.body.data;
        await user.findOneAndUpdate({id:req.params.id}, {$set:updated});
        res.status(200).end('User Updated');
    }
    else {
        res.status(404).end('User Not Found');
    }
});

router.delete('/delete/:id', async (req, res) => {
    const _user = await user.findOne({id:req.params.id});
    if (_user) {
        await user.deleteOne({id:req.params.id});
        res.status(200).end('User Deleted Successfully');
    }
    else {
        res.status(404).end('User Not Found');
    }
});

module.exports = router;