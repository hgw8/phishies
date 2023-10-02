//              __    _      __  
//       ____  / /_  (_)____/ /_ 
//      / __ \/ __ \/ / ___/ __ \
//     / /_/ / / / / (__  ) / / /
//    / .___/_/ /_/_/____/_/ /_/ 
//   /_/            
//
// https://git.supernets.org/hgw/phish
// Aquarium generator - ANOTHER SUPERNETS BANGER
// Inspired by https://botsin.space/@EmojiAquarium

var fish_types = ["🐟", "🐡", "🐠"]
var rare_swimmer_types = ["🐙", "🐬", "🦑", "🦈"]
var plant_types = ["🌱", "🌾", "🌿"]
var rare_bottom_dwellers = ["🪨", "🐌", "🏰", "🦀", "🐚", "⚓️", "☘️"]
var exceedingly_rare_junk = ["🎱", "🎲", "🎮", "🗿","🔱", "🎷", "🗽", "💎", "💰", "🔔", "💀", "💩"]

function aquarium(height, width) {
    aquariumArray = []
    if (height == undefined) {
        height == 5
    }
    if (width == undefined) {
        width = 6
    }
    for(let i = 0; i < height; i++) {
        lineArr = []
        if (i != height-1) {
            for(let i = 0; i < width; i++) {
                if (Math.random()*100<13) {
                    lineArr.push(fish_types[Math.floor(Math.random()*fish_types.length)])
                } else if (Math.random()*100<3) {
                    lineArr.push(rare_swimmer_types[Math.floor(Math.random()*rare_swimmer_types.length)])
                } else {
                    lineArr.push('　')
                }
            }
        }
        if (i == height-1) {
            for(let i = 0; i < width; i++) {
                if (Math.random()*100<30) {
                    lineArr.push(plant_types[Math.floor(Math.random()*plant_types.length)])
                } else if (Math.random()*100<20) {
                    lineArr.push(rare_bottom_dwellers[Math.floor(Math.random()*rare_bottom_dwellers.length)])
                } else if (Math.random()*100<1) {
                    lineArr.push(exceedingly_rare_junk[Math.floor(Math.random()*exceedingly_rare_junk.length)])
                } else {
                    lineArr.push('　')
                }
            }
        }
        aquariumArray.push(lineArr.join(''))
    }
    return aquariumArray
}

module.exports = { aquarium }