/*! Lazy Load XT v1.0.6 2014-11-19
 * http://ressio.github.io/lazy-load-xt
 * (C) 2014 RESS.io
 * Licensed under MIT */
!function(t,e,r,n){function s(e,r){return Math[r].apply(null,t.map(e,function(t){return t[o]}))}function a(t){return t[o]>=g[o]||t[o]===u}function c(t){return t[o]===u}function i(n){var i=n.attr(d.srcsetAttr);if(!i)return!1;var l=t.map(i.split(","),function(t){return{url:x.exec(t)[1],w:parseFloat((f.exec(t)||p)[1]),h:parseFloat((w.exec(t)||p)[1]),x:parseFloat((h.exec(t)||m)[1])}});if(!l.length)return!1;var A,v,E=r.documentElement;g={w:e.innerWidth||E.clientWidth,h:e.innerHeight||E.clientHeight,x:e.devicePixelRatio||1};for(A in g)o=A,u=s(l,"max"),l=t.grep(l,a);for(A in g)o=A,u=s(l,"min"),l=t.grep(l,c);return v=l[0].url,d.srcsetExtended&&(v=(n.attr(d.srcsetBaseAttr)||"")+v+(n.attr(d.srcsetExtAttr)||"")),v}var o,u,d=t.lazyLoadXT,l=function(){return"srcset"in new Image}(),x=/^\s*(\S*)/,f=/\S\s+(\d+)w/,w=/\S\s+(\d+)h/,h=/\S\s+([\d\.]+)x/,p=[0,1/0],m=[0,1],A={srcsetAttr:"data-srcset",srcsetExtended:!0,srcsetBaseAttr:"data-srcset-base",srcsetExtAttr:"data-srcset-ext"},g={w:0,h:0,x:0};for(o in A)d[o]===n&&(d[o]=A[o]);d.selector+=",img["+d.srcsetAttr+"]",t(r).on("lazyshow","img",function(t,e){var r=e.attr(d.srcsetAttr);r&&(!d.srcsetExtended&&l?e.attr("srcset",r):e.lazyLoadXT.srcAttr=i)})}(window.jQuery||window.Zepto||window.$,window,document);