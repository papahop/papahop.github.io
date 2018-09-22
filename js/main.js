const scrollHandler = function () {
  // console.log("scroll", document.documentElement.scrollTop)
  if (document.documentElement.scrollTop > (window.innerHeight * 0.25)) {
    document.querySelector("section.first").classList.add("header")
  } else {
    document.querySelector("section.first").classList.remove("header")
  }
}

const smoothScroll = function () {
  document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener('click', function (e) {
      e.preventDefault()
      document.querySelector(this.getAttribute('href')).scrollIntoView({ behavior: 'smooth', block: 'start'  })
    })
  })
}

window.addEventListener('load', function () {
  smoothScroll()
  // window.onscroll = scrollHandler
}, false)
