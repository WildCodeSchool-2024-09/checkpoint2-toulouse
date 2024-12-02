/*
Créé une fonction getFibonacciSequence qui prend un nombre n en paramètre et retourne un tableau contenant les n premiers nombres de la suite de Fibonacci.

Détails

* La suite de Fibonacci commence par les nombres 0 et 1.
* Chaque nombre suivant est la somme des deux nombres précédents.
* Par exemple, pour n = 5, la fonction devrait retourner [0, 1, 1, 2, 3].

Si n est inférieur ou égal à 0, la fonction doit retourner un tableau vide []
*/

function getFibonacciSequence(size: number): number[] {
  // Your code here !
  let array = [0, 1];
  if (size > 2) {
    let dernier = 0;
    let avantdernier = 0;

    dernier = 0;
    avantdernier = 0;
    for (let i = 0; i <= size - 3; i++) {
      dernier = array[array.length - 1];
      avantdernier = array[array.length - 2];

      array.push(dernier + avantdernier);
    }
  } else if (size === 1) {
    array = [0];
  } else if (size === 2) {
    array = [0, 1];
  } else {
    array = [];
  }

  return array;
}

export default getFibonacciSequence;
