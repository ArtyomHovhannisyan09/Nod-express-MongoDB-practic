const express = require('express')
const mongoose = require('mongoose')
const path =require('path')
const exephbs =require('express-handlebars')
const appRoutes = require("./routes/app")



const PORT = process.env.PORT || 3000

const app = express()
const hbs = exephbs.create({
    defaultLayout: 'main',
    extname:'hbs'
})



app.engine('hbs',hbs.engine)
app.set('view engine','hbs')
app.set('views','views')

app.use(express.urlencoded({extended:true}))
app.use(express.static(path.join(__dirname,'public')))

app.use(appRoutes)
async function start() {
    try {
      
     await mongoose.connect('mongodb+srv://artgameplay4:mLicjSbEuAkQv7HQ@cluster0.nctkvqc.mongodb.net/app1',{
    useNewUrlParser:true,

     })
     

        app.listen(PORT, () => {
            console.log("conected");
        })
    } catch (e) {
        console.log(e);
    }
  
}


start()


