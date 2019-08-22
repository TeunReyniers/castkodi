# Cast Kodi

[![Version][img-version]][link-version]
[![Dependencies][img-dependencies]][link-dependencies]
[![Commits][img-commits]][link-commits]
[![License][img-license]][link-license]
[![Users][img-users]][link-users]
[![Stars][img-stars]][link-stars]

> WebExtension pour diffuser des vidéos et musiques sur Kodi.

## Description

Cast Kodi est une extension pour le navigateur Firefox. Elle permet de diffuser
sur **Kodi** :

- des vidéos : liens directs (*avi*, *mkv*…), YouTube¹, Twitch¹, Vimeo¹,
  Instagram, torrents¹, magnets¹ et Ace Stream¹, AlloCiné, Arte, BitChute,
  Dailymotion¹, DevTube¹, Dumpert¹, Facebook, Flickr, Full30, Gamekult¹,
  JeuxVideoCom, LiveLeak, PeerTube, Первый канал, Rutube, Steam, StormoTV,
  Útvarp Saga, YT Home, VRT NU¹…
- des musiques : liens directs (*mp3*, *flac*…), SoundCloud¹ et Apple Podcasts,
  Arte Radio, Blog Talk Radio, France Inter, KCAA Radio, Mixcloud¹, My Cloud
  Player, Pippa, podCloud, Radioline…

Cast Kodi analyse aussi les pages pour y trouver des vidéos, de la musique ou
des intégrations de plateformes externes. Par exemple, si une page affiche une
vidéo YouTube, cette vidéo sera envoyée à Kodi.

Pour diffuser les vidéos / musiques, trois options peuvent être ajoutées dans le
menu contextuel des liens / pages / sélections de vidéos ou de musiques : *Lire
maintenant avec Kodi*, *Lire ensuite avec Kodi* et *Place en file d'attente de
Kodi*. Une télécommande (accessible depuis un bouton de la barre d'outils) est
aussi présente pour diffuser l'onglet courant sur Kodi et pour : mettre en
pause, passer au prochain élément, régler le volume…

## Installation

L'extension est disponible sur le
**[Firefox Add-ons](https://addons.mozilla.org/addon/castkodi/)**.

Dans Kodi, il faut *Autoriser le contrôle à distance par des programmes sur
d'autres systèmes*. Ce réglage se fait dans la page *Paramètres* / *Services* /
*Contrôle*.

Vous devez ensuite configurer les *Préférences* de Cast Kodi en copiant
l'*Adresse IP* du serveur hébergeant Kodi ; cette information est disponible
dans la page *Paramètres* / *Infos sur le système* / *Résumé*.

¹ Pour lire les vidéos / musiques hébergées sur ces plateformes, il faut
installer les extensions
[YouTube](https://kodi.tv/addon/plugins-video-add-ons/youtube),
[Twitch](https://kodi.tv/addon/plugins-video-add-ons/twitch),
[Vimeo](https://kodi.tv/addon/plugins-video-add-ons/vimeo),
[Elementum](https://github.com/elgatito/plugin.video.elementum) (torrents /
magnets), [Plexus](https://github.com/tvaddonsco/program.plexus) (Ace Stream),
[DailyMotion.com](https://kodi.tv/addon/plugins-video-add-ons/dailymotioncom),
[Dumpert](https://kodi.tv/addon/plugins-video-add-ons/dumpert),
[SoundCloud](https://kodi.tv/addon/music-add-ons-plugins/soundcloud)
[Mixcloud](https://kodi.tv/addon/music-add-ons-plugins/mixcloud) ou
[VRT NU](https://kodi.tv/addon/plugins-video-add-ons/vrt-nu-0) dans Kodi.

## Licence

L'extension est publiée sous la [licence publique de l’Union européenne - EUPL
v1.2](https://joinup.ec.europa.eu/collection/eupl/eupl-text-11-12).

[img-version]:https://img.shields.io/amo/v/castkodi.svg
[img-dependencies]:https://img.shields.io/david/regseb/castkodi.svg
[img-commits]:https://img.shields.io/badge/conventional%20commits-1.0.0-yellow.svg
[img-license]:https://img.shields.io/badge/license-EUPL-blue.svg
[img-users]:https://img.shields.io/amo/users/castkodi.svg
[img-stars]:https://img.shields.io/amo/stars/castkodi.svg

[link-version]:https://addons.mozilla.org/addon/castkodi/
[link-dependencies]:https://david-dm.org/regseb/castkodi
[link-commits]:https://www.conventionalcommits.org/fr/
[link-license]:https://joinup.ec.europa.eu/collection/eupl/eupl-text-11-12
               "Licence publique de l’Union européenne"
[link-users]:https://addons.mozilla.org/addon/castkodi/statistics/?last=90
[link-stars]:https://addons.mozilla.org/addon/castkodi/reviews/
