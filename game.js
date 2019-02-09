

var health = 100
var myHealth = 100
var atkPwr = 1


function enemyReact() {
  setTimeout(function () {
    myHealth = myHealth - 20
    damageSound()
    if (myHealth <= 0) {
      myHealth = 0
      document.getElementById("textresponse").innerText = `> PIKACHU has fainted!`
      draw()
    } else {
      document.getElementById("textresponse").innerText = `> VULPIX used EMBER!`
      setTimeout(function () {
        document.getElementById("textresponse").innerText = `> `
        document.getElementById("controls").style.pointerEvents = 'all'
      }, 1500);
      draw()
    }
  }, 1500);
}


function thundershock() {
  if (atkPwr == 1) {
    health = health - 5
    damageSound()
  } else if (atkPwr == 2) {
    health = health - 7
    damageSound()
  } else if (atkPwr == 3) {
    health = health - 9
    damageSound()
  }
  if (health < 1) {
    health = 0
    document.getElementById("textresponse").innerText = `> VULPIX has fainted!`
    document.getElementById("controls").style.pointerEvents = 'none'
  } else {
    document.getElementById("textresponse").innerText = `> PIKACHU used THUNDERSHOCK!`
    document.getElementById("controls").style.pointerEvents = 'none'
    enemyReact()
  }
  draw()
}


function quickAttack() {
  if (atkPwr == 1) {
    health = health - 10
    damageSound()
  } else if (atkPwr == 2) {
    health = health - 14
    damageSound()
  } else if (atkPwr == 3) {
    health = health - 18
    damageSound()
  }
  if (health < 1) {
    health = 0
    document.getElementById("textresponse").innerText = `> VULPIX has fainted!`
    document.getElementById("controls").style.pointerEvents = 'none'
  } else {
    document.getElementById("textresponse").innerText = `> PIKACHU used QUICK ATTACK!`
    document.getElementById("controls").style.pointerEvents = 'none'
    enemyReact()
  }
  draw()
}

function thunderbolt() {
  if (atkPwr == 1) {
    health = health - 20
    damageSound()
  } else if (atkPwr == 2) {
    health = health - 30
    damageSound()
  } else if (atkPwr == 3) {
    health = health - 40
    damageSound()
  }
  if (health < 1) {
    health = 0
    document.getElementById("textresponse").innerText = `> VULPIX has fainted!`
    document.getElementById("controls").style.pointerEvents = 'none'
  } else {
    document.getElementById("textresponse").innerText = `> PIKACHU used THUNDERBOLT!`
    document.getElementById("controls").style.pointerEvents = 'none'
    enemyReact()
  }
  draw()
}

function pokeball() {
  if (health <= 25) {
    document.getElementById("vulpimg").src = 'pokeball-sprite.png'
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
  document.getElementById("textresponse").innerText = `> POTION restored 30 HP!`
  if (myHealth >= 100) {
    myHealth = 100
  }
  enemyReact()
  draw()
}

function fullRestore() {
  myHealth = 100
  document.getElementById("textresponse").innerText = `> FULL RESTORE restored HP!`
  enemyReact()
  draw()
}

function candy() {
  if (atkPwr < 3) {
    atkPwr++
    document.getElementById("textresponse").innerText = `> PIKACHU's ATTACK rose!`
  } else {
    document.getElementById("textresponse").innerText = `> PIKACHU's ATTACK cannot go higher!`
  }
  enemyReact()
  draw()
}

function damageSound() {
  var sound = document.getElementById("damage");
  sound.play()
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
  atkPwr = 1
  document.getElementById("textresponse").innerText = `> `
  document.getElementById("vulpimg").src = 'vulpix-sprite.png'
  document.getElementById("controls").style.pointerEvents = 'all'
  draw()
}