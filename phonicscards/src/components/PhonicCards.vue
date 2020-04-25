<template>
  <b-row class="text-center">
    <b-container>
      <b-card-group deck class="pb-4">
        <b-card img-src="Apple.png" img-top style="max-width: 20rem;">
          <b-button href="#" variant="primary" @click.prevent="playSound('A.m4a')">A</b-button>
        </b-card>

        <b-card img-src="Balloon.png" img-top style="max-width: 20rem;">
          <b-button href="#" variant="primary">B</b-button>
        </b-card>

        <b-card img-src="Caterpillar.png" img-top style="max-width: 20rem;">
          <b-button href="#" variant="primary">C</b-button>
        </b-card>
      </b-card-group>

      <b-card-group deck>
        <b-card img-src="Dog.png" img-top style="max-width: 20rem;">
          <b-button href="#" variant="primary">D</b-button>
        </b-card>

        <b-card img-src="Egg.png" img-top style="max-width: 20rem;">
          <b-button href="#" variant="primary">E</b-button>
        </b-card>

        <b-card img-src="Fish.png" img-top style="max-width: 20rem;">
          <b-button href="#" variant="primary">F</b-button>
        </b-card>
      </b-card-group>

      <b-card-group deck class="pb-4">
        <b-card img-src="Guitar.png" img-top style="max-width: 20rem;">
          <b-button href="#" variant="primary">G</b-button>
        </b-card>

        <b-card img-src="Hat.png" img-top style="max-width: 20rem;">
          <b-button href="#" variant="primary">H</b-button>
        </b-card>

        <b-card img-src="Igloo.png" img-top style="max-width: 20rem;">
          <b-button href="#" variant="primary">I</b-button>
        </b-card>
      </b-card-group>

      <b-card-group deck>
        <b-card img-src="Jar.png" img-top style="max-width: 20rem;">
          <b-button href="#" variant="primary">J</b-button>
        </b-card>

        <b-card img-src="Key.png" img-top style="max-width: 20rem;">
          <b-button href="#" variant="primary">K</b-button>
        </b-card>

        <b-card img-src="Lamp.png" img-top style="max-width: 20rem;">
          <b-button href="#" variant="primary">L</b-button>
        </b-card>
      </b-card-group>

      <b-card-group deck class="pb-4">
        <b-card img-src="Monkey.png" img-top style="max-width: 20rem;">
          <b-button href="#" variant="primary">M</b-button>
        </b-card>

        <b-card img-src="Nest.png" img-top style="max-width: 20rem;">
          <b-button href="#" variant="primary">N</b-button>
        </b-card>

        <b-card img-src="Octopus.png" img-top style="max-width: 20rem;">
          <b-button href="#" variant="primary">O</b-button>
        </b-card>
      </b-card-group>

      <b-card-group deck>
        <b-card img-src="Pencil.png" img-top style="max-width: 20rem;">
          <b-button href="#" variant="primary">P</b-button>
        </b-card>

        <b-card img-src="Queen.png" img-top style="max-width: 20rem;">
          <b-button href="#" variant="primary">Q</b-button>
        </b-card>

        <b-card img-src="Ring.png" img-top style="max-width: 20rem;">
          <b-button href="#" variant="primary">R</b-button>
        </b-card>
      </b-card-group>

      <b-card-group deck class="pb-4">
        <b-card img-src="Snake.png" img-top style="max-width: 20rem;">
          <b-button href="#" variant="primary">S</b-button>
        </b-card>

        <b-card img-src="Turtle.png" img-top style="max-width: 20rem;">
          <b-button href="#" variant="primary">T</b-button>
        </b-card>

        <b-card img-src="Umbrella.png" img-top style="max-width: 20rem;">
          <b-button href="#" variant="primary">U</b-button>
        </b-card>
      </b-card-group>

      <b-card-group deck>
        <b-card img-src="Vacuum.png" img-top style="max-width: 20rem;">
          <b-button href="#" variant="primary">V</b-button>
        </b-card>

        <b-card img-src="Wagon.png" img-top style="max-width: 20rem;">
          <b-button href="#" variant="primary">W</b-button>
        </b-card>

        <b-card img-src="Box.png" img-top style="max-width: 20rem;">
          <b-button href="#" variant="primary">X</b-button>
        </b-card>
      </b-card-group>

      <b-card-group deck class="pb-4">
        <b-card img-src="Yo-Yo.png" img-top style="max-width: 20rem;">
          <b-button href="#" variant="primary">Y</b-button>
        </b-card>

        <b-card img-src="Zipper.png" img-top style="max-width: 20rem;">
          <b-button href="#" variant="primary">Z</b-button>
        </b-card>
      </b-card-group>
    </b-container>
  </b-row>

  <!-- </div> -->
</template>

<script>
export default {
  name: 'PhonicCards',
  methods: {
    playSound(sound) {
      const audio = new Audio(sound);
      audio.play();
    },
  },
};
</script>
