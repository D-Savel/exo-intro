let char = 'A'//Choix du caractère à imprimer
for (let index = 1; index < 9; index++) {
  console.log(char.repeat(index) + ' '.repeat(16 - 2 * index) + char.repeat(index))
}