function applause() {
    let myAudio = new Audio;
    myAudio.src = "audio/applause.wav";
    myAudio.play();
}

function showCorrect(pic) {
    document.getElementById(pic).classList.add("right-picture");
}
    
    
    $("#accordion").accordion({
        heightStyle: "content"
    });
    
    $(".kids").draggable();
        
    
     $("#dog").droppable({
        accept: "#puppy", 
        drop: function( event, ui ) {
            // applause();
            showCorrect("dog");
        }
    })
    
    $("#cat").droppable({
        accept: "#kitten", 
        drop: function( event, ui ) {
            applause();
        }
    })
    
    $("#hen").droppable({
        accept: "#chicken", 
        drop: function( event, ui ) {
            applause();
        }
    })
    
    $("#tiger").droppable({
        accept: "#tigercub", 
        drop: function( event, ui ) {
            applause();
        }
    })
    
    $("#lion").droppable({
        accept: "#lioncub", 
        drop: function( event, ui ) {
            applause();
        }
    })
    
    $("#bear").droppable({
        accept: "#bearcub", 
        drop: function( event, ui ) {
            applause();
        }
    })
    
    $("#fox").droppable({
        accept: "#foxcub", 
        drop: function( event, ui ) {
            applause();
        }
    })
    
    $("#wolf").droppable({
        accept: "#wolfcub", 
        drop: function( event, ui ) {
            applause();
        }
    })
    
    //level2
    $("#swine").droppable({
        accept: "#piglet", 
        drop: function( event, ui ) {
            applause();
        }
    })
    
    $("#sheep").droppable({
        accept: "#lamb", 
        drop: function( event, ui ) {
            applause();
        }
    })
    
    $("#snake").droppable({
        accept: "#snakelet", 
        drop: function( event, ui ) {
            applause();
        }
    })
    
    $("#rabbit").droppable({
        accept: "#bunny", 
        drop: function( event, ui ) {
            applause();
        }
    })
    
    $("#deer").droppable({
        accept: "#fawn", 
        drop: function( event, ui ) {
            applause();
        }
    })
    
    $("#goose").droppable({
        accept: "#gosling", 
        drop: function( event, ui ) {
            applause();
        }
    })
    
    $("#horse").droppable({
        accept: "#foal", 
        drop: function( event, ui ) {
            applause();
        }
    })
    
    
    
    $("#cow").droppable({
        accept: "#calf", 
        drop: function( event, ui ) {
            applause();
        }
    })
    
    $("#bird").droppable({
        accept: "#nestling", 
        drop: function( event, ui ) {
            applause();
        }
    })
    
    $("#butterfly").droppable({
        accept: "#caterpillar", 
        drop: function( event, ui ) {
            applause();
        }
    })
    
    
    $("#fish").droppable({
        accept: "#fry", 
        drop: function( event, ui ) {
            applause();
        }
    })
    
    
    //level3
    
    $("#raccoonPic").droppable({
        accept: "#raccoon", 
        drop: function( event, ui ) {
            applause();
        }
    })
    
     
    
    
    $("#slothPic").droppable({
        accept: "#sloth", 
        drop: function( event, ui ) {
            applause();
        }
    })
    
    $("#viperPic").droppable({
        accept: "#viper", 
        drop: function( event, ui ) {
            applause();
        }
    })
    
    $("#lynxPic").droppable({
        accept: "#lynx", 
        drop: function( event, ui ) {
            // applause();
            showCorrect("lynxPic");
           
        }
    })
    
    $("#otterPic").droppable({
        accept: "#otter", 
        drop: function( event, ui ) {
            applause();
        }
    })
    
    $("#rhinoPic").droppable({
        accept: "#rhino", 
        drop: function( event, ui ) {
            applause();
        }
    })
    
    $("#molePic").droppable({
        accept: "#mole", 
        drop: function( event, ui ) {
            applause();
        }
    })
    
    $("#chipmunkPic").droppable({
        accept: "#chipmunk", 
        drop: function( event, ui ) {
            applause();
        }
    })