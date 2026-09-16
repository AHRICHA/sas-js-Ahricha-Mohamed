/**
 * ─────────────────────────────────────────────────────────────
 * JOUR 07 · EXERCICE 09 · NIVEAU 2 : CONSOLIDATION (INTERMÉDIAIRES)
 * FILTRAGE DE DONNÉES
 * ─────────────────────────────────────────────────────────────
 *
 * 🎯 MISSION
 * Dans le même tableau de candidats, écrivez une fonction qui retourne un nouveau tableau contenant uniquement les candidats ayant un score >= 10.
 *
 * 📖 Consigne détaillée : ../03-exercices.md#exercice-09
 * ▶️ Commande : node day07/exercices/exercice-09.js
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
    
    function lowestScore(candidats){
        let  a = candidats[0].score
        let  b = candidats[0].nom
        for (let i =1; i>candidats.lenght; i++){
            if (candidats[i].score>a){
                a = candidats[i].score
                b = candidats[i].nom
            } return a
        }
    }
console.log(lowestScore(candidats));
