const NAV_LINKS = [
  { label: 'ホーム',       href: 'index.html' },
  { label: 'リード',       href: 'lead_list.html' },
  { label: '商談',         href: 'opportunity_list.html' },
];

function renderNav() {
  const current = location.pathname.split('/').pop() || 'index.html';
  const nav = document.getElementById('topnav');
  if (!nav) return;
  nav.innerHTML = `
    <span class="logo">⚡ Salesforce</span>
    ${NAV_LINKS.map(l =>
      `<a href="${l.href}" class="${current === l.href ? 'active' : ''}">${l.label}</a>`
    ).join('')}
    <span style="margin-left:auto;font-size:12px;opacity:.8">Aiontech様 デモ環境</span>
  `;
}

document.addEventListener('DOMContentLoaded', renderNav);
