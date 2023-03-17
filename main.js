	var Webflow = Webflow || [];
  Webflow.push(function () {
  
    const dropdown = document.querySelector('[fc-dropdown = opened]')
    console.log('Dropdown: ', dropdown)
    
  	const dropdownToggle = dropdown.querySelector('.w-dropdown-toggle')
    console.log('Dropdown Toggle: ', dropdownToggle)
  
  	dropdownToggle.dispatchEvent(new Event('mousedown'));
    dropdownToggle.dispatchEvent(new Event('mouseup'));
  });
