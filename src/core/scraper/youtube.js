/**
 * @module core/scraper/youtube
 */

/**
 * L'URL de l'extension pour lire des vidéos issues de YouTube.
 *
 * @constant {string}
 */
const PLUGIN_VIDEO_URL = "plugin://plugin.video.youtube/play/?video_id=";

/**
 * L'URL de l'extension pour lire des playlists issues de YouTube.
 *
 * @constant {string}
 */
const PLUGIN_PLAYLIST_URL = "plugin://plugin.video.youtube/play/?playlist_id=";

/**
 * Les règles avec les patrons et leur action.
 *
 * @constant {Map}
 */
export const rules = new Map();

/**
 * Extrait les informations nécessaire pour lire la vidéo ou la playlist sur
 * Kodi.
 *
 * @function action
 * @param {string} url L'URL d'une vidéo ou playlist YouTube (ou HookTube).
 * @return {Promise} L'URL du <em>fichier</em>.
 */
rules.set([
    "*://*.youtube.com/watch*", "*://hooktube.com/watch*"
], function ({ searchParams }) {
    return browser.storage.local.get(["youtube-playlist"])
                                                       .then(function (config) {
        if (searchParams.has("list") &&
                ("playlist" === config["youtube-playlist"] ||
                 !searchParams.has("v"))) {
            return PLUGIN_PLAYLIST_URL + searchParams.get("list");
        }
        if (searchParams.has("v")) {
            return PLUGIN_VIDEO_URL + searchParams.get("v");
        }

        return null;
    });
});

/**
 * Extrait les informations nécessaire pour lire la playlist sur Kodi.
 *
 * @function action
 * @param {string} url L'URL d'une playlist YouTube.
 * @return {Promise} L'URL du <em>fichier</em>.
 */
rules.set(["*://*.youtube.com/playlist*"], function ({ searchParams }) {
    if (searchParams.has("list")) {
        return Promise.resolve(PLUGIN_PLAYLIST_URL + searchParams.get("list"));
    }

    return Promise.resolve(null);
});

/**
 * Extrait les informations nécessaire pour lire la vidéo sur Kodi.
 *
 * @function action
 * @param {string} url L'URL d'une vidéo YouTube intégrée.
 * @return {Promise} L'URL du <em>fichier</em>.
 */
rules.set(["*://www.youtube.com/embed/*"], function ({ pathname }) {
    return Promise.resolve(PLUGIN_VIDEO_URL + pathname.substring(7));
});

/**
 * Extrait les informations nécessaire pour lire la vidéo sur Kodi.
 *
 * @function action
 * @param {string} url L'URL minifié d'une vidéo YouTube.
 * @return {Promise} L'URL du <em>fichier</em>.
 */
rules.set(["*://youtu.be/*"], function ({ pathname }) {
    return Promise.resolve(PLUGIN_VIDEO_URL + pathname.substring(1));
});
