document.querySelector('button').addEventListener('click', apiRequest)


async function apiRequest(){
    const cocktailName = document.querySelector('input').value.toLowerCase()
    try{
        const response = await fetch(`https://thunderwalker-cocktail-list.herokuapp.com/api/${cocktailName}`)
        const data = await response.json()
        console.log(data)
    } catch(error) {
        console.error(error)
    }
}