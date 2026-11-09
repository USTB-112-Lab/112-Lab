const faculty = [
  {
    "name": "杜宏武",
    "pinyin": "Du Hongwu",
    "id": "pi",
    "title": "112 Lab 实验室创始人",
    "role": "教师",
    "isPI": true,
    "portrait": 8,
    "field": "",
    "source": "教师名单及实验室使命文本",
    "bio": "112 Lab 实验室创始人。"
  },
  {
    "name": "杭中辞",
    "pinyin": "Hang Zhongci",
    "id": "t-hang",
    "title": "微溯检测组",
    "role": "教师",
    "isPI": false,
    "portrait": 6,
    "field": "",
    "source": "教师名单及实验室使命文本",
    "bio": "112 Lab 微溯检测组。",
    "alumniRecord": {
      "id": "t-hang",
      "name": "杭中辞",
      "role": "毕业生",
      "title": "硕士毕业生",
      "degree": "硕士",
      "year": 2023,
      "education": "2020-2023 北京科技大学，硕士",
      "topic": "纳米生物材料在阿尔茨海默病方面的应用，干细胞及其衍生物在抗衰领域的应用与产品开发，组方或单体中药产品的开发。",
      "destination": "",
      "continuation": "博士阶段继续深造（据资料）",
      "sourcePages": [
        14
      ],
      "source": "毕业生信息",
      "field": "",
      "bio": "纳米生物材料在阿尔茨海默病方面的应用，干细胞及其衍生物在抗衰领域的应用与产品开发，组方或单体中药产品的开发。",
      "portrait": 6
    }
  },
  {
    "name": "刘宏珍",
    "pinyin": "Liu Hongzhen",
    "id": "t-liuh",
    "title": "实验室教师",
    "role": "教师",
    "isPI": false,
    "portrait": 1,
    "field": "",
    "source": "教师名单及实验室使命文本",
    "bio": "112 Lab 教师。"
  },
  {
    "name": "刘佳",
    "pinyin": "Liu Jia",
    "id": "t-liuj",
    "title": "合成生物学",
    "research": "合成生物学。",
    "role": "教师",
    "isPI": false,
    "portrait": 7,
    "field": "",
    "source": "教师名单及实验室使命文本",
    "bio": "112 Lab 合成生物学。"
  },
  {
    "name": "刘玉凤",
    "pinyin": "Liu Yufeng",
    "id": "t-liuy",
    "title": "行政负责人",
    "role": "教师",
    "isPI": false,
    "portrait": 3,
    "field": "",
    "source": "教师名单及实验室使命文本",
    "bio": "112 Lab 行政负责人。"
  },
  {
    "name": "孙春斌",
    "pinyin": "Sun Chunbin",
    "id": "t-sun",
    "title": "中科院合作组",
    "role": "教师",
    "isPI": false,
    "portrait": 0,
    "field": "",
    "source": "教师名单及实验室使命文本",
    "bio": "112 Lab 中科院合作组。",
    "alumniRecord": {
      "id": "t-sun",
      "name": "孙春斌",
      "role": "毕业生",
      "title": "博士毕业生",
      "degree": "博士",
      "year": 2025,
      "education": "2021-2025 北京科技大学，博士",
      "topic": "工程化外泌体、仿生纳米囊泡、水凝胶在神经退行性领域的应用研究，中药数智化及中药外泌体的研究与转化",
      "destination": "北京科技大学博士后",
      "continuation": "",
      "sourcePages": [
        4
      ],
      "source": "毕业生信息",
      "field": "",
      "bio": "工程化外泌体、仿生纳米囊泡、水凝胶在神经退行性领域的应用研究，中药数智化及中药外泌体的研究与转化",
      "portrait": 0,
      "currentAffiliation": {
        "organization": "北京科技大学",
        "position": "博士后",
        "basis": "《毕业生信息》第 4 页记载：2025 年至资料编制时在北京科技大学从事博士后研究。"
      }
    }
  },
  {
    "name": "王芳",
    "pinyin": "Wang Fang",
    "id": "t-wang",
    "title": "分子考古",
    "research": "分子考古。",
    "role": "教师",
    "isPI": false,
    "portrait": 5,
    "field": "",
    "source": "教师名单及实验室使命文本",
    "bio": "112 Lab 分子考古。"
  },
  {
    "name": "幸岑璨",
    "pinyin": "Xing Cencan",
    "id": "t-xing",
    "title": "112 Lab 科学负责人",
    "academicTitle": "北京科技大学 副教授",
    "research": "干细胞功效机理研究。",
    "role": "教师",
    "isPI": false,
    "portrait": 9,
    "field": "",
    "source": "教师名单及实验室使命文本",
    "bio": "112 Lab 科学负责人 · 干细胞功效机理研究。"
  },
  {
    "name": "曾泽华",
    "pinyin": "Zeng Zehua",
    "id": "t-zeng",
    "title": "人工智能负责人",
    "research": "人工智能。",
    "role": "教师",
    "isPI": false,
    "portrait": 4,
    "field": "",
    "source": "教师名单及实验室使命文本",
    "bio": "112 Lab 人工智能负责人。"
  },
  {
    "name": "张鹏",
    "pinyin": "Zhang Peng",
    "id": "t-zhang",
    "title": "生物信息学负责人",
    "research": "生物信息学。",
    "role": "教师",
    "isPI": false,
    "portrait": 2,
    "field": "",
    "source": "教师名单及实验室使命文本",
    "bio": "112 Lab 生物信息学负责人。"
  }
];
for (const teacher of faculty) {
  teacher.identities = [teacher.title, teacher.academicTitle, '首都干细胞公共平台 研究员（PI）'].filter(Boolean);
}
const alumni = [
  {
    "id": "al-1",
    "name": "郭文环",
    "role": "毕业生",
    "title": "博士毕业生",
    "degree": "博士",
    "year": 2022,
    "education": "2018-2022 北京科技大学，博士",
    "topic": "博论《间充质干细胞对阿尔茨海默症模型小鼠的治疗作用及相关机制研究》",
    "destination": "复旦大学博后",
    "continuation": "",
    "sourcePages": [
      1
    ],
    "source": "毕业生信息",
    "field": "",
    "bio": "博论《间充质干细胞对阿尔茨海默症模型小鼠的治疗作用及相关机制研究》",
    "photo": "assets/alumni/al-1.png"
  },
  {
    "id": "al-2",
    "name": "张晓霜",
    "role": "毕业生",
    "title": "博士毕业生",
    "degree": "博士",
    "year": 2023,
    "education": "2019-2023 北京科技大学，博士",
    "topic": "硕论《人源口腔干细胞促进小鼠毛发再生研究》\n博论《间充质干细胞治疗阿尔茨海默病小鼠模型的机制研究》",
    "destination": "复旦大学博后",
    "continuation": "",
    "sourcePages": [
      2
    ],
    "source": "毕业生信息",
    "field": "",
    "bio": "硕论《人源口腔干细胞促进小鼠毛发再生研究》\n博论《间充质干细胞治疗阿尔茨海默病小鼠模型的机制研究》",
    "photo": "assets/alumni/al-2.png"
  },
  {
    "id": "al-3",
    "name": "雷童",
    "role": "毕业生",
    "title": "博士毕业生",
    "degree": "博士",
    "year": 2023,
    "education": "2018-2023 北京科技大学，硕博连读",
    "topic": "《牙源干细胞对帕金森病动物模型的作用及机制研究》",
    "destination": "中国中医研究院",
    "continuation": "",
    "sourcePages": [
      3
    ],
    "source": "毕业生信息",
    "field": "",
    "bio": "《牙源干细胞对帕金森病动物模型的作用及机制研究》",
    "photo": "assets/alumni/al-3.png"
  },
  {
    "id": "t-sun",
    "name": "孙春斌",
    "role": "毕业生",
    "title": "博士毕业生",
    "degree": "博士",
    "year": 2025,
    "education": "2021-2025 北京科技大学，博士",
    "topic": "工程化外泌体、仿生纳米囊泡、水凝胶在神经退行性领域的应用研究，中药数智化及中药外泌体的研究与转化",
    "destination": "北京科技大学博士后",
    "continuation": "",
    "sourcePages": [
      4
    ],
    "source": "毕业生信息",
    "field": "",
    "bio": "工程化外泌体、仿生纳米囊泡、水凝胶在神经退行性领域的应用研究，中药数智化及中药外泌体的研究与转化",
    "portrait": 0,
    "currentAffiliation": {
      "organization": "北京科技大学",
      "position": "博士后",
      "basis": "《毕业生信息》第 4 页记载：2025 年至资料编制时在北京科技大学从事博士后研究。"
    }
  },
  {
    "id": "al-5",
    "name": "毕旺钰",
    "role": "毕业生",
    "title": "硕士毕业生",
    "degree": "硕士",
    "year": 2022,
    "education": "2019-2022 北京科技大学，硕士",
    "topic": "用于均一细胞球形成与长期培养的自动化微流控水凝胶增强微孔阵列芯片",
    "destination": "",
    "continuation": "博士阶段继续深造（据资料）",
    "sourcePages": [
      5
    ],
    "source": "毕业生信息",
    "field": "",
    "bio": "用于均一细胞球形成与长期培养的自动化微流控水凝胶增强微孔阵列芯片",
    "photo": "assets/alumni/al-5.jpg"
  },
  {
    "id": "al-13",
    "name": "李颖娴",
    "role": "毕业生",
    "title": "硕士毕业生",
    "degree": "硕士",
    "year": 2019,
    "education": "2017-2019 北京科技大学，硕士",
    "topic": "硕论《白塞病检测蛋白质芯片的构建与初步临床应用》",
    "destination": "康妍葆（北京）干细胞科技有限公司",
    "continuation": "博士阶段继续深造（据资料）",
    "sourcePages": [
      13
    ],
    "source": "毕业生信息",
    "field": "",
    "bio": "硕论《白塞病检测蛋白质芯片的构建与初步临床应用》",
    "company": "康妍葆（北京）干细胞科技有限公司",
    "photo": "assets/alumni/al-13.png",
    "currentAffiliation": {
      "organization": "112 大兴研究院",
      "position": "负责人",
      "basis": "2026 年 10 月 29 日实验室使命文件列为“112大兴研究院负责人”。"
    }
  },
  {
    "id": "t-hang",
    "name": "杭中辞",
    "role": "毕业生",
    "title": "硕士毕业生",
    "degree": "硕士",
    "year": 2023,
    "education": "2020-2023 北京科技大学，硕士",
    "topic": "纳米生物材料在阿尔茨海默病方面的应用，干细胞及其衍生物在抗衰领域的应用与产品开发，组方或单体中药产品的开发。",
    "destination": "",
    "continuation": "博士阶段继续深造（据资料）",
    "sourcePages": [
      14
    ],
    "source": "毕业生信息",
    "field": "",
    "bio": "纳米生物材料在阿尔茨海默病方面的应用，干细胞及其衍生物在抗衰领域的应用与产品开发，组方或单体中药产品的开发。",
    "portrait": 6
  },
  {
    "id": "al-15",
    "name": "蔡上淋",
    "role": "毕业生",
    "title": "硕士毕业生",
    "degree": "硕士",
    "year": 2023,
    "education": "2020-2023 北京科技大学，硕士",
    "topic": "开发基于微流控技术的新型BBB-on-chip，通过动态流体调节和多细胞共培养，精确模拟生理和病理条件下血脑屏障的动态通透性和神经血管相互作用。",
    "destination": "",
    "continuation": "博士阶段继续深造（据资料）",
    "sourcePages": [
      15
    ],
    "source": "毕业生信息",
    "field": "",
    "bio": "开发基于微流控技术的新型BBB-on-chip，通过动态流体调节和多细胞共培养，精确模拟生理和病理条件下血脑屏障的动态通透性和神经血管相互作用。",
    "photo": "assets/alumni/al-15.jpg"
  },
  {
    "id": "al-16",
    "name": "李亮",
    "role": "毕业生",
    "title": "硕士毕业生",
    "degree": "硕士",
    "year": 2024,
    "education": "2021-2024 北京科技大学，硕士",
    "topic": "研究方向聚焦神经退行性疾病（如阿尔茨海默病，AD）的防治策略，通过构建细胞膜仿生纳米颗粒（CMBNPs） 递送系统，构建预防性疫苗，实现多靶点协同干预。",
    "destination": "",
    "continuation": "博士阶段继续深造（据资料）",
    "sourcePages": [
      16
    ],
    "source": "毕业生信息",
    "field": "",
    "bio": "研究方向聚焦神经退行性疾病（如阿尔茨海默病，AD）的防治策略，通过构建细胞膜仿生纳米颗粒（CMBNPs） 递送系统，构建预防性疫苗，实现多靶点协同干预。",
    "photo": "assets/alumni/al-16.jpg"
  },
  {
    "id": "al-27",
    "name": "陈虹羽",
    "role": "毕业生",
    "title": "硕士毕业生",
    "degree": "硕士",
    "year": 2025,
    "education": "2022-2025 北京科技大学，硕士",
    "topic": "《初步探究牙源干细胞治疗帕金森病的关键分子和潜在机制研究》",
    "destination": "海南省海关",
    "continuation": "",
    "sourcePages": [
      27
    ],
    "source": "毕业生信息",
    "field": "",
    "bio": "《初步探究牙源干细胞治疗帕金森病的关键分子和潜在机制研究》",
    "photo": "assets/alumni/al-27.jpg"
  },
  {
    "id": "al-28",
    "name": "任伟杰",
    "role": "毕业生",
    "title": "硕士毕业生",
    "degree": "硕士",
    "year": 2025,
    "education": "2022-2025 北京科技大学，硕士",
    "topic": "",
    "destination": "齐鲁制药",
    "continuation": "",
    "sourcePages": [
      28
    ],
    "source": "毕业生信息",
    "field": "",
    "bio": "",
    "company": "齐鲁制药",
    "photo": "assets/alumni/al-28.jpg"
  },
  {
    "id": "al-29",
    "name": "沙爽",
    "role": "毕业生",
    "title": "硕士毕业生",
    "degree": "硕士",
    "year": 2025,
    "education": "2022-2025 北京科技大学，硕士",
    "topic": "",
    "destination": "齐鲁制药",
    "continuation": "",
    "sourcePages": [
      29
    ],
    "source": "毕业生信息",
    "field": "",
    "bio": "",
    "company": "齐鲁制药",
    "photo": "assets/alumni/al-29.jpg"
  },
  {
    "id": "al-30",
    "name": "吴亚文",
    "role": "毕业生",
    "title": "硕士毕业生",
    "degree": "硕士",
    "year": 2024,
    "education": "2021-2024 北京科技大学，硕士",
    "topic": "《阿尔茨海默病复合纳米载药系统构建与初步应用》",
    "destination": "",
    "continuation": "",
    "sourcePages": [
      30
    ],
    "source": "毕业生信息",
    "field": "",
    "bio": "《阿尔茨海默病复合纳米载药系统构建与初步应用》",
    "photo": "assets/alumni/al-30.png"
  },
  {
    "id": "al-31",
    "name": "李陆平",
    "role": "毕业生",
    "title": "硕士毕业生",
    "degree": "硕士",
    "year": 2024,
    "education": "2021-2024 北京科技大学，硕士",
    "topic": "《载药纳米粒黏附干细胞外泌体缓解肺纤维化的实验研究》",
    "destination": "",
    "continuation": "",
    "sourcePages": [
      31
    ],
    "source": "毕业生信息",
    "field": "",
    "bio": "《载药纳米粒黏附干细胞外泌体缓解肺纤维化的实验研究》",
    "photo": "assets/alumni/al-31.png"
  },
  {
    "id": "al-32",
    "name": "侯良璇",
    "role": "毕业生",
    "title": "硕士毕业生",
    "degree": "硕士",
    "year": 2024,
    "education": "2021-2024 北京科技大学，硕士",
    "topic": "《新型壳聚糖水凝胶复合物联合干细胞修复糖尿病难愈损伤》",
    "destination": "",
    "continuation": "",
    "sourcePages": [
      32
    ],
    "source": "毕业生信息",
    "field": "",
    "bio": "《新型壳聚糖水凝胶复合物联合干细胞修复糖尿病难愈损伤》",
    "photo": "assets/alumni/al-32.png"
  },
  {
    "id": "al-33",
    "name": "王丽",
    "role": "毕业生",
    "title": "硕士毕业生",
    "degree": "硕士",
    "year": 2023,
    "education": "2020-2023 北京科技大学，硕士",
    "topic": "《脱落乳牙牙髓干细胞对血管内皮细胞的抗衰老作用》",
    "destination": "",
    "continuation": "",
    "sourcePages": [
      33
    ],
    "source": "毕业生信息",
    "field": "",
    "bio": "《脱落乳牙牙髓干细胞对血管内皮细胞的抗衰老作用》",
    "photo": "assets/alumni/al-33.png"
  },
  {
    "id": "al-34",
    "name": "王冬辉",
    "role": "毕业生",
    "title": "硕士毕业生",
    "degree": "硕士",
    "year": 2023,
    "education": "2020-2023 北京科技大学，硕士",
    "topic": "《脐带间充质干细胞可通过肠道微环境治疗阿兹海默症》",
    "destination": "齐鲁制药",
    "continuation": "",
    "sourcePages": [
      34
    ],
    "source": "毕业生信息",
    "field": "",
    "bio": "《脐带间充质干细胞可通过肠道微环境治疗阿兹海默症》",
    "company": "齐鲁制药",
    "photo": "assets/alumni/al-34.png"
  },
  {
    "id": "al-35",
    "name": "杨燕杰",
    "role": "毕业生",
    "title": "硕士毕业生",
    "degree": "硕士",
    "year": 2022,
    "education": "2019-2022 北京科技大学，硕士",
    "topic": "《探究白藜芦醇对于脐带间充质干细胞的影响》",
    "destination": "舒泰神（北京）生物制药股份有限公司",
    "continuation": "",
    "sourcePages": [
      35
    ],
    "source": "毕业生信息",
    "field": "",
    "bio": "《探究白藜芦醇对于脐带间充质干细胞的影响》",
    "company": "舒泰神（北京）生物制药股份有限公司",
    "photo": "assets/alumni/al-35.png"
  },
  {
    "id": "al-36",
    "name": "肖壮壮",
    "role": "毕业生",
    "title": "硕士毕业生",
    "degree": "硕士",
    "year": 2022,
    "education": "2019-2022 北京科技大学，硕士",
    "topic": "《帕金森病相关分子靶点的筛选及相互作用蛋白的研究》",
    "destination": "国药",
    "continuation": "",
    "sourcePages": [
      36
    ],
    "source": "毕业生信息",
    "field": "",
    "bio": "《帕金森病相关分子靶点的筛选及相互作用蛋白的研究》",
    "company": "国药",
    "photo": "assets/alumni/al-36.png"
  },
  {
    "id": "al-37",
    "name": "王建",
    "role": "毕业生",
    "title": "硕士毕业生",
    "degree": "硕士",
    "year": 2020,
    "education": "2018-2020 北京科技大学，硕士",
    "topic": "《基于凝胶蛋白质组学的口腔干细胞异质性研究》",
    "destination": "",
    "continuation": "",
    "sourcePages": [
      37
    ],
    "source": "毕业生信息",
    "field": "",
    "bio": "《基于凝胶蛋白质组学的口腔干细胞异质性研究》",
    "photo": "assets/alumni/al-37.png"
  },
  {
    "id": "al-38",
    "name": "王磊",
    "role": "毕业生",
    "title": "硕士毕业生",
    "degree": "硕士",
    "year": 2020,
    "education": "2018-2020 北京科技大学，硕士",
    "topic": "《绿原酸生物靶点的筛选和分子机制的研究》",
    "destination": "中科院读博",
    "continuation": "",
    "sourcePages": [
      38
    ],
    "source": "毕业生信息",
    "field": "",
    "bio": "《绿原酸生物靶点的筛选和分子机制的研究》",
    "photo": "assets/alumni/al-38.png"
  },
  {
    "id": "al-39",
    "name": "刘华",
    "role": "毕业生",
    "title": "硕士毕业生",
    "degree": "硕士",
    "year": 2019,
    "education": "2017-2019 北京科技大学，硕士",
    "topic": "硕论《MiRNA在白塞病中的临床诊断研究》",
    "destination": "",
    "continuation": "",
    "sourcePages": [
      39
    ],
    "source": "毕业生信息",
    "field": "",
    "bio": "硕论《MiRNA在白塞病中的临床诊断研究》",
    "photo": "assets/alumni/al-39.png"
  },
  {
    "id": "al-40",
    "name": "崔家文",
    "role": "毕业生",
    "title": "硕士毕业生",
    "degree": "硕士",
    "year": 2018,
    "education": "2016-2018 北京科技大学，硕士",
    "topic": "《川崎病免疫靶点筛选与转化医学研究》",
    "destination": "",
    "continuation": "",
    "sourcePages": [
      40
    ],
    "source": "毕业生信息",
    "field": "",
    "bio": "《川崎病免疫靶点筛选与转化医学研究》",
    "photo": "assets/alumni/al-40.png"
  },
  {
    "id": "al-42",
    "name": "谢卓明",
    "role": "毕业生",
    "title": "硕士毕业生",
    "degree": "硕士",
    "year": 2018,
    "education": "2016-2018 北京科技大学，硕士",
    "topic": "《川崎病诊断生物靶标的筛选》",
    "destination": "",
    "continuation": "",
    "sourcePages": [
      42
    ],
    "source": "毕业生信息",
    "field": "",
    "bio": "《川崎病诊断生物靶标的筛选》",
    "photo": "assets/alumni/al-42.png"
  },
  {
    "id": "al-43",
    "name": "常欣荣",
    "role": "毕业生",
    "title": "硕士毕业生",
    "degree": "硕士",
    "year": 2017,
    "education": "2015-2017 北京科技大学，硕士",
    "topic": "《胰腺相关疾病鉴别研究及IL-6(174G/C)基因多态性与二型糖尿病的关系》",
    "destination": "",
    "continuation": "",
    "sourcePages": [
      43
    ],
    "source": "毕业生信息",
    "field": "",
    "bio": "《胰腺相关疾病鉴别研究及IL-6(174G/C)基因多态性与二型糖尿病的关系》",
    "photo": "assets/alumni/al-43.png"
  },
  {
    "id": "al-44",
    "name": "肖江山",
    "role": "毕业生",
    "title": "硕士毕业生",
    "degree": "硕士",
    "year": 2017,
    "education": "2015-2017 北京科技大学，硕士",
    "topic": "《核不均一核糖核蛋白C1/C2与白塞病相关性研究》",
    "destination": "",
    "continuation": "",
    "sourcePages": [
      44
    ],
    "source": "毕业生信息",
    "field": "",
    "bio": "《核不均一核糖核蛋白C1/C2与白塞病相关性研究》",
    "photo": "assets/alumni/al-44.png"
  },
  {
    "id": "al-45",
    "name": "侯赛因",
    "role": "毕业生",
    "title": "博士毕业生",
    "degree": "博士",
    "year": 2019,
    "education": "2015-2019 北京科技大学，博士",
    "topic": "《白塞病（一种自身免疫性疾病）发病机制的膜和核自身抗原抗体的鉴定》",
    "destination": "巴基斯坦",
    "continuation": "",
    "sourcePages": [
      45
    ],
    "source": "毕业生信息",
    "field": "",
    "bio": "《白塞病（一种自身免疫性疾病）发病机制的膜和核自身抗原抗体的鉴定》"
  },
  {
    "id": "al-46",
    "name": "杨秀琴",
    "role": "毕业生",
    "title": "硕士毕业生",
    "degree": "硕士",
    "year": 2016,
    "education": "2014-2016 北京科技大学，硕士",
    "topic": "《膜突蛋白在干燥综合征中的初步研究》",
    "destination": "",
    "continuation": "",
    "sourcePages": [
      46
    ],
    "source": "毕业生信息",
    "field": "",
    "bio": "《膜突蛋白在干燥综合征中的初步研究》",
    "photo": "assets/alumni/al-46.png"
  },
  {
    "id": "al-47",
    "name": "张文",
    "role": "毕业生",
    "title": "硕士毕业生",
    "degree": "硕士",
    "year": 2016,
    "education": "2014-2016 北京科技大学，硕士",
    "topic": "《干燥综合征抗原的鉴定及相关抗原间关系的研究》",
    "destination": "",
    "continuation": "",
    "sourcePages": [
      47
    ],
    "source": "毕业生信息",
    "field": "",
    "bio": "《干燥综合征抗原的鉴定及相关抗原间关系的研究》",
    "photo": "assets/alumni/al-47.png"
  },
  {
    "id": "al-48",
    "name": "甘贤峰",
    "role": "毕业生",
    "title": "硕士毕业生",
    "degree": "硕士",
    "year": 2016,
    "education": "2014-2016 北京科技大学，硕士",
    "topic": "《临床信息集中管理系统的创建与应用研究》",
    "destination": "",
    "continuation": "",
    "sourcePages": [
      48
    ],
    "source": "毕业生信息",
    "field": "",
    "bio": "《临床信息集中管理系统的创建与应用研究》",
    "photo": "assets/alumni/al-48.png"
  },
  {
    "id": "al-49",
    "name": "杨春鹤",
    "role": "毕业生",
    "title": "硕士毕业生",
    "degree": "硕士",
    "year": 2015,
    "education": "2013-2015 北京科技大学，硕士",
    "topic": "《自身免疫性疾病相关分子内在规律的生物信息学研究》",
    "destination": "",
    "continuation": "",
    "sourcePages": [
      49
    ],
    "source": "毕业生信息",
    "field": "",
    "bio": "《自身免疫性疾病相关分子内在规律的生物信息学研究》",
    "photo": "assets/alumni/al-49.png"
  },
  {
    "id": "al-50",
    "name": "赵兰青",
    "role": "毕业生",
    "title": "硕士毕业生",
    "degree": "硕士",
    "year": 2015,
    "education": "2013-2015 北京科技大学，硕士",
    "topic": "《川崎病的自身免疫因素探索及自身抗原的筛选研究》",
    "destination": "",
    "continuation": "",
    "sourcePages": [
      50
    ],
    "source": "毕业生信息",
    "field": "",
    "bio": "《川崎病的自身免疫因素探索及自身抗原的筛选研究》",
    "photo": "assets/alumni/al-50.png"
  },
  {
    "id": "al-51",
    "name": "陈为洋",
    "role": "毕业生",
    "title": "硕士毕业生",
    "degree": "硕士",
    "year": 2014,
    "education": "2012-2014 北京科技大学，硕士",
    "topic": "",
    "destination": "",
    "continuation": "",
    "sourcePages": [
      51,
      52
    ],
    "source": "毕业生信息",
    "field": "",
    "bio": ""
  },
  {
    "id": "al-53",
    "name": "刘佳",
    "role": "毕业生",
    "title": "硕士毕业生",
    "degree": "硕士",
    "year": 2013,
    "education": "2011-2013 北京科技大学，硕士",
    "topic": "《基于生物芯片和斑点酶联免疫技术进行高通量真菌毒素快速检测的方法学研究》",
    "destination": "",
    "continuation": "",
    "sourcePages": [
      53
    ],
    "source": "毕业生信息",
    "field": "",
    "bio": "《基于生物芯片和斑点酶联免疫技术进行高通量真菌毒素快速检测的方法学研究》",
    "portrait": 7
  },
  {
    "id": "al-54",
    "name": "贡鸣",
    "role": "毕业生",
    "title": "硕士毕业生",
    "degree": "硕士",
    "year": 2012,
    "education": "2010-2012 北京科技大学，硕士",
    "topic": "《氨基酸对无支架结构猪软骨细胞片状培养影响的研究》",
    "destination": "",
    "continuation": "",
    "sourcePages": [
      54
    ],
    "source": "毕业生信息",
    "field": "",
    "bio": "《氨基酸对无支架结构猪软骨细胞片状培养影响的研究》",
    "photo": "assets/alumni/al-54.png"
  },
  {
    "id": "al-55",
    "name": "刘玉凤",
    "role": "毕业生",
    "title": "硕士毕业生",
    "degree": "硕士",
    "year": 2012,
    "education": "2010-2012 北京科技大学，硕士",
    "topic": "《5kD生长激素对大鼠胰岛细胞的影响》",
    "destination": "大兴研究院",
    "continuation": "",
    "sourcePages": [
      55
    ],
    "source": "毕业生信息",
    "field": "",
    "bio": "《5kD生长激素对大鼠胰岛细胞的影响》",
    "portrait": 3
  },
  {
    "id": "al-56",
    "name": "蔡林辉",
    "role": "毕业生",
    "title": "硕士毕业生",
    "degree": "硕士",
    "year": 2011,
    "education": "2009-2011 北京科技大学，硕士",
    "topic": "",
    "destination": "",
    "continuation": "",
    "sourcePages": [
      56
    ],
    "source": "毕业生信息",
    "field": "",
    "bio": "",
    "photo": "assets/alumni/al-56.png"
  },
  {
    "id": "al-57",
    "name": "郭成志",
    "role": "毕业生",
    "title": "硕士毕业生",
    "degree": "硕士",
    "year": 2011,
    "education": "2009-2011 北京科技大学，硕士",
    "topic": "",
    "destination": "",
    "continuation": "",
    "sourcePages": [
      57
    ],
    "source": "毕业生信息",
    "field": "",
    "bio": "",
    "photo": "assets/alumni/al-57.png"
  },
  {
    "id": "al-58",
    "name": "王杰勇",
    "role": "毕业生",
    "title": "硕士毕业生",
    "degree": "硕士",
    "year": 2011,
    "education": "2009-2011 北京科技大学，硕士",
    "topic": "",
    "destination": "",
    "continuation": "",
    "sourcePages": [
      58
    ],
    "source": "毕业生信息",
    "field": "",
    "bio": "",
    "photo": "assets/alumni/al-58.png"
  },
  {
    "id": "al-59",
    "name": "荀一萍",
    "role": "毕业生",
    "title": "硕士毕业生",
    "degree": "硕士",
    "year": 2011,
    "education": "2009-2011 北京科技大学，硕士",
    "topic": "",
    "destination": "",
    "continuation": "",
    "sourcePages": [
      59
    ],
    "source": "毕业生信息",
    "field": "",
    "bio": "",
    "photo": "assets/alumni/al-59.png"
  },
  {
    "id": "al-60",
    "name": "李传宝",
    "role": "毕业生",
    "title": "硕士毕业生",
    "degree": "硕士",
    "year": 2010,
    "education": "2008-2010 北京科技大学，硕士",
    "topic": "",
    "destination": "",
    "continuation": "",
    "sourcePages": [
      60
    ],
    "source": "毕业生信息",
    "field": "",
    "bio": "",
    "photo": "assets/alumni/al-60.png"
  },
  {
    "id": "al-61",
    "name": "王小伟",
    "role": "毕业生",
    "title": "硕士毕业生",
    "degree": "硕士",
    "year": 2010,
    "education": "2008-2010 北京科技大学，硕士",
    "topic": "",
    "destination": "",
    "continuation": "",
    "sourcePages": [
      61
    ],
    "source": "毕业生信息",
    "field": "",
    "bio": "",
    "photo": "assets/alumni/al-61.png"
  },
  {
    "id": "al-62",
    "name": "吴莉",
    "role": "毕业生",
    "title": "硕士毕业生",
    "degree": "硕士",
    "year": 2010,
    "education": "2008-2010 北京科技大学，硕士",
    "topic": "",
    "destination": "",
    "continuation": "",
    "sourcePages": [
      62
    ],
    "source": "毕业生信息",
    "field": "",
    "bio": "",
    "photo": "assets/alumni/al-62.png"
  },
  {
    "id": "al-63",
    "name": "张洁",
    "role": "毕业生",
    "title": "硕士毕业生",
    "degree": "硕士",
    "year": 2009,
    "education": "2007-2009 北京科技大学，硕士",
    "topic": "",
    "destination": "",
    "continuation": "",
    "sourcePages": [
      63
    ],
    "source": "毕业生信息",
    "field": "",
    "bio": "",
    "photo": "assets/alumni/al-63.png"
  },
  {
    "id": "al-64",
    "name": "王爽",
    "role": "毕业生",
    "title": "硕士毕业生",
    "degree": "硕士",
    "year": 2009,
    "education": "2007-2009 北京科技大学，硕士",
    "topic": "",
    "destination": "",
    "continuation": "",
    "sourcePages": [
      64
    ],
    "source": "毕业生信息",
    "field": "",
    "bio": "",
    "photo": "assets/alumni/al-64.png"
  }
];

