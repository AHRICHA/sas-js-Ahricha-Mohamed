/**
 * ─────────────────────────────────────────────────────────────
 * JOUR 07 · EXERCICE 11 · NIVEAU 2 : CONSOLIDATION (INTERMÉDIAIRES)
 * CLONAGE SIMPLE (SPREAD OPERATOR)
 * ─────────────────────────────────────────────────────────────
 *
 * 🎯 MISSION
 * Créez un objet original = { a: 1, b: 2 }. Utilisez la syntaxe "spread" (...) pour créer une copie copie qui n'est pas une référence, puis ajoutez c: 3 à la copie sans modifier l'original.
 *
 * 📖 Consigne détaillée : ../03-exercices.md#exercice-11
 * ▶️ Commande : node day07/exercices/exercice-11.js
 */
'use strict';

// 1. Identifie les données nécessaires.
// 2. Écris ta solution sous cette ligne.
let obj = {
    a : 1,
    b : 2,
    c: {
        age: 55,
    
    }
   
}

/* Object.freeze(obj)

obj.c.age=1111;
obj.c.d = 75

console.log(obj);
 */


let copyobj = {...obj}
copyobj.c.age=18;
copyobj.a=1111;

console.log(copyobj);
console.log(obj)
 

