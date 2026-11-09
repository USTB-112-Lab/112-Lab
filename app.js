const $=(s,r=document)=>r.querySelector(s), $$=(s,r=document)=>[...r.querySelectorAll(s)];
const esc=s=>String(s??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const fieldName=id=>fields.find(f=>f.id===id)?.name||'';
const personName=id=>people.find(p=>p.id===id)?.name||'';
const main=$('#main'),dialog=$('#detail-dialog');
let route='home',filter='all',query='',sort='newest',graph=null;
function avatar(person, extra = '') {
  if (person.photo) return `<img class="portrait roster-photo ${extra}" src="${esc(person.photo)}" loading="lazy" alt="${esc(person.name)}的档案照片">`;
  if (person.portrait == null) return `<div class="portrait initials ${extra}" role="img" aria-label="姓名头像">${esc(person.name.slice(-2))}</div>`;
  const x = person.portrait % 4 * 100 / 3, y = Math.floor(person.portrait / 4) * 50;
  return `<div class="portrait ${extra}" role="img" aria-label="${esc(person.name)}的卡通占位头像" style="background-position:${x}% ${y}%"></div>`;
}
const demo = () => '';

function heading(en,cn,sub,description){return `<div class="page-head"><span class="eyebrow">112 LAB / ${en}</span><h1>${cn}<em>${sub}</em></h1><p>${description}</p>${demo()}</div>`}
function tabs(items,active='all'){return `<div class="tabs" role="group" aria-label="分类筛选">${items.map(([v,l])=>`<button class="tab ${v===active?'active':''}" data-filter="${v}" aria-pressed="${v===active}">${l}</button>`).join('')}</div>`}
const fieldTabs=()=>tabs([['all','全部方向'],...fields.map(f=>[f.id,f.name])],filter);
const degreeTabs=()=>tabs([['all','全部成员'],['博士','博士'],['硕士','硕士'],['本科','本科']],filter);
function searchInput(label='搜索姓名、研究方向'){return `<label><span class="sr-only">${label}</span><input class="search" type="search" placeholder="${label}  ↗" value="${esc(query)}" aria-label="${label}"></label>`}
function noticeHTML(n) {
  return `<button class="notice ${n.pinned ? 'pinned-notice' : ''}" data-notice="${n.id}"><span class="notice-date">${n.date.slice(5)}<small>${n.date.slice(0,4)}</small></span>
    <span><span class="notice-type">${n.pinned ? '<b class="pin-label">置顶</b>实验室使命' : esc(n.type)+' · 示例'}</span><span class="notice-title">${esc(n.title)}</span></span><span>↗</span></button>`;
}
function galleryTile(g,i){return `<button class="gallery-tile" data-gallery="${i}" aria-label="查看${g.title}"><div class="gallery-img" role="img" aria-label="${g.desc}" style="background-position:${g.quadrant%2*100}% ${Math.floor(g.quadrant/2)*100}%"></div><div class="gallery-caption"><h3>${g.title}</h3><span>${g.date} ↗</span></div><p class="gallery-label">${g.category} / AI 卡通插画</p></button>`}
function alumniAffiliation(record) {
  if (!record) return '';
  const current = record.currentAffiliation;
  const destination = record.destination;
  if (!current && !destination) return '';
  if (!current && destination === '巴基斯坦') {
    return `<p class="archive-destination">毕业去向 · ${esc(destination)}</p>`;
  }
  const label = current ? '任职单位（据资料）' : '毕业去向（据档案）';
  const name = current ? current.organization : destination;
  return `<div class="alumni-workplace"><span>${label}</span><strong>${esc(name)}</strong>${current?.position ? `<small>${esc(current.position)}</small>` : ''}</div>`;
}
function card(person, isFaculty = false) {
  const details = [person.title];
  if (person.role === '学生') details.push(`${person.year} 级`);
  if (person.role === '毕业生') details.push(`${person.year} 届`);
  return `<button class="person-card ${isFaculty?'faculty-card':''}" data-person="${person.id}" data-member-view="${person.role}" aria-label="查看${esc(person.name)}的个人资料">
    ${avatar(person)}<div class="person-info"><h3 class="person-name">${esc(person.name)}<small>↗</small></h3>
    ${person.pinyin?`<p class="person-en">${esc(person.pinyin)}</p>`:''}<p class="person-title">${details.map(esc).join(' · ')}</p>
    ${person.role === '毕业生' ? alumniAffiliation(person) : ''}${person.field?`<span class="person-field">${esc(fieldName(person.field))}</span>`:''}</div></button>`;
}
function renderMembers(){const isFaculty=route==='faculty',isAlumni=route==='alumni';const data=isFaculty?faculty:isAlumni?alumni:students;let list=data.filter(p=>(filter==='all'||(isFaculty?p.field:p.degree)===filter)&&`${p.name} ${p.pinyin} ${fieldName(p.field)} ${p.title} ${p.topic||''} ${p.research||''} ${p.mentor||''} ${p.group||''} ${p.destination||''} ${p.currentAffiliation?.organization||''} ${p.year||''}`.toLowerCase().includes(query.toLowerCase()));list.sort(isFaculty?(a,b)=>a.pinyin.localeCompare(b.pinyin):sort==='age'?(a,b)=>a.entryAge-b.entryAge:sort==='oldest'?(a,b)=>a.year-b.year:(a,b)=>b.year-a.year);const container=$('#member-results');if(!list.length){container.innerHTML='<p class="empty">当前资料中没有该分类或关键词对应的成员。</p>';return}let html=`<p class="result-count">${list.length} 位${isFaculty?'教师':isAlumni?'毕业生':'在读成员'} · ${isFaculty?'按姓名拼音 A–Z 排列':sort==='age'?'按入学年龄从小到大排列':isAlumni?'按毕业年份排列':'按入学年份排列'}</p>`;if(isFaculty)html+=`<div class="faculty-grid">${list.map(p=>card(p,true)).join('')}</div>`;else{const grouping=sort==='age'?'entryAge':'year';const groups=[...new Set(list.map(p=>p[grouping]))];html+=groups.map(y=>`<h2 class="group-head"><strong>${y}${sort==='age'?' 岁':''}</strong><span>${sort==='age'?'入学年龄':isAlumni?'届毕业生':'级'} · ${list.filter(p=>p[grouping]===y).length} 人</span></h2><div class="people-grid">${list.filter(p=>p[grouping]===y).map(p=>card(p)).join('')}</div>`).join('')}container.innerHTML=html;}
function membersPage(){const facultyPage=route==='faculty',alumniPage=route==='alumni';main.innerHTML=heading(facultyPage?'FACULTY':alumniPage?'ALUMNI':'STUDENTS',facultyPage?'教师':alumniPage?'毕业生':'学生',facultyPage?'Faculty':alumniPage?'Alumni':'Students',facultyPage?'按姓名拼音 A–Z 排列。点击头像查看教师分工和关联成果。头像暂用卡通形象。':alumniPage?'按毕业年份浏览校友。单位信息按资料区分任职单位与毕业去向。':'按当前培养阶段的入学年份浏览在读成员，点击查看研究方向、导师和所属小组。')+`<div class="page-body"><div class="toolbar">${facultyPage?'<span class="result-count">FACULTY DIRECTORY</span>':degreeTabs()}<div class="controls">${alumniPage?'<a class="employment-link" href="#network?relation=company">查看同公司校友 ↗</a>':''}${searchInput(alumniPage?'搜索姓名、单位或年份':'搜索姓名、研究方向')}${facultyPage?'':`<select id="sort" aria-label="成员排序"><option value="newest">${alumniPage?'毕业':'入学'}年份 · 由近到远</option><option value="oldest">${alumniPage?'毕业':'入学'}年份 · 由远到近</option></select>`}</div></div><div id="member-results" aria-live="polite"></div></div>`;renderMembers();}
function renderWorks() {
  const patent = route === 'patents';
  const records = (patent ? patents : papers).filter(item => {
    const text = [item.journal,item.title,item.byline,item.date,item.doi, ...item.authors.map(personName)].filter(Boolean).join(' ').toLowerCase();
    return (filter === 'all' || item.field === filter) && text.includes(query.trim().toLowerCase());
  }).sort((a,b) => sort==='oldest' ? a.date.localeCompare(b.date) : b.date.localeCompare(a.date));
  const renderPaper = item => `<article class="journal-entry"><div class="journal-top"><strong class="pub-journal">${esc(item.journal)}</strong><time datetime="${item.date}">${item.date}</time></div>
    <h3><button data-paper="${item.id}">${esc(item.title)}</button></h3><p class="byline">${esc(item.byline)}</p><a class="doi-link" href="https://doi.org/${item.doi}" target="_blank" rel="noopener">DOI&nbsp; ${item.doi} ↗</a></article>`;
  const renderPatent = item => `<article class="publication patent"><span class="pub-index">P</span><div><h3>${esc(item.title)}</h3><div class="pub-meta"><span>${item.type} · 展示样例</span><span>示例授权日期 ${item.date}</span></div></div><button class="round-arrow" data-patent="${item.id}" aria-label="查看专利样例">↗</button></article>`;
  $('#works-results').innerHTML = `<p class="result-count">${records.length} ${patent?'条专利样例':'篇论文'} · ${patent?'按示例授权日期排列':'按首次在线发表日期排列'}</p>` +
    (records.length ? records.map(patent?renderPatent:renderPaper).join('') : '<p class="empty">暂无匹配的记录。</p>');
}
function worksPage() {
  const patent = route === 'patents';
  main.innerHTML = heading(patent?'PATENTS':'PUBLICATIONS',patent?'专利':'论文',patent?'Patents':'Publications',patent?'当前展示为专利版式样例。':'选自实验室资料所列成果，按首次在线发表时间排序。点击题名可查看作者与原文。') +
    `<div class="page-body"><div class="toolbar">${patent?fieldTabs():'<span class="archive-label">SELECTED PUBLICATIONS</span>'}<div class="controls">${searchInput(patent?'搜索专利、年份':'搜索期刊、题名、作者或 DOI')}<select id="sort" aria-label="成果时间排序"><option value="newest">由近到远</option><option value="oldest">由远到近</option></select></div></div><div id="works-results" aria-live="polite"></div></div>`;
  renderWorks();
}
function galleryPage(){main.innerHTML=heading('LIFE AT 112','图片','Moments','学术讨论、实验室日常、毕业与相聚。暂用卡通插画呈现，后续可替换为团队真实照片。')+`<div class="page-body"><div class="toolbar">${tabs([['all','全部瞬间'],['日常','实验室日常'],['学术','学术交流'],['毕业','毕业时刻']],filter)}<span class="result-count">4 个卡通场景 / AI 生成</span></div><div class="gallery-grid" id="gallery-results"></div></div>`;renderGallery()}
function renderGallery(){$('#gallery-results').innerHTML=gallery.map((g,i)=>({g,i})).filter(({g})=>filter==='all'||g.category===filter).map(({g,i})=>galleryTile(g,i)).join('')}
function openModal(html){$('#detail-content').innerHTML=html;if(!dialog.open)dialog.showModal()}
function profile(id, view = '') {
  const member = personById.get(id);
  if (!member) return;
  const person = view==='学生' ? (students.find(p=>p.id===id)||member) : view==='毕业生' ? (alumni.find(p => p.id===id)||member) : member;
  const record = person.role === '毕业生' ? person : person.alumniRecord;
  const facts = [['身份', person.identities || person.title]];
  if (person.role==='学生') {
    facts.push(['培养经历',person.enrollment],['导师',person.mentor]);
    if(person.group) facts.push(['所属小组',person.group]);
    if(person.research) facts.push(['研究方向',person.research]);
  }
  if(person.studentRecord) facts.push(['在读身份',person.studentRecord.title+' · '+person.studentRecord.enrollment],['导师',person.studentRecord.mentor]);
  if (person.field) facts.push(['研究方向',fieldName(person.field)]);
  if (record) {
    facts.push(['毕业信息',`${record.year} 届 · ${record.degree}`],['培养经历',record.education]);
    if (record.currentAffiliation && record.destination) facts.push(['档案中的毕业去向',record.destination]);
    if (record.continuation) facts.push(['后续培养',record.continuation]);
  }
  const related = papers.filter(p => p.authors.includes(id));
  const teacherView = person.role === '教师';
  const about = teacherView ? (person.research || record?.topic || '待补充') : (record?.topic || person.bio);
  const source = person.source ? person.source : record ? `资料来源：《毕业生信息》第 ${record.sourcePages.join('、')} 页` : person.demo ? '在读学生展示样例' : '教师名单与实验室使命资料 · 卡通头像为占位图';
  openModal(`<span class="eyebrow">112 LAB / MEMBER PROFILE</span><div class="modal-profile" style="margin-top:20px">${avatar(person)}<div><h2>${esc(person.name)}</h2><p class="person-en">${esc(person.pinyin||'112 Lab')}</p><p class="person-title">${esc(person.title)}</p></div></div>
    ${record ? alumniAffiliation(record) : ''}<dl class="profile-facts">${facts.map(([k,v])=>`<div><dt>${k}</dt><dd>${Array.isArray(v) ? v.map(esc).join('<br>') : esc(v)}</dd></div>`).join('')}</dl><div class="modal-body">
    ${about?`<h3>${teacherView?'研究方向':record?.topic?'研究内容':'个人介绍'}</h3><p>${esc(about)}</p>`:''}
    ${person.projects?`<h3>主持项目</h3><p>${esc(person.projects)}</p><h3>个人奖励</h3><p>${esc(person.awards)}</p><h3>工作经历</h3><p>${esc(person.bio)}</p>`:''}
    ${related.length?`<h3>相关论文</h3>${related.map(p => `<button class="profile-work" data-paper="${p.id}"><span><b>${esc(p.journal)}</b> · ${p.date}</span>${esc(p.title)} ↗</button>`).join('')}`:''}
    ${record?.currentAffiliation ? `<p class="source-line">${esc(record.currentAffiliation.basis)}</p>` : ''}<p class="source-line">${esc(source)}</p><a class="pill" data-close-dialog href="#network?person=${person.id}">查看成员网络 ↗</a></div>`);
}
function paperModal(id) {
  const p = papers.find(p => p.id===id); if(!p) return;
  openModal(`<div class="journal-top dialog-journal"><strong class="pub-journal">${esc(p.journal)}</strong><time>${p.date}</time></div><h2 class="dialog-title">${esc(p.title)}</h2><p class="pub-authors">${esc(p.byline)}</p><div class="modal-body"><p>首次在线发表 · ${p.date}</p><p><a class="text-link" href="https://doi.org/${p.doi}" target="_blank" rel="noopener">DOI&nbsp; ${p.doi} ↗</a></p>${p.pmid?`<a class="text-link" href="https://pubmed.ncbi.nlm.nih.gov/${p.pmid}/" target="_blank" rel="noopener">PubMed · ${p.pmid} ↗</a>`:''}</div>`);
}
function patentModal(id) {
  const p=patents.find(p=>p.id===id); if(!p) return;
  openModal(`<span class="eyebrow">PATENT / DEMO</span><h2 class="dialog-title">${esc(p.title)}</h2><div class="modal-body"><p>${p.type} · 示例授权日期 ${p.date}</p><p>专利展示样例，正式信息待团队提供。</p></div>`);
}
function showNotice(id) {
  const n=notices.find(n=>n.id===id); if(!n) return;
  if (n.pinned) {
    const parts = n.body.replace('112将尽力','\n112将尽力').replace('我们不拘一格，唯才是举','\n我们不拘一格，唯才是举').split('\n');
    openModal(`<span class="eyebrow">112 LAB / MISSION</span><h2 class="dialog-title">112 Lab 使命</h2><p class="pub-authors">置顶 · 2026 年 10 月 29 日版</p><div class="modal-body mission-copy">${parts.map(s=>`<p>${esc(s)}</p>`).join('')}<h3>科研分工</h3><p>杜宏武为实验室创始人。幸岑璨负责科学工作及干细胞功效机理研究，刘玉凤负责行政工作。张鹏负责生物信息学，曾泽华负责人工智能，李颖娴负责 112 大兴研究院。孙春斌对接中科院合作组，杭中辞对接微溯检测组。刘佳从事合成生物学，王芳从事分子考古。</p><h3>论文署名单位</h3><p><b>学生</b></p>${missionAffiliations.slice(0,2).map(a=>`<p class="affiliation-line">${esc(a)}</p>`).join('')}<p><b>教师</b></p><p class="affiliation-line">${esc(missionAffiliations[2])}</p><p class="source-line">来源：《112使命20261029-2》。教师姓名按最新团队名单整理。</p></div>`);
    return;
  }
  openModal(`<span class="eyebrow">NEWS / DEMO</span><h2 class="dialog-title">${esc(n.title)}</h2><p class="pub-authors">${n.date} · ${n.type} · 示例</p><div class="modal-body"><p>${esc(n.body)}</p></div>`);
}
function showGallery(i){const g=gallery[i];if(!g)return;openModal(`<div class="gallery-img modal-gallery" role="img" aria-label="${g.desc}" style="background-position:${g.quadrant%2*100}% ${Math.floor(g.quadrant/2)*100}%"></div><h2 class="dialog-title">${g.title}</h2><p class="pub-authors">${g.date} · ${g.category} · AI 生成卡通插画</p>`)}
function updateList(){if(['faculty','students','alumni'].includes(route))renderMembers();else if(['papers','patents'].includes(route))renderWorks();else if(route==='gallery')renderGallery();else if(route==='network'){graph?.filter({role:filter,query,field:$('#graph-field')?.value||'all',relation:$('#graph-relation')?.value||'all'})}}
function navigate(){graph?.destroy();graph=null;const requested=location.hash.slice(1).split('?')[0]||'home';route=['home','faculty','students','alumni','papers','patents','gallery','network','news'].includes(requested)?requested:'home';filter='all';query='';sort='newest';if(dialog.open)dialog.close();$$('#navigation a').forEach(a=>{const active=a.hash==='#'+route;a.classList.toggle('active',active);if(active)a.setAttribute('aria-current','page');else a.removeAttribute('aria-current')});if(route==='home')home();else if(['faculty','students','alumni'].includes(route))membersPage();else if(['papers','patents'].includes(route))worksPage();else if(route==='gallery')galleryPage();else if(route==='network')networkPage();else main.innerHTML=heading('NEWS & NOTICES','通知','Updates','实验室使命、学术活动与团队动态。')+`<div class="page-body news-page">${notices.map(noticeHTML).join('')}</div>`;document.title=`${({home:'北京科技大学 112 实验室',faculty:'教师',students:'学生',alumni:'毕业生',papers:'论文',patents:'专利',gallery:'图片',network:'成员网络',news:'通知'})[route]} · 112 Lab`;window.scrollTo({top:0,behavior:'instant'})}
document.addEventListener('click',e=>{const el=e.target.closest('[data-person],[data-paper],[data-patent],[data-notice],[data-gallery],[data-filter],[data-focus-person],[data-reset-selection],[data-close-dialog]');if(!el)return;if(el.dataset.person){e.preventDefault();profile(el.dataset.person,el.dataset.memberView)}else if(el.dataset.paper){e.preventDefault();paperModal(el.dataset.paper)}else if(el.dataset.patent)patentModal(el.dataset.patent);else if(el.dataset.notice)showNotice(el.dataset.notice);else if(el.dataset.gallery!==undefined)showGallery(Number(el.dataset.gallery));else if(el.dataset.filter!==undefined){filter=el.dataset.filter;$$('[data-filter]').forEach(b=>{b.classList.toggle('active',b.dataset.filter===filter);b.setAttribute('aria-pressed',b.dataset.filter===filter)});updateList()}else if(el.dataset.focusPerson)graph?.selectNode(el.dataset.focusPerson);else if(el.hasAttribute('data-reset-selection'))graph?.clearSelection();else if(el.hasAttribute('data-close-dialog'))dialog.close()});
document.addEventListener('input',e=>{if(e.target.matches('.search')){query=e.target.value;updateList()}});document.addEventListener('change',e=>{if(e.target.id==='sort'){sort=e.target.value;updateList()}else if(e.target.id==='graph-field'||e.target.id==='graph-relation')updateList()});$('.dialog-close').addEventListener('click',()=>dialog.close());dialog.addEventListener('click',e=>{if(e.target===dialog){const r=dialog.getBoundingClientRect();if(e.clientX<r.left||e.clientX>r.right||e.clientY<r.top||e.clientY>r.bottom)dialog.close()}});$('#back-top').addEventListener('click',()=>window.scrollTo({top:0,behavior:'smooth'}));window.addEventListener('hashchange',navigate);
document.addEventListener('DOMContentLoaded', navigate);
