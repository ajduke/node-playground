Promise = require('es6-promise').Promise


something= ()->
    new Promise((resolve, reject)->
        
        resolve( 2*2 )
    )
    
    
something().then(()->
    console.log('sothing completed ')
)
