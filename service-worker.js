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
    "revision": "9948fb066ee13073a14510f75fc5aeb9"
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
    "url": "assets/js/12.45311e4e.js",
    "revision": "8005d7511fe995be94b3c5071b35c5cc"
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
    "url": "assets/js/17.20c5fd34.js",
    "revision": "507c3b794a90a76d0e5dceff38eea690"
  },
  {
    "url": "assets/js/18.8398e3d4.js",
    "revision": "fd8115854e2cfbee18eec388af9f9c69"
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
    "url": "assets/js/20.a5fe811b.js",
    "revision": "f3bd4d46abfa35df6605dc8dcd16eff4"
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
    "url": "assets/js/23.21c4955b.js",
    "revision": "be644d4462d91da6ef5711503ddf02a8"
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
    "url": "assets/js/8.c2d4042a.js",
    "revision": "5a6e52a4895134b7bbe6602d72a7c993"
  },
  {
    "url": "assets/js/9.344b36c9.js",
    "revision": "1571b9300cdfb0377ab7d62939c23a4f"
  },
  {
    "url": "assets/js/app.bc109686.js",
    "revision": "b35297dd5d3895d33d0b2c877ddd0c22"
  },
  {
    "url": "conclusion/index.html",
    "revision": "53b1d4400362766f81b1b6d47280f002"
  },
  {
    "url": "design/index.html",
    "revision": "28884a3cb02b9d233b68be12188d5e73"
  },
  {
    "url": "index.html",
    "revision": "f53345ab636a8292b2dfd97c9ad726a2"
  },
  {
    "url": "intro/index.html",
    "revision": "38aa5a800017de9fdc88bb6b7ed7b9ac"
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
    "revision": "a1548f798ca17a6f7141063daa8e289d"
  },
  {
    "url": "requirements/stakeholders-needs.html",
    "revision": "2bdbb1c476f819253b9fcf43e4bc3a28"
  },
  {
    "url": "requirements/state-of-the-art.html",
    "revision": "2b8574a054d829c310c036cfe409ea0e"
  },
  {
    "url": "software/index.html",
    "revision": "b0e3203604681c9275f18ae5cb1ada6f"
  },
  {
    "url": "test/index.html",
    "revision": "f32c9067e6ee5aa8d41d52ee47b2184c"
  },
  {
    "url": "use cases/index.html",
    "revision": "1fb7d709287db3b9d9bda260000d4b82"
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
