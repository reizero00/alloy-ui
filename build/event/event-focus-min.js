/*
Copyright (c) 2010, Yahoo! Inc. All rights reserved.
Code licensed under the BSD License:
http://developer.yahoo.com/yui/license.html
version: 3.2.0PR1
build: nightly
*/
YUI.add("event-focus",function(e){var d=e.Event,c=e.Lang,a=c.isString,b=c.isFunction(e.DOM.create('<p onbeforeactivate=";">').onbeforeactivate);function f(h,g,j){var i="_"+h+"Notifiers";e.Event.define(h,{_attach:function(l,m,k){if(e.DOM.isWindow(l)){return d._attach([h,function(n){m.fire(n);},l]);}else{return d._attach([g,this._proxy,l,this,m,k],{capture:true});}},_proxy:function(o,s,p){var m=o.target,q=m.getData(i),t=e.stamp(o.currentTarget._node),k=(b||o.target!==o.currentTarget),l=s.handle.sub,r=[m,o].concat(l.args||[]),n;s.currentTarget=(p)?m:o.currentTarget;s.container=(p)?o.currentTarget:null;if(!l.filter||l.filter.apply(m,r)){if(!q){q={};m.setData(i,q);if(k){n=d._attach([j,this._notify,m._node]).sub;n.once=true;}}if(!q[t]){q[t]=[];}q[t].push(s);if(!k){this._notify(o);}}},_notify:function(p,l){var m=p.currentTarget,r=m.getData(i),s=m.get("ownerDocument")||m,q=m,k=[],t,n,o;if(r){while(q&&q!==s){k.push.apply(k,r[e.stamp(q)]||[]);q=q.get("parentNode");}k.push.apply(k,r[e.stamp(s)]||[]);for(n=0,o=k.length;n<o;++n){t=k[n];p.currentTarget=k[n].currentTarget;if(t.container){p.container=t.container;}else{delete p.container;}t.fire(p);}m.clearData(i);}},on:function(m,k,l){k.onHandle=this._attach(m._node,l);},detach:function(l,k){k.onHandle.detach();},delegate:function(n,l,m,k){if(a(k)){l.filter=e.delegate.compileFilter(k);}l.delegateHandle=this._attach(n._node,m,true);},detachDelegate:function(l,k){k.delegateHandle.detach();}},true);}if(b){f("focus","beforeactivate","focusin");f("blur","beforedeactivate","focusout");}else{f("focus","focus","focus");f("blur","blur","blur");}},"3.2.0PR1",{requires:["event-synthetic"]});