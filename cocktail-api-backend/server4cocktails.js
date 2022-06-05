const express = require('express')
const app = express()
const cors = require('cors')
const PORT = 8000

app.use(cors())

const cocktails = {
    'old fashioned ': {
        'ingredients': {
            ingredient1: 'Bourbon or Rye Whiskey',
            ingredient2: 'sugar',
            ingredient3: 'bitters',
            ingredient4: 'plain water',
            ingredient5: '',
            ingredient6: '',
            ingredient7: '',
            ingredient8: '',
            ingredient9: '',
            ingredient10: '',
        },
        'measurements': {
            measurement1: '45 ml',
            measurement2: '1 cube',
            measurement3: '2-4 dashes',
            measurement4: 'few dashes',
            measurement5: '',
            measurement6: '',
            measurement7: '',
            measurement8: '',
            measurement9: '',
            measurement10: '',
        },
        'garnish': 'Orange peel twist and a cocktail cherry',
        'preperation': {
            step1: 'Drop bitters on sugar cube inside stiring glass',
            step2: 'Muddle sugar and bitters with a few dashes of water',
            step3: 'Add whiskey to stiring glass ',
            step4: 'stir until almost dissolved',
            step5: 'Add ice and stir for 30-60 seconds',
            step6: 'Strain into chilled rocks glass',
            step7: 'Garnish',
            step8: '',
            step9: '',
            step10: '',
        },
        'image': 'https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F43%2F2022%2F01%2F19%2F162397-classic-old-fashioned-mfs85-1.jpg',
        'fun facts': 'First recipe for a "cocktail" was described as a concoction of spirits, bitters, water and sugar in 1806, which is surprisingly close to the recipe of an Old Fashoined.'
    },
    'margarita': {
        'ingredients': {
            ingredient1: 'tequila',
            ingredient2: 'triple sec',
            ingredient3: 'fresh squeezed lime juice',
            ingredient4: '',
            ingredient5: '',
            ingredient6: '',
            ingredient7: '',
            ingredient8: '',
            ingredient9: '',
            ingredient10: '',
        },
        'measurements': {
            measurement1: '50 ml',
            measurement2: '20 ml',
            measurement3: '15 ml',
            measurement4: '',
            measurement5: '',
            measurement6: '',
            measurement7: '',
            measurement8: '',
            measurement9: '',
            measurement10: '',
        },
        'garnish': 'half salt rim and a lime slice',
        'preperation': {
            step1: 'Optional: Salt half a rim of cocktail glass',
            step2: 'Add all ingredients into a shaker with ice',
            step3: 'Shake and strain into a chilled cocktail glass',
            step4: '',
            step5: '',
            step6: '',
            step7: '',
            step8: '',
            step9: '',
            step10: '',
        },
        'image': 'https://www.thespruceeats.com/thmb/FjeGodPqSKCTiodzzURclGz9Jag=/3200x2136/filters:fill(auto,1)/fresh-margarita-cocktail-recipe-759317-step-05-dae71772c4304cf7911489a1c7d219ab.jpg',
        'fun facts': 'There is an account from 1936 of Iowa newspaper editor James Graham finding such a cocktail in Tijuana, years before any of the other margarita "creation myths".'
    },
    'espresso martini': {
        'ingredients': {
            ingredient1: 'vodka',
            ingredient2: 'Kahlua',
            ingredient3: 'sugar syrup',
            ingredient4: 'strong espresso',
            ingredient5: '',
            ingredient6: '',
            ingredient7: '',
            ingredient8: '',
            ingredient9: '',
            ingredient10: '',
        },
        'measurements': {
            measurement1: '50 ml',
            measurement2: '30 ml',
            measurement3: '10 ml',
            measurement4: '1',
            measurement5: '',
            measurement6: '',
            measurement7: '',
            measurement8: '',
            measurement9: '',
            measurement10: '',
        },
        'garnish': 'three coffee beans',
        'preperation': {
            step1: 'Pour all ingredients into cocktail shaker',
            step2: 'Shake well with ice',
            step3: 'strain into chilled cocktail glass',
            step4: '',
            step5: '',
            step6: '',
            step7: '',
            step8: '',
            step9: '',
            step10: '',
        },
        'image': 'https://preppykitchen.com/wp-content/uploads/2021/01/espresso-martini-feature.jpg',
        'fun facts': `Created by Dick Bradsell in the 1980s while at Fred's Club in London for a young lady who asked for something that would "Wake me up, and then fuck me up". `
    },
    'cosmopolitan': {
        'ingredients': {
            ingredient1: 'Vodka Citron',
            ingredient2: 'Cointreau',
            ingredient3: 'fresh squeezed lime juice',
            ingredient4: 'Cranberry juice',
            ingredient5: '',
            ingredient6: '',
            ingredient7: '',
            ingredient8: '',
            ingredient9: '',
            ingredient10: '',
        },
        'measurements': {
            measurement1: '40 ml',
            measurement2: '15 ml',
            measurement3: '15 ml',
            measurement4: '30 ml',
            measurement5: '',
            measurement6: '',
            measurement7: '',
            measurement8: '',
            measurement9: '',
            measurement10: '',
        },
        'garnish': 'lime slice',
        'preperation': {
            step1: 'Add all ingredients in a cocktail shaker with ice',
            step2: 'Shake and strain into a chilled cocktail glass',
            step3: 'Garnish with a lime slice',
            step4: '',
            step5: '',
            step6: '',
            step7: '',
            step8: '',
            step9: '',
            step10: '',
        },
        'image': 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c0/Cosmopolitan_%285076906532%29.jpg/220px-Cosmopolitan_%285076906532%29.jpg',
        'fun facts': 'The origins of the Cosmopolitain are disputed with many people claiming to have invented this drink, but it is thought that it originates from either a Daisy cocktail or the Kamikaze cocktail which both share similarities.'
    },
    'brandy daisy': {
        'ingredients': {
            ingredient1: 'brandy',
            ingredient2: 'yellow Chartreuse',
            ingredient3: 'fresh squeezed lemon juice',
            ingredient4: 'chilled club soda',
            ingredient5: '',
            ingredient6: '',
            ingredient7: '',
            ingredient8: '',
            ingredient9: '',
            ingredient10: '',
        },
        'measurements': {
            measurement1: '45 ml',
            measurement2: '20 ml',
            measurement3: '20 ml',
            measurement4: 'splash',
            measurement5: '',
            measurement6: '',
            measurement7: '',
            measurement8: '',
            measurement9: '',
            measurement10: '',
        },
        'garnish': 'lemon slice',
        'preperation': {
            step1: 'Add all ingredients in a cocktail shaker with ice',
            step2: 'Shake and strain into a chilled cocktail glass',
            step3: 'top with a splash of chilled club soda or seltzer',
            step4: '',
            step5: '',
            step6: '',
            step7: '',
            step8: '',
            step9: '',
            step10: '',
        },
        'image': 'https://noseychef.com/wp-content/uploads/2019/05/IMG_4584123.jpg',
        'fun facts': 'A cocktail that first gained popularity in the late 19th century. The earliest known recipe was published in 1876.'
    },
    'kamikaze': {
        'ingredients': {
            ingredient1: 'Vodka',
            ingredient2: 'triple sec',
            ingredient3: 'fresh squeezed lime juice',
            ingredient4: '',
            ingredient5: '',
            ingredient6: '',
            ingredient7: '',
            ingredient8: '',
            ingredient9: '',
            ingredient10: '',
        },
        'measurements': {
            measurement1: '30 ml',
            measurement2: '30 ml',
            measurement3: '30 ml',
            measurement4: '',
            measurement5: '',
            measurement6: '',
            measurement7: '',
            measurement8: '',
            measurement9: '',
            measurement10: '',
        },
        'garnish': 'lime slice',
        'preperation': {
            step1: 'Add all ingredients in a cocktail shaker with ice',
            step2: 'Shake and strain into a chilled cocktail glass',
            step3: 'Garnish with a lime slice',
            step4: '',
            step5: '',
            step6: '',
            step7: '',
            step8: '',
            step9: '',
            step10: '',
        },
        'image': 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/bc/Kamikaze-cocktail.jpg/1024px-Kamikaze-cocktail.jpg',
        'fun facts': 'Kamikaze (神風) is a Japanese word literally meaning "divine wind"'
    },
    'unknown': {
        'ingredients': {
            ingredient1: '',
            ingredient2: '',
            ingredient3: '',
            ingredient4: '',
            ingredient5: '',
            ingredient6: '',
            ingredient7: '',
            ingredient8: '',
            ingredient9: '',
            ingredient10: '',
        },
        'measurements': {
            measurement1: '',
            measurement2: '',
            measurement3: '',
            measurement4: '',
            measurement5: '',
            measurement6: '',
            measurement7: '',
            measurement8: '',
            measurement9: '',
            measurement10: '',
        },
        'garnish': '',
        'preperation': {
            step1: '',
            step2: '',
            step3: '',
            step4: '',
            step5: '',
            step6: '',
            step7: '',
            step8: '',
            step9: '',
            step10: '',
        },
        'image': '',
        'fun facts': 'That cocktail is not in our database. Please check your spelling or try again.'
    }
}

app.get('/', (req, res) =>{
    res.sendFile(__dirname + '/index.html')
    console.log('Greetings Earthling')

})
app.get('/api/:cocktailName', (req, res) => {
    const cocktailName = req.params.cocktailName.toLocaleLowerCase()
    if( cocktails[cocktailName]){
        res.json(cocktails[cocktailName])
    }else{
        res.json(cocktails['unknown'])
    }
})

app.listen(process.env.PORT || PORT, () => {
    console.log('server is running')
})