(() => {
const c=window.EVERYDAY_SITE||{},a=document.getElementById('download');
let owner=c.owner||'',repo=c.repo||'everyday-downloads';
if(location.hostname.endsWith('.github.io')){owner=location.hostname.slice(0,-10);repo=location.pathname.split('/').filter(Boolean)[0]||repo;}
if(owner)a.href='https://github.com/'+encodeURIComponent(owner)+'/'+encodeURIComponent(repo)+'/releases/download/'+encodeURIComponent(c.tag)+'/'+encodeURIComponent(c.asset);
else {a.href='INSTALL.md';a.textContent='Get APK from private release';}
document.getElementById('theme').onclick=()=>document.body.classList.toggle('dark');
if(matchMedia('(prefers-color-scheme:dark)').matches)document.body.classList.add('dark');
document.getElementById('copy').onclick=async()=>{try{await navigator.clipboard.writeText(document.getElementById('checksum').textContent);document.getElementById('copy-status').textContent='Checksum copied';}catch{document.getElementById('copy-status').textContent='Select and copy the checksum below';}};
})();