Object.assign(faculty.find(p=>p.name==='刘宏珍'), {
title:'转化负责人',
identities:['研究员','西安交通大学 MBA','北京市高级技术经理人 · 创业辅导师','首都干细胞公共平台 研究员（PI）'],
research:'高校科技成果转移转化；政产学研合作；企业经营管理；国家大学科技园区运营。',
bio:'二十余年高校工作和自主创业经历，具有科技成果转化、研发机构建设、校办产业管理、国家大学科技园区运营、科创企业经营管理经验。曾任北京科技大学资产公司副总经理、北京科技大学科技成果转化研究院副院长、北京工业大学投资公司副总经理、北工大国家示范性软件学院副院长、北京市物联网软件与系统工程技术研究中心副主任、北工大国家技术转移示范机构董事长及总经理等职。',
projects:'北京市科技成果转化平台建设；北京市科委技术转移人才培养基地；中关村国家自主创新示范区优化创新创业生态环境项目等。',
awards:'国家级教学成果二等奖；北京市科技进步二等奖；北京市教学成果一等奖；北京市教学成果二等奖。',
source:'大兴研究院-研究团队参考-刘宏珍.pptx'
});

faculty.find(p=>p.name==='刘宏珍').photo='assets/liu-hongzhen.jpg';

// Official USTB faculty portraits, verified 2026-11-09.
const officialFacultyPhotos = {
  "杜宏武": "assets/faculty/du-hongwu.jpg",
  "张鹏": "assets/faculty/zhang-peng.jpg",
  "刘佳": "assets/faculty/liu-jia.jpg",
  "王芳": "assets/faculty/wang-fang.jpg",
  "幸岑璨": "assets/faculty/xing-cencan.png"
};
for (const person of faculty) { if (officialFacultyPhotos[person.name]) person.photo = officialFacultyPhotos[person.name]; }
