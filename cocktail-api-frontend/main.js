document.querySelector('#getButton').addEventListener('click', apiRequest)


async function apiRequest(){
    const cocktailName = document.querySelector('input').value.toLowerCase()
    try{
        const response = await fetch(`https://thunderwalker-cocktail-list.herokuapp.com/api/${cocktailName}`)
        const data = await response.json()
        console.log(data)

        document.getElementById('cocktailName').innerText = data.name
        document.getElementById('cocktailIngredients').innerText = `${data.measurements.measurement1} ${data.ingredients.ingredient1}, ${data.measurements.measurement2} ${data.ingredients.ingredient2}, ${data.measurements.measurement3} ${data.ingredients.ingredient3}, ${data.measurements.measurement4} ${data.ingredients.ingredient4}, ${data.measurements.measurement5} ${data.ingredients.ingredient5}`
    
        document.getElementById('cocktailInstructions').innerText = `${data.preperation.step1}, ${data.preperation.step2}, ${data.preperation.step3}, ${data.preperation.step4}, ${data.preperation.step5}`
        document.getElementById('cocktailGarnish').innerText = data.garnish
        document.getElementById('cocktailImage').src =  data.image
    } catch(error) {
        console.error(error)
    }
}

//`${data.measurement1}, ${data.measurement2}, ${data.measurement3}, ${data.measurement4}, ${data.measurement5}`