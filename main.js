var Webflow = Webflow || [];
Webflow.push(function () {
  
  const identifier = sessionStorage['fc-dropdown-toggle']
  
  if(identifier !== undefined)
  {  
  	const toggles = document.querySelectorAll('[fc-dropdown-toggle]')
    let toggleIdentifiers = []
    for(const toggle of toggles)
      toggleIdentifiers.push(toggle.getAttribute('fc-dropdown-toggle'))

  	console.log(toggleIdentifiers)
  
    for(let i = 0; i < toggleIdentifiers.length; i++)
    {
    	if(identifier === toggleIdentifiers[i])
      {
        const toggleToTrigger = toggles[i]
        toggleToTrigger.dispatchEvent(new Event('mousedown'))
        toggleToTrigger.dispatchEvent(new Event('mouseup'))
      }
    }
  }
  else
  {
  	const dropdown = document.querySelector('[fc-dropdown = default]')
    const dropdownToggle = dropdown.querySelector('.w-dropdown-toggle')

    dropdownToggle.dispatchEvent(new Event('mousedown'));
    dropdownToggle.dispatchEvent(new Event('mouseup'));
  }
})
