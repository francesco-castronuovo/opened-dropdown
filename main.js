var Webflow = Webflow || [];
Webflow.push(function () {
  
  const dropdown = document.querySelector('[fc-dropdown = opened]')
  const dropdownToggle = dropdown.querySelector('.w-dropdown-toggle')
  
  dropdownToggle.dispatchEvent(new Event('mousedown'));
  dropdownToggle.dispatchEvent(new Event('mouseup'));
	
});
