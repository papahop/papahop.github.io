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
      let hash = a.getAttribute('href')
      document.querySelector(this.getAttribute('href')).scrollIntoView({ behavior: 'smooth', block: 'start'  })
      history.pushState(null, null, hash)
      e.preventDefault()
    })
  })
}

const facebookPagePlugin = function () {
  (function (d, s, id) {
    var js, fjs = d.getElementsByTagName(s)[0]
    if (d.getElementById(id)) {
      return
    }
    js = d.createElement(s)
    js.id = id
    js.src = 'https://connect.facebook.net/en_US/sdk.js#xfbml=1&version=v3.1'
    fjs.parentNode.insertBefore(js, fjs)
  }(document, 'script', 'facebook-jssdk'))
}

window.addEventListener('load', function () {
  smoothScroll()
  facebookPagePlugin()
  // window.onscroll = scrollHandler
}, false)
