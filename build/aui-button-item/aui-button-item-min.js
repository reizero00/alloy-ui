AUI.add("aui-button-item",function(D){var H=D.Lang,F=D.ClassNameManager.getClassName,P="buttonitem",I="icon",N="state",G=F(P),O=F(P,"icon"),M=F(P,"label"),C=F(P,"icon","label"),L=F(I),E='<button type="button"></button>',B='<span class="'+[O,L].join(" ")+'"></span>',J='<span class="'+M+'"></span>';var K=function(A){if(H.isString(A)){A={icon:A};}K.superclass.constructor.call(this,A);};K.NAME=P;K.ATTRS={activeState:{value:false},classNames:{},defaultState:{},handler:{lazyAdd:false,value:null,setter:function(U){var A=this;var T=U;var R=A;var Q=A;var S="click";if(H.isObject(T)){var V=T;T=V.fn||T;R=V.context||R;S=V.type||S;}if(H.isFunction(T)){A.on(S,D.rbind(T,R,Q,V.args));}return U;}},hoverState:{},icon:{value:""},id:{valueFn:function(){return D.guid();}},label:{value:""}};D.extend(K,D.Component,{BOUNDING_TEMPLATE:E,CONTENT_TEMPLATE:null,renderUI:function(){var A=this;A._renderStates();},bindUI:function(){var A=this;A.after("iconChange",A._afterIconChange);A.after("labelChange",A._afterLabelChange);},syncUI:function(){var A=this;var R=A.get("icon");var Q=A.get("label");if(R){A._uiSetIcon(R);}if(Q){A._uiSetLabel(Q);}},_afterIconChange:function(Q){var A=this;A._uiSetIcon(Q.newVal,Q.prevVal);},_afterLabelChange:function(Q){var A=this;A._uiSetLabel(Q.newVal);},_getIconNode:function(){var A=this;return A._iconNode||A._renderIcon();},_getLabelNode:function(){var A=this;return A._labelNode||A._renderLabel();},_renderIcon:function(){var A=this;var Q=D.Node.create(B);A._iconNode=Q;A.get("boundingBox").appendChild(Q);return Q;},_renderLabel:function(){var A=this;var Q=D.Node.create(J);A._labelNode=Q;A.get("boundingBox").appendChild(Q);return Q;},_getState:function(Q,R){var A=this;var T=A.get(Q);var S=T;if(R){T=R.get(Q);if(!H.isUndefined(T)){S=T;}}return S;},_renderStates:function(T){var A=this;var S=A.get("parent");var R=A._getState("activeState",S);var V=A._getState("classNames",S);var Q=A._getState("defaultState",S);var U=A._getState("hoverState",S);A.plug(D.StateInteractionPlugin,{activeState:R,classNames:V,defaultState:Q,hoverState:U});},_uiSetIcon:function(R,U){var A=this;var Q=A._getIconNode();var S="show";if(!R){S="hide";}R=F(I,R);if(U){U=F(I,U);}Q.replaceClass(U,R);var T=(R&&A.get("label"));Q[S]();A.get("boundingBox").toggleClass(C,T);},_uiSetLabel:function(R){var A=this;var Q=A._getLabelNode();var S="show";if(!R){S="hide";}Q.text(R);Q[S]();var T=(R&&A.get("icon"));A.get("boundingBox").toggleClass(C,T);}});D.ButtonItem=D.Base.build(P,K,[D.WidgetChild],{dynamic:false});},"@VERSION@",{requires:["aui-base","aui-state-interaction","widget-child"],skinnable:true});