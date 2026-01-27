# Guide pour partager l'offre d'emploi sur Facebook

## ✅ Ce qui a été implémenté

### Meta tags Open Graph
Tous les meta tags nécessaires pour un bon affichage sur Facebook ont été ajoutés :

- ✅ `og:title` - Titre de la page
- ✅ `og:description` - Description
- ✅ `og:image` - Image de prévisualisation (1200x630px)
- ✅ `og:url` - URL de la page
- ✅ `og:type` - Type de contenu (article pour l'offre d'emploi)
- ✅ `og:site_name` - Nom du site
- ✅ `og:locale` - Langue (fr_CA)

### Meta tags Twitter Card
Pour un bon affichage sur Twitter/X également :

- ✅ `twitter:card` - Type de carte (summary_large_image)
- ✅ `twitter:title` - Titre
- ✅ `twitter:description` - Description
- ✅ `twitter:image` - Image

## 📋 Comment tester avant de déployer

### 1. Déployer sur GitHub Pages

```bash
git add .
git commit -m "feat: Ajout des meta tags Open Graph pour partage sur réseaux sociaux"
git push origin master
```

Attendez quelques minutes que GitHub Pages déploie les changements.

### 2. Tester avec Facebook Sharing Debugger

1. Allez sur : https://developers.facebook.com/tools/debug/
2. Entrez l'URL : `https://velosaguenay.github.io/#/emploi`
3. Cliquez sur "Debug" ou "Déboguer"
4. Vérifiez que :
   - ✅ Le titre s'affiche : "🎯 Offre d'emploi - Directeur(trice) des opérations ski et vélo | Vélo Saguenay"
   - ✅ La description est complète
   - ✅ L'image s'affiche (og-emploi.jpg)
   - ✅ Pas d'erreurs ou d'avertissements

5. Si c'est la première fois, cliquez sur "Scrape Again" pour forcer Facebook à récupérer les nouvelles données

### 3. Tester avec d'autres outils

**LinkedIn Post Inspector:**
- URL : https://www.linkedin.com/post-inspector/
- Testez : `https://velosaguenay.github.io/#/emploi`

**Twitter Card Validator:**
- URL : https://cards-dev.twitter.com/validator
- Testez : `https://velosaguenay.github.io/#/emploi`

## 📱 Comment partager sur Facebook

### Option 1 : Partage direct
1. Allez sur Facebook
2. Créez un nouveau post
3. Collez l'URL : `https://velosaguenay.github.io/#/emploi`
4. Facebook va automatiquement charger la prévisualisation avec :
   - L'image
   - Le titre
   - La description
5. Ajoutez votre texte d'accompagnement
6. Publiez!

### Option 2 : Bouton de partage
Vous pouvez créer un lien de partage direct :
```
https://www.facebook.com/sharer/sharer.php?u=https://velosaguenay.github.io/%23/emploi
```

### Exemple de texte d'accompagnement

```
🎯 NOUS EMBAUCHONS! 

Vélo Saguenay est à la recherche d'un(e) Directeur(trice) des opérations ski et vélo pour Le Panoramique et le Mont-Bélu Véloparc.

✅ Poste permanent à l'année
✅ Travail terrain et gestion d'équipe
✅ Accès gratuit aux activités pour vous et votre famille
✅ Fonds de pension

Si tu es passionné(e) par les sports de montagne et que tu veux contribuer au développement de nos infrastructures, cette opportunité est pour toi!

📧 Envoie ta candidature à : Fred.belu@live.ca

#VeloSaguenay #Emploi #Saguenay #VeloDeMontagne #Carriere
```

## 🎨 Améliorer l'image Open Graph (recommandé)

Les images actuelles (`og-image.jpg` et `og-emploi.jpg`) sont des copies temporaires.

Pour un meilleur impact visuel, créez une image personnalisée :

### Spécifications
- **Dimensions** : 1200 x 630 pixels
- **Format** : JPG ou PNG
- **Poids** : < 1 MB

### Contenu suggéré pour og-emploi.jpg
```
[Photo de sentiers en arrière-plan avec overlay sombre]

🎯 NOUS EMBAUCHONS!

Directeur(trice) des opérations 
ski et vélo

✓ Poste permanent
✓ Saguenay, Québec

VÉLO SAGUENAY
```

### Outils recommandés
- **Canva** : https://www.canva.com/ (gratuit, facile)
- **Figma** : https://www.figma.com/ (gratuit)
- **Photoshop** ou **GIMP**

Voir le fichier `public/OG_IMAGE_GUIDE.md` pour plus de détails.

## 🔍 Résolution de problèmes

### L'image ne s'affiche pas
1. Vérifiez que `public/og-emploi.jpg` existe
2. Vérifiez que l'image fait moins de 8 MB
3. Utilisez le Facebook Debugger et cliquez sur "Scrape Again"
4. Attendez quelques minutes et réessayez

### La description est tronquée
- Facebook limite à ~300 caractères
- Notre description actuelle est optimisée pour cette limite

### Le titre ne s'affiche pas correctement
- Vérifiez que vous utilisez l'URL complète avec le hash : `#/emploi`
- Utilisez le Facebook Debugger pour voir les erreurs

## 📊 Suivi des partages

Après avoir partagé, vous pouvez suivre l'engagement :
- Nombre de clics sur le lien
- Nombre de partages
- Commentaires et réactions

Utilisez Facebook Insights si vous partagez depuis une page Facebook professionnelle.

## ✨ Prochaines étapes

1. ✅ Déployer les changements sur GitHub Pages
2. ✅ Tester avec Facebook Sharing Debugger
3. 🎨 Créer une image Open Graph personnalisée (optionnel mais recommandé)
4. 📱 Partager sur Facebook, LinkedIn, Twitter
5. 📧 Partager dans les groupes pertinents (vélo de montagne, emplois Saguenay, etc.)

Bonne chance avec le recrutement! 🚴‍♂️

