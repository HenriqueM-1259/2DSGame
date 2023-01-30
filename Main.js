let i = 0

const Main = {
    //Update
    $_: function() {
        
        
        console.log(`Init${i++}`)
    }
}

setInterval(() => {
    Main.$_()
}, 60);

