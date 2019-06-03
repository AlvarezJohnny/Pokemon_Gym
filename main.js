let dex = []
function loadDoc(mon, trainer) {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      pokemonData = JSON.parse(this.responseText)
      pokemon = new Pokemon(
      pokemonData["name"],
      pokemonData["id"],
      pokemonData["stats"][5]["base_stat"],
      pokemonData["stats"][4]["base_stat"],
      pokemonData["stats"][3]["base_stat"],
      pokemonData["stats"][2]["base_stat"],
      pokemonData["stats"][1]["base_stat"],
      pokemonData["stats"][0]["base_stat"],
      pokemonData['abilities'][0]['ability'],
      pokemonData['abilities'][1]['ability'],
      `https://www.smogon.com/dex/media/sprites/xy/${pokemonData["name"]}.gif`
    )
    trainer.dex.push(pokemon)
    displayPokemon(trainer.name)
    }
  };
  xhttp.open("GET", `https://pokeapi.co/api/v2/pokemon/${mon}`, true);
  xhttp.send();
}

class Trainer {
  constructor(name){
    this.name = name
    this.dex = []
  }
  get(name) {

  }
  all() {
    console.log(this.dex)
  }
}

morgan = new Trainer("Morgan")
omar = new Trainer("Omar")
jonathan = new Trainer("Jonathan")


// loadDoc(26)
// loadDoc(172)
// loadDoc(78)
// loadDoc(7)
// loadDoc(16)
// loadDoc(19)
// loadDoc(157)
// loadDoc(248)
// loadDoc(445)
jonathan.dex.push(dex[0])
morgan.dex.push(dex[0])
omar.dex.push(dex[0])

class Pokemon {
  constructor(name, id, hp, atk, def, spAtk, spDef, spd, ability, ability2, image) {
    this.name = name
    this.id = id
    this.hp = hp
    this.atk = atk
    this.def = def
    this.spAtk = spAtk
    this.spDef = spDef
    this.spd = spd
    this.ability = ability
    this.ability2 = ability2
    this.image = image
  }

}


  let h1 = document.createElement('h1')
  let p1 = document.createElement('p')
  let p2 = document.createElement('p')
  let p3 = document.createElement('p')
  let p4 = document.createElement('p')
  let p5 = document.createElement('p')
  let p6 = document.createElement('p')
  let p7 = document.createElement('p')
  let p8 = document.createElement('p')
  let p9 = document.createElement('p')
  let img1 = document.createElement('img')

 function displayPokemon(trainer) {
let container = document.getElementById(trainer)
  h1.innerText = pokemonData['name']
  p1.innerText = 'ID: ' + pokemonData["id"]
  p2.innerText = 'Hp: ' + pokemonData["stats"][5]["base_stat"]
  p3.innerText = 'Atk: ' + pokemonData["stats"][4]["base_stat"]
  p4.innerText = 'Def: ' + pokemonData["stats"][3]["base_stat"]
  p5.innerText = 'SPAtk: ' + pokemonData["stats"][2]["base_stat"]
  p6.innerText = 'SPDef: ' + pokemonData["stats"][1]["base_stat"]
  p7.innerText = 'Speed: ' + pokemonData["stats"][0]["base_stat"]
  p8.innerText = 'Ability: ' + pokemonData["abilities"][0]["ability"]['name']
  p9.innerText = 'DW Ability: ' + pokemonData["abilities"][1]["ability"]['name']
  img1.setAttribute('src', `https://www.smogon.com/dex/media/sprites/xy/${pokemonData["name"]}.gif`)
  container.appendChild(h1)
   container.appendChild(p1)
   container.appendChild(p2)
   container.appendChild(p3)
   container.appendChild(p4)
   container.appendChild(p5)
   container.appendChild(p6)
   container.appendChild(p7)
   container.appendChild(p8)
   container.appendChild(p9)
   container.appendChild(img1)
   document.body.appendChild()
}
