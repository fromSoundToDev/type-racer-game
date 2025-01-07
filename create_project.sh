#!/bin/bash

# Nom du projet
PROJECT_NAME="type-racer"

# Créer le répertoire principal
mkdir -p $PROJECT_NAME

# Backend
mkdir -p $PROJECT_NAME/backend/{controllers,models,routes,services,utils}
touch $PROJECT_NAME/backend/{app.js,package.json}

# Frontend
mkdir -p $PROJECT_NAME/frontend/{sass/{base,components,layouts},dist/{css,js},src/{components},src/utils}
touch $PROJECT_NAME/frontend/{sass/main.scss,dist/index.html,src/{app.js,utils.js},webpack.config.js,package.json}

# Fichiers globaux
touch $PROJECT_NAME/{README.md,.gitignore}

# Messages pour confirmer la création
echo "Structure du projet '$PROJECT_NAME' créée avec succès !"
