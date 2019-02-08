var health = 100

function thundershock() {
  health = health - 5
  if (health < 1) {
    health = 0
    document.getElementById("textresponse").innerText = `> VULPIX has fainted!`
  } else {
    document.getElementById("textresponse").innerText = `> PIKACHU used THUNDERSHOCK!`
  }
  draw()
}

function quickAttack() {
  health = health - 10
  if (health < 1) {
    health = 0
    document.getElementById("textresponse").innerText = `> VULPIX has fainted!`
  } else {
    document.getElementById("textresponse").innerText = `> PIKACHU used QUICK ATTACK!`
  }
  draw()
}

function thunderbolt() {
  health = health - 20
  if (health < 1) {
    health = 0
    document.getElementById("textresponse").innerText = `> VULPIX has fainted!`
  } else {
    document.getElementById("textresponse").innerText = `> PIKACHU used THUNDERBOLT!`
  }
  draw()
}

function pokeball() {
  if (health <= 25) {
    document.getElementById("vulpimg").src = '/pokeball-sprite.png'
    document.getElementById("textresponse").innerText = `> VULPIX has been caught!`
  } else {
    document.getElementById("textresponse").innerText = `> VULPIX is still too strong!`
  }
  draw()
}

function draw() {
  document.getElementById("vulpixHP").innerText = `HP: ${health}/100`
  document.getElementById("enemyhealth").style = `width: ${health}%`
}


function reset() {
  health = 100
  document.getElementById("textresponse").innerText = `> `
  document.getElementById("vulpimg").src = '/vulpix-sprite.png'
  draw()
}