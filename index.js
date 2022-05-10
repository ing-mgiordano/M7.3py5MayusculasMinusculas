function checkPhrase(){
    const phraseUser = document.getElementById('user-input').value
    const phrase = phraseUser.replace(/\s+/g, '')
  
    let character
    let conditionUpperCase = false 
    let conditionLowerCase = false

    for(let i = 0; i < phrase.length; i++){
        character = phrase.charAt(i)

        if(character == character.toUpperCase()){
            conditionUpperCase = true
        }
        if(character == character.toLowerCase()){
            conditionLowerCase = true
        }
        console.log(character, conditionUpperCase, conditionLowerCase)
    }

    if(conditionUpperCase == true && conditionLowerCase == true){
        document.getElementById('result').innerHTML = 'Frase formada por M y m'     
    }
    if(conditionUpperCase == true && conditionLowerCase == false){
        document.getElementById('result').innerHTML = 'Frase formada por M'    
    }
    if(conditionUpperCase == false && conditionLowerCase == true){
        document.getElementById('result').innerHTML = 'Frase formada por m'  
    }
}
