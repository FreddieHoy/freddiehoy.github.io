

document.addEventListener('DOMContentLoaded', () => {
  const burgermenu = document.querySelector('.burgermenu')
  const navitems = document.querySelector('.nav-items')
  console.log(navitems.style.display)


  burgermenu.addEventListener('click', () => {
    if (navitems.style.display === 'none' || navitems.style.display === '') {
      navitems.style.display = 'flex'
    } else if (navitems.style.display === 'flex') {
      navitems.style.display = 'none'
    }
  })

  navitems.addEventListener('click', () => {
    navitems.style.display = 'none'
  })

})
