import * as express from 'express';
const router = express.Router();

router.get('/', (req, res, next) => {
    res.render('index', {
        title: 'Expressangular'
    });
});

router.get('/menuItems', (req, res, next) => {
    res.json({
        menuItems: [
            { ButtonName: 'About'},
            { ButtonName: 'Contact'},
            { ButtonName: 'Login'}
        ]
    });
});

router.post('/login', (req, res, next) => {
    console.log(req.body);
    if (req.body.userName.length > 0) {
        req.session['userName'] = req.body.userName;
        console.log(`user login`);
        // res.redirect('/');
    } else {
        res.render('index', {
            title: 'Express',
            ErrorMessage: 'Please enter a user name'
        });
    }
});

export {router};
