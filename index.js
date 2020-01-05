
const before = (players) => {
  let array = []
  for (let i = 0; i < players; i++) {
    array.push(0)
  }
  return array
}

const dice = () => {
  return Math.floor(Math.random() * 6) + 1
}

const speed = (track,count,i) => {
  let arr = track.split('')
  arr[count] = String(i)

  return arr.join('')
}


const start = (players,maps,callback) => {
  if (players > 10 || maps > 90) {
    return console.log('BACA RULES DONG')
  }
  let check = 0
  let count = before(players)
  for (let i = 0; i < players; i++) {
    let track = ' '
    count[i] += callback()
    for (let j = 0; j < maps; j++) {
      if (j === maps - 2) {
        track += '|'
      }
      track += ' '
    }
    
    if (count[i] < maps - 1) {
      console.log(speed(track,count[i],i))
      check += 1
    } else {
      track += `Player ${i} WIN`
      console.log(speed(track,count[i],i))
      continue
    }
    track = ''
    if (check === players) {
      check = 0
      i = -1
      sleep(500)
      clearScreen()
    }
  }
  
}

function sleep(milliseconds) {
    var start = new Date().getTime();
    for (var i = 0; i < 1e7; i++) {
      if ((new Date().getTime() - start) > milliseconds) {
        break;
      }
    }
}

function clearScreen() {
    // Un-comment this line if you have trouble with console.clear();
    // return process.stdout.write('\033c');
    console.clear();
}

const player = Number(process.argv[2])
const map = Number(process.argv[3])

start(player,map,dice)