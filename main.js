let dex = []
function loadDoc(mon) {
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
    dex.push(pokemon)
    displayPokemon()
    }
  };
  xhttp.open("GET", `https://pokeapi.co/api/v2/pokemon/${mon}`, true);
  xhttp.send();
}


// loadDoc(26)
// loadDoc(172)
// loadDoc(78)
// loadDoc(7)
// loadDoc(16)
// loadDoc(19)
// loadDoc(157)
// loadDoc(248)
// loadDoc(445)

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

let cont = document.getElementById('Typhlosion')
  let p = document.createElement('p')
  let p1 = document.createElement('p1')
  let p2 = document.createElement('p2')
  let p3 = document.createElement('p3')
  let p4 = document.createElement('p4')
  let p5 = document.createElement('p5')
  let p6 = document.createElement('p6')
  let p7 = document.createElement('p7')
  let p8 = document.createElement('p8')
  let p9 = document.createElement('p9')
  let img1 = document.createElement('img')

 function displayPokemon() {
  p.innerText = pokemonData['name']
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
  cont.appendChild(p)
   cont.appendChild(p1)
   cont.appendChild(p2)
   cont.appendChild(p3)
   cont.appendChild(p4)
   cont.appendChild(p5)
   cont.appendChild(p6)
   cont.appendChild(p7)
   cont.appendChild(p8)
   cont.appendChild(p9)
   cont.appendChild(img1)
   document.body.appendChild(cont)

}

