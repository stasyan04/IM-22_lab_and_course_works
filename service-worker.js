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
    "revision": "3b34623f41cde4ec006c4e130b20711a"
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
    "url": "assets/js/18.5b0ec799.js",
    "revision": "ae3ffdcd3742c08ab62b6f1245ec071a"
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
    "url": "assets/js/20.08e5e2c2.js",
    "revision": "707d2e65020236b101d596a98df24de1"
  },
  {
    "url": "assets/js/21.3bbc70b1.js",
    "revision": "579ab0d586f53d50abe55303f72b2a3b"
  },
  {
    "url": "assets/js/22.c3ebfb69.js",
    "revision": "2b91ea54beedcba37d372dc83fd0147d"
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
    "url": "assets/js/app.9efe425e.js",
    "revision": "0c6f7454ca69048490327e8a627b2978"
  },
  {
    "url": "conclusion/index.html",
    "revision": "6bed34748f4de2faa424e920f6793b31"
  },
  {
    "url": "design/index.html",
    "revision": "e915cbfaf666ca2bd759268b5e267be2"
  },
  {
    "url": "index.html",
    "revision": "4868759d90a0eb38acde881c64ba8692"
  },
  {
    "url": "intro/index.html",
    "revision": "c0e466876a1e6b9dcab96c723ce0196e"
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
    "revision": "16e29dbd2609cc15fbe89a5439bddd4f"
  },
  {
    "url": "requirements/stakeholders-needs.html",
    "revision": "c3b10717b53d1728be506153262d376c"
  },
  {
    "url": "requirements/state-of-the-art.html",
    "revision": "0d3cad0783a0ce8f8701f1a586ed3e35"
  },
  {
    "url": "software/index.html",
    "revision": "0c0f2dd6011ea958e3b63e1154468d8e"
  },
  {
    "url": "test/index.html",
    "revision": "ca9ba99f8033ac82290da33c79fffa18"
  },
  {
    "url": "use cases/index.html",
    "revision": "e919dfc3e563c09005a562407d668de5"
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
