

document.addEventListener('DOMContentLoaded', () => {
  const burgermenu = document.getElementById('burgermenu')
  const navitems = document.querySelector('.nav-items')
  const mq = window.matchMedia( '(max-width: 856px)' )

  burgermenu.addEventListener('click', () => {
    if (navitems.style.display === 'none' || navitems.style.display === '') {
      navitems.style.display = 'block'
    } else if (navitems.style.display === 'block') {
      navitems.style.display = 'none'
    }
  })

  navitems.addEventListener('click', () => {
    if (mq.matches) {
      // window width is at less than 570px
      navitems.style.display = 'none'
    }
  })

  $(document).on('scroll', function () {
    const pageTop = $(document).scrollTop()
    const pageBottom = pageTop + ($(window).height() - 100)
    const tags = $('.fade-left')

    for (let i = 0; i < tags.length; i++) {
      const tag = tags[i]

      if ($(tag).position().top < pageBottom && $(tag).position().top > pageTop) {
        $(tag).addClass('visible')
      } else {
        $(tag).removeClass('visible')
      }
    }
  })
  $(document).on('scroll', function () {
    const pageTop = $(document).scrollTop()
    const pageBottom = pageTop + ($(window).height() - 100)
    const tags = $('.fade-right')

    for (let i = 0; i < tags.length; i++) {
      const tag = tags[i]

      if ($(tag).position().top < pageBottom && $(tag).position().top > pageTop) {
        $(tag).addClass('visible')
      } else {
        $(tag).removeClass('visible')
      }
    }
  })


})
