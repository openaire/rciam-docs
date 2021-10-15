"use strict";(self.webpackChunkrciam_docs=self.webpackChunkrciam_docs||[]).push([[372],{3905:function(e,r,t){t.d(r,{Zo:function(){return p},kt:function(){return f}});var n=t(7294);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function i(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function c(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?i(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function a(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var s=n.createContext({}),u=function(e){var r=n.useContext(s),t=r;return e&&(t="function"==typeof e?e(r):c(c({},r),e)),t},p=function(e){var r=u(e.components);return n.createElement(s.Provider,{value:r},e.children)},l={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},d=n.forwardRef((function(e,r){var t=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,p=a(e,["components","mdxType","originalType","parentName"]),d=u(t),f=o,m=d["".concat(s,".").concat(f)]||d[f]||l[f]||i;return t?n.createElement(m,c(c({ref:r},p),{},{components:t})):n.createElement(m,c({ref:r},p))}));function f(e,r){var t=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var i=t.length,c=new Array(i);c[0]=d;var a={};for(var s in r)hasOwnProperty.call(r,s)&&(a[s]=r[s]);a.originalType=e,a.mdxType="string"==typeof e?e:o,c[1]=a;for(var u=2;u<i;u++)c[u]=t[u];return n.createElement.apply(null,c)}return n.createElement.apply(null,t)}d.displayName="MDXCreateElement"},6777:function(e,r,t){t.r(r),t.d(r,{frontMatter:function(){return a},contentTitle:function(){return s},metadata:function(){return u},toc:function(){return p},default:function(){return d}});var n=t(7462),o=t(3366),i=(t(7294),t(3905)),c=["components"],a={sidebar_position:1},s="Overview",u={unversionedId:"overview",id:"overview",isDocsHomePage:!1,title:"Overview",description:"Identity Access Management for Research Communities (RCIAM) enables researchers",source:"@site/docs/overview.md",sourceDirName:".",slug:"/overview",permalink:"/rciam-docs/docs/overview",editUrl:"https://github.com/facebook/docusaurus/edit/main/website/docs/overview.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",next:{title:"Sign up",permalink:"/rciam-docs/docs/user/signup"}},p=[],l={toc:p};function d(e){var r=e.components,t=(0,o.Z)(e,c);return(0,i.kt)("wrapper",(0,n.Z)({},l,t,{components:r,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"overview"},"Overview"),(0,i.kt)("p",null,"Identity Access Management for Research Communities (RCIAM) enables researchers\nto securely access and share common resources and services using identities\nfrom eduGAIN, the global network of academic identity federations. For users\ncoming from the industry or citizen scientists who may not have access to\neduGAIN, RCIAM supports additional trusted authentication providers, such as\nsocial networks, community identity providers and other platforms such as\nORCID that can provide federated user identities. RCIAM allows connecting\nservices using popular protocols, such as OpenID Connect and SAML, to securely\nauthenticate and identify their users, organise them in groups, assign them\nroles and centrally manage access rights for accessing protected resources."))}d.isMDXComponent=!0}}]);