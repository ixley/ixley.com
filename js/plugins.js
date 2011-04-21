
// usage: log('inside coolFunc', this, arguments);
// paulirish.com/2009/log-a-lightweight-wrapper-for-consolelog/
window.log = function(){
  log.history = log.history || [];   // store logs to an array for reference
  log.history.push(arguments);
  arguments.callee = arguments.callee.caller;  
  if(this.console) console.log( Array.prototype.slice.call(arguments) );
};
// make it safe to use console.log always
(function(b){function c(){}for(var d="assert,count,debug,dir,dirxml,error,exception,group,groupCollapsed,groupEnd,info,log,markTimeline,profile,profileEnd,time,timeEnd,trace,warn".split(","),a;a=d.pop();)b[a]=b[a]||c})(window.console=window.console||{});


// place any jQuery/helper plugins in here, instead of separate, slower script files.

/**
 * Isotope v1.0.110401
 * An exquisite jQuery plugin for magical layouts
 * http://isotope.metafizzy.co
 *
 * Commercial use requires one-time license fee
 * http://metafizzy.co/#licenses
 *
 * Copyright 2011 David DeSandro / Metafizzy
 */
(function(l,f,s){var m=function(){var a=["Moz","Webkit","Khtml","O","Ms"],b={};return function(c,d){d=d||document.documentElement;var e=d.style,g,h,i,t;if(arguments.length===1&&typeof b[c]==="string")return b[c];if(typeof e[c]==="string")return b[c]=c;h=c.charAt(0).toUpperCase()+c.slice(1);i=0;for(t=a.length;i<t;i++){g=a[i]+h;if(typeof e[g]==="string")return b[c]=g}}}(),u=document.documentElement,w=" -o- -moz- -ms- -webkit- -khtml- ".split(" "),o=[{name:"csstransforms",getResult:function(){return!!m("transform")}},
{name:"csstransforms3d",getResult:function(){var a=!!m("perspective");if(a){var b=document.createElement("style"),c=document.createElement("div");a="@media ("+w.join("transform-3d),(")+"modernizr)";b.textContent=a+"{#modernizr{height:3px}}";(document.head||document.getElementsByTagName("head")[0]).appendChild(b);c.id="modernizr";u.appendChild(c);a=c.offsetHeight===3;b.parentNode.removeChild(b);c.parentNode.removeChild(c)}return!!a}},{name:"csstransitions",getResult:function(){return!!m("transitionProperty")}}],
j,v=o.length;if(l.Modernizr)for(j=0;j<v;j++){var p=o[j];Modernizr.hasOwnProperty(p.name)||Modernizr.addTest(p.name,p.getResult)}else l.Modernizr=function(){var a={_version:"1.6ish: miniModernizr for Isotope"},b=[],c,d;for(j=0;j<v;j++){c=o[j];d=c.getResult();a[c.name]=d;c=(d?"":"no-")+c.name;b.push(c)}u.className+=" "+b.join(" ");return a}();var k={transformProp:m("transform"),fnUtils:Modernizr.csstransforms3d?{translate:function(a){return"translate3d("+a[0]+"px, "+a[1]+"px, 0) "},scale:function(a){return"scale3d("+
a+", "+a+", 1) "}}:{translate:function(a){return"translate("+a[0]+"px, "+a[1]+"px) "},scale:function(a){return"scale("+a+") "}},set:function(a,b,c){var d=f(a),e=d.data("isoTransform")||{},g={},h,i={};g[b]=c;f.extend(e,g);for(h in e)i[h]=(0,k.fnUtils[h])(e[h]);b=(i.translate||"")+(i.scale||"");d.data("isoTransform",e);a.style[k.transformProp]=b}};f.cssNumber.scale=true;f.cssHooks.scale={set:function(a,b){if(typeof b==="string")b=parseFloat(b);k.set(a,"scale",b)},get:function(a){return(a=f.data(a,"transform"))&&
a.scale?a.scale:1}};f.fx.step.scale=function(a){f.cssHooks.scale.set(a.elem,a.now+a.unit)};f.cssNumber.translate=true;f.cssHooks.translate={set:function(a,b){k.set(a,"translate",b)},get:function(a){return(a=f.data(a,"transform"))&&a.translate?a.translate:[0,0]}};var q=f.event,r;q.special.smartresize={setup:function(){f(this).bind("resize",q.special.smartresize.handler)},teardown:function(){f(this).unbind("resize",q.special.smartresize.handler)},handler:function(a,b){var c=this,d=arguments;a.type=
"smartresize";r&&clearTimeout(r);r=setTimeout(function(){jQuery.event.handle.apply(c,d)},b==="execAsap"?0:100)}};f.fn.smartresize=function(a){return a?this.bind("smartresize",a):this.trigger("smartresize",["execAsap"])};f.Isotope=function(a,b){this.element=f(b);this._create(a);this._init()};var n=["overflow","position","width","height"];f.Isotope.prototype={options:{resizable:true,layoutMode:"masonry",containerClass:"isotope",itemClass:"isotope-item",hiddenClass:"isotope-hidden",hiddenStyle:Modernizr.csstransforms&&
!f.browser.opera?{opacity:0,scale:0.0010}:{opacity:0},visibleStyle:Modernizr.csstransforms&&!f.browser.opera?{opacity:1,scale:1}:{opacity:1},animationEngine:f.browser.opera?"jquery":"best-available",animationOptions:{queue:false,duration:800},sortBy:"original-order",sortAscending:true,resizesContainer:true,transformsEnabled:true},_filterFind:function(a,b){return b?a.filter(b).add(a.find(b)):a},_create:function(a){this.options=f.extend(true,{},this.options,a);this.isNew={};this.styleQueue=[];this.elemCount=
0;this.$allAtoms=this._filterFind(this.element.children(),this.options.itemSelector);a=this.element[0].style;this.originalStyle={};for(var b=0,c=n.length;b<c;b++){var d=n[b];this.originalStyle[d]=a[d]||null}this.element.css({overflow:"hidden",position:"relative"});a=false;switch(this.options.animationEngine.toLowerCase().replace(/[ _\-]/g,"")){case "css":case "none":this.applyStyleFnName="css";break;case "jquery":this.applyStyleFnName="animate";a=true;break;default:this.applyStyleFnName=Modernizr.csstransitions?
"css":"animate"}this.getPositionStyles=(this.usingTransforms=this.options.transformsEnabled&&Modernizr.csstransforms&&Modernizr.csstransitions&&!a)?this._translate:this._positionAbs;this.options.getSortData=f.extend(this.options.getSortData,{"original-order":function(g,h){return h.elemCount}});this._setupAtoms(this.$allAtoms);a=f(document.createElement("div"));this.element.prepend(a);this.posTop=Math.round(a.position().top);this.posLeft=Math.round(a.position().left);a.remove();var e=this;setTimeout(function(){e.element.addClass(e.options.containerClass)},
0);this.options.resizable&&f(l).bind("smartresize.isotope",function(){e.element.isotope("resize")})},_isNewProp:function(a){return this.prevOpts?this.options[a]!==this.prevOpts[a]:true},_init:function(a){var b=this;f.each(["filter","sortBy","sortAscending"],function(c,d){b.isNew[d]=b._isNewProp(d)});this.$filteredAtoms=this.isNew.filter?this._filter(this.$allAtoms):this.$allAtoms;if(this.isNew.filter||this.isNew.sortBy||this.isNew.sortAscending)this._sort();this.reLayout(a)},option:function(a,b){if(f.isPlainObject(a))this.options=
f.extend(true,this.options,a);else if(a&&typeof b==="undefined")return this.options[a];else this.options[a]=b;return this},_setupAtoms:function(a){var b={position:"absolute"};if(this.usingTransforms){b.left=0;b.top=0}a.css(b).addClass(this.options.itemClass);this.updateSortData(a,true)},_filter:function(a){var b=this.options.filter===""?"*":this.options.filter;if(b){var c=this.options.hiddenClass,d="."+c,e=a.not(d),g=a.filter(d);d=g;a=a.filter(b);if(b!=="*"){d=g.filter(b);b=e.not(b).toggleClass(c);
b.addClass(c);this.styleQueue.push({$el:b,style:this.options.hiddenStyle})}this.styleQueue.push({$el:d,style:this.options.visibleStyle});d.removeClass(c)}return a},updateSortData:function(a,b){var c=this,d=this.options.getSortData,e,g;a.each(function(){e=f(this);g={};for(var h in d)g[h]=d[h](e,c);e.data("isotope-sort-data",g);b&&c.elemCount++})},_sort:function(){var a=this,b=function(d){return f(d).data("isotope-sort-data")[a.options.sortBy]},c=this.options.sortAscending?1:-1;this.$filteredAtoms.sort(function(d,
e){var g=b(d),h=b(e);return(g>h?1:g<h?-1:0)*c});return this},_translate:function(a,b){return{translate:[a,b]}},_positionAbs:function(a,b){return{left:a,top:b}},_pushPosition:function(a,b,c){b=this.getPositionStyles(b,c);this.styleQueue.push({$el:a,style:b})},layout:function(a,b){var c=this.options.layoutMode;this["_"+c+"Layout"](a);this.options.resizesContainer&&this.styleQueue.push({$el:this.element,style:this["_"+c+"GetContainerSize"]()});var d=this.applyStyleFnName==="animate"&&!this.isLaidOut?
"css":this.applyStyleFnName,e=this.options.animationOptions;f.each(this.styleQueue,function(g,h){h.$el[d](h.style,e)});this.styleQueue=[];b&&b.call(a);this.isLaidOut=true;return this},resize:function(){return this["_"+this.options.layoutMode+"Resize"]()},reLayout:function(a){return this["_"+this.options.layoutMode+"Reset"]().layout(this.$filteredAtoms,a)},addItems:function(a,b){var c=this._filterFind(a,this.options.itemSelector);this._setupAtoms(c);this.$allAtoms=this.$allAtoms.add(c);b&&b(c)},insert:function(a,
b){this.element.append(a);var c=this;this.addItems(a,function(d){d=c._filter(d);c.$filteredAtoms=c.$filteredAtoms.add(d)});this._sort().reLayout(b)},appended:function(a,b){var c=this;this.addItems(a,function(d){c.$filteredAtoms=c.$filteredAtoms.add(d);c.layout(d,b)})},remove:function(a){this.$allAtoms=this.$allAtoms.not(a);this.$filteredAtoms=this.$filteredAtoms.not(a);a.remove()},_shuffleArray:function(a){var b,c,d=a.length;if(d)for(;--d;){c=~~(Math.random()*(d+1));b=a[c];a[c]=a[d];a[d]=b}return a},
shuffle:function(a){this.options.sortBy="shuffle";this.$allAtoms=this._shuffleArray(this.$allAtoms);this.$filteredAtoms=this._filter(this.$allAtoms);return this.reLayout(a)},destroy:function(){var a=this.usingTransforms;this.$allAtoms.removeClass(this.options.hiddenClass+" "+this.options.itemClass).each(function(){this.style.position=null;this.style.top=null;this.style.left=null;this.style.opacity=null;if(a)this.style[k.transformProp]=null});for(var b=this.element[0].style,c=0,d=n.length;c<d;c++){var e=
n[c];b[e]=this.originalStyle[e]}this.element.unbind(".isotope").removeClass(this.options.containerClass).removeData("isotope");f(l).unbind(".isotope")},_getSegments:function(a,b){var c=b?"rowHeight":"columnWidth",d=b?"height":"width",e=b?"Height":"Width",g=b?"rows":"cols";this[d]=this.element[d]();e=this.options[a]&&this.options[a][c]||this.$filteredAtoms["outer"+e](true)||this[d];d=Math.floor(this[d]/e);d=Math.max(d,1);this[a][g]=d;this[a][c]=e;return this},_masonryPlaceBrick:function(a,b,c){b=Math.min.apply(Math,
c);for(var d=b+a.outerHeight(true),e=c.length,g=e,h=this.masonry.cols+1-e;e--;)if(c[e]===b)g=e;this._pushPosition(a,this.masonry.columnWidth*g+this.posLeft,b);for(e=0;e<h;e++)this.masonry.colYs[g+e]=d},_masonryLayout:function(a){var b=this;a.each(function(){var c=f(this),d=Math.ceil(c.outerWidth(true)/b.masonry.columnWidth);d=Math.min(d,b.masonry.cols);if(d===1)b._masonryPlaceBrick(c,b.masonry.cols,b.masonry.colYs);else{var e=b.masonry.cols+1-d,g=[],h,i;for(i=0;i<e;i++){h=b.masonry.colYs.slice(i,
i+d);g[i]=Math.max.apply(Math,h)}b._masonryPlaceBrick(c,e,g)}});return this},_masonryReset:function(){this.masonry={};this._getSegments("masonry");var a=this.masonry.cols;for(this.masonry.colYs=[];a--;)this.masonry.colYs.push(this.posTop);return this},_masonryResize:function(){var a=this.masonry.cols;this._getSegments("masonry");this.masonry.cols!==a&&this.reLayout();return this},_masonryGetContainerSize:function(){return{height:Math.max.apply(Math,this.masonry.colYs)-this.posTop}},_fitRowsLayout:function(a){this.width=
this.element.width();var b=this;a.each(function(){var c=f(this),d=c.outerWidth(true),e=c.outerHeight(true);if(b.fitRows.x!==0&&d+b.fitRows.x>b.width){b.fitRows.x=0;b.fitRows.y=b.fitRows.height}b._pushPosition(c,b.fitRows.x+b.posLeft,b.fitRows.y+b.posTop);b.fitRows.height=Math.max(b.fitRows.y+e,b.fitRows.height);b.fitRows.x+=d});return this},_fitRowsReset:function(){this.fitRows={x:0,y:0,height:0};return this},_fitRowsGetContainerSize:function(){return{height:this.fitRows.height}},_fitRowsResize:function(){return this.reLayout()},
_cellsByRowReset:function(){this.cellsByRow={};this._getSegments("cellsByRow");this.cellsByRow.rowHeight=this.options.cellsByRow.rowHeight||this.$allAtoms.outerHeight(true);return this},_cellsByRowLayout:function(a){var b=this,c=this.cellsByRow.cols;this.cellsByRow.atomsLen=a.length;a.each(function(d){var e=f(this),g=(d%c+0.5)*b.cellsByRow.columnWidth-e.outerWidth(true)/2+b.posLeft;d=(~~(d/c)+0.5)*b.cellsByRow.rowHeight-e.outerHeight(true)/2+b.posTop;b._pushPosition(e,g,d)});return this},_cellsByRowGetContainerSize:function(){return{height:Math.ceil(this.cellsByRow.atomsLen/
this.cellsByRow.cols)*this.cellsByRow.rowHeight+this.posTop}},_cellsByRowResize:function(){var a=this.cellsByRow.cols;this._getSegments("cellsByRow");this.cellsByRow.cols!==a&&this.reLayout();return this},_straightDownReset:function(){this.straightDown={y:0};return this},_straightDownLayout:function(a){var b=this;a.each(function(){var c=f(this);b._pushPosition(c,b.posLeft,b.straightDown.y+b.posTop);b.straightDown.y+=c.outerHeight(true)});return this},_straightDownGetContainerSize:function(){return{height:this.straightDown.y+
this.posTop}},_straightDownResize:function(){this.reLayout();return this},_masonryHorizontalPlaceBrick:function(a,b,c){b=Math.min.apply(Math,c);for(var d=b+a.outerWidth(true),e=c.length,g=e,h=this.masonryHorizontal.rows+1-e;e--;)if(c[e]===b)g=e;this._pushPosition(a,b,this.masonryHorizontal.rowHeight*g+this.posTop);for(e=0;e<h;e++)this.masonryHorizontal.rowXs[g+e]=d},_masonryHorizontalLayout:function(a){var b=this;a.each(function(){var c=f(this),d=Math.ceil(c.outerHeight(true)/b.masonryHorizontal.rowHeight);
d=Math.min(d,b.masonryHorizontal.rows);if(d===1)b._masonryHorizontalPlaceBrick(c,b.masonryHorizontal.rows,b.masonryHorizontal.rowXs);else{var e=b.masonryHorizontal.rows+1-d,g=[],h,i;for(i=0;i<e;i++){h=b.masonryHorizontal.rowXs.slice(i,i+d);g[i]=Math.max.apply(Math,h)}b._masonryHorizontalPlaceBrick(c,e,g)}});return this},_masonryHorizontalReset:function(){this.masonryHorizontal={};this._getSegments("masonryHorizontal",true);var a=this.masonryHorizontal.rows;for(this.masonryHorizontal.rowXs=[];a--;)this.masonryHorizontal.rowXs.push(this.posLeft);
return this},_masonryHorizontalResize:function(){var a=this.masonryHorizontal.rows;this._getSegments("masonryHorizontal",true);this.masonryHorizontal.rows!==a&&this.reLayout();return this},_masonryHorizontalGetContainerSize:function(){return{width:Math.max.apply(Math,this.masonryHorizontal.rowXs)-this.posLeft}},_fitColumnsReset:function(){this.fitColumns={x:0,y:0,width:0};return this},_fitColumnsLayout:function(a){var b=this;this.height=this.element.height();a.each(function(){var c=f(this),d=c.outerWidth(true),
e=c.outerHeight(true);if(b.fitColumns.y!==0&&e+b.fitColumns.y>b.height){b.fitColumns.x=b.fitColumns.width;b.fitColumns.y=0}b._pushPosition(c,b.fitColumns.x+b.posLeft,b.fitColumns.y+b.posTop);b.fitColumns.width=Math.max(b.fitColumns.x+d,b.fitColumns.width);b.fitColumns.y+=e});return this},_fitColumnsGetContainerSize:function(){return{width:this.fitColumns.width}},_fitColumnsResize:function(){return this.reLayout()},_cellsByColumnReset:function(){this.cellsByColumn={};this._getSegments("cellsByColumn",
true);this.cellsByColumn.columnWidth=this.options.cellsByColumn.columnWidth||this.$allAtoms.outerHeight(true);return this},_cellsByColumnLayout:function(a){var b=this,c=this.cellsByColumn.rows;this.cellsByColumn.atomsLen=a.length;a.each(function(d){var e=f(this),g=(~~(d/c)+0.5)*b.cellsByColumn.columnWidth-e.outerWidth(true)/2+b.posLeft;d=(d%c+0.5)*b.cellsByColumn.rowHeight-e.outerHeight(true)/2+b.posTop;b._pushPosition(e,g,d)});return this},_cellsByColumnGetContainerSize:function(){return{width:Math.ceil(this.cellsByColumn.atomsLen/
this.cellsByColumn.rows)*this.cellsByColumn.columnWidth+this.posLeft}},_cellsByColumnResize:function(){var a=this.cellsByColumn.rows;this._getSegments("cellsByColumn",true);this.cellsByColumn.rows!==a&&this.reLayout();return this}};f.fn.imagesLoaded=function(a){var b=this.find("img"),c=b.length,d=this;b.length||a.call(this);b.bind("load",function(){--c<=0&&a.call(d)}).each(function(){if(this.complete||this.complete===s){var e=this.src;this.src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///ywAAAAAAQABAAACAUwAOw==";
this.src=e}});return this};f.widget=f.widget||{};f.widget.bridge=f.widget.bridge||function(a,b){f.fn[a]=function(c){var d=typeof c==="string",e=Array.prototype.slice.call(arguments,1),g=this;c=!d&&e.length?f.extend.apply(null,[true,c].concat(e)):c;if(d&&c.charAt(0)==="_")return g;d?this.each(function(){var h=f.data(this,a);if(!h)return f.error("cannot call methods on "+a+" prior to initialization; attempted to call method '"+c+"'");if(!f.isFunction(h[c]))return f.error("no such method '"+c+"' for "+
a+" widget instance");var i=h[c].apply(h,e);if(i!==h&&i!==s){g=i;return false}}):this.each(function(){var h=f.data(this,a);h?h.option(c||{})._init():f.data(this,a,new b(c,this))});return g}};f.widget.bridge("isotope",f.Isotope)})(window,jQuery);







