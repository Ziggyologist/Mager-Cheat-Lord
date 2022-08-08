const photoBtn = document.querySelectorAll(".story_img");
const storyContainer = document.querySelectorAll(".story_container");

photoBtn.forEach((btn, i) => {
  btn.addEventListener("click", function () {
    console.log(storyContainer[i]);
    storyContainer[i].style.height = "400px";
    setTimeout(function () {
      storyContainer[i].style.height = "200px";
    }, 18000);
  });
});
