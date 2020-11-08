export default function clickOutside(node, callback) {
  
  const handleClick = event => {
    if (node && !node.contains(event.target) && !event.defaultPrevented && typeof callback === 'function') {
      callback()
    }
  }

	document.addEventListener('click', handleClick, true);
  
  return {
    destroy() {
      document.removeEventListener('click', handleClick, true);
    }
	}
}