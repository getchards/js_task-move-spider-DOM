var t=document.querySelector(".spider"),e=document.querySelector(".wall");t.style.position="absolute",e.addEventListener("click",function(i){var l=t.offsetWidth,o=t.offsetHeight,n=e.getBoundingClientRect(),c=i.clientX-n.left-l/2,d=i.clientY-n.top-o/2;c<0?c=0:c+l>n.width&&(c=n.width-l),d<0?d=0:d+o>n.height&&(d=n.height-o),t.style.left=c-9+"px",t.style.top=d-9+"px"});
//# sourceMappingURL=index.d361923a.js.map
