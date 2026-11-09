const relationshipTypes = {
  team:{name:'团队归属',color:'#63788d',dash:'',explanation:'仅连接实验室负责人杜宏武与教师名录中的其他教师。'},
  mentor:{name:'导师与学生',color:'#be480d',dash:'12 5',explanation:'仅在资料明确记录导师时建立。'},
  company:{name:'校友同公司',color:'#075d9b',dash:'9 3',explanation:'仅连接毕业去向列为同一家公司的校友。'},
  cohort:{name:'同级 / 同届',color:'#a06c54',dash:'2 4',explanation:'在读学生按入学年、毕业生按毕业年分组。'},
  paper:{name:'论文合作',color:'#8b719b',dash:'5 3 1 3',explanation:'两位成员共同署名的已发表论文。'}
};
const personById = new Map(people.map(p=>[p.id,p]));
function makeRelationships() {
  const items = new Map();
  function add(type,a,b,fact,evidence,paperId) {
    const id=type+':'+[a,b].sort().join(':');
    if(!items.has(id)) items.set(id,{id,type,source:a,target:b,fact,evidence,papers:[]});
    if(paperId) items.get(id).papers.push(paperId);
  }
  function pairs(ids,fn) {ids.forEach((a,i)=>ids.slice(i+1).forEach(b=>fn(a,b)));}
  faculty.filter(p=>p.id!=='pi').forEach(p=>add('team','pi',p.id,`杜宏武是 112 Lab 创始人，${p.name}以教师身份列入团队名录。`,'依据：实验室教师名单'));
  for (const student of students) {
    const mentor = faculty.find(p=>p.name===student.mentor);
    if (mentor) add('mentor',mentor.id,student.id,mentor.name+'是'+student.name+'的导师。','来源：在读学生信息.xlsx「导师信息」');
  }
  for (const group of alumniEmployerGroups) {
    const graduates = alumni.filter(member => group.members.includes(member.id) && member.company === group.name);
    pairs(graduates, (left, right) => {
      const pages = [left.sourcePages.join('、'), right.sourcePages.join('、')];
      add('company', left.id, right.id, `${left.name}（${left.year} 届）与${right.name}（${right.year} 届）的毕业去向均为${group.name}。`,
        `来源：《毕业生信息》第 ${pages[0]}、${pages[1]} 页`);
      items.get('company:'+[left.id,right.id].sort().join(':')).employer = group.name;
    });
  }
  for(const group of [students,alumni]) {
    const sample=group===students;
    for(const year of new Set(group.map(p=>p.year))) {
      pairs(group.filter(p=>p.year===year).map(p=>p.id),(a,b)=>add('cohort',a,b,`同为 ${year} ${sample?'级入学学生':'届毕业生'}。`,sample?'来源：在读学生信息.xlsx':'来源：《毕业生信息》'));
    }
  }
  for(const p of papers) pairs(p.authors,(a,b)=>add('paper',a,b,'两位成员在下列论文中共同署名。','来源：期刊或 PubMed 作者记录',p.id));
  return [...items.values()];
}
const relationships=makeRelationships();
const relationById=new Map(relationships.map(e=>[e.id,e]));
const incidentRelations=new Map(people.map(p=>[p.id,relationships.filter(e=>e.source===p.id||e.target===p.id)]));
const otherEnd=(e,id)=>e.source===id?e.target:e.source;
