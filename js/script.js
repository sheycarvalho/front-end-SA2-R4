$(document).ready(function(){

    $("#barras").click(function(){
        $("#menu").toggleClass("#menu-ativo")
})
})

// $(document).ready(function(){
//    $("#carrosel img:eq(0)").addClass("banner-ativo").show()

// })

// setInterval(slide,2000)

// function slide(){

//    if($(".banner-ativo").next().lenght){
//        $(".banner-ativo").removeClass("banner-ativo").hide().next().addClass("banner-ativo").show()
//    }else{
//        $(".banner-ativo").removeClass().hide()
//        $("#carrosel img:eq(0)").addClass("banner-ativo").show()
//    }
// }

//    $("#barras").click(function(){
//       if($("#menu").hasClass("#menu-ativo")){
//            $("menu").removeClass("#menu-ativo")
//        }else{
//            $("#menu").addClass("menu-ativo")
//        }
//    })
// })

let search = document.getElementById("campo-search");