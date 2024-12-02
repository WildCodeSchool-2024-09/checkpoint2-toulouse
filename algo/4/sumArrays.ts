/*
Écris une fonction avec deux paramètres. Ces paramètres sont des tableaux contenant des nombres **stockés sous forme de chaînes de caractères**.
Ta fonction doit renvoyer **un** tableau, où chaque élément est la somme des éléments des deux arguments correspondants (c'est-à-dire : le premier élément du tableau résultat est égal au premier élément du premier paramètre plus le premier élément du deuxième paramètre) .
Remarque : Si un élément est vide, il doit compter pour 0.
Ex: 
sumArr( ["1", "2", "3"], ["2", "4", "1"] ) should return ["3", "6", "4"]
sumArr( ["2", "7", "3"], ["2", "4", "9"] ) should return ["4", "11", "12"]
sumArr( ["2", "7", "3", "8", "2"], ["2", "4", "9"] ) should return ["4", "11", "12", "8", "2"]
sumArr( ["2", "5", "3"], ["2", "4", "9", "5", "5"] ) should return ["4", "9", "12", "5", "5"]
*/

function sumArr(arrayA: string[], arrayB: string[]): string[] {
  const returnArray = Array<string>(0);
  for (let index = 0; index < Math.max(arrayA.length, arrayB.length); index++) {
    const numA = Number.parseInt(arrayA[index]);
    const numB = Number.parseInt(arrayB[index]);
    if (Number.isNaN(numA)) {
      returnArray.push(numB.toString());
    } else if (Number.isNaN(numB)) {
      returnArray.push(numA.toString());
    } else {
      returnArray.push((numA + numB).toString());
    }
  }
  return returnArray;
}

export default sumArr;
