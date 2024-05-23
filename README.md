# Auteur

Daniel Sumbo alias StringerBell69 étudiant en premiere année de BTS SIO à l'Institution Chartreux. 

LinkedIN: 'https://www.linkedin.com/in/daniel-sumbo/'

# Plateforme de gestion d'établissement

Ce projet est une application CRUD faite pour la gestion d'une liste d'établissements, elle utilise Node.js (Express) pour le back et React avec Chakra UI pour le front.

## Le Projet Backend

En partant d'un fichier Mock Data il fallait créer des routes api permettant de réaliser un CRUD mais aussi d'obtenir tous les commerces d’un secteur d’activité donné,
d’une ville donnée et d’un secteur d’activité dans une ville donnée.

Deplus que supprimer tous les établissements d’une ville et d’un secteur d’activité.

Ces routes et ses contrôleurs sont observables dans les fichiers :
```
├── backend
│ ├── controllers
│ │ └── etab.controller.js
│ ├── routes
│ │ └── etab.routes.js
```
## Le Projet Frontend

L'objectif ici était d'utiliser la bibliothèque Chakra UI pour créer un atome 'Table' qui permet d’afficher les données traitées par le BackEnd ainsi que lier des Icon Button Trash à l'api permettant de supprimer la ligne sélectionné.




### Installation Backend

1. Aller dans le fichier backend en utilisant un terminal et ayant node.js installé puis rentrer la commande suivante:

 ```npm install fs path express cors nodemom```

2. Démarrer le serveur:

```npm start```

### API Endpoints

- **GET /etab**:                                            Récupérer tous les établissements.
- **GET /etab/:id**:                                        Récupérer un établissement avec son ID.
- **GET /etab/ville/:location**:                            Récupérer les établissements par lieu.
- **GET /etab/type/:etablissement_type**:                   Récupérer les établissements par type.
- **GET /etab/type/:etablissement_type/ville/:location**:   Récupérer les établissements par type et lieu.
- **POST /etab**:                                           Créer un nouvel établissement.
- **PUT /etab/:id**:                                        Mettre à jour un établissement avec son ID.
- **DELETE /etab/:id**:                                     Supprimer un établissement avec son ID.
- **DELETE /etab/ville/:location**:                         Supprimer les établissements par lieu.
- **DELETE /etab/type/:etablissement_type**:                Supprimer les établissements par type.





## Installation Frontend



1. Aller dans le fichier KL en utilisant un terminal et ayant node.js installé puis rentrer la commande suivante:

```yarn add @chakra-ui/react @fortawesome/react-fontawesome @fortawesome/free-solid-svg-icons react react-dom react-scripts```

2. Démarer le serveur Front:

```yarn start```

### Components

- **Table.js**: Affiche une liste d'établissment sous forme de tableau.

### Contexts

- **DataContext.js**: Fournit les données et des fonctions pour gérer les établissements dans l’application.


## Data

La data est stockée dans un fichier `MOCK_DATA.json` qui se situe à la racine du projet.
```
├── KOLUS-PROJECT
│ ├── backend
│ ├── KL
│ ├── MOCK_DATA.json 
```

Le fichier est téléchargeable ici : 'https://drive.google.com/file/d/199W_uOCcgTIAKw13M3GSnyat1zQRV1TW/view?usp=sharing'

Les données sont de la forme suivante : 


    "id": 5,
    "etablissement_type": "Music",
    "etablissement": "First Financial Corporation Indiana",
    "location": "Masis",
    "address": "7 Longview Junction",
    "mail": "nwickwar4@tiny.cc"


    




### Comment Utiliser ? 

1. Démarer le serveur BackEnd.

Avec un terminal aller dans le dossier backend puis :

```npm start```

2. Démarer le serveur FrontEnd.

Avec un terminal aller dans le dossier KL puis :

```yarn start```

3. Ouvrir un navigateur et rentrer `http://localhost:3000`

4. Utiliser l'interface et ses fonctionnalités 

# Auteur

Daniel Sumbo alias StringerBell69 étudiant en premiere année de BTS SIO à l'Institution Chartreux. 

LinkedIN: 'https://www.linkedin.com/in/daniel-sumbo/'

## Licences

Le code source de ce dépôt est publié sous [licence MIT](https://github.com/DISIC/design.numerique.gouv.fr/blob/master/LICENSE.md).

Sauf mention de propriété intellectuelle détenue par des tiers (notamment un crédit sur certaines images), les contenus de ce dépôt sont publiés sous [licence Ouverte 2.0](https://github.com/DISIC/design.numerique.gouv.fr/blob/master/LICENSE.md#licence-ouverte-20open-licence-20).

