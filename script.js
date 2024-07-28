const filterbtns = document.querySelectorAll(".filter_btns button");
const filterimgs = document.querySelectorAll(".images_body .imgcard");

const filterableimgs = e => {
    document.querySelector(".active").classList.remove("active");
    e.target.classList.add("active");

    filterimgs.forEach(imgcard => {
        imgcard.classList.add("hide");

        if(imgcard.dataset.name === e.target.dataset.name || e.target.dataset.name === "all"){
            imgcard.classList.remove("hide");
        }
    });
};

filterbtns.forEach(button => button.addEventListener("click", filterableimgs));

document.querySelectorAll('.images_body img').forEach(imgcard => {
    imgcard.onclick = () => {
        document.querySelector('.pop_image').style.display = 'block';
        document.querySelector('.pop_image img').src = imgcard.getAttribute('src');
    }
});

document.querySelector('.pop_image span').onclick = () => {
    document.querySelector('.pop_image').style.display = 'none';
}