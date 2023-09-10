var Webflow = Webflow || [];
Webflow.push(function () {
  const toggles = document.querySelectorAll('[fc-dropdown-toggle]')
  sessionStorage['fc-dropdown-toggle'] = undefined

  for(const toggle of toggles)
  {
    toggle.addEventListener('click', function(event)
    {
      const identifier = toggle.getAttribute('fc-dropdown-toggle')

      if(sessionStorage['fc-dropdown-toggle'] === identifier)
        return;

      event.preventDefault()
      sessionStorage['fc-dropdown-toggle'] = identifier
      toggle.click()
    })
  }
})
