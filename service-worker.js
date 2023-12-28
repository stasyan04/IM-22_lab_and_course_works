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
    "revision": "dc7464e645b867bf677ba2a04f7ca2e1"
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
    "url": "assets/js/13.c6de65d5.js",
    "revision": "52539f66b9db3bf21089b408ceccc6c4"
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
    "url": "assets/js/18.f69bf74b.js",
    "revision": "f3983872b9c336b63af64d1a6f1f4ecf"
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
    "url": "assets/js/22.576d3cdf.js",
    "revision": "82ab65a9f1e1096dc5e81af2f1623c31"
  },
  {
    "url": "assets/js/23.a8a91044.js",
    "revision": "907280406f61a78ade898ca57a015213"
  },
  {
    "url": "assets/js/24.11040995.js",
    "revision": "47faf7a2533fd9a30b7f60bfe207db28"
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
    "url": "assets/js/app.74ea5ca3.js",
    "revision": "f1a72a98719bb531a0b8f3480df6a527"
  },
  {
    "url": "conclusion/index.html",
    "revision": "3aa28db6065d8c0c6794a675b99eb286"
  },
  {
    "url": "design/index.html",
    "revision": "5140459ca087bbed43596c2e07da7582"
  },
  {
    "url": "index.html",
    "revision": "168f01683716888c8ca57e1379fe59a2"
  },
  {
    "url": "intro/index.html",
    "revision": "a039e33e2eb81c2cece5ef7ebcc3beca"
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
    "revision": "0cb11a05b797aaec08666cb20780a27b"
  },
  {
    "url": "requirements/stakeholders-needs.html",
    "revision": "67a76dbdbd694894aabf8ddaf02902a1"
  },
  {
    "url": "requirements/state-of-the-art.html",
    "revision": "a1bc52401cca855abfe6b97334b9ca72"
  },
  {
    "url": "software/index.html",
    "revision": "76140e4aa5869565d1601881fbd3ddf6"
  },
  {
    "url": "test/index.html",
    "revision": "1674d6eaf1ad376691f4abf368f94168"
  },
  {
    "url": "use cases/index.html",
    "revision": "2cbc43a30403c3db489d84e065549f90"
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
