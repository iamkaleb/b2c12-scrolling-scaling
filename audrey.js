const audrey = document.getElementById("audrey")

document.addEventListener("scroll", function() {
    let yWidth = window.scrollY/3 
    
    audrey.style.width = `${yWidth}px`
    audrey.style.minWidth = "50px"

    let yHeight = window.scrollY/4

    audrey.style.height = `${yHeight}px`
    audrey.style.minHeight = "100px"
})