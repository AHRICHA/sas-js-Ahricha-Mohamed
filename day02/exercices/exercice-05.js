/**
 * ─────────────────────────────────────────────────────────────
 * JOUR 02 · EXERCICE 05 · NIVEAU 1 : FONDATIONS (DÉBUTANTS)
 * SAISIE SÉCURISÉE (SIMULATION AVEC DO...WHILE)
 * ─────────────────────────────────────────────────────────────
 *
 * 🎯 MISSION
 * Étant donné let motDePasse = "faux", créez une boucle do...while qui afficherait "Veuillez entrer le mot de passe" et mettez manuellement motDePasse = "secret" à l'intérieur de la boucle au premier passage pour qu'elle s'arrête.
 *
 * 📖 Consigne détaillée : ../03-exercinode day02/exercices/exercice-05.jsces.md#exercice-05
 * ▶️ Commande : 
 */
'use strict';

// 1. Identifie les données nécessaires.
// 2. Écris ta solution sous cette ligne.
let i = "secret"
let motDePasse = "faux"
do{
    console.log("Veuillez entrer le mot de passe")
    motDePasse = "secret"


}
while(motDePasse != i)