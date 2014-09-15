define("dummy/app",["ember","ember/resolver","ember/load-initializers","exports"],function(t,e,a,o){"use strict";var s=t["default"],n=e["default"],i=a["default"];s.MODEL_FACTORY_INJECTIONS=!0;var p=s.Application.extend({modulePrefix:"dummy",Resolver:n});i(p,"dummy"),o["default"]=p}),define("dummy/components/tool-tip",["ember","ember-cli-tooltip/components/tool-tip","exports"],function(t,e,a){"use strict";var o=(t["default"],e["default"]);a["default"]=o}),define("dummy/config/environment",["exports"],function(t){"use strict";t["default"]={environment:"production",baseURL:"/ember-tooltip",locationType:"auto",EmberENV:{FEATURES:{}},APP:{}}}),define("dummy/config/environments/production",["exports"],function(t){"use strict";t["default"]={environment:"production",baseURL:"/ember-tooltip",locationType:"auto",EmberENV:{FEATURES:{}},APP:{}}}),define("dummy/router",["ember","exports"],function(t,e){"use strict";var a=t["default"],o=a.Router.extend({location:DummyENV.locationType});o.map(function(){}),e["default"]=o}),define("dummy/templates/application",["ember","exports"],function(t,e){"use strict";var a=t["default"];e["default"]=a.Handlebars.template(function(t,e,o,s,n){this.compilerInfo=[4,">= 1.0.0"],o=this.merge(o,a.Handlebars.helpers),n=n||{};var i,p="";return n.buffer.push("<h2 id='title'>Welcome to Ember.js</h2>\n\n"),i=o._triageMustache.call(e,"outlet",{hash:{},hashTypes:{},hashContexts:{},contexts:[e],types:["ID"],data:n}),(i||0===i)&&n.buffer.push(i),n.buffer.push("\n"),p})}),define("dummy/templates/components/tool-tip",["ember","exports"],function(t,e){"use strict";var a=t["default"];e["default"]=a.Handlebars.template(function(t,e,o,s,n){this.compilerInfo=[4,">= 1.0.0"],o=this.merge(o,a.Handlebars.helpers),n=n||{};var i="",p=this.escapeExpression;return n.buffer.push(p(o._triageMustache.call(e,"text",{hash:{unescaped:"true"},hashTypes:{unescaped:"STRING"},hashContexts:{unescaped:e},contexts:[e],types:["ID"],data:n}))),n.buffer.push('\n<div class="tip">\n  <span class="heading">'),n.buffer.push(p(o._triageMustache.call(e,"heading",{hash:{unescaped:"true"},hashTypes:{unescaped:"STRING"},hashContexts:{unescaped:e},contexts:[e],types:["ID"],data:n}))),n.buffer.push("</span><br/><br/>\n  <p>"),n.buffer.push(p(o._triageMustache.call(e,"tip",{hash:{unescaped:"true"},hashTypes:{unescaped:"STRING"},hashContexts:{unescaped:e},contexts:[e],types:["ID"],data:n}))),n.buffer.push("</p>\n</div>\n"),i})}),define("dummy/templates/index",["ember","exports"],function(t,e){"use strict";var a=t["default"];e["default"]=a.Handlebars.template(function(t,e,o,s,n){this.compilerInfo=[4,">= 1.0.0"],o=this.merge(o,a.Handlebars.helpers),n=n||{};var i,p,r="",l=o.helperMissing,h=this.escapeExpression;return n.buffer.push('<p>Below find a selection of tooltips, at different positions. Hover over each\nto see the effect</p>\n\n<div style="float: left">\n    '),n.buffer.push(h((i=o["tool-tip"]||e&&e["tool-tip"],p={hash:{text:"I'm top left",position:"top left",tagName:"h2",heading:"Please note:",tip:"I appear on the top left."},hashTypes:{text:"STRING",position:"STRING",tagName:"STRING",heading:"STRING",tip:"STRING"},hashContexts:{text:e,position:e,tagName:e,heading:e,tip:e},contexts:[],types:[],data:n},i?i.call(e,p):l.call(e,"tool-tip",p)))),n.buffer.push('\n</div>\n<div style="float: right">\n    '),n.buffer.push(h((i=o["tool-tip"]||e&&e["tool-tip"],p={hash:{text:"I'm top right",position:"top right",tagName:"h2",heading:"Please note:",tip:"I appear on the top right."},hashTypes:{text:"STRING",position:"STRING",tagName:"STRING",heading:"STRING",tip:"STRING"},hashContexts:{text:e,position:e,tagName:e,heading:e,tip:e},contexts:[],types:[],data:n},i?i.call(e,p):l.call(e,"tool-tip",p)))),n.buffer.push('\n</div>\n\n<div style="clear: both"></div>\n\n<div style="float: left">\n    '),n.buffer.push(h((i=o["tool-tip"]||e&&e["tool-tip"],p={hash:{text:"I'm bottom left",position:"bottom left",tagName:"h3",heading:"Please note:",tip:"I appear on the botton left."},hashTypes:{text:"STRING",position:"STRING",tagName:"STRING",heading:"STRING",tip:"STRING"},hashContexts:{text:e,position:e,tagName:e,heading:e,tip:e},contexts:[],types:[],data:n},i?i.call(e,p):l.call(e,"tool-tip",p)))),n.buffer.push('\n</div>\n\n<div style="float: right">\n    '),n.buffer.push(h((i=o["tool-tip"]||e&&e["tool-tip"],p={hash:{text:"I'm bottom right",position:"bottom right",tagName:"div",heading:"Please note:",tip:"I appear on the botton right."},hashTypes:{text:"STRING",position:"STRING",tagName:"STRING",heading:"STRING",tip:"STRING"},hashContexts:{text:e,position:e,tagName:e,heading:e,tip:e},contexts:[],types:[],data:n},i?i.call(e,p):l.call(e,"tool-tip",p)))),n.buffer.push("\n</div>\n"),r})});