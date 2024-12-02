/*
Notre équipe de football participe à un tournoi dans lequel elle a joué 10 matchs.
Les résultats du match sont notés "3:0" : le premier chiffre est le nombre de buts de **notre** équipe ; le second est celui de l'autre équipe.
Pour connaître le score de notre équipe, nous suivons ces règles :
- Victoire : 3pts
- Nul : 1pt
- Défaite : 0pt
Étant donné un tableau avec les résultats des matchs, écris une fonction qui renverra notre score.
Pour exemple, si ta fonction recevait le tableau ci-dessous en paramètre, tu devrais obtenir 13 points.
["1:0", "2:0", "3:0", "4:4", "2:2", "3:3", "1:4", "2:3", "2:4", "3:3"]
*/

function getPoints(results: string[]): number {
  let globalScore = 0;
  for (const result of results) {
    const index = result.indexOf(":");
    if (index === -1) {
      continue;
    }

    const pointsUs = result.substring(0, index);
    const pointsThem = result.substring(index + 1);
    let score = 0;
    if (pointsUs > pointsThem) {
      score = 3;
    } else if (pointsUs === pointsThem) {
      score = 1;
    }
    globalScore += score;
  }

  return globalScore;
}

export default getPoints;
