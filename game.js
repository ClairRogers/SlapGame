

var health = 100
var myHealth = 100


function enemyReact() {
  setTimeout(function () {
    myHealth = myHealth - 20
    document.getElementById("textresponse").innerText = `> VULPIX used EMBER!`
    draw()
  }, 1500);
  setTimeout(function () {
    document.getElementById("textresponse").innerText = `> `
    document.getElementById("controls").style.pointerEvents = 'all'
  }, 3000);
}


function thundershock() {
  health = health - 5
  if (health < 1) {
    health = 0
    document.getElementById("textresponse").innerText = `> VULPIX has fainted!`
  } else {
    document.getElementById("textresponse").innerText = `> PIKACHU used THUNDERSHOCK!`
    document.getElementById("controls").style.pointerEvents = 'none'
  }
  enemyReact()
  draw()
}


function quickAttack() {
  health = health - 10
  if (health < 1) {
    health = 0
    document.getElementById("textresponse").innerText = `> VULPIX has fainted!`
  } else {
    document.getElementById("textresponse").innerText = `> PIKACHU used QUICK ATTACK!`
    document.getElementById("controls").style.pointerEvents = 'none'
  }
  enemyReact()
  draw()
}

function thunderbolt() {
  health = health - 20
  if (health < 1) {
    health = 0
    document.getElementById("textresponse").innerText = `> VULPIX has fainted!`
  } else {
    document.getElementById("textresponse").innerText = `> PIKACHU used THUNDERBOLT!`
    document.getElementById("controls").style.pointerEvents = 'none'
  }
  enemyReact()
  draw()
}

function pokeball() {
  if (health <= 25) {
    document.getElementById("vulpimg").src = '/pokeball-sprite.png'
    document.getElementById("controls").style.pointerEvents = 'none'
    document.getElementById("textresponse").innerText = `> VULPIX has been caught!`
  } else {
    document.getElementById("textresponse").innerText = `> VULPIX is still too strong!`
    enemyReact()
  }
  draw()
}

function potion() {
  myHealth = myHealth + 30
  if (myHealth >= 100) {
    myHealth = 100
  }
  enemyReact()
  draw()
}


function draw() {
  document.getElementById("vulpixHP").innerText = `HP: ${health}/100`
  document.getElementById("enemyhealth").style = `width: ${health}%`
  document.getElementById("pikaHP").innerText = `HP: ${myHealth}/100`
  document.getElementById("myhealth").style = `width: ${myHealth}%`
}


function reset() {
  health = 100
  myHealth = 100
  document.getElementById("textresponse").innerText = `> `
  document.getElementById("vulpimg").src = '/vulpix-sprite.png'
  document.getElementById("controls").style.pointerEvents = 'all'
  draw()
}