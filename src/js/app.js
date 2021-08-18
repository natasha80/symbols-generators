/* eslint-disable linebreak-style */
/* eslint-disable no-restricted-syntax */
/* eslint-disable eol-last */
/* eslint-disable linebreak-style */
export default class Team {
  constructor() {
    this.members = [
      {
        name: 'Лучник1',
        type: 'Bowman',
        health: 50,
        level: 1,
        attack: 40,
        defence: 10,
      },
      {
        name: 'Лучник2',
        type: 'Bowman',
        health: 50,
        level: 1,
        attack: 40,
        defence: 10,
      },
    ];
  }

  * [Symbol.iterator]() {
    for (const person of this.members) yield person;
  }
}