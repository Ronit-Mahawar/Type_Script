function chai(kind:string | number):string{
    if(typeof kind==="string"){
        return `your ${kind} chai`

    
    }
    return `your orderId #${kind}`
}

class kulladChai{
    serve(){
        return `making kullad chai`
    }
}

class CuttingChai{
    serve(){
        return `making cutting chai`
    }
}

function serve(chai: kulladChai | CuttingChai){
    if(chai  instanceof (kulladChai)){
        return chai.serve()
    }
}