//console.log(all_components)
let home_tab = {
 test:"was"
}
function swop_tab(id,obj) {  
    let element_to_fade = document.querySelector(".tab_swop")
    element_to_fade.onanimationend = (e) => {
        if (e.target.classList.contains('fade-out')) {
            set_comp(element_to_fade , id, obj );
        }
      };
      // To fade away:
      element_to_fade.classList.add('fade-out');
    //set_comp(document.querySelector(".tab_swop") , id, obj )
}