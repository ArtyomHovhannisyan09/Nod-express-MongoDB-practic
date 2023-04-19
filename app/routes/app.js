const { Router } = require('express')
const Appmodel = require('../models/appmodel')
const router = Router()

router.get('/', async (req, res) => {
    const appmodels = await Appmodel.find({})
    res.render('index', {
        title: 'home',
        isHome: true,
        appmodels
    })
})
router.get('/Create', (req, res) => {

    res.render('creat', {
        title: 'Create',
        isCr: true,

    })
})

router.post('/create', async (req, res) => {
    const appmodel = new Appmodel({
        title: req.body.title
    })
    await  appmodel.save()
    res.redirect('/')
})

router.post('/complete', async (req, res) => {
    const appmodel = await Appmodel.findById(req.body.id)
  
    appmodel.completed = !!req.body.completed
    await appmodel.save()
  
    res.redirect('/')
  })
  
 
module.exports = router