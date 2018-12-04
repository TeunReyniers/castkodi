# Cast Kodi

[![Version][img-version]][link-version]
[![Build][img-build]][link-build]
[![Dependencies][img-dependencies]][link-dependencies]
[![Coverage][img-coverage]][link-coverage]
[![License][img-license]][link-license]
[![Users][img-users]][link-users]
[![Stars][img-stars]][link-stars]

> WebExtension pour diffuser des vidéos et musiques sur Kodi.

## Description

Cast Kodi est une extension pour le navigateur Firefox. Elle permet de diffuser
sur **Kodi** :

- des vidéos : liens directs (*avi*, *mkv*…), YouTube, Twitch, Vimeo, Instagram,
  torrents, magnets et AceStream, AlloCiné, Dailymotion, DevTube, Dumpert,
  Facebook, Full30, JeuxVideoCom, PeerTube, Rutube, StormoTV…
- des musiques : liens directs (*mp3*, *flac*…), SoundCloud et Arte Radio,
  Mixcloud, Radioline…

Cast Kodi analyse aussi les pages pour y trouver des vidéos, de la musique ou
des intégrations de plateformes externes. Par exemple, si une page affiche une
vidéo YouTube, cette vidéo sera envoyée à Kodi. Les sites suivants (et surement
d'autres) sont gérés : AP News, LiveLeak, Útvarp Saga…

Pour diffuser les vidéos / musiques, trois options peuvent être ajoutées dans le
menu contextuel des liens / pages / sélections de vidéos ou de musiques : *Lire
maintenant avec Kodi*, *Lire ensuite avec Kodi* et *Place en file d'attente de
Kodi*. Une télécommande (accessible depuis un bouton de la barre d'outils) est
aussi présente pour diffuser l'onglet courant sur Kodi et pour : mettre en
pause, passer au prochain élément, régler le volume…

## Installation

L'extension est disponible sur le
**[Firefox Add-ons](https://addons.mozilla.org/addon/castkodi/)**.

Dans Kodi, il faut *Autoriser le contrôle à distance via HTTP*. Ce réglage se
fait dans la page *Paramètres* / *Services* / *Contrôle*.

Vous devez ensuite configurer les *Préférences* de Cast Kodi en copiant les
valeurs renseignées dans Kodi : le *Port* et éventuellement le *Nom
d'utilisateur* et le *Mot de passe*. Il faut fournir l'*Adresse IP* du serveur
hébergeant Kodi ; cette information est disponible dans la page *Paramètres* /
*Infos sur le système* / *Résumé*.

Pour lire les vidéos / musiques hébergées sur des plateformes, il faut installer
les extensions
[YouTube](https://kodi.tv/addon/plugins-video-add-ons/youtube),
[Twitch](https://kodi.tv/addon/plugins-video-add-ons/twitch),
[Vimeo](https://kodi.tv/addon/plugins-video-add-ons/vimeo),
[Elementum](https://github.com/elgatito/plugin.video.elementum) (torrents /
magnets), [Plexus](https://github.com/tvaddonsco/program.plexus) (AceStream),
[DailyMotion.com](https://kodi.tv/addon/plugins-video-add-ons/dailymotioncom),
[Dumpert](https://kodi.tv/addon/plugins-video-add-ons/dumpert),
[SoundCloud](https://kodi.tv/addon/music-add-ons-plugins/soundcloud) ou
[Mixcloud](https://kodi.tv/addon/music-add-ons-plugins/mixcloud) dans Kodi.

## Licence

L'extension est publiée sous la [licence publique de l’Union européenne - EUPL
v1.2](https://joinup.ec.europa.eu/collection/eupl/eupl-text-11-12).

[img-version]:https://img.shields.io/amo/v/castkodi.svg
[img-build]:https://img.shields.io/travis/regseb/castkodi.svg
[img-dependencies]:https://img.shields.io/david/regseb/castkodi.svg
[img-coverage]:https://img.shields.io/coveralls/regseb/castkodi.svg
[img-license]:https://img.shields.io/badge/license-EUPL-blue.svg
[img-users]:https://img.shields.io/amo/users/castkodi.svg
[img-stars]:https://img.shields.io/amo/stars/castkodi.svg

[link-version]:https://addons.mozilla.org/fr/firefox/addon/castkodi/
[link-build]:https://travis-ci.com/regseb/castkodi
[link-dependencies]:https://david-dm.org/regseb/castkodi
[link-coverage]:https://coveralls.io/github/regseb/castkodi
[link-license]:https://joinup.ec.europa.eu/collection/eupl/eupl-text-11-12
               "Licence publique de l’Union européenne"
[link-users]:https://addons.mozilla.org/addon/castkodi/statistics/?last=90
[link-stars]:https://addons.mozilla.org/addon/castkodi/reviews/
