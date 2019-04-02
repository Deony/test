window.onload = function (){

    var search = document.querySelector('#search');
    search.addEventListener('click', function (event) {
        if(!this.classList.contains('active')) {
            this.classList.add('active');
        }
        else if (event.target.id == 'search' && this.classList.contains('active')) {
            this.classList.remove('active');
        }
    })

    if(window.innerWidth < 768) {
        var burger = document.querySelector('.burger');
        burger.addEventListener('click', function () {
           if(!this.classList.contains('active')) {
               this.classList.add('active');
           }
           else this.classList.remove('active');
        })
    }
}

