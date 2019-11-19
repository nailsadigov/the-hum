/*=================================
        search icon section
==================================*/
function openSearch() {
    document.getElementById("myOverlay").style.display = "block";
}

function closeSearch() {
    document.getElementById("myOverlay").style.display = "none";
}


/*=================================
        our services section
==================================*/
$(".tabs-content-item").hide();
$(".tabs-content-item").eq(0).css('display', 'grid');
$('.title-tabs-item').on('click', function () {
    $('.title-tabs-item.active').removeClass('active');
    $(this).addClass('active');
    $('.tabs-content-item').hide();
    $('.tabs-content-item[data-service ='+ $(this).data('service') +']').css('display', 'grid');
});


/*=================================
        our work section
==================================*/
categoryPlate = () => {
    let fullPlate = document.querySelector('.category-img-plate');
    let plates = document.querySelectorAll('.category-plate-item');
    let imges = document.querySelectorAll('.category-img-plate-item');
    let load = document.querySelector('.load-more-btn');
    plates.forEach((elem) => {
        elem.addEventListener('click', () => {
            let setCategory = (arr, countStop, randomMath) => {
                let randomiz = () => {
                    return Math.floor(Math.random()* (randomMath) );
                };

                let clearActive = document.querySelector('.category-plate-item.active-category');
                clearActive.classList.remove('active-category');
                elem.classList.add('active-category');

                let i = 0;

                imges.forEach((elem) => {
                    elem.style.display = 'none';
                    elem.dataset.showed = '';
                });

                while (i < countStop) {
                    let numb = randomiz();
                    console.log(`i is${i}`);
                    console.log(numb);
                    if (arr[numb] && imges[numb].dataset.showed !== '1') {
                        arr[numb].dataset.showed = '1';
                        arr[numb].style.display = 'inline-block';
                        i++;
                    }
                }
            };
            let imgArr = document.querySelectorAll(`.category-img-plate-item[data-category="${elem.dataset.category}"]`);
            load.style.display = 'inline-block';
            fullPlate.classList.remove('category-img-plate-load-more');

            if(elem.dataset.category === 'All') {
                setCategory(imges, 12, 36);
            }
            if(elem.dataset.category !== 'All'){
                setCategory(imgArr, imgArr.length, imgArr.length);
            }
        });
    }
    );

        load.addEventListener('click', () => {
        fullPlate.classList.add('category-img-plate-load-more');
        let randomiz = () => {
            return Math.floor(Math.random()* (36) );
        };

        let i = 0;

        while (i < 12) {
            let numb = randomiz();
            console.log(numb);
            if (imges[numb] && imges[numb].dataset.showed !== '1') {
                imges[numb].dataset.showed = '1';
                imges[numb].style.display = 'inline-block';
                i++;
            }
        }
        load.style.display = 'none';
    })
};

categoryPlate();


/*=================================
    testimonial(slider) section
==================================*/

let slider = () => {
    let leftBtn = document.querySelector('.previous');
    let rightBtn = document.querySelector('.next');
    let slides = document.querySelectorAll('.correspondent-img');
    let slidesArr = Array.prototype.slice.call(slides);
    let reviews = document.querySelectorAll('.review-text');
    let bigReview = document.querySelectorAll('.big-correspondent');
    let countIndex = slides.length - 1;
    let countSlide = 2;

    let clearActive = () => {
        let clearActiveReviewer = document.querySelector('.active-correspondent');
        let clearActiveReview = document.querySelector('.active-review');
        let clearActiveBigReview = document.querySelector('.active-big-review');

        clearActiveReviewer.classList.remove('active-correspondent');
        clearActiveReview.classList.remove('active-review');
        clearActiveBigReview.classList.remove('active-big-review')
    };

    let setActive =(index) => {
        slides[index].classList.add('active-correspondent');
        reviews.forEach((elem) => {
            if(elem.dataset.review === slides[index].dataset.review){
                elem.classList.add('active-review');
            }
        });
        bigReview.forEach((elem) => {
                if (elem.dataset.review === slides[index].dataset.review) {
                    elem.classList.add('active-big-review');
                }
            }
        )
    };

    slides.forEach((elem) => {
        elem.addEventListener('click', () => {
            clearActive();
            countSlide = slidesArr.indexOf(elem);
            setActive(countSlide);
        })
    });

    leftBtn.addEventListener('click', () => {
        clearActive();
        if(countSlide === 0){
            countSlide = countIndex;
        }else{
            countSlide -= 1;
        }
        setActive(countSlide);
    });

    rightBtn.addEventListener('click', () => {
        clearActive();
        if(countSlide === countIndex){
            countSlide = 0;
        }else {
            countSlide += 1;
        }
        setActive(countSlide);
    })
};

slider();

//-----------------------------------------------------------------------------------------//