VOICI L'EXECUTION EN LOCAL

##

- Clonez le dépôt distant : `git clone https://github.com/enzo-mir/todo_blanks.git`
- Se situer dans le dossier "todo_blanks" : `cd todo_blanks`
- Installez les dépendances :`pnpm i`
- Configurez le mode de connexion à la base de données : `node ace configure @adonisjs/lucid`
- Choisir le moteur de base de données `SQLlite`
- Migrez le schéma de la base de données situé dans ~/database/migrations/1696524844429_todo_blanks.ts : `node ace migration:run`
- Lancez le serveur : `pnpm run dev`
- Ouvrir un onglet de naviguation à l'Url : (http://127.0.0.1:3333) 

APPLICATION

##

- Modèle : SQLlite
- Vue : Adonisjs/edge
- contrôleur : Andonisjs