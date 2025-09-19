let visions = document.querySelectorAll(".vision")

visions.forEach((vis, id)=>{
    vis.addEventListener("click",()=>{
        visions.forEach((v,i)=>{
            v.classList.remove("active")
        })
        vis.classList.add("active");
    })
})