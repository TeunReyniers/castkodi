/**
 * @module
 */

/**
 * L'URL pour récupérer la vidéo Facebook.
 *
 * @constant {string}
 */
const PREFIX_VIDEO_URL = "https://www.facebook.com/watch/?v=";

/**
 * Les règles avec les patrons et leur action.
 *
 * @constant {Map.<Array.<string>, Function>}
 */
export const rules = new Map();

/**
 * Extrait les informations nécessaire pour lire une vidéo sur Kodi.
 *
 * @function action
 * @param {URL}             url              L'URL d'une vidéo Facebook.
 * @param {string}          url.pathname     Le chemin de l'URL.
 * @param {URLSearchParams} url.searchParams Les paramètres de l'URL.
 * @returns {?Promise} Une promesse contenant le lien du <em>fichier</em> ou
 *                     <code>null</code>.
 */
rules.set([
    "*://*.facebook.com/*/videos/*/*", "*://*.facebook.com/watch*"
], function ({ pathname, searchParams }) {
    let id;
    if ("/watch" === pathname || "/watch/" === pathname) {
        if (searchParams.has("v")) {
            id = searchParams.get("v");
        } else {
            return null;
        }
    } else {
        id = pathname.substring(pathname.indexOf("/videos/") + 8)
                     .replace(/\/$/u, "");
    }

    const init = { "credentials": "omit" };
    return fetch(PREFIX_VIDEO_URL + id, init).then((r) => r.text())
                                             .then((data) => {
        const doc = new DOMParser().parseFromString(data, "text/html");

        const meta = doc.head.querySelector(`meta[property="og:video"]`);
        return null === meta ? null
                             : meta.content;
    });
});
