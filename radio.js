const radio = {
  stations: [
    {
      name: 'power123',
      songs: [
        {
          artist: 'Gil Scott Heron',
          title: 'Peices of a Man'
        },
        {
          artist: 'ACDC',
          title: 'Back in Black'
        }, {
          artist: 'Bjork',
          title: 'Army of Me'
        }, {
          artist: 'Mobb Deep',
          title: 'Drink Away the Pain'
        }
      ]
    },
    {
      name: 'power124',
      songs: [
        {
          artist: 'Silk Sonic',
          title: 'Smoking By the Window'
        },
        {
          artist: 'Stevie Ray Vaughn',
          title: 'Heavens Door'
        }, {
          artist: 'Beyonce',
          title: 'Single Ladies'
        }, {
          artist: 'Black Keys',
          title: 'Gold On the Ceiling'
        }
      ]
    }
  ],
  changeStation() {
    // find random number, use that number to access a station, and then access a song in that station
    let stationIndex = Math.floor(Math.random() * 2)
    return (this.stations[stationIndex]);
  }
}
newStation = radio.changeStation()
// console.log(newStation)
let nextInd = Math.floor(Math.random() * (newStation.songs.length));
console.log(`Now Playing: ${newStation.songs[nextInd].title} by ${newStation.songs[nextInd].artist}`)

/////ANIMALS//////

class Puppy {
  //..that will have name, color, age, and legs properties.
  constructor(name, color, age, legs) {
      this.name = name
      this.color = color
      this.age = age
      this.legs = legs
  }

  //Create different methods for Animal class.
  speak() {
      console.log('whoop')
  }

  rollThai() {
      console.log('roll; wags tail')
  }
}

const pup = new Puppy('Thai', 'brown', 2, 4)

console.log(pup)
pup.speak()
pup.rollThai()