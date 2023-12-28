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
    "revision": "f380b0c08b2d1c8a757090d5019c79dd"
  },
  {
    "url": "assets/css/0.styles.18b9bdea.css",
    "revision": "a734ac98122e8dd7bba446df69d5ca85"
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
    "url": "assets/img/Requests_delete_response.0f1b3855.png",
    "revision": "0f1b3855f7f00c20d5ff24d7f6b070e3"
  },
  {
    "url": "assets/img/Requests_delete.a9b9246b.png",
    "revision": "a9b9246b1bda07141c1177fb43c62033"
  },
  {
    "url": "assets/img/Requests_get_all.554a1b8b.png",
    "revision": "554a1b8b448fd1834d4121ce850abe7c"
  },
  {
    "url": "assets/img/Requests_get_response.79319184.png",
    "revision": "79319184648de9b512a8995472075a24"
  },
  {
    "url": "assets/img/Requests_get.9d71aa92.png",
    "revision": "9d71aa92d52bc49adadb5a69972bd519"
  },
  {
    "url": "assets/img/Requests_post_response.5335641a.png",
    "revision": "5335641a0bce4955bc29ddadb999a90b"
  },
  {
    "url": "assets/img/Requests_post.c7c77aa5.png",
    "revision": "c7c77aa5c408dc66ddbe80e3ba72e745"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/img/Users_delete_response.38880569.png",
    "revision": "38880569d5b33296d5d10a7dc3ae5d10"
  },
  {
    "url": "assets/img/Users_delete.90e146e9.png",
    "revision": "90e146e93621ecc0787cbce9130e9a7a"
  },
  {
    "url": "assets/img/Users_get_all.3364d51c.png",
    "revision": "3364d51cb5c496999cd232c89e9cb4e6"
  },
  {
    "url": "assets/img/Users_get_response.7070f897.png",
    "revision": "7070f897f826f342cf7a3e2f161fd9b7"
  },
  {
    "url": "assets/img/Users_get.c9523190.png",
    "revision": "c9523190792d0135735ee0cef71628b1"
  },
  {
    "url": "assets/img/Users_post_response.b62c245d.png",
    "revision": "b62c245d990931742133dee6be53a11d"
  },
  {
    "url": "assets/img/Users_post.43042a7b.png",
    "revision": "43042a7bf924f335756620132dfcf59e"
  },
  {
    "url": "assets/img/Users_put_response.61d2912a.png",
    "revision": "61d2912a3e4277c5eb324f4ab2e0c70c"
  },
  {
    "url": "assets/img/Users_put.bbc35d67.png",
    "revision": "bbc35d671e1defcf011e6d90b87fe56d"
  },
  {
    "url": "assets/js/1.cf1637b1.js",
    "revision": "ab9b8deb7e1c32c43191dd1d4f20f73c"
  },
  {
    "url": "assets/js/10.f9d6c906.js",
    "revision": "4dd068e1299b8d7729db22fa91a93a69"
  },
  {
    "url": "assets/js/13.421a152b.js",
    "revision": "8aa6fe2c68701b29be7eb06b1925672b"
  },
  {
    "url": "assets/js/14.8cd306a8.js",
    "revision": "94490bcbaeb98367ad3758ff49ec752c"
  },
  {
    "url": "assets/js/15.ced6c98f.js",
    "revision": "9067bc22dd9e1ada199573446c495b04"
  },
  {
    "url": "assets/js/16.6751d6cf.js",
    "revision": "1e300c1759f00980e093cb6bd7b536aa"
  },
  {
    "url": "assets/js/17.6360dfc7.js",
    "revision": "687205ba8f12cb58ebdb4e517e179425"
  },
  {
    "url": "assets/js/18.96407d7d.js",
    "revision": "84a217f1e02852dccbc332d5b7581ec3"
  },
  {
    "url": "assets/js/19.acb8cca9.js",
    "revision": "9e60978f51b6a272287ea7698ec95a4c"
  },
  {
    "url": "assets/js/2.c83191e2.js",
    "revision": "f2b741b525aaa9cc237d587ca6c79242"
  },
  {
    "url": "assets/js/20.f377b335.js",
    "revision": "78d96e70dca7a4cc06aa0f27dbf1d816"
  },
  {
    "url": "assets/js/21.1a887d24.js",
    "revision": "480adfd63a1786e1f9884eaf548f714d"
  },
  {
    "url": "assets/js/22.d9198426.js",
    "revision": "f36aaf35fb799e91da30cae5a0e808a8"
  },
  {
    "url": "assets/js/23.366f581e.js",
    "revision": "c88a901a31499a9eaf3c30be8235065b"
  },
  {
    "url": "assets/js/24.c5f7f427.js",
    "revision": "6472ff3df539ea3a140c2f209d93e60d"
  },
  {
    "url": "assets/js/25.4029e3c4.js",
    "revision": "d991b2f33832e46ad0e8cb036b7aa81d"
  },
  {
    "url": "assets/js/26.3e800f54.js",
    "revision": "a92c2d95d85167ec475a448c8670dc4c"
  },
  {
    "url": "assets/js/27.094c1aee.js",
    "revision": "62e26ca1e54da19b5ef8ccba3f592023"
  },
  {
    "url": "assets/js/28.9b159625.js",
    "revision": "78deaee6e60286aa36496039a45bd616"
  },
  {
    "url": "assets/js/29.b01b2656.js",
    "revision": "7e681bd62e1e37f2373a0ef264eb4a0f"
  },
  {
    "url": "assets/js/3.ae2a1c17.js",
    "revision": "be0de2729fe4acf2c646df30d9a8e65e"
  },
  {
    "url": "assets/js/30.6924bca4.js",
    "revision": "a9edeb9d5ab2d82a97e65ff250c3bcac"
  },
  {
    "url": "assets/js/31.09b6a229.js",
    "revision": "64ba2c535555db03489d0dedba54da8a"
  },
  {
    "url": "assets/js/32.49c65f46.js",
    "revision": "d5df914e1ddbe784845589660b934f36"
  },
  {
    "url": "assets/js/33.f0851faf.js",
    "revision": "35ed7ca56358ed71b3f86892e204b615"
  },
  {
    "url": "assets/js/34.c4227703.js",
    "revision": "c81e2ff77d1c2c8f6dce5c685e204da5"
  },
  {
    "url": "assets/js/35.e679bb4e.js",
    "revision": "c81fdac7fe281393bf04349eb21a9bff"
  },
  {
    "url": "assets/js/36.4772e532.js",
    "revision": "bcd3f607e04b3991c31ef0691c269573"
  },
  {
    "url": "assets/js/37.a57c5b27.js",
    "revision": "9062f25ffc39c941259b0b8051d1612a"
  },
  {
    "url": "assets/js/38.ee87bb86.js",
    "revision": "2922f75df050177c1f756e813eb93fa0"
  },
  {
    "url": "assets/js/39.cbbb903b.js",
    "revision": "b1f7335626169c3bd63d805c18a4c566"
  },
  {
    "url": "assets/js/4.feca0eb1.js",
    "revision": "d81847b7f1d763de7e30b6cdcba1fb16"
  },
  {
    "url": "assets/js/41.228f1276.js",
    "revision": "c621079cddffe344aebf0cef0c3176ab"
  },
  {
    "url": "assets/js/5.6cfb73f7.js",
    "revision": "56c540f54bf418b697bc21846591b933"
  },
  {
    "url": "assets/js/6.5a01b3ad.js",
    "revision": "dc2d550d45613289a15d89f816be3449"
  },
  {
    "url": "assets/js/7.efb95acd.js",
    "revision": "784aef8aad48595008c5bfaed953f93d"
  },
  {
    "url": "assets/js/8.81d459e0.js",
    "revision": "edbc405062b25b6ba0dbd44947c52f16"
  },
  {
    "url": "assets/js/9.2be1eb08.js",
    "revision": "d6046be85d431c2b7671649f6a064224"
  },
  {
    "url": "assets/js/app.8ffa8e00.js",
    "revision": "3c0951096fddcaf1b2ee17f034037793"
  },
  {
    "url": "assets/js/vendors~docsearch.37bb06f6.js",
    "revision": "d38e622911e87af68d3279de7ee224a3"
  },
  {
    "url": "conclusion/index.html",
    "revision": "0a4f58f7dca3631d651932fd285ca44c"
  },
  {
    "url": "design/index.html",
    "revision": "6472a6928edd4f1b2b31c996f9506a04"
  },
  {
    "url": "index.html",
    "revision": "892ffdabe4045d627734cd748fcbad43"
  },
  {
    "url": "intro/index.html",
    "revision": "e9cfbeb3a444b475323e5120d3c339f4"
  },
  {
    "url": "license.html",
    "revision": "70a2edbdcd1a16b29dc6ec11e14ab937"
  },
  {
    "url": "myAvatar.png",
    "revision": "b76db1e62eb8e7fca02a487eb3eac10c"
  },
  {
    "url": "requirements/index.html",
    "revision": "77fb524e21be760eadd773d8e0fd7a19"
  },
  {
    "url": "requirements/stakeholders-needs.html",
    "revision": "b7ed9b6fb7681bc3ab057fea76219d6d"
  },
  {
    "url": "requirements/state-of-the-art.html",
    "revision": "df74f970f776bf3711a5febbd0208b07"
  },
  {
    "url": "software/index.html",
    "revision": "71610a723343380c64b51c0bc974496d"
  },
  {
    "url": "test/index.html",
    "revision": "029313d2fdc16a993af4fe87c92e1a4b"
  },
  {
    "url": "use cases/index.html",
    "revision": "413141ad468396a2d95149f2b7aa604b"
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
