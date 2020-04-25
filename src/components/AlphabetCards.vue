<template>
  <b-container>
    <b-row v-for="row in rows" :key="row[0].letter">
      <b-card-group deck class=" pb-4 mx-auto" v-for="letter in row" :key="letter.letter">
        <!-- <b-card-group> -->
        <b-card img-top style="max-width: 15rem;" :img-src="letter.image">
          <b-card-title>
            <b-button href="#" variant="success" @click.prevent="playSound(letter.sound)"
              ><H2>{{ letter.letter }}</H2></b-button
            >
          </b-card-title>
        </b-card>
      </b-card-group>
    </b-row>
  </b-container>
</template>

<script>
export default {
  name: 'AlphabetCards',

  data() {
    return {
      rows: this.getAlphabetRows(),
    };
  },

  methods: {
    playSound(sound) {
      const audio = new Audio(sound);
      audio.play();
    },

    getAlphabet() {
      return [
        {
          letter: 'A',
          image: 'Apple.png',
          sound: 'A.m4a',
        },
        {
          letter: 'B',
          image: 'Balloon.png',
          sound: 'A.m4a',
        },
        {
          letter: 'C',
          image: 'Caterpillar.png',
          sound: 'A.m4a',
        },
        {
          letter: 'D',
          image: 'Dog.png',
          sound: 'A.m4a',
        },
        {
          letter: 'E',
          image: 'Egg.png',
          sound: 'A.m4a',
        },
        {
          letter: 'F',
          image: 'Fish.png',
          sound: 'A.m4a',
        },
        {
          letter: 'G',
          image: 'Guitar.png',
          sound: 'A.m4a',
        },
        {
          letter: 'H',
          image: 'Hat.png',
          sound: 'A.m4a',
        },
        {
          letter: 'I',
          image: 'Igloo.png',
          sound: 'A.m4a',
        },
        {
          letter: 'J',
          image: 'Jar.png',
          sound: 'A.m4a',
        },
        {
          letter: 'K',
          image: 'Key.png',
          sound: 'A.m4a',
        },
        {
          letter: 'L',
          image: 'Lamp.png',
          sound: 'A.m4a',
        },
        {
          letter: 'M',
          image: 'Monkey.png',
          sound: 'A.m4a',
        },
        {
          letter: 'N',
          image: 'Nest.png',
          sound: 'A.m4a',
        },
        {
          letter: 'O',
          image: 'Octopus.png',
          sound: 'A.m4a',
        },
        {
          letter: 'P',
          image: 'Pencil.png',
          sound: 'A.m4a',
        },
        {
          letter: 'Q',
          image: 'Queen.png',
          sound: 'A.m4a',
        },
        {
          letter: 'R',
          image: 'Ring.png',
          sound: 'A.m4a',
        },
        {
          letter: 'S',
          image: 'Snake.png',
          sound: 'A.m4a',
        },
        {
          letter: 'T',
          image: 'Turtle.png',
          sound: 'A.m4a',
        },
        {
          letter: 'U',
          image: 'Umbrella.png',
          sound: 'A.m4a',
        },
        {
          letter: 'V',
          image: 'Vacuum.png',
          sound: 'A.m4a',
        },
        {
          letter: 'W',
          image: 'Wagon.png',
          sound: 'A.m4a',
        },
        {
          letter: 'X',
          image: 'Box.png',
          sound: 'A.m4a',
        },
        {
          letter: 'Y',
          image: 'Yo-Yo.png',
          sound: 'A.m4a',
        },
        {
          letter: 'Z',
          image: 'Zipper.png',
          sound: 'A.m4a',
        },
      ];
    },

    getAlphabetRows() {
      const rows = [];
      const itemsPerRow = 3;
      const alphabet = this.getAlphabet();
      for (let i = 0; i < alphabet.length; i += itemsPerRow) {
        const row = [];
        for (let j = 0; j < itemsPerRow; j += 1) {
          if (i + j < alphabet.length) row.push(alphabet[i + j]);
        }
        rows.push(row);
      }
      return rows;
    },
  },
};
</script>
