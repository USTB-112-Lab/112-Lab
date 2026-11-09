function home() {
  main.innerHTML = `<section class="home-banner" aria-label="112 Lab 首页主视觉">
    <h1 style="position:absolute;width:1px;height:1px;overflow:hidden;clip-path:inset(50%)">112 Lab · 干细胞 · 再生 · 健康长寿</h1>
    <img src="assets/regeneration.webp" width="1774" height="887" class="home-banner-image" alt="112 Lab，干细胞 · 再生 · 健康长寿。蓝色山水间，两种状态的细胞由一道光线相连。" fetchpriority="high">
  </section>
  <section class="home-brief" aria-label="使命与通知">
    <article class="mission-panel">
      <span class="eyebrow">OUR MISSION</span><h2>112 Lab 使命</h2>
      <p>自 2006 年成立以来，112 实验室致力于生命健康原创研究，以为国选才育才为己任。</p>
      <p>我们探索疾病发生的关键分子，研发新型药物和快速、灵敏的检测方法，也为学生提供宽松自由的学习环境和务实求真的科研指导。</p>
      <button class="mission-expand" data-notice="mission" aria-haspopup="dialog" aria-label="查看 112 Lab 使命全文"><span>阅读全文</span><span class="plus-sign" aria-hidden="true">+</span></button>
    </article>
    <div class="home-updates"><div class="quiet-section-head"><div><span class="eyebrow">NOTICES</span><h2>实验室通知</h2></div><a href="#news">全部通知 ↗</a></div>
      ${notices.slice(0,3).map(noticeHTML).join('')}
    </div>
  </section>`;
}