var $container = $('#artboard');

$('#filters').find('a').click(function(){
  // get href attribute, minus the #, plus a . to make it a class
  var filterName = '.' + $(this).attr('href').slice(1);
  filterName = filterName === '.show-all' ? '*' : filterName;
  $container.isotope({ filter: filterName })
  return false;
});

$container.imagesLoaded( function(){
  $(this).isotope({
    itemSelector : 'img.thumb'
  });
});


// switches selected class on buttons
$('#options').find('.option-set a').click(function(){
  var $this = $(this);

  // don't proceed if already selected
  if ( !$this.hasClass('selected') ) {
    $this.parents('.option-set').find('.selected').removeClass('selected');
    $this.addClass('selected');
  }

});


$container.isotope({
  itemSelector : '.element',
  // layoutMode : 'fitRows',
  masonry : {
    columnWidth : 120
  },
  animationEngine : $.browser.opera ? 'jquery' : 'best-available',
  // animationEngine : 'jquery',
  getSortData : {
    symbol : function( $elem ) {
      return $elem.attr('data-symbol');
    },
    category : function( $elem ) {
      return $elem.attr('data-category');
    },
    number : function( $elem ) {
      return parseInt( $elem.find('.number').text(), 10 );
    },
    weight : function( $elem ) {
      return parseFloat( $elem.find('.weight').text().replace( /[\(\)]/g, '') );
    },
    name : function ( $elem ) {
      return $elem.find('.name').text();
    }
  }
});

