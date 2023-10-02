# phishies

## Node.js aquarium generator module

This module is still in early stages of development, probabilities still need to be tweaked further.

# Getting Started

## Installation

To install for just your project:

```
npm i phishies
```

To install globally:

```
npm i phishies -g
```

## Use in script

```
var phish = require('phish2')
```

# Usage

Currently the only available use is the main aquarium generator, which is invoked by using `phish.aquarium(height, length)`. The output of the aquarium generator is an array with each line as a value

Example `phish.aquarium(5,5) output`:

```
[ '　　　　　', '　🐡　　　', '　　　🐡🐠', '🐙🐡　🦑　', '　　🦀🌿　' ]
```

# Credits

This project was inspired entirely by https://botsin.space/@EmojiAquarium, source code found at https://gitlab.com/JoeSondow/fishies

# License

This module is licensed under the ISC license.