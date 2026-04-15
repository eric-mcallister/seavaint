/**
 * Scroll the window to the top. Temporarily disables CSS `scroll-behavior: smooth`
 * on the root element so programmatic scroll is instant (otherwise the viewport
 * can stay near the bottom after route changes).
 */
export function forceWindowScrollTop() {
  const html = document.documentElement
  const hadSmooth = html.classList.contains('scroll-smooth')
  if (hadSmooth) html.classList.remove('scroll-smooth')

  window.scrollTo(0, 0)
  html.scrollTop = 0
  if (document.body) document.body.scrollTop = 0

  requestAnimationFrame(() => {
    window.scrollTo(0, 0)
    html.scrollTop = 0
    if (document.body) document.body.scrollTop = 0
    if (hadSmooth) html.classList.add('scroll-smooth')
  })
}
