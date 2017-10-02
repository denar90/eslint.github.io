module.exports = {
  "globDirectory": "_site/",
  "globPatterns": [
    "**/*.{html,eot,ttf,woff,woff2,png,js,jsx,map,css,json}"
  ],
  "swSrc": "sw/sw.js",
  "swDest": "sw.js",
  "globIgnores": [
    "workbox-cli-config.js",
    "docs/0.24.1/*",
    "docs/1.0.0/**/",
    "docs/1.10.3/**/",
    "docs/2.0.0/**/",
    "docs/2.13.1/**/",
    "docs/3.0.0/**/"
  ]
};
