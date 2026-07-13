import applyProducerLogo from '../../scripts/producer-logos.js';

export default function decorate(block) {
  // hero-cover: content row (2nd child) holds a metadata ribbon over the title.
  // The ribbon's last cell is the producing brand — render it as the PRADA
  // wordmark to match the design, regardless of the authored text.
  if (!block.classList.contains('hero-cover')) return;
  const content = block.children[1];
  const ribbon = content?.firstElementChild;
  applyProducerLogo(ribbon?.querySelector('p:last-child'), 'prada');
}
