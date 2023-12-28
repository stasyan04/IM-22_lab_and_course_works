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
    "revision": "32a34c3f370166d9020753147040f661"
  },
  {
    "url": "assets/css/0.styles.fb77016b.css",
    "revision": "4934813b78b14fe01dfe8a98d088f88d"
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
    "url": "assets/js/13.61362b0d.js",
    "revision": "e7e0543d415e79a6eb00ecd3c0793dc2"
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
    "url": "assets/js/16.fe718952.js",
    "revision": "e1b491fa2fd2b823f2137e731a9b54a9"
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
    "url": "assets/js/19.a42b92e0.js",
    "revision": "d726fa5da0902511d22501ba6754aaae"
  },
  {
    "url": "assets/js/2.26d7972d.js",
    "revision": "a6cccba84d2e453c616dd053afbfd137"
  },
  {
    "url": "assets/js/20.f1f6b975.js",
    "revision": "7c98e59f2e1fc9465a8208eac64a9770"
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
    "url": "assets/js/23.a8a91044.js",
    "revision": "907280406f61a78ade898ca57a015213"
  },
  {
    "url": "assets/js/24.7e995c20.js",
    "revision": "d191a9e586cdb4a5ff1665e488cb574b"
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
    "url": "assets/js/5.4d634a29.js",
    "revision": "9606c2c89dc4c0e9b89e89a6c111c948"
  },
  {
    "url": "assets/js/6.b170ac22.js",
    "revision": "94adaae66be5d3b91a1b9e1f345aff27"
  },
  {
    "url": "assets/js/7.345d5971.js",
    "revision": "60b8e3010646c5c950d77130a8c77eaf"
  },
  {
    "url": "assets/js/8.ff4de979.js",
    "revision": "8216fb2b61f4f9c2f9789df6a8cc811d"
  },
  {
    "url": "assets/js/9.344b36c9.js",
    "revision": "1571b9300cdfb0377ab7d62939c23a4f"
  },
  {
    "url": "assets/js/app.6d72e7fd.js",
    "revision": "f1942e48b1e0d8e2bdeea6c7ded8edeb"
  },
  {
    "url": "conclusion/index.html",
    "revision": "2d6b0b9a8bbdf6969f637d30edb2fb95"
  },
  {
    "url": "design/index.html",
    "revision": "a227c7130ea28ae46a2376890615e265"
  },
  {
    "url": "index.html",
    "revision": "332ac075c1170dd700c89c314e7ae81a"
  },
  {
    "url": "intro/index.html",
    "revision": "98d3b12b49e62e947506c1860c5b099e"
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
    "revision": "62ca001fe9b70ea4940e6487bcd952bd"
  },
  {
    "url": "requirements/stakeholders-needs.html",
    "revision": "ce23b3b367a64a8d58c083410f66cc80"
  },
  {
    "url": "requirements/state-of-the-art.html",
    "revision": "3269951ec80c0361de6544aa2093b0b6"
  },
  {
    "url": "software/index.html",
    "revision": "06272a4b1cef4f434091421d19de7372"
  },
  {
    "url": "test/index.html",
    "revision": "9b7cc97e33ead625e70fa005e6717bbc"
  },
  {
    "url": "use cases/index.html",
    "revision": "332cdc6533ae8e64c2ee9ca0f6401b2c"
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
