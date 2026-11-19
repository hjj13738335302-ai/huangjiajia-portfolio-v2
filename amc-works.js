const sourceSite = 'https://hjj13738335302-ai.github.io/huangjiajia-portfolio';

const works = [
  {
    number: '01',
    collection: 'GENERATIVE WORLD-BUILDING',
    title: 'COMPLETE KIT',
    titleCn: '全套组合卖点片',
    note: 'A product world assembled through spatial continuity, controlled light and a sequence of machine-generated scenes.',
    duration: '00:16',
    ratio: 'landscape',
    video: 'tvc-01-ptlom-space-kit.mp4',
    poster: 'tvc-01-ptlom-space-kit.webp',
  },
  {
    number: '02',
    collection: 'GENERATIVE WORLD-BUILDING',
    title: 'DEEP & LEAKPROOF',
    titleCn: '带盖深盆防漏尿',
    note: 'A visual argument built from tension, detail and transformation, turning a functional feature into a compact image narrative.',
    duration: '00:21',
    ratio: 'landscape',
    video: 'tvc-02-ptfff-leakproof.mp4',
    poster: 'tvc-02-ptfff-leakproof.webp',
  },
  {
    number: '03',
    collection: 'GENERATIVE WORLD-BUILDING',
    title: 'HIGH WALL, WARM HOME',
    titleCn: '高边温馨家居风',
    note: 'Domestic atmosphere becomes the organising language: warm colour, scale and animal presence connect separate generated shots.',
    duration: '00:15',
    ratio: 'landscape',
    video: 'tvc-03-highwall-home.mp4',
    poster: 'tvc-03-highwall-home.webp',
  },
  {
    number: '04',
    collection: 'GENERATIVE WORLD-BUILDING',
    title: 'STAINLESS BY NATURE',
    titleCn: '不锈钢材质表达',
    note: 'Material, reflection and close observation shape a quieter study of how a manufactured object can acquire a visual character.',
    duration: '00:16',
    ratio: 'landscape',
    video: 'tvc-04-stainless-material.mp4',
    poster: 'tvc-04-stainless-material.webp',
  },
  {
    number: '05',
    collection: 'SHORT-FORM NARRATIVES',
    title: 'DTC SOCIAL SHORT',
    titleCn: '独立站原生短片',
    note: 'A rapid vertical sequence exploring how framing, rhythm and repetition can hold attention within a compressed duration.',
    duration: '00:30',
    ratio: 'portrait',
    video: 'ugc-01-dtc-short.mp4',
    poster: 'ugc-01-dtc-short.webp',
  },
  {
    number: '06',
    collection: 'SHORT-FORM NARRATIVES',
    title: 'CREATOR REVIEW',
    titleCn: '真人体验型 UGC',
    note: 'A character-led piece in which a familiar speaking format is reconstructed through generated imagery and editorial timing.',
    duration: '00:31',
    ratio: 'portrait',
    video: 'ugc-02-blackhair-creator.mp4',
    poster: 'ugc-02-blackhair-creator.webp',
  },
  {
    number: '07',
    collection: 'SHORT-FORM NARRATIVES',
    title: 'BENEFIT STORY',
    titleCn: '综合卖点竖屏片',
    note: 'Multiple ideas are translated into one visual arc through shot selection, graphic pacing and sound-conscious editing.',
    duration: '00:29',
    ratio: 'portrait',
    video: 'ugc-03-slim-deepbowl-benefits.mp4',
    poster: 'ugc-03-slim-deepbowl-benefits.webp',
  },
  {
    number: '08',
    collection: 'SHORT-FORM NARRATIVES',
    title: 'UNBOX & USE',
    titleCn: '开箱与使用场景',
    note: 'An everyday use sequence testing how machine-generated scenes can still feel direct, legible and grounded in lived experience.',
    duration: '00:32',
    ratio: 'portrait',
    video: 'ugc-04-slim-deepbowl.mp4',
    poster: 'ugc-04-slim-deepbowl.webp',
  },
];

const directions = [
  {
    number: '01',
    title: 'VISUAL WORLD-BUILDING',
    copy: 'Characters, spaces, colours and atmospheres developed through generative image-making.',
  },
  {
    number: '02',
    title: 'MOVING-IMAGE NARRATIVES',
    copy: 'Short films shaped through sequence, rhythm, editing and sound.',
  },
  {
    number: '03',
    title: 'AUTHORIAL SELECTION',
    copy: 'Transforming machine-generated possibilities into a coherent personal visual language.',
  },
];

const urlFor = (filename) => `${sourceSite}/${filename}`;

const workCard = (work) => `
  <article class="amc-work amc-work--${work.ratio}">
    <div class="amc-work__media">
      <video
        preload="metadata"
        playsinline
        poster="${urlFor(work.poster)}"
        aria-label="${work.title}: ${work.titleCn}"
      >
        <source src="${urlFor(work.video)}" type="video/mp4">
        Your browser does not support video playback.
      </video>
      <button class="amc-work__play" type="button" aria-label="Play ${work.title}">
        <span class="amc-work__play-icon" aria-hidden="true">▶</span>
        <span class="amc-work__play-label">PLAY FILM</span>
      </button>
      <span class="amc-work__duration">${work.duration}</span>
    </div>
    <div class="amc-work__meta">
      <span>${work.number}</span>
      <div>
        <p>${work.collection}</p>
        <h3>${work.title}<small lang="zh-CN">${work.titleCn}</small></h3>
        <p class="amc-work__note">${work.note}</p>
      </div>
    </div>
  </article>`;

