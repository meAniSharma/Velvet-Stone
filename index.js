function openModal(modalId) {
    document.getElementById(modalId).style.display = "block";
  }
  

  function closeModal(modalId) {
    document.getElementById(modalId).style.display = "none";
  }
  

  window.onclick = function(event) {
    const loginModal = document.getElementById('loginModal');
    const signupModal = document.getElementById('signupModal');
    if (event.target == loginModal) {
      loginModal.style.display = "none";
    }
    if (event.target == signupModal) {
      signupModal.style.display = "none";
    }
  }
  
  function clearSearch() {
  const searchInputs = document.querySelectorAll('.search-bar input, .search-bar select');
  searchInputs.forEach(input => {
    if (input.tagName === 'SELECT') {
      input.selectedIndex = 0;
    } else {
      input.value = '';
    }
  });
}