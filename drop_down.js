const toggleButton = $(".icon");
const droppDown = $(".drop_down_menu")

toggleButton.on("click", ()=>{
    if(droppDown.css('display') === "none"){
        droppDown.css('display', "block");
    }else{
        droppDown.css('display', "none");
    }
})