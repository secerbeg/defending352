// Add future clips here. Put the MP4 file in assets/videos/ and create one object below.
// Example file name: assets/videos/part-5-shift-left.mp4
const videos = [
  {
    title: "Shifting Example — Ball Left",
    category: "Shifting",
    part: "Example slot",
    file: "",
    whatHappened: "Use this slot for a match clip showing the back three moving toward the ball side while staying connected.",
    cbAction: "Near-side center back can step wider; middle center back protects the central lane; far-side center back tucks in.",
    tip: "Move on the pass, not after the receiver has already controlled the ball."
  },
  {
    title: "Clearing Example — Remove Danger",
    category: "Clearing",
    part: "Example slot",
    file: "",
    whatHappened: "Use this slot for a clip where the safest decision is to clear rather than force a short pass under pressure.",
    cbAction: "First action removes danger; second action is to step the line out and reorganize.",
    tip: "When possible, clear high and wide rather than straight into the central danger area."
  },
  {
    title: "Communication Example — Step / Drop",
    category: "Communication",
    part: "Example slot",
    file: "",
    whatHappened: "Use this slot for a moment where an early call helps the line make the same decision together.",
    cbAction: "Central center back organizes depth while the nearest defender engages the ball.",
    tip: "Early information is more useful than louder information after the play has already developed."
  },
  {
    title: "1v1 Example — Delay Before Tackling",
    category: "1v1 Defending",
    part: "Example slot",
    file: "",
    whatHappened: "Use this slot for an example of staying balanced, protecting the inside, and choosing the correct moment to tackle.",
    cbAction: "Delay first, then attack the ball when the attacker shows a poor touch or loses control.",
    tip: "Do not turn a 1v1 into an open lane by stabbing at the ball too early."
  }
];

const grid = document.getElementById('videoGrid');
const filterRow = document.getElementById('filterRow');
const menuBtn = document.getElementById('menuBtn');
const siteNav = document.getElementById('siteNav');

menuBtn?.addEventListener('click', () => siteNav.classList.toggle('open'));
siteNav?.querySelectorAll('a').forEach(a => a.addEventListener('click', () => siteNav.classList.remove('open')));

const categories = ['All', ...new Set(videos.map(v => v.category))];

function renderFilters() {
  filterRow.innerHTML = categories.map((c, i) => `<button class="filter-btn ${i === 0 ? 'active' : ''}" data-category="${c}">${c}</button>`).join('');
  filterRow.querySelectorAll('.filter-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      filterRow.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      renderVideos(btn.dataset.category);
    });
  });
}

function renderVideos(category = 'All') {
  const selected = category === 'All' ? videos : videos.filter(v => v.category === category);
  grid.innerHTML = selected.map(v => `
    <article class="video-card">
      ${v.file
        ? `<video controls preload="metadata" playsinline><source src="${v.file}" type="video/mp4">Your browser does not support MP4 playback.</video>`
        : `<div class="video-placeholder">Video clip will be added here</div>`}
      <div class="video-body">
        <div class="video-meta"><span>${v.category}</span><span>•</span><span>${v.part}</span></div>
        <h3>${v.title}</h3>
        <p><strong>What happened:</strong> ${v.whatHappened}</p>
        <p><strong>CB action:</strong> ${v.cbAction}</p>
        <div class="tip"><strong>Coaching tip:</strong> ${v.tip}</div>
      </div>
    </article>
  `).join('');
}

renderFilters();
renderVideos();
