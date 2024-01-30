const express = require('express')
const facts = require('./facts.json')
const app = express()

const PORT = process.env.PORT || "3000"

app.set('view engine', 'ejs')

app.listen(PORT, ()=> {
    console.log( `App is running on http://localhost:${PORT}...`)
})

app.get("/", (req, res) => {

    res.send("Good Job!")

})

//greet
app.get('/greet', (req, res)=> {
    const currentYear = new Date().getFullYear();
    //gets the older age you will be in the current year
    const age = currentYear-req.query.year;

    res.render('greet', {title: 'Greeting', name: req.query.name , age: age})
})
//arithmetic
app.get('/math/:num1/:op/:num2', (req, res)=> {
    const num1 = parseInt(req.params.num1);
    const num2 = parseInt(req.params.num2);
    switch(req.params.op){
        case('plus'):
            var ans = num1 + num2;
            console.log(ans);
            break;
        case('minus'):
            var ans = num1 - num2;
            console.log(ans);
            break;
        case('times'):
            var ans = num1 * num2;
            console.log(ans);
            break;
        case('dividedby'):
            var ans = num1 / num2;
            console.log(ans);
            break;
        case('tothepowerof'):
            var ans = Math.pow(num1, num2);
            console.log(ans);
            break;

    }
    res.render('arithmetic', {title: 'Arithmetic', ans: ans})
})

app.get('/pandorasbox', (req, res)=> {

    // do the work
    const length = facts.length;
    const random =  Math.floor( Math.random() * length)
    const fact = facts[random].fact


    res.render('pandorasbox', {title: "Pandora's Box", fact: fact} )

})