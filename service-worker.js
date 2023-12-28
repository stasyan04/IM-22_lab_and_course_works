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
    "revision": "2f5edd762cbac23f30722462794dc6dd"
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
    "url": "assets/js/12.c682ed13.js",
    "revision": "685afeae998cfac0c59b9b9397b329ce"
  },
  {
    "url": "assets/js/13.80469a74.js",
    "revision": "fccc767e22d4b0acaa96e2bfea474af1"
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
    "url": "assets/js/17.20c5fd34.js",
    "revision": "507c3b794a90a76d0e5dceff38eea690"
  },
  {
    "url": "assets/js/18.8398e3d4.js",
    "revision": "fd8115854e2cfbee18eec388af9f9c69"
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
    "url": "assets/js/20.08e5e2c2.js",
    "revision": "707d2e65020236b101d596a98df24de1"
  },
  {
    "url": "assets/js/21.3bbc70b1.js",
    "revision": "579ab0d586f53d50abe55303f72b2a3b"
  },
  {
    "url": "assets/js/22.71cc33cb.js",
    "revision": "2a9ecd62a0c54ab221e74324f5795b7d"
  },
  {
    "url": "assets/js/23.69825262.js",
    "revision": "1765235903c9151cfcb3c06ede7096aa"
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
    "url": "assets/js/app.4ec04810.js",
    "revision": "e78e4d7a9164456ad6c6b8bac1e5677c"
  },
  {
    "url": "conclusion/index.html",
    "revision": "e07f891d11b5e6b5a71ed0fd2cfba637"
  },
  {
    "url": "design/index.html",
    "revision": "0a5107da8448f8fee73ee16eb14bc759"
  },
  {
    "url": "index.html",
    "revision": "4b4f7ce1f3cc536a531d1da1006fcaa2"
  },
  {
    "url": "intro/index.html",
    "revision": "c5728857f3793a27298efc31bc1eaa9b"
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
    "revision": "2e0591108349693c17b4d1a69c41d31d"
  },
  {
    "url": "requirements/stakeholders-needs.html",
    "revision": "f67c7680db2e1528d5c0dbf7a613eb92"
  },
  {
    "url": "requirements/state-of-the-art.html",
    "revision": "c592082c302fa0d95d1edabe68fc4043"
  },
  {
    "url": "software/index.html",
    "revision": "4f13ea384f5a4e7cadd8d15d0f8ff78a"
  },
  {
    "url": "test/index.html",
    "revision": "583ac2193146cd2a51d70306a11c5083"
  },
  {
    "url": "use cases/index.html",
    "revision": "22c1cc6055e2a30c6cc715c132c67ccb"
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
