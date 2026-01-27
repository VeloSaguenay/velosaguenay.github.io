# Guide pour créer les images Open Graph

## Images requises

### 1. og-image.jpg (Image générale du site)
- **Dimensions**: 1200 x 630 pixels
- **Format**: JPG ou PNG
- **Contenu suggéré**: 
  - Logo Vélo Saguenay
  - Photo des sentiers (pano_1.jpg ou belu_2.jpg)
  - Texte: "Vélo Saguenay - Sports de montagne au Saguenay"

### 2. og-emploi.jpg (Image pour l'offre d'emploi)
- **Dimensions**: 1200 x 630 pixels
- **Format**: JPG ou PNG
- **Contenu suggéré**:
  - Photo des sentiers en arrière-plan
  - Texte principal: "🎯 NOUS EMBAUCHONS!"
  - Sous-titre: "Directeur(trice) des opérations ski et vélo"
  - Badge: "Poste permanent - Saguenay"
  - Logo Vélo Saguenay

## Outils recommandés pour créer les images

1. **Canva** (gratuit): https://www.canva.com/
   - Template "Facebook Post" ou "Open Graph"
   - Dimensions personnalisées: 1200 x 630 px

2. **Figma** (gratuit): https://www.figma.com/
   - Créer un frame de 1200 x 630 px

3. **Photoshop** ou **GIMP** (gratuit)
   - Nouveau document: 1200 x 630 px

## Template de texte pour og-emploi.jpg

```
[Grande photo de sentiers en arrière-plan avec overlay sombre]

🎯 NOUS EMBAUCHONS!

Directeur(trice) des opérations 
ski et vélo

✓ Poste permanent à l'année
✓ Saguenay, Québec
✓ Le Panoramique & Mont-Bélu

VÉLO SAGUENAY
```

## Placement des fichiers

Une fois créées, placez les images dans le dossier `public/`:
- `public/og-image.jpg` - Image générale
- `public/og-emploi.jpg` - Image pour l'offre d'emploi

## Solution temporaire

En attendant de créer les images professionnelles, vous pouvez:
1. Copier une des images existantes (ex: pano_1.jpg) dans public/
2. La renommer en og-image.jpg et og-emploi.jpg
3. Les remplacer plus tard par des images optimisées

## Vérification

Après avoir ajouté les images, testez avec:
- Facebook Sharing Debugger: https://developers.facebook.com/tools/debug/
- Twitter Card Validator: https://cards-dev.twitter.com/validator
- LinkedIn Post Inspector: https://www.linkedin.com/post-inspector/

## Commandes pour copier temporairement une image existante

```bash
# Depuis la racine du projet
cp src/assets/media/images/gallery/pano_1.jpg public/og-image.jpg
cp src/assets/media/images/gallery/pano_1.jpg public/og-emploi.jpg
```

Ensuite, créez des versions optimisées avec le texte approprié.

