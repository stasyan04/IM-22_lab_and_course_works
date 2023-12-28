/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "be4ef1d71140ac637e7f0ca1824d269c"
  },
  {
    "url": "assets/css/0.styles.d4dab244.css",
    "revision": "53f44db6e68fc951ae7605c3a4fe8ac6"
  },
  {
    "url": "assets/img/Diagram.8cd51fc3.png",
    "revision": "8cd51fc3449f1cfdb8c5adc10e86f5a4"
  },
  {
    "url": "assets/img/relational-schema.a1d70381.png",
    "revision": "a1d70381c4dad1d0e644bd6842d8da14"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.957dcea5.js",
    "revision": "d7538e323b2c19a9b2e19c32c3764f80"
  },
  {
    "url": "assets/js/11.b0b5436d.js",
    "revision": "5e9b1c490ba4645d2eb08378b94e6298"
  },
  {
    "url": "assets/js/12.77a48f7c.js",
    "revision": "71dfc61d295cbe4b2945f1f16410cf5f"
  },
  {
    "url": "assets/js/13.5e2b34fc.js",
    "revision": "ccb660f626c8646abc2b8c7ee1098028"
  },
  {
    "url": "assets/js/14.d545891d.js",
    "revision": "6d883a9120783caaea53a3c0d6088014"
  },
  {
    "url": "assets/js/15.9b3ccd6d.js",
    "revision": "226b9d4d2484f752b3e8f5e9afbb0fff"
  },
  {
    "url": "assets/js/16.6f68529b.js",
    "revision": "21917c27465259a28237d1427e60a645"
  },
  {
    "url": "assets/js/17.331bc555.js",
    "revision": "8706873923977d3607ad2246512e6640"
  },
  {
    "url": "assets/js/18.f30de68e.js",
    "revision": "be3fbca70c0b59687eaf557823941a01"
  },
  {
    "url": "assets/js/19.bd1cdb10.js",
    "revision": "698bb802befe3505b48c3e20682a0112"
  },
  {
    "url": "assets/js/2.26d7972d.js",
    "revision": "a6cccba84d2e453c616dd053afbfd137"
  },
  {
    "url": "assets/js/20.6a5de4f4.js",
    "revision": "9de869485764c78c6d716cc56d98487c"
  },
  {
    "url": "assets/js/21.3e114200.js",
    "revision": "06949f9bc98ac27d935159872e48265c"
  },
  {
    "url": "assets/js/22.ed9a9bff.js",
    "revision": "39dad132f1f6a1974b8f5ec690ad274d"
  },
  {
    "url": "assets/js/23.34fe78cc.js",
    "revision": "b47f7fc19f637c34aec556ce043396e0"
  },
  {
    "url": "assets/js/24.8dcd63b9.js",
    "revision": "a343cfb3484c636e98143c8281bfe7b3"
  },
  {
    "url": "assets/js/26.9af74e7b.js",
    "revision": "755c07933666c73c43f285453aafa8be"
  },
  {
    "url": "assets/js/3.30bf635f.js",
    "revision": "ecee189d87ebfd2e6769e92321c0682a"
  },
  {
    "url": "assets/js/4.d3a5ca8a.js",
    "revision": "f5e358c092e8e7074438167a8546cd32"
  },
  {
    "url": "assets/js/5.14534ff0.js",
    "revision": "686583a89424c3a943dfcb0285f4c795"
  },
  {
    "url": "assets/js/6.c07fc876.js",
    "revision": "aae9cb024f84af95816f4275bb7f1733"
  },
  {
    "url": "assets/js/7.345d5971.js",
    "revision": "60b8e3010646c5c950d77130a8c77eaf"
  },
  {
    "url": "assets/js/8.c2d4042a.js",
    "revision": "5a6e52a4895134b7bbe6602d72a7c993"
  },
  {
    "url": "assets/js/9.344b36c9.js",
    "revision": "1571b9300cdfb0377ab7d62939c23a4f"
  },
  {
    "url": "assets/js/app.8e60cc5b.js",
    "revision": "ff7e9ee1d09ae4604daac73502725d0d"
  },
  {
    "url": "conclusion/index.html",
    "revision": "b8ed08f60ecd56896abcbfa2f930a197"
  },
  {
    "url": "design/index.html",
    "revision": "63e93a51bf1a817194376289e2f9db74"
  },
  {
    "url": "index.html",
    "revision": "e6bc8beb792144da8d305ed5bb15dc88"
  },
  {
    "url": "intro/index.html",
    "revision": "4bf1c3dfa64462d39f5139f379624de5"
  },
  {
    "url": "license.html",
    "revision": "c6ae94487788630ac26fdec72cecb7f2"
  },
  {
    "url": "myAvatar.png",
    "revision": "b76db1e62eb8e7fca02a487eb3eac10c"
  },
  {
    "url": "requirements/index.html",
    "revision": "32b52ea27b04069c51f7b5dee2032336"
  },
  {
    "url": "requirements/stakeholders-needs.html",
    "revision": "04eba77b9b4880698af13737ec17ba10"
  },
  {
    "url": "requirements/state-of-the-art.html",
    "revision": "ddac3bf27d0c8abb30ed02374bb32304"
  },
  {
    "url": "software/index.html",
    "revision": "27412881e5f6b7f8f6a93f08bce14cc1"
  },
  {
    "url": "test/index.html",
    "revision": "46c6ad9d4ee09bdae6b57fbd01c1334c"
  },
  {
    "url": "use cases/index.html",
    "revision": "51312487f182f2f0449d5199e4dfbfe2"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
