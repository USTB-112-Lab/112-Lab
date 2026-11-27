const fields=[{id:'aging',name:'干细胞与衰老生物学',en:'Stem cells and aging',color:'#d5bd83',description:'从细胞状态与组织微环境出发，理解衰老的发生与演进。'},{id:'herbal',name:'中药与天然产物',en:'Nature-inspired discovery',color:'#91bba5',description:'探索中药与天然产物的活性线索，连接传统知识与现代实验。'},{id:'ai',name:'人工智能与多组学',en:'AI for longevity',color:'#9baed2',description:'融合多组学与人工智能，寻找健康长寿研究中的新问题与新证据。'}];
const students = [
  {
    "id": "current-1",
    "name": "曾泽华",
    "title": "博士生",
    "role": "学生",
    "degree": "博士",
    "year": 2022,
    "enrollment": "18级本22级直博",
    "mentor": "杜宏武",
    "group": "",
    "research": "生物信息学",
    "bio": "独立设计并开发世界上首个多组学算法框架omicverse，并被几乎所有中国生信研究者所使用，总下载量10w+。同时作为已发表在Cell的转录动力学Dynamo现维护者与2.0版本的第一作者，并且同时开发了3D胚胎预测算法Dynode。",
    "field": "",
    "source": "在读学生信息.xlsx"
  },
  {
    "id": "current-2",
    "name": "李颖娴",
    "title": "博士生",
    "role": "学生",
    "degree": "博士",
    "year": 2023,
    "enrollment": "17级硕23级博",
    "mentor": "杜宏武",
    "group": "",
    "research": "干细胞标准化生产制备",
    "bio": "康妍葆（北京）干细胞科技有限公司总经理",
    "field": "",
    "source": "在读学生信息.xlsx"
  },
  {
    "id": "current-3",
    "name": "蔡上淋",
    "title": "博士生",
    "role": "学生",
    "degree": "博士",
    "year": 2023,
    "enrollment": "16级本20级硕23级博",
    "mentor": "杜宏武",
    "group": "",
    "research": "微流控芯片与帕金森病",
    "bio": "开发基于微流控技术的新型BBB-on-chip，通过动态流体调节和多细胞共培养，精确模拟生理和病理条件下血脑屏障的动态通透性和神经血管相互作用。",
    "field": "",
    "source": "在读学生信息.xlsx"
  },
  {
    "id": "current-4",
    "name": "李亮",
    "title": "博士生",
    "role": "学生",
    "degree": "博士",
    "year": 2024,
    "enrollment": "21级硕24级博",
    "mentor": "杜宏武",
    "group": "孙春斌组",
    "research": "仿生纳米颗粒与AD疫苗",
    "bio": "研究方向聚焦神经退行性疾病（如阿尔茨海默病，AD）的防治策略，通过构建细胞膜仿生纳米颗粒（CMBNPs） 递送系统，构建预防性疫苗，实现多靶点协同干预。",
    "field": "",
    "source": "在读学生信息.xlsx"
  },
  {
    "id": "current-5",
    "name": "郭紫荷",
    "title": "博士生",
    "role": "学生",
    "degree": "博士",
    "year": 2025,
    "enrollment": "25级博",
    "mentor": "杜宏武",
    "group": "幸岑璨组",
    "research": "",
    "bio": "以丁酸梭菌与凝结芽孢杆菌为核心，开展斑点叉尾鮰幼鱼生长与肠道健康的益生菌精准干预研究；围绕黏膜屏障与消化/抗氧化表型，整合16S菌群与LC-MS代谢组进行多组学机制解析。",
    "field": "",
    "source": "在读学生信息.xlsx"
  },
  {
    "id": "current-6",
    "name": "史可欣",
    "title": "博士生",
    "role": "学生",
    "degree": "博士",
    "year": 2025,
    "enrollment": "25级博",
    "mentor": "杜宏武",
    "group": "孙春斌组",
    "research": "眼相关疾病治疗",
    "bio": "通过多维度代谢工程改造大肠杆菌，构建稳定高产血红素的菌株，建立精确稳定的检测方法，并在此基础上提高血红素生物合成的产量，为工业化生产提供理论基础与技术支撑。选取血红素生物合成途径，进行优质重组菌株的筛选；在测定血红素合成产量的过程中，发现血红素在溶液中不稳定的问题，确定了最佳的高效液相色谱条件，建立了准确稳定的检测方法；通过CRISPR-Cas9 基因编辑技术敲除内源性血红素降解基因及旁支代谢途径、改变 RBS 序列精确调节 T7RNAP 酶活来提高血红素产量；应用高产重组菌株敲除旁支代谢途径相关基因以及进行培养基优化。",
    "field": "",
    "source": "在读学生信息.xlsx"
  },
  {
    "id": "current-7",
    "name": "朱健玮",
    "title": "博士生",
    "role": "学生",
    "degree": "博士",
    "year": 2026,
    "enrollment": "26级博",
    "mentor": "杜宏武",
    "group": "",
    "research": "食源性肽与神经退行性疾病",
    "bio": "聚焦食源蛋白资源的高值化利用与开发，关注中药蛋白源多肽对神经退行性疾病的改善作用，开展肽的生物活性及作用机制相关研究。以食源活性肽为切入点，通过虚拟筛选挖掘候选分子，验证其改善认知障碍调控机制，为中药蛋白资源高值化利用与AD膳食干预提供科学依据。",
    "field": "",
    "source": "在读学生信息.xlsx"
  },
  {
    "id": "current-8",
    "name": "程熙雯",
    "title": "硕士生",
    "role": "学生",
    "degree": "硕士",
    "year": 2024,
    "enrollment": "24级硕",
    "mentor": "杜宏武",
    "group": "孙春斌组",
    "research": "工程化外泌体、仿生纳米囊泡在帕金森病方面的研究与应用",
    "bio": "程熙雯，河北廊坊人，24级生物学硕士研究生。研究方向为纳米药物靶向治疗帕金森病，主要开展脂质体与工程化外泌体协同递送核酸药物的研究。通过构建具有小胶质细胞靶向能力的纳米递送体系，提高核酸药物的递送效率与脑内靶向性，并从神经保护、炎症调控及脂质代谢等方面探索其治疗帕金森病的作用机制。",
    "field": "",
    "source": "在读学生信息.xlsx"
  },
  {
    "id": "current-9",
    "name": "霍鑫美",
    "title": "硕士生",
    "role": "学生",
    "degree": "硕士",
    "year": 2024,
    "enrollment": "24级硕",
    "mentor": "杜宏武",
    "group": "孙春斌组",
    "research": "工程化外泌体及水凝胶在帕金森病方面的研究与应用",
    "bio": "霍鑫美，主要从事神经退行性疾病靶向治疗与生物材料递送系统研究。当前研究聚焦于工程化外泌体与水凝胶复合载药体系的构建，发展兼具长效缓释、病灶靶向与可控释放特性的脑内递送平台；系统探究该平台在帕金森病治疗中的抗炎效应、多巴胺能神经元保护作用及其机制，推动相关基础研究成果向临床应用转化。",
    "field": "",
    "source": "在读学生信息.xlsx"
  },
  {
    "id": "current-10",
    "name": "肖欣然",
    "title": "硕士生",
    "role": "学生",
    "degree": "硕士",
    "year": 2024,
    "enrollment": "24级硕",
    "mentor": "杜宏武",
    "group": "幸岑璨组",
    "research": "靶向蛋白稳态治疗阿尔茨海默病，通过生信分析选取在 AD 中差异表到的蛋白稳态相关基因，并进一步研究潜在靶基因在 AD 中的作用。",
    "bio": "研究方向为神经退行性疾病相关细胞模型构建、蛋白稳态调控及分子机制研究，熟练掌握细胞培养、蛋白检测、荧光成像与 qPCR 等实验技术。注重规范操作与结果可重复性，善于排查实验问题，期待通过持续探索，为相关疾病的干预策略研究贡献力量。",
    "field": "",
    "source": "在读学生信息.xlsx"
  },
  {
    "id": "current-11",
    "name": "俞奕琦",
    "title": "硕士生",
    "role": "学生",
    "degree": "硕士",
    "year": 2024,
    "enrollment": "24级硕",
    "mentor": "幸岑璨",
    "group": "幸岑璨组",
    "research": "人源不同组织间充质基质细胞对神经系统的影响，探究具有高功效的间充质基质细胞，其对神经系统影响的关键因子。",
    "bio": "俞奕琦，中共党员，江西上饶人，24级硕士研究生。主要开展不同组织来源间充质干细胞对神经系统的功效性评价研究，探究干细胞在神经损伤修复中的作用潜力。以第一作者或共同第一作者身份发表SCI论文2篇。",
    "field": "",
    "source": "在读学生信息.xlsx"
  },
  {
    "id": "current-12",
    "name": "闫琪",
    "title": "硕士生",
    "role": "学生",
    "degree": "硕士",
    "year": 2024,
    "enrollment": "24级硕",
    "mentor": "杜宏武",
    "group": "蔡上淋组",
    "research": "纤毛功能障碍在肌萎缩侧索硬化症中的作用；PIKfyve 抑制剂在肌萎缩侧索硬化症中的作用机理研究。",
    "bio": "基于诱导多能干细胞的疾病模型研究，利用iPSC诱导运动神经元及皮层类器官，构建疾病模型，探究肌萎缩侧索硬化症（ALS）的病理机制，并基于该模型开展药物筛选工作。",
    "field": "",
    "source": "在读学生信息.xlsx"
  },
  {
    "id": "current-13",
    "name": "杨若榴",
    "title": "硕士生",
    "role": "学生",
    "degree": "硕士",
    "year": 2025,
    "enrollment": "25级硕",
    "mentor": "杜宏武",
    "group": "幸岑璨组",
    "research": "利用前沿的DNA纳米结构敲入技术，在斑马鱼胚胎中实现对母源蛋白的活体标记与动态追踪，旨在揭示母源信号在胚胎背部决定与体轴建立这一关键发育事件中的作用机制。",
    "bio": "我叫杨若榴，我的研究方向是雌激素响应型转基因斑马鱼模型的构建及其应用研究。主要利用转基因技术构建能够响应雌激素信号的斑马鱼模型，并对其响应特征和功能进行验证，进一步探索该模型在环境雌激素筛查、内分泌干扰效应评价等方面的应用，为环境污染物的生物学效应研究提供新的技术手段。",
    "field": "",
    "source": "在读学生信息.xlsx"
  },
  {
    "id": "current-14",
    "name": "荆玺燕",
    "title": "硕士生",
    "role": "学生",
    "degree": "硕士",
    "year": 2025,
    "enrollment": "25级硕",
    "mentor": "杜宏武",
    "group": "孙春斌组",
    "research": "精氨酸-壳聚糖基纳米载体在帕金森病鼻脑递送方面的应用，工程化植物外泌体与靶向治疗，温敏水凝胶-光控释放系统在神经药物递送领域的应用与产品开发。",
    "bio": "研究方向为帕金森病的鼻脑靶向递送，主要开展植物源细胞外囊泡与功能性水凝胶协同递送核酸药物的研究。通过构建具有神经元靶向能力的纳米递送体系，结合鼻腔原位成胶技术，提高核酸药物的递送效率与脑内靶向性，并从神经保护、炎症调控及细胞凋亡等方面探索其治疗帕金森病的作用机制。",
    "field": "",
    "source": "在读学生信息.xlsx"
  },
  {
    "id": "current-15",
    "name": "政雅雯",
    "title": "硕士生",
    "role": "学生",
    "degree": "硕士",
    "year": 2025,
    "enrollment": "25级硕",
    "mentor": "杜宏武",
    "group": "",
    "research": "基于大语言模型的衰老—MCI—阿尔茨海默病三阶段机制知识图谱构建与系统分析。中国干细胞临床试验与疾病负担及区域不平等的匹配度研究。",
    "bio": "我是政雅雯，研究方向是ai4s autoresearch方向，一个性格开朗、积极向上、乐观自信的人。平时喜欢阅读、运动和听音乐，善于与人沟通交流，乐于结交新朋友。在学习和生活中，我始终保持认真负责的态度，遇到困难时勇于面对，不轻易放弃。有较强的团队合作意识，也愿意不断学习新知识、提升自己。",
    "field": "",
    "source": "在读学生信息.xlsx"
  },
  {
    "id": "current-16",
    "name": "杨楠",
    "title": "硕士生",
    "role": "学生",
    "degree": "硕士",
    "year": 2026,
    "enrollment": "26级硕",
    "mentor": "幸岑璨",
    "group": "杭中辞组",
    "research": "纳米载体对溶酶体的损伤程度探究及相关修复方案制定",
    "bio": "我是来自河北省沧州市的2026 级硕士研究生杨楠，目前在杭中辞师兄的微溯生物检测组学习，核心研究方向为纳米载体对溶酶体的损伤程度探究及相关修复方案制定，聚焦纳米递送体系的安全性评估与优化策略。本科期间获评校级三好学生、荣获校级奖学金，同时也在科创比赛中取得成绩，曾获 “互联网 +” 大赛三等奖、牧星湖杯中医药科普比赛二等奖等。",
    "field": "",
    "source": "在读学生信息.xlsx"
  },
  {
    "id": "current-17",
    "name": "魏昌迪",
    "title": "硕士生",
    "role": "学生",
    "degree": "硕士",
    "year": 2026,
    "enrollment": "26级硕",
    "mentor": "幸岑璨",
    "group": "杭中辞组",
    "research": "APOE4 介导的神经退行性病变机制及溶酶体损伤双模态检测研究",
    "bio": "大家好，我是 2026 级研一新生魏昌迪，来自山东临沂，本科期间曾获评校优秀学生、优秀团员、优秀志愿者；获得山东省大学生生物化学技能与创新创业大赛省二等奖，目前跟随杭中辞师兄所在的小组开展课题学习，研究方向围绕 APOE4 基因介导的神经退行性病变发病机制以及溶酶体损伤的双模态检测。现在还处在入门摸索阶段，正在研读文献、熟悉课题思路。",
    "field": "",
    "source": "在读学生信息.xlsx"
  },
  {
    "id": "current-18",
    "name": "邢娜娜",
    "title": "硕士生",
    "role": "学生",
    "degree": "硕士",
    "year": 2026,
    "enrollment": "26级硕",
    "mentor": "杜宏武",
    "group": "孙春斌组",
    "research": "基于人脑单细胞与空间转录组，解析小胶质细胞和星形胶质细胞演化轨迹，筛选关键分子及潜在干预靶点。",
    "bio": "邢娜娜，来自安徽阜阳，2026级研究生。我的研究围绕神经退行性疾病，利用人脑单细胞与空间转录组数据，探究胶质细胞在病理中的变化，发掘潜在干预靶点。本科期间曾获挑战杯国一、生命科学竞赛国奖以及省政府奖学金。",
    "field": "",
    "source": "在读学生信息.xlsx"
  },
  {
    "id": "current-19",
    "name": "陈思媛",
    "title": "硕士生",
    "role": "学生",
    "degree": "硕士",
    "year": 2026,
    "enrollment": "26级硕",
    "mentor": "幸岑璨",
    "group": "幸岑璨组",
    "research": "基于虚拟敲除的MSC活性转录因子的筛选与验证研究",
    "bio": "陈思媛，来自湖北省大冶市，本科就读于东北农业大学园艺专业，曾荣获第九届全国大学生生命科学竞赛三等奖、第八届黑龙江省生命科学竞赛三等奖、第七届黑龙江省大学生网络文化节网文类二等奖。现阶段主要开展基于虚拟敲除的MSC活性转录因子筛选与验证相关课题研究。",
    "field": "",
    "source": "在读学生信息.xlsx"
  },
  {
    "id": "current-20",
    "name": "储节玲",
    "title": "硕士生",
    "role": "学生",
    "degree": "硕士",
    "year": 2026,
    "enrollment": "26级硕",
    "mentor": "杜宏武",
    "group": "孙春斌组",
    "research": "聚焦工程化天然纳米囊泡递送平台的构建与应用，围绕生物活性组分分析、靶向递送系统设计及神经退行性疾病干预开展研究，探索天然纳米载体在脑部精准递送与疾病治疗中的应用潜力。",
    "bio": "储节玲，安徽安庆人，海南大学风景园林本科，曾获两项全国设计竞赛国赛三等奖、校优秀毕业生、三好学生等荣誉。现研究方向为神经退行性疾病干预，构建工程化天然纳米囊泡递送平台，分析活性组分，设计脑部靶向递送系统，探究纳米载体脑部精准给药的治疗潜力。",
    "field": "",
    "source": "在读学生信息.xlsx"
  },
  {
    "id": "current-21",
    "name": "张国伟",
    "title": "硕士生",
    "role": "学生",
    "degree": "硕士",
    "year": 2026,
    "enrollment": "26级硕",
    "mentor": "杜宏武",
    "group": "刘佳组",
    "research": "以本氏烟草为底盘，在能合成巴卡亭Ⅲ的 19 元件体系上逐级删基因：四轮 158 株，由 AI 依上轮数据每轮选 4 个组合，按产量 ≥ 参考 80% 判可删，独立确认后锁定精简路线并回补说清机制，交付基因数—产量权衡前沿。",
    "bio": "张国伟，安徽铜陵人。本科毕业于安徽农业大学生物制药专业，现为北京科技大学生物技术与工程硕士研究生，主要研究方向为中药合成生物学，聚焦紫杉醇关键前体巴卡亭 Ⅲ 合成路线的优化。科研之余热爱羽毛球运动，注重劳逸结合，积极开展学术探索与交流。",
    "field": "",
    "source": "在读学生信息.xlsx"
  }
];
const studentPhotos = {
  "曾泽华": "assets/students/photo-1.png",
  "李颖娴": "assets/students/photo-2.png",
  "蔡上淋": "assets/students/photo-3.jpeg",
  "李亮": "assets/students/photo-4.jpeg",
  "郭紫荷": "assets/students/photo-5.jpeg",
  "史可欣": "assets/students/photo-6.jpeg",
  "朱健玮": "assets/students/photo-7.jpeg",
  "程熙雯": "assets/students/photo-8.png",
  "霍鑫美": "assets/students/photo-9.jpeg",
  "肖欣然": "assets/students/photo-10.jpeg",
  "俞奕琦": "assets/students/photo-11.jpeg",
  "闫琪": "assets/students/photo-12.jpeg",
  "杨若榴": "assets/students/photo-13.jpeg",
  "荆玺燕": "assets/students/photo-14.jpeg",
  "政雅雯": "assets/students/photo-15.jpeg",
  "杨楠": "assets/students/photo-16.jpeg",
  "魏昌迪": "assets/students/photo-17.jpeg",
  "邢娜娜": "assets/students/photo-18.jpeg",
  "陈思媛": "assets/students/photo-21.jpeg",
  "储节玲": "assets/students/photo-20.png",
  "张国伟": "assets/students/photo-19.jpeg"
};
for (const student of students) student.photo = studentPhotos[student.name];
for (const student of students) {
  const existing = faculty.find(p=>p.name===student.name) || alumni.find(p=>p.name===student.name);
  if (existing) {
    student.id = existing.id;
    existing.studentRecord = student;
    existing.photo = student.photo;
  }
}
const primaryIds = new Set([...faculty,...students].map(p=>p.id));
const people = [...faculty, ...students.filter(s=>!faculty.some(t=>t.id===s.id)), ...alumni.filter(p=>!primaryIds.has(p.id))];
const alumniEmployerGroups = [...new Set(alumni.map(person => person.company).filter(Boolean))]
  .map(name => ({name, members: alumni.filter(person => person.company === name).map(person => person.id)}));
