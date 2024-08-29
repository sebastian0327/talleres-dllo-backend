function findMax(L) {
    let MV
    for(let i = 0; i<L.length; i++){
        if(i==0){
            MV = L[i]
        }
        if(MV<L[i]){
            MV=L[i]
        }
    }

    return MV
}

function includes(L,n) {
    let inc = false
    for(let i = 0; i<L.length; i++){
        if(n==L[i]){
            inc = true
        }
    }
    return inc
}


function sum(L) {
    let suma= 0
    for(let i = 0; i<L.length; i++){
        suma = suma + L[i]
    }
    return suma
}

function findMin(L) {
    let Mv
    for(let i = 0; i<L.length; i++){
        if(i==0){
            Mv = L[i]
        }
        if(Mv>L[i]){
            Mv=L[i]
        }
    }

    return Mv
}

function missingNumbers(L) {
    let MV = findMax(L)
    let Mv = findMin(L)
    let Lf = []
    for(let i = Mv; i<MV; i++){
        if(!includes(L,i)){
            Lf.push(i)
        }
    }
    return Lf
}