

const useAddWindowEvents = (header, particlesContainer, overlay) => {
  /* const changeNavBg = () => {
    container.getBoundingClientRect().top >= -40 ?
      navbar.classList.add("") : navbar.classList.remove("")
  }

  window.addEventListener("scroll", (e) => {
    changeNavBg()
  })

  window.addEventListener("load", (e) => {
    changeNavBg()
  }) */
  const setOpacity = (particlesOpacity, overlayOpacity) => {
    particlesContainer.style.opacity = particlesOpacity
    overlay.style.opacity = overlayOpacity
  }

  window.addEventListener('load', e => {
    header.getBoundingClientRect().top < - 200 ?
      setOpacity(0.8, 0.6)
      :
      setOpacity(0.2, 0.4)
  })

  window.addEventListener("scroll", e => {
    header.getBoundingClientRect().top < - 200 ?
      setOpacity(0.8, 0.6)
      :
      setOpacity(0.2, 0.4)

  })
}

export default useAddWindowEvents