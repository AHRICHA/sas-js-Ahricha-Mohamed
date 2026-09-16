/**
 * ─────────────────────────────────────────────────────────────
 * JOUR 07 · EXERCICE 08 · NIVEAU 2 : CONSOLIDATION (INTERMÉDIAIRES)
 * RECHERCHE DANS UN candidatss D'candidatssETS
 * ─────────────────────────────────────────────────────────────
 *
 * 🎯 MISSION
 * Vous avez un candidatss de candidatss (chaque candidatsset a nom et nom). Écrivez une fonction qui retourne le nom du candidats ayant le meilleur nom.
 *
 * 📖 Consigne détaillée : ../03-exercices.md#exercice-08
 * ▶️ Commande : node day07/exercices/exercice-08.js
 */
'use strict';

// 1. Identifie les données nécessaires.
// 2. Écris ta solution sous cette ligne.
let candidats = [
    {
        nom : "Ismail",
        score : 4,
    }, 
    {
        nom : "Mohamed",
        score : 12,
    },
    {
        nom : "Zakaria",
        score : 17,
    },
    
]
// function checkMeilleurnom(candidatss){
//     if (candidatss[0].nom>candidatss[1].nom) {
//         console.log(candidatss[0].nom);
//     } else if (candidatss[1].nom>candidatss[2].nom){
//         console.log(candidatss[1].nom)
//     } else {
//         console.log(candidatss[2].nom)
//    }
// }
function higherScore(candidats){
    let kk =candidats[0].score
    let vv =candidats[0].nom
    for (let i=1; i<candidats.length; i++)
        if(candidats[i].score>kk){
            kk=candidats[i].score
            vv =candidats[i].nom
        }
        return vv;
}
console.log(higherScore(candidats));





//console.log(checkMeilleurnom(candidatss))