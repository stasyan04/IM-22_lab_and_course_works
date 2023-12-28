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
    "revision": "f86cdefdbf8bcbc246ce02db90d68a63"
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
    "url": "assets/js/12.6c9e0a2e.js",
    "revision": "9564f8d138552ebb2b16b779b59e9080"
  },
  {
    "url": "assets/js/13.edca1898.js",
    "revision": "c5faf3ebd09ec413bc42a3e4e4f7796e"
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
    "url": "assets/js/20.f1f6b975.js",
    "revision": "7c98e59f2e1fc9465a8208eac64a9770"
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
    "url": "assets/js/23.f3a4e3a4.js",
    "revision": "0545caf8abb289a999c394febfd41c60"
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
    "url": "assets/js/8.c2d4042a.js",
    "revision": "5a6e52a4895134b7bbe6602d72a7c993"
  },
  {
    "url": "assets/js/9.344b36c9.js",
    "revision": "1571b9300cdfb0377ab7d62939c23a4f"
  },
  {
    "url": "assets/js/app.15fb16ea.js",
    "revision": "e12224fde10cce7468d46e84d8e36ced"
  },
  {
    "url": "conclusion/index.html",
    "revision": "99a6deefb941d0d8b46c6b580b0f6054"
  },
  {
    "url": "design/index.html",
    "revision": "e8b471036d608698a67524cb3dbd445c"
  },
  {
    "url": "index.html",
    "revision": "542dde045dd6425d120a58eb01a741b6"
  },
  {
    "url": "intro/index.html",
    "revision": "087e21e63733915e2a284dc89a023bcf"
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
    "revision": "82476a7b522b8e82a076ef29726a8765"
  },
  {
    "url": "requirements/stakeholders-needs.html",
    "revision": "b4d01d190ebb32bcfb5fbffd906fbc48"
  },
  {
    "url": "requirements/state-of-the-art.html",
    "revision": "8f99ead6ff95181ecdce848e172dc36f"
  },
  {
    "url": "software/index.html",
    "revision": "f38d90ae4050fe38e6f88b841fdbaf38"
  },
  {
    "url": "test/index.html",
    "revision": "15e42c2fd57046b6d6c42ad954d17cc6"
  },
  {
    "url": "use cases/index.html",
    "revision": "b81c434358e7bb6ec4d9662664980d23"
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
