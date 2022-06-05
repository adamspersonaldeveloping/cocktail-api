const express = require('express')
const app = express()
const cors = require('cors')
const PORT = 8000

app.use(cors())

const aliens = {
    'vulcan': {
        'blood': 'copper based',
        'diet': 'vegetarian',
        
    },
    'klingons': {},
    'romulans': {},
    'borg': {},
    'gorn': {},
    'trill': {},
    'humanoid': {
        wings: false,
        species: 'human'
    }
}

app.get('/', (req, res) =>{
    res.sendFile(__dirname + '/index.html')
    console.log('Greetings Earthling')

})
app.get('/api/:alienName', (req, res) => {
    const aliensName = req.params.alienName.toLocaleLowerCase()
    if( aliens[aliensName]){
        res.json(aliens[aliensName])
    }else{
        res.json(aliens['humanoid'])
    }
})

app.listen(process.env.PORT || PORT, () => {
    console.log('server is running')
})