const patents=['一种基于多组学数据的衰老状态评估方法','一种天然产物组合的计算筛选方法','一种用于细胞衰老表型分析的图像处理方法','一种中药成分与靶点关联的知识图谱构建方法','一种健康衰老纵向数据的融合分析方法','一种天然产物活性验证的数据分析方法','一种衰老相关细胞状态的识别方法','一种多模态生物标志物的特征提取方法'].map((title,i)=>({id:'pt'+(i+1),title,date:['2026-10-08','2026-08-19','2026-04-16','2025-12-03','2025-08-22','2025-04-11','2024-09-20','2024-05-08'][i],type:i%3===0?'实用新型':'发明专利',authors:[],number:'授权号待替换',field:fields[i%3].id}));
const reports = [
  {
    "title": "医工融合，北科大“面向人民生命健康”的科创力量！",
    "url": "https://mp.weixin.qq.com/s/75uzAJpUbq9kmVa97fpuOw"
  },
  {
    "title": "给力！北京科技大学大兴研究院揭牌 首都干细胞公共平台花落大兴！",
    "url": "https://mp.weixin.qq.com/s/dtDVMuCJ4BR5am8oLjTWTQ"
  },
  {
    "title": "世界数字经济组织主席应邀访问首都干细胞公共平台",
    "url": "https://mp.weixin.qq.com/s/8TAeREItdO-APfH79jdYAQ"
  },
  {
    "title": "喜报！助力CGT产业发展 康妍葆检测实验室正式通过CNAS实验室认可",
    "url": "https://mp.weixin.qq.com/s/Kfl8CPazJZGgh0aYAaHMsg"
  },
  {
    "title": "康妍葆受邀参加“对话药谷”沙龙活动",
    "url": "https://mp.weixin.qq.com/s/btqUCi6o0WK75JgHKteg7Q"
  },
  {
    "title": "重磅！干细胞临床研究服务平台正式成立",
    "url": "https://mp.weixin.qq.com/s/LKtSYtIkRV-C0Qo8mMRd1A"
  },
  {
    "title": "北京科技大学黄武南副校长带队到大兴调研",
    "url": "https://mp.weixin.qq.com/s/1cTZkJ-TeYmKlO5sLGvJdw"
  },
  {
    "title": "喜讯！康妍葆通过ISO9001质量管理体系认证",
    "url": "https://mp.weixin.qq.com/s/UqoFhWrnvhkRgnEGpi0JNg"
  },
  {
    "title": "大兴区委常委、组织部部长艾丽到康妍葆慰问领军人才",
    "url": "https://mp.weixin.qq.com/s/rhodLJwXQ4DRMnOKixMvOg"
  },
  {
    "title": "“首都干细胞公共平台”落地臻知医学",
    "url": "https://mp.weixin.qq.com/s/DZ_wE8hGw_KU5RyFumnVSw"
  },
  {
    "title": "中科国邦首都干细胞公共平台挂牌仪式",
    "url": "https://mp.weixin.qq.com/s/oY5C2T9aOlMpnF8kTsEmhw"
  },
  {
    "title": "华辰未来首都干细胞公共平台挂牌",
    "url": "https://mp.weixin.qq.com/s/GbRGFmmNo565UueK2G8GsQ"
  },
  {
    "title": "区产促中心党组书记送温暖走访慰问康妍葆",
    "url": "https://mp.weixin.qq.com/s/_2uNdKK3ldgSEOd7mpJFFw"
  },
  {
    "title": "“星光璀璨、筑梦北京”科技人才交流活动在首都干细胞公共平台举行",
    "url": "https://mp.weixin.qq.com/s/LGSQlgD-FmklXfBBBe_v0Q"
  },
  {
    "title": "北京科技大学党委书记、大兴区区长来平台调研走访",
    "url": "https://mp.weixin.qq.com/s/8HBJh4lS2ySFpAgNr4XYQA"
  },
  {
    "title": "喜讯！康妍葆入选北京市2022年第一批“专精特新”",
    "url": "https://mp.weixin.qq.com/s/C8K6hzLe0VXYL240sqIN5w"
  },
  {
    "title": "我司平台与世界数字经济组织签署战略合作协议",
    "url": "https://mp.weixin.qq.com/s/pdrX-fFPARnSyVe_7WW8qg"
  },
  {
    "title": "康妍葆入选北京知识产权试点单位",
    "url": "https://mp.weixin.qq.com/s/AuRL43VJji1CwoJdL_U8Dw"
  },
  {
    "title": "喜讯！康妍葆获得国家高新技术企业认定",
    "url": "https://mp.weixin.qq.com/s/NxEeTmVzp1B1GJa7PU2k3g"
  },
  {
    "title": "康妍葆参加2021中关村论坛（科博会）",
    "url": "https://mp.weixin.qq.com/s/d7OM_GdwB6pg6q29eFosfA"
  },
  {
    "title": "康妍葆参与 “干细胞与组织工程创新和产业发展”论坛",
    "url": "https://mp.weixin.qq.com/s/elU0zNwxsJLk0k_P-MeG4w"
  },
  {
    "title": "“中关村医疗器械园与北京科技大学产学研战略合作”签约仪式在生物医药基地举办",
    "url": "https://mp.weixin.qq.com/s/Hgfk87awEJ4e_ox-ZbuilA"
  },
  {
    "title": "康妍葆受邀参加BIONNOVA细胞与基因治疗创新聚焦演讲",
    "url": "https://mp.weixin.qq.com/s/hTlZIOTEHhP3A342QHwwFg"
  },
  {
    "title": "北京科技大学大兴研究院诚聘海内外英才",
    "url": "https://mp.weixin.qq.com/s/sqv9jG6IfeeqRMmihlsBlg"
  }
];
const notices = [{id:"mission", pinned:true, date:"2026.10.29", type:"实验室使命", title:"112 Lab 使命", body:missionText}, ...[
  {
    "title": "北京科技大学大兴研究院诚聘海内外英才",
    "url": "https://mp.weixin.qq.com/s/sqv9jG6IfeeqRMmihlsBlg",
    "id": "recruit",
    "type": "112活动 · 学术交流",
    "date": "2026.07.21",
    "body": "北京科技大学大兴研究院面向海内外招聘人工智能、高通量测序与队列数据分析、生物医学统计建模等领域人才。"
  },
  {
    "id": "admissions",
    "type": "112招生",
    "title": "硕士生与博士生招生时间",
    "date": "",
    "body": "硕士生招生通常在每年 9–10 月，博士生招生通常在 11 月，具体安排以当年通知为准。"
  },
  {
    "title": "“首都干细胞公共平台”落地臻知医学",
    "url": "https://mp.weixin.qq.com/s/DZ_wE8hGw_KU5RyFumnVSw",
    "id": "platform",
    "type": "112实验室动态",
    "date": "2022.11.17",
    "body": "2022 年 11 月 16 日，首都干细胞公共平台在北京臻知医学科技有限责任公司举行揭牌仪式。"
  },
  {
    "title": "北京科技大学党委书记、大兴区区长来平台调研走访",
    "url": "https://mp.weixin.qq.com/s/8HBJh4lS2ySFpAgNr4XYQA",
    "id": "visit",
    "type": "112实验室动态",
    "date": "2022.03.30",
    "body": "3 月 29 日，北京科技大学党委书记武贵龙一行到大兴生物医药基地，对北京科技大学大兴研究院进行调研和慰问。"
  }
]];
const gallery = [
  {
    "title": "2026年6月18日毕业照",
    "category": "毕业",
    "photos": [
      "assets/events/01-01.webp",
      "assets/events/01-02.webp",
      "assets/events/01-03.webp",
      "assets/events/01-04.webp",
      "assets/events/01-05.webp",
      "assets/events/01-06.webp"
    ]
  },
  {
    "title": "2025年6月27日 深圳招生",
    "category": "学术",
    "photos": [
      "assets/events/02-01.webp"
    ]
  },
  {
    "title": "2024年6月5日 实验室登西山",
    "category": "日常",
    "photos": [
      "assets/events/03-01.webp",
      "assets/events/03-02.webp"
    ]
  },
  {
    "title": "2023年10月24日 登凤凰山",
    "category": "日常",
    "photos": [
      "assets/events/04-01.webp",
      "assets/events/04-02.webp"
    ]
  },
  {
    "title": "2022年11月5日 北科大银杏林",
    "category": "日常",
    "photos": [
      "assets/events/05-01.webp",
      "assets/events/05-02.webp"
    ]
  },
  {
    "title": "2025年5月19日 带本科生参观实习（幸岑璨拍摄）",
    "category": "学术",
    "photos": [
      "assets/events/06-01.webp",
      "assets/events/06-02.webp"
    ]
  },
  {
    "title": "2025年4月29日 带本科生参观实习",
    "category": "学术",
    "photos": [
      "assets/events/07-01.webp"
    ]
  },
  {
    "title": "同仁堂交流合作",
    "category": "学术",
    "photos": [
      "assets/events/08-01.webp"
    ]
  },
  {
    "title": "太原相关领导来交流",
    "category": "学术",
    "photos": [
      "assets/events/09-01.webp"
    ]
  },
  {
    "title": "杜老师和杨老师在安徽考古现场",
    "category": "学术",
    "photos": [
      "assets/events/10-01.webp"
    ]
  },
  {
    "title": "22年博士毕业生",
    "category": "毕业",
    "photos": [
      "assets/events/11-01.webp",
      "assets/events/11-02.webp",
      "assets/events/11-03.webp"
    ]
  },
  {
    "title": "24年毕业生",
    "category": "毕业",
    "photos": [
      "assets/events/12-01.webp"
    ]
  },
  {
    "title": "25年博士毕业生",
    "category": "毕业",
    "photos": [
      "assets/events/13-01.webp",
      "assets/events/13-02.webp",
      "assets/events/13-03.webp"
    ]
  },
  {
    "title": "21年博士毕业",
    "category": "毕业",
    "photos": [
      "assets/events/14-01.webp"
    ]
  },
  {
    "title": "21年研究生实践",
    "category": "学术",
    "photos": [
      "assets/events/15-01.webp",
      "assets/events/15-02.webp"
    ]
  },
  {
    "title": "21年实验室烟台活动",
    "category": "日常",
    "photos": [
      "assets/events/16-01.webp",
      "assets/events/16-02.webp",
      "assets/events/16-03.webp"
    ]
  }
];
