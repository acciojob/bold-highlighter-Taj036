// Store the NodeList outside the functions
const strongTags = document.querySelectorAll('strong');

	function highlight() {
			const strongTags = document.querySelectorAll('strong');
			strongTags.forEach(tag => {
				tag.classList.add('highlighted');
			});
		}

		function return_normal() {
			const strongTags = document.querySelectorAll('strong');
			strongTags.forEach(tag => {
				tag.classList.remove('highlighted');
			});
		}