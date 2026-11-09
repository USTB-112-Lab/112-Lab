// The full page and home preview share the same position and relationship data.
const inkRoleColors = {PI:'#7294af', 教师:'#91aabd', 学生:'#b7cbd8', 毕业生:'#b8c6cf'};
function memberLabel(person) {
  const year = person.year ? ` · ${person.year}${person.role === '毕业生' ? ' 届' : ' 级'}` : '';
  return person.title + year;
}
function relationKey(type) {
  const style = relationshipTypes[type];
  return `<span class="relation-key" style="--relation-color:${style.color}"><svg viewBox="0 0 30 10" aria-hidden="true"><path d="M1 5H29" stroke="${style.color}" stroke-width="2.5" stroke-dasharray="${style.dash}"/></svg>${style.name}</span>`;
}
function edgeDetails(edge, inDialog = false) {
  const source = personById.get(edge.source);
  const target = personById.get(edge.target);
  const endpoint = person => `<button class="endpoint" ${inDialog ? `data-person="${person.id}"` : `data-net-person="${person.id}"`}><strong>${esc(person.name)}</strong><small>${memberLabel(person)}</small></button>`;
  const evidence = edge.papers.map(id => {
    const paper = papers.find(item => item.id === id);
    return `<button class="evidence-paper" data-paper="${id}"><strong>${esc(paper.journal)}</strong> · ${paper.date} · ${esc(paper.title)} ↗</button>`;
  }).join('');
  return `<div class="relationship-detail"><span class="eyebrow">RELATIONSHIP DETAIL</span><h3>${relationshipTypes[edge.type].name}</h3>
    ${edge.employer ? `<p class="edge-employer">${esc(edge.employer)}</p>` : ''}<div class="endpoint-pair">${endpoint(source)}<span class="edge-symbol">${['mentor','team'].includes(edge.type) ? '→' : '↔'}</span>${endpoint(target)}</div>
    <h4>连接依据</h4><p>${esc(edge.fact)}</p><p>${relationshipTypes[edge.type].explanation}</p>
    ${evidence ? `<h4>共同署名 · ${edge.papers.length} 篇论文</h4>${evidence}` : ''}
    <span class="demo-note">${esc(edge.evidence)}</span>
    ${inDialog ? `<p><a data-close-dialog class="pill ghost" href="#network?edge=${encodeURIComponent(edge.id)}">在完整网络中查看 ↗</a></p>` : ''}</div>`;
}
function memberNetworkDetails(person) {
  const links = incidentRelations.get(person.id) || [];
  const groups = Object.entries(relationshipTypes).map(([type, info]) => {
    const filtered = links.filter(edge => edge.type === type);
    if (!filtered.length) return '';
    const entries = filtered.map(edge => `<button class="relation-button" data-net-edge="${edge.id}">${personName(otherEnd(edge, person.id))} ↗</button>`).join('');
    return `<div class="relation-group"><h4>${info.name} · ${filtered.length}</h4><div class="relation-chips">${entries}</div></div>`;
  }).join('');
  return `<div><span class="eyebrow">MEMBER DETAIL</span><div class="network-member-header">${avatar(person)}<div><h3>${esc(person.name)}</h3><p>${memberLabel(person)}</p></div></div>
    <p>${person.isPI ? '112 Lab' : fieldName(person.field)}${person.company ? `<br>档案所载毕业去向 · ${person.company}` : ''}</p><p>${esc(person.bio)}</p>
    <button class="relation-button" data-person="${person.id}">完整个人介绍 ↗</button></div>
    <div><h4>直接关系</h4><p>点选下列姓名，查看对应连线的详情。</p>${groups}</div>`;
}
function networkPage() {
  main.innerHTML = `<section class="network-page">
    ${heading('MEMBER NETWORK', '成员网络', 'Connections', '杜宏武位于网络中心。团队归属仅连接杜宏武与其他教师，师生线仅表示有资料确认的指导关系。点击任一节点或连线即可查看详情。')}
    <div class="network-bar">${tabs([['all','全部成员'],['教师','教师'],['学生','学生'],['毕业生','毕业生']])}
      <div class="controls">${searchInput('搜索成员姓名')}<select id="graph-field" aria-label="网络研究方向"><option value="all">全部研究方向</option>${fields.map(f => `<option value="${f.id}">${f.name}</option>`).join('')}</select>
      <select id="graph-relation" aria-label="关系类型"><option value="all">全部关系类型</option>${Object.entries(relationshipTypes).map(([id, r]) => `<option value="${id}">${r.name}</option>`).join('')}</select></div></div>
    <div class="network-keybar">${Object.keys(relationshipTypes).map(type => `<button class="key-filter" data-rel-filter="${type}" aria-label="筛选${relationshipTypes[type].name}">${relationKey(type)}</button>`).join('')}
      <label class="full-links"><input type="checkbox" id="all-links"> 展开全部连线</label></div>
    <div class="network-layout"><div id="network-stage" class="network-stage"></div><aside id="network-aside" class="network-aside" aria-live="polite"></aside></div>
    <div class="network-footer"><span>概览显示主干及部分跨组关系。筛选关系类型或展开全部连线，可查看全部匹配关系。</span><span>节点大小区分 PI、教师、学生与毕业生。</span></div>
  </section>`;
  graph = createNetwork($('#network-stage'));
  const params = new URLSearchParams(location.hash.split('?')[1] || '');
  if (params.get('relation') === 'company') {
    $('#graph-relation').value = 'company';
    graph.filter({relation: 'company'});
  }
  if (personById.has(params.get('person'))) graph.selectNode(params.get('person'));
  else if (relationById.has(params.get('edge'))) graph.selectEdge(params.get('edge'));
}
function networkPositions(width, height) {
  const cx=width/2, cy=height/2, points=new Map([['pi',{x:cx,y:cy}]]);
  function place(list,rx,ry,phase) {
    list.forEach((p,i)=>{
      const angle=phase+2*Math.PI*i/list.length;
      points.set(p.id,{x:cx+width*rx*Math.cos(angle),y:cy+height*ry*Math.sin(angle)});
    });
  }
  place(faculty.filter(p=>!p.isPI),.169,.15,-Math.PI/2);
  place(students,.295,.282,-Math.PI/2+.1);
  place(people.filter(p=>p.role==='毕业生').sort((a,b)=>b.year-a.year),.449,.417,-Math.PI/2);
  return points;
}
function overviewConnections() {
  const ids=new Set(),linked=new Set(['pi']),perKind=new Map();
  for (const e of relationships) {
    let use=e.type==='team' && personById.get(e.target).role==='教师' || e.type==='company';
    if(e.type==='cohort' || e.type==='paper'){
      const group=e.type==='paper' ? e.papers[0]:e.fact;
      const count=perKind.get(group)||0;
      if(count<2) use=true;
      perKind.set(group,count+1);
    }
    if(use){ids.add(e.id);linked.add(e.source);linked.add(e.target);}
  }
  for(const e of relationships) if(e.type==='team' && !linked.has(e.target))ids.add(e.id);
  return ids;
}
function curveGeometry(edge, points) {
  const a = points.get(edge.source), b = points.get(edge.target);
  const dx = b.x - a.x, dy = b.y - a.y;
  const offset = {team: 0, mentor: .045, company: -.21, cohort: .18, paper: -.105}[edge.type];
  const cx = (a.x + b.x) / 2 - dy * offset;
  const cy = (a.y + b.y) / 2 + dx * offset;
  return {
    path: `M ${a.x.toFixed(1)},${a.y.toFixed(1)} Q ${cx.toFixed(1)},${cy.toFixed(1)} ${b.x.toFixed(1)},${b.y.toFixed(1)}`,
    midX: (a.x + 2 * cx + b.x) / 4,
    midY: (a.y + 2 * cy + b.y) / 4
  };
}
function createNetwork(container, {preview = false} = {}) {
  const narrow = container.clientWidth < 600;
  const width = narrow ? 540 : 1040;
  const height = narrow ? 800 : preview ? 480 : 650;
  const original = networkPositions(width, height);
  const points = new Map([...original].map(([key, value]) => [key, {...value}]));
  const overview = overviewConnections();
  const state = {role: 'all', field: 'all', relation: 'all', query: '', complete: false, person: null, edge: null};
  const view = {zoom: 1, x: 0, y: 0};
  const prefix = preview ? 'hero-map' : 'full-map';
  const spritePatterns = Array.from({length: 12}, (_, index) => `<pattern id="${prefix}-face-${index}" width="1" height="1" viewBox="${index % 4} ${Math.floor(index / 4)} 1 1" preserveAspectRatio="xMidYMid slice"><image href="assets/portraits.png" width="4" height="3"/></pattern>`).join('');
  const filePatterns=people.filter(p=>p.photo).map(p=>`<pattern id="${prefix}-photo-${p.id}" width="1" height="1" viewBox="0 0 1 1"><image href="${p.photo}" width="1" height="1" preserveAspectRatio="xMidYMin slice"/></pattern>`).join('');
  const patterns=spritePatterns+filePatterns;
  container.innerHTML = `<svg class="network-graph" viewBox="0 0 ${width} ${height}" role="group" aria-label="以杜宏武为中心的成员与关系，可点选节点和连线"><defs>${patterns}</defs>
    <g class="graph-world"><g class="map-rings" aria-hidden="true"><ellipse cx="${width/2}" cy="${height/2}" rx="${width*.208}" ry="${height*.18}"/><ellipse cx="${width/2}" cy="${height/2}" rx="${width*.403}" ry="${height*.38}"/></g>
    <g class="edge-layer"></g><g class="node-layer"></g></g></svg>
    <div class="graph-count" aria-live="polite"></div><div class="graph-tools"><button data-zoom="in" aria-label="放大网络">+</button><button data-zoom="out" aria-label="缩小网络">−</button><button data-zoom="reset" aria-label="重置网络视图">↺</button></div>
    <span class="graph-hint">${preview ? '点击人物或连线查看详情' : '拖动布局 · 缩放 · 点击人物或连线'}</span>`;
  const svg = container.querySelector('svg');
  const world = container.querySelector('.graph-world');
  const nodeLayer = container.querySelector('.node-layer');
  const edgeLayer = container.querySelector('.edge-layer');
  const aside = preview ? null : document.getElementById('network-aside');
  const controller = new AbortController();
  const options = {signal: controller.signal};
  let drag = null;
  let employerLayout = '';
  const overviewPositions = new Map();
  function positionEmployerGroups() {
    const nodes = visibleNodes.map(p => p.id);
    const key = state.relation === 'company' ? 'company:' + nodes.join(',') : '';
    if (key === employerLayout) return;
    if (!employerLayout) {
      for (const [id, pos] of points) overviewPositions.set(id, {...pos});
    }
    for (const [id, pos] of overviewPositions) points.set(id, {...pos});
    employerLayout = key;
    if (!key) { overviewPositions.clear(); return; }
    const groups = alumniEmployerGroups.map(group => group.members.filter(id => nodes.includes(id))).filter(ids => ids.length);
    const columns = Math.max(1, Math.ceil(Math.sqrt(groups.length)));
    const rows = Math.max(1, Math.ceil(groups.length / columns));
    groups.forEach((ids, i) => {
      const cx = width * (i % columns + .5) / columns;
      const cy = height * (Math.floor(i / columns) + .5) / rows;
      const radius = Math.min(width / columns, height / rows) * .28;
      ids.forEach((id, n) => {
        const angle = -Math.PI/2 + 2*Math.PI*n/ids.length;
        points.set(id, {x:cx+radius*Math.cos(angle), y:cy+radius*Math.sin(angle)});
      });
    });
  }
  let overlapping = [];
  let visibleNodes = [], visibleEdges = [];
  function baseMatches(person) {
    return (state.role === 'all' || person.role === state.role || (state.role === '学生' && person.studentRecord)) && (state.field === 'all' || person.field === state.field);
  }
  function chooseVisible() {
    const q = state.query.trim().toLowerCase();
    const matching = people.filter(p => baseMatches(p) && `${p.name} ${p.pinyin || ''}`.toLowerCase().includes(q));
    const matchingIds = new Set(matching.map(p => p.id));
    let allowedEdges = relationships.filter(e => state.relation === 'all' || e.type === state.relation);
    const focused = state.person || (q && matching.length === 1 ? matching[0].id : null);
    if (q || state.role !== 'all' || state.field !== 'all') {
      allowedEdges = allowedEdges.filter(e => matchingIds.has(e.source) || matchingIds.has(e.target));
    }
    const selectedEdge = relationById.get(state.edge);
    const showAll = state.complete || !!q || state.relation !== 'all';
    visibleEdges = allowedEdges.filter(e => showAll || overview.has(e.id) || focused && (e.source === focused || e.target === focused));
    if (selectedEdge && !visibleEdges.includes(selectedEdge)) visibleEdges.push(selectedEdge);
    const ids = new Set(visibleEdges.flatMap(e => [e.source, e.target]));
    if (state.relation === 'all') matchingIds.forEach(id => ids.add(id));
    if (state.person) ids.add(state.person);
    visibleNodes = people.filter(p => ids.has(p.id));
    return focused;
  }
  function draw() {
    const focused = chooseVisible();
    positionEmployerGroups();
    container.classList.toggle('employment-view', state.relation === 'company');
    const activeEdge = relationById.get(state.edge);
    const highlightedNodes = new Set();
    if (activeEdge) [activeEdge.source, activeEdge.target].forEach(id => highlightedNodes.add(id));
    else if (focused) {
      highlightedNodes.add(focused);
      visibleEdges.filter(e => e.source === focused || e.target === focused).forEach(e => highlightedNodes.add(otherEnd(e, focused)));
    }
    edgeLayer.innerHTML = visibleEdges.map(edge => {
      const style = relationshipTypes[edge.type];
      const shape = curveGeometry(edge, points);
      const selected = edge.id === state.edge;
      const adjacent = focused && (edge.source === focused || edge.target === focused);
      const dim = activeEdge ? !selected : focused && !adjacent;
      const name = `${personName(edge.source)}与${personName(edge.target)}，${style.name}`;
      return `<g class="network-edge edge-${edge.type} ${selected || adjacent ? 'emphasized' : ''} ${dim ? 'muted' : ''}" data-edge-id="${edge.id}" role="button" tabindex="0" aria-label="查看关系：${name}" aria-pressed="${selected}" style="--relation-color:${style.color}"><title>${name} · 点击查看连接依据</title>
        <path class="visible-line" stroke-dasharray="${style.dash}" d="${shape.path}"/><path class="line-hit" d="${shape.path}"/><circle class="edge-midpoint" cx="${shape.midX}" cy="${shape.midY}" r="7"/></g>`;
    }).join('');
    nodeLayer.innerHTML = visibleNodes.map(p => {
      const point = points.get(p.id);
      const radius = state.relation === 'company' ? 30 : p.isPI ? (narrow ? 39 : 37) : p.role === '教师' ? 20 : p.role === '毕业生' ? 12 : 10;
      const color = inkRoleColors[p.isPI ? 'PI' : p.role];
      const selected = state.person === p.id;
      const faded = highlightedNodes.size > 0 && !highlightedNodes.has(p.id);
      const imageFill=p.photo?`url(#${prefix}-photo-${p.id})`:p.portrait!=null?`url(#${prefix}-face-${p.portrait})`:'#dfeaf2';
      const face=`${p.isPI?`<circle r="${radius+6}" fill="none" stroke="#6d8aa1" stroke-width="1.3"/>`:''}
        <circle class="node-ring" r="${radius+1.7}" fill="${color}" stroke="${color}"/><circle r="${radius}" fill="${imageFill}"/>
        ${p.portrait==null&&!p.photo?`<text class="initial-node" text-anchor="middle" y="3">${p.name.slice(-1)}</text>`:''}
        <text class="node-name ${p.isPI?'pi-node-label':''}" text-anchor="middle" y="${radius+14}">${p.name}${p.isPI?' · PI':''}</text>`;
      return `<g class="graph-node ${p.isPI ? 'pi-node' : ''} ${selected ? 'selected' : ''} ${faded ? 'dimmed' : ''}" role="button" tabindex="0" aria-label="查看成员：${p.name}，${memberLabel(p)}" aria-pressed="${selected}" data-node-id="${p.id}" transform="translate(${point.x},${point.y})"><title>${p.name} · ${memberLabel(p)}</title>${face}</g>`;
    }).join('');
    container.querySelector('.graph-count').textContent = state.relation==='mentor'&&!visibleEdges.length?'资料未明确逐人导师，暂无可展示的师生连线':`${visibleNodes.length} 位成员 · ${visibleEdges.length} 条关系`;
    updatePanel();
  }
  function updatePanel() {
    if (!aside) return;
    const selectedEdge = relationById.get(state.edge);
    const selectedPerson = personById.get(state.person);
    const detail = !!(selectedPerson || selectedEdge);
    aside.classList.toggle('has-detail', detail);
    let html;
    if (selectedEdge) html = edgeDetails(selectedEdge) + overlapChoices(selectedEdge.id);
    else if (selectedPerson) html = memberNetworkDetails(selectedPerson);
    else if (state.relation === 'company') {
      const employers = [...new Set(visibleEdges.filter(e=>e.type==='company').map(e=>e.employer))];
      html = `<div><span class="eyebrow">ALUMNI CONNECTIONS</span><h3>校友同公司</h3><p>按档案中的毕业去向匹配。点击蓝色虚线，可查看两位校友、入职单位和来源页码。</p></div>` +
        employers.map(name => {
          const members = visibleNodes.filter(p => alumni.find(a => a.id === p.id)?.company === name);
          return `<div class="employer-group"><h4>${esc(name)} · ${members.length} 位</h4>${members.map(p=>`<button class="relation-button" data-net-person="${p.id}">${esc(p.name)} ↗</button>`).join('')}</div>`;
        }).join('');
    }
    else html = `<div><span class="eyebrow">THE NETWORK</span><h3>杜宏武 · PI</h3><p>中心节点连接团队。教师、在读学生与毕业生分布在外圈，节点大小提示成员身份。</p></div>
      <div><h4>打开关系详情</h4><p>点击节点查看个人资料及直接关系。点击彩色线条，查看两端成员、关系类型与连接依据。</p>
      <h4>关系定义</h4><p>“校友同公司”只连接毕业后入职同一公司的校友。同级、同届按年份连接。论文连线依据公开署名。导师关系在资料明确后收录。</p><span class="demo-note">在读学生为演示名录。校友资料以所附档案为据。</span></div>`;
    aside.innerHTML = detail ? `<button class="close-network-detail" data-net-close aria-label="关闭网络详情">关闭 ×</button>${html}` : html;
    aside.scrollTop = 0;
  }
  function overlapChoices(selectedId) {
    const alternatives = overlapping.filter(id => id !== selectedId && relationById.has(id));
    if (!alternatives.length) return '';
    return `<div class="overlap-choices"><h4>此处的其他连线</h4>${alternatives.map(id => {
      const item = relationById.get(id);
      return `<button class="relation-button" data-open-edge="${id}">${personName(item.source)} ↔ ${personName(item.target)} · ${relationshipTypes[item.type].name}</button>`;
    }).join('')}</div>`;
  }
  function selectNode(id) {
    if (!personById.has(id)) return;
    if (preview) { profile(id); return; }
    state.person = id; state.edge = null; draw();
  }
  function selectEdge(id, hits = []) {
    overlapping = hits;
    const edge = relationById.get(id);
    if (!edge) return;
    if (preview) { openModal(edgeDetails(edge, true) + overlapChoices(id)); return; }
    if (state.relation !== 'all' && state.relation !== edge.type) {
      state.relation = edge.type;
      const selector = document.getElementById('graph-relation');
      if (selector) selector.value = state.relation;
      document.querySelectorAll('[data-rel-filter]').forEach(button => {
        button.classList.toggle('active', button.dataset.relFilter === state.relation);
      });
    }
    state.edge = id; state.person = null; draw();
  }
  function clearSelection() { state.person = null; state.edge = null; draw(); }
  function setFilter(next) {
    Object.assign(state, next, {person: null, edge: null});
    const q = state.query.trim().toLowerCase();
    const matches = q ? people.filter(p => baseMatches(p) && `${p.name} ${p.pinyin || ''}`.toLowerCase().includes(q)) : [];
    if (matches.length === 1) state.person = matches[0].id;
    document.querySelectorAll('[data-rel-filter]').forEach(button => button.classList.toggle('active', button.dataset.relFilter === state.relation));
    draw();
  }
  function applyTransform() { world.setAttribute('transform', `translate(${view.x} ${view.y}) scale(${view.zoom})`); }
  function zoom(factor, center = {x: width / 2, y: height / 2}) {
    const next = Math.min(4, Math.max(.55, view.zoom * factor));
    view.x = center.x - (center.x - view.x) * next / view.zoom;
    view.y = center.y - (center.y - view.y) * next / view.zoom;
    view.zoom = next; applyTransform();
  }
  function point(event) {
    const position = svg.createSVGPoint();
    position.x = event.clientX; position.y = event.clientY;
    return position.matrixTransform(svg.getScreenCTM().inverse());
  }
  function refreshGeometry(id) {
    const p = points.get(id);
    nodeLayer.querySelector(`[data-node-id="${id}"]`)?.setAttribute('transform', `translate(${p.x},${p.y})`);
    for (const edge of visibleEdges) {
      if (edge.source !== id && edge.target !== id) continue;
      const shape = curveGeometry(edge, points);
      const element = edgeLayer.querySelector(`[data-edge-id="${edge.id}"]`);
      element.querySelectorAll('path').forEach(path => path.setAttribute('d', shape.path));
      const hit = element.querySelector('.edge-midpoint');
      hit.setAttribute('cx', shape.midX);
      hit.setAttribute('cy', shape.midY);
    }
  }
  svg.addEventListener('pointerdown', event => {
    if (event.button !== 0) return;
    const pos = point(event), nodeId = event.target.closest('[data-node-id]')?.dataset.nodeId;
    const edgeId = event.target.closest('[data-edge-id]')?.dataset.edgeId;
    const hits = edgeId ? [...new Set(document.elementsFromPoint(event.clientX, event.clientY)
      .map(element => element.closest('[data-edge-id]')?.dataset.edgeId).filter(Boolean))] : [];
    drag = {nodeId, edgeId, hits, start: pos, original: nodeId ? {...points.get(nodeId)} : null, pan: {...view}, moved: false};
    svg.setPointerCapture(event.pointerId);
  }, options);
  svg.addEventListener('pointermove', event => {
    if (!drag) return;
    const pos = point(event), dx = pos.x - drag.start.x, dy = pos.y - drag.start.y;
    if (Math.abs(dx) + Math.abs(dy) > 5) drag.moved = true;
    if (!drag.moved) return;
    if (drag.nodeId && drag.nodeId !== 'pi') {
      points.set(drag.nodeId, {x: drag.original.x + dx / view.zoom, y: drag.original.y + dy / view.zoom});
      refreshGeometry(drag.nodeId);
    } else {view.x = drag.pan.x + dx; view.y = drag.pan.y + dy; applyTransform();}
  }, options);
  svg.addEventListener('pointerup', event => {
    if (!drag) return;
    const hit = drag; drag = null;
    if (svg.hasPointerCapture(event.pointerId)) svg.releasePointerCapture(event.pointerId);
    if (hit.moved) return;
    if (hit.nodeId) selectNode(hit.nodeId);
    else if (hit.edgeId) selectEdge(hit.edgeId, hit.hits);
    else clearSelection();
  }, options);
  svg.addEventListener('pointercancel', () => {drag = null;}, options);
  svg.addEventListener('keydown', event => {
    if (event.key !== 'Enter' && event.key !== ' ') return;
    const node = event.target.closest('[data-node-id]'), edge = event.target.closest('[data-edge-id]');
    if (!node && !edge) return;
    event.preventDefault();
    if (node) selectNode(node.dataset.nodeId); else selectEdge(edge.dataset.edgeId);
  }, options);
  if (!preview) svg.addEventListener('wheel', event => {event.preventDefault(); zoom(event.deltaY < 0 ? 1.1 : 1/1.1, point(event));}, {passive: false, signal: controller.signal});
  container.addEventListener('click', event => {
    const value = event.target.closest('[data-zoom]')?.dataset.zoom;
    if (!value) return;
    if (value === 'reset') {
      Object.assign(view, {zoom:1, x:0, y:0});
      employerLayout = ''; overviewPositions.clear();
      for (const [id, pos] of original) points.set(id, {...pos});
      applyTransform(); clearSelection();
    } else zoom(value === 'in' ? 1.25 : .8);
  }, options);
  if (!preview) {
    aside.addEventListener('click', event => {
      const button = event.target.closest('button');
      if (button?.dataset.netPerson) selectNode(button.dataset.netPerson);
      else if (button?.dataset.netEdge) selectEdge(button.dataset.netEdge);
      else if (button?.hasAttribute('data-net-close')) clearSelection();
    }, options);
    document.getElementById('all-links').addEventListener('change', event => {state.complete = event.target.checked; draw();}, options);
    document.querySelector('.network-keybar').addEventListener('click', event => {
      const button = event.target.closest('[data-rel-filter]');
      if (!button) return;
      const next = state.relation === button.dataset.relFilter ? 'all' : button.dataset.relFilter;
      document.getElementById('graph-relation').value = next;
      setFilter({relation: next});
    }, options);
  }
  document.addEventListener('click', event => {
    const choice = event.target.closest('[data-open-edge]');
    if (choice) selectEdge(choice.dataset.openEdge, overlapping);
  }, options);
  draw();
  return {selectNode, selectEdge, clearSelection, filter:setFilter, destroy() {controller.abort();}};
}
