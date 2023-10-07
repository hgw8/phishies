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

// Emoji fish
var fish_types = ["🐟", "🐡", "🐠"]
var rare_swimmer_types = ["🐙", "🐬", "🦑", "🦈"]
var plant_types = ["🌱", "🌾", "🌿"]
var rare_bottom_dwellers = ["🪨", "🐌", "🏰", "🦀", "🐚", "⚓️", "☘️"]
var exceedingly_rare_junk = ["🎱", "🎲", "🎮", "🗿", "🎷", "💎", "💰", "🔔", "💀", "💩"]
var super_exceedingly_rare_junk = ["🗽", "🔱", "🛳️"]
var bubbles = ["🫧"]

// Non-emoji fish
var n_fish_types = ["𓆝", "𓆟", "𓆞", "𓆜"]
var n_rare_swimmer_types = ["𓇼", "𓆡", "𓆉︎", "𓆛"]
var n_plant_types = ["𓆸", "𓋼", "𖥧", "𓇗", "𓇣"]
var n_rare_bottom_dwellers = ["𓆑", "𓆨"]
var n_exceedingly_rare_junk = []
var n_super_exceedingly_rare_junk = ["𓀐𓂸", "𓃶", "𓃱", "✈"]
var n_bubbles = ["°ﾟ", "º", "｡"]

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
        var heightLine = i
        if (i != height-1) {
            for(let i = 0; i < width; i++) {
                if ([0,1].includes(heightLine) && Math.random()*100<7) {
                    lineArr.push(bubbles[Math.floor(Math.random()*bubbles.length)])
                } else if (Math.random()*100<10) {
                    lineArr.push(fish_types[Math.floor(Math.random()*fish_types.length)])
                } else if (Math.random()*100<2) {
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
                } else if (Math.random()*100<2) {
                    lineArr.push(rare_bottom_dwellers[Math.floor(Math.random()*rare_bottom_dwellers.length)])
                } else if (Math.random()*100<0.5) {
                    lineArr.push(exceedingly_rare_junk[Math.floor(Math.random()*exceedingly_rare_junk.length)])
                } else if (Math.random()*100<0.25) {
                    lineArr.push(super_exceedingly_rare_junk[Math.floor(Math.random()*super_exceedingly_rare_junk.length)])
                } else {
                    lineArr.push('　')
                }
            }
        }
        aquariumArray.push(lineArr.join(''))
    }
    return aquariumArray
}

function aquarium_sym(height, width) {
    aquariumArray = []
    if (height == undefined) {
        height == 5
    }
    if (width == undefined) {
        width = 6
    }
    for(let i = 0; i < height; i++) {
        lineArr = []
        var heightLine = i
        if (i != height-1) {
            for(let i = 0; i < width; i++) {
                if ([0,1].includes(heightLine) && Math.random()*100<7) {
                    lineArr.push(n_bubbles[Math.floor(Math.random()*n_bubbles.length)])
                } else if (Math.random()*100<10) {
                    lineArr.push(n_fish_types[Math.floor(Math.random()*n_fish_types.length)])
                } else if (Math.random()*100<2) {
                    lineArr.push(n_rare_swimmer_types[Math.floor(Math.random()*n_rare_swimmer_types.length)])
                } else {
                    lineArr.push('　')
                }
            }
        }
        if (i == height-1) {
            for(let i = 0; i < width; i++) {
                if (Math.random()*100<30) {
                    lineArr.push(n_plant_types[Math.floor(Math.random()*n_plant_types.length)])
                } else if (Math.random()*100<2) {
                    lineArr.push(n_rare_bottom_dwellers[Math.floor(Math.random()*n_rare_bottom_dwellers.length)])
                } else if (Math.random()*100<0.5) {
                    lineArr.push(n_exceedingly_rare_junk[Math.floor(Math.random()*n_exceedingly_rare_junk.length)])
                } else if (Math.random()*100<0.25) {
                    lineArr.push(n_super_exceedingly_rare_junk[Math.floor(Math.random()*n_super_exceedingly_rare_junk.length)])
                } else {
                    lineArr.push('　')
                }
            }
        }
        aquariumArray.push(lineArr.join(''))
    }
    return aquariumArray
}

module.exports = { 
    aquarium,
    aquarium_sym
}