(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const i of t.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&s(i)}).observe(document,{childList:!0,subtree:!0});function n(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function s(e){if(e.ep)return;e.ep=!0;const t=n(e);fetch(e.href,t)}})();console.log("Hello world!");const l=75,c=document.querySelectorAll(".ellipsis");c.forEach(r=>{if(r.innerHTML.length>l){let o=r.innerHTML.substring(0,l)+"...";r.innerHTML=o}});var u=[].slice.call(document.querySelectorAll("#myTab button"));u.forEach(function(r){var o=new bootstrap.Tab(r);r.addEventListener("click",function(n){n.preventDefault(),o.show()})});
