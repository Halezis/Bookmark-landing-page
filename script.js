const nav = document.querySelector('.nav')
const navBtn = document.querySelector('.mobile-nav-btn')
const featuresBtn = document.querySelectorAll('.features-nav-btn')
const features = document.querySelectorAll('.features')
const accordionBtn = document.querySelectorAll('.question')

// mobile nav
navBtn.addEventListener('click', () => {
  nav.classList.toggle('active')
  navBtn.classList.toggle('active')
})

// switch features tab on click
function removeActiveBtn() {
  featuresBtn.forEach((btn) => {
    btn.classList.remove('active')
  })
}

function removeActiveFeatures() {
  features.forEach((feature) => {
    feature.classList.remove('active')
  })
}

activeFeatures()

function activeFeatures() {
  featuresBtn.forEach((btn, idx) => {
    btn.addEventListener('click', () => {
      removeActiveBtn()
      btn.classList.add('active')
      removeActiveFeatures()
      features[idx].classList.add('active')
    })
  })
}

// open and close accordion
function removeActiveAccordion() {
  accordionBtn.forEach((accordion) => {
    accordion.classList.remove('active')
  })
}

function activeAccordion() {
  accordionBtn.forEach((accordion) => {
    accordion.addEventListener('click', () => {
      removeActiveAccordion()
      accordion.classList.toggle('active')
    })
  })
}

activeAccordion()

// email validation
const email = document.querySelector('.input-field')
const contactBtn = document.querySelector('.contact-btn')
const contactInput = document.querySelector('.contact-input')
const errorMsg = document.querySelector('.contact-input-error')

contactBtn.addEventListener('click', (e) => {
  e.preventDefault()
  validateEmail()
})

function validateEmail() {
  const emailValue = email.value.trim()

  function isEmail(email) {
    return /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
      email
    )
  }

  if (emailValue === '') {
    setError(email, 'Email cannot be empty')
  } else if (!isEmail(emailValue)) {
    setError(email, 'Whoops, make sure its an email')
  } else {
    setSucess(email)
  }
}

function setError(email, message) {
  contactInput.classList.add('error')
  errorMsg.innerText = message
}

function setSucess(email, message) {
  contactInput.classList.remove('error')
  window.location.reload()
}
