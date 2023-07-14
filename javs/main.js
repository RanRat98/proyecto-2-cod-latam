
const article = document.getElementById("article");

article.addEventListener('mouseover', () => {
  article.style.backgroundColor = "black";
});

article.addEventListener('mouseout', () => {
    article.style.backgroundColor = "#C6699B";
  });

  menu-item.forEach(function(item) {
    item.addEventListener('click', function(e){
      const currentItem = document.querySelector('.active');
      currentItem.classList.remove('active');
      e.target.classList.add('active');
    });
    
  });