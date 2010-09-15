/*
Copyright (c) 2010, Yahoo! Inc. All rights reserved.
Code licensed under the BSD License:
http://developer.yahoo.com/yui/license.html
version: 3.2.0PR1
build: nightly
*/
YUI.add("editor-lists",function(F){var E=function(){E.superclass.constructor.apply(this,arguments);},B="li",C="ol",D="ul",A="host";F.extend(E,F.Base,{_onNodeChange:function(L){var J=this.get(A).getInstance(),G,O,P,H,I,M,N=false,Q,K=false;if(F.UA.ie&&L.changedType==="enter"){if(L.changedNode.test(B+", "+B+" *")){L.changedEvent.halt();L.preventDefault();O=L.changedNode;P=J.Node.create("<"+B+">"+E.NON+"</"+B+">");if(!O.test(B)){O=O.ancestor(B);}O.insert(P,"after");G=new J.Selection();G.selectNode(P.get("firstChild"),true,false);}}if(L.changedType==="tab"){if(L.changedNode.test(B+", "+B+" *")){L.changedEvent.halt();L.preventDefault();O=L.changedNode;I=L.changedEvent.shiftKey;M=O.ancestor(C+","+D);Q=D;if(M.get("tagName").toLowerCase()===C){Q=C;}if(!O.test(B)){O=O.ancestor(B);}if(I){if(O.ancestor(B)){O.ancestor(B).insert(O,"after");N=true;K=true;}}else{if(O.previous(B)){H=J.Node.create("<"+Q+"></"+Q+">");O.previous(B).append(H);H.append(O);N=true;}}}if(N){if(!O.test(B)){O=O.ancestor(B);}O.all(E.REMOVE).remove();if(F.UA.ie){O=O.append(E.NON).one(E.NON_SEL);}(new J.Selection()).selectNode(O,true,K);}}},initializer:function(){this.get(A).on("nodeChange",F.bind(this._onNodeChange,this));}},{NON:'<span class="yui-non">&nbsp;</span>',NON_SEL:"span.yui-non",REMOVE:"br",NAME:"editorLists",NS:"lists",ATTRS:{host:{value:false}}});F.namespace("Plugin");F.Plugin.EditorLists=E;F.mix(F.Plugin.ExecCommand.COMMANDS,{insertunorderedlist:function(I){var H=this.get("host").getInstance(),G;this.get("host")._execCommand(I,"");},insertorderedlist:function(I){var H=this.get("host").getInstance(),G;this.get("host")._execCommand(I,"");}});},"3.2.0PR1",{skinnable:false,requires:["editor-base"]});