const selectedWorks = () => `
  <section class="amc-works" id="works">
    <header class="amc-works__intro">
      <p class="section-label"><span class="amc-dot" aria-hidden="true"></span> SELECTED WORKS / 01–08</p>
      <div class="amc-works__heading">
        <h2>Eight films.<br><i>One evolving visual language.</i></h2>
        <p>These moving-image works began with practical briefs, but became a space for learning how generative images gain continuity, atmosphere and narrative intention through selection and editing.</p>
      </div>
    </header>
    <div class="amc-collection">
      <div class="amc-collection__heading">
        <span>01 / 04</span>
        <h3>GENERATIVE<br><i>WORLD-BUILDING</i></h3>
        <p>Four horizontal films developed through place, material, light and visual continuity.</p>
      </div>
      <div class="amc-grid amc-grid--landscape">${works.slice(0, 4).map(workCard).join('')}</div>
    </div>
    <div class="amc-collection amc-collection--portrait">
      <div class="amc-collection__heading">
        <span>05 / 08</span>
        <h3>SHORT-FORM<br><i>NARRATIVES</i></h3>
        <p>Four vertical films shaped through character, compression, rhythm and an immediate point of view.</p>
      </div>
      <div class="amc-grid amc-grid--portrait">${works.slice(4).map(workCard).join('')}</div>
    </div>
    <aside class="amc-reflection" aria-label="Creative reflection">
      <span>REFLECTION / 2026</span>
      <blockquote>“The machine produces possibilities. My work begins with choosing what deserves to become a story.”</blockquote>
      <p>Across these eight films, authorship lies in defining the brief, constructing a visual world, selecting among variations, and shaping time through the edit.</p>
    </aside>
  </section>`;

const bindVideoControls = (root) => {
  const videos = [...root.querySelectorAll('.amc-work video')];

  videos.forEach((video) => {
    const card = video.closest('.amc-work');
    const button = card.querySelector('.amc-work__play');
    const icon = card.querySelector('.amc-work__play-icon');
    const label = card.querySelector('.amc-work__play-label');

    const sync = () => {
      const playing = !video.paused && !video.ended;
      card.classList.toggle('is-playing', playing);
      icon.textContent = playing ? 'Ⅱ' : '▶';
      label.textContent = playing ? 'PAUSE' : 'PLAY FILM';
      button.setAttribute('aria-label', `${playing ? 'Pause' : 'Play'} ${video.getAttribute('aria-label')}`);
      video.controls = playing;
    };

    button.addEventListener('click', () => {
      if (video.paused || video.ended) {
        videos.forEach((other) => {
          if (other !== video) other.pause();
        });
        video.play().catch(sync);
      } else {
        video.pause();
      }
    });

    video.addEventListener('play', sync);
    video.addEventListener('pause', sync);
    video.addEventListener('ended', sync);
    video.addEventListener('error', () => card.classList.add('has-media-error'));
  });
};

const updateDirections = () => {
  const section = document.querySelector('.capabilities');
  if (!section) return;

  section.id = 'directions';
  section.innerHTML = `
    <p class="section-label section-label--ink">CREATIVE DIRECTIONS</p>
    <h2>
      <span>FROM MACHINE-GENERATED</span>
      <span>IMAGES TO PERSONAL</span>
      <i>STORIES</i>
    </h2>
    <p class="amc-directions__lead">Moving from visual possibility to authored sequence, these three directions connect my creative position to the films that follow.</p>
    <div class="capability-list">
      ${directions.map((direction) => `
        <div class="capability">
          <span>${direction.number}</span>
          <div>
            <h3>${direction.title}</h3>
            <p>${direction.copy}</p>
          </div>
        </div>`).join('')}
    </div>
    <a class="amc-directions__link" href="#works">SELECTED WORKS <span aria-hidden="true">↓</span></a>`;
};

const updateHeader = () => {
  const nav = document.querySelector('.header nav');
  if (!nav) return;
  nav.innerHTML = `
    <a href="#practice">Creative Position</a>
    <a href="#directions">Directions</a>
    <a href="#works">Selected Works</a>
    <a href="#contact">Application</a>`;
};

const updateHeroLink = () => {
  const link = document.querySelector('.hero-copy .arrow-link');
  if (!link) return;
  const icon = link.querySelector('svg');
  link.replaceChildren(document.createTextNode('Explore films '));
  if (icon) link.append(icon);
  link.href = '#works';
};

const updateFooter = () => {
  const footer = document.querySelector('.footer');
  if (!footer) return;
  const heading = footer.querySelector('h2');
  if (heading) heading.innerHTML = '<span class="footer-lets">IMAGES INTO</span><br><i>PERSONAL STORIES.</i>';
};

const applyRedesign = () => {
  const directionsSection = document.querySelector('.capabilities');
  const footer = document.querySelector('.footer');
  if (!directionsSection || !footer) {
    window.requestAnimationFrame(applyRedesign);
    return;
  }

  updateHeader();
  updateHeroLink();
  updateDirections();

  document.querySelector('.about-me')?.remove();
  document.querySelector('.products')?.remove();
  document.querySelector('.archive')?.remove();

  footer.insertAdjacentHTML('beforebegin', selectedWorks());
  bindVideoControls(document.querySelector('.amc-works'));
  updateFooter();

  document.documentElement.dataset.amcRedesign = 'ready';
};

applyRedesign();
