
const PALETTE_COLORS = {
    primary: '#FBF5F3',
    secondary: '#202020',
    grey: '#545C52',
    accent: '#ED2327',
}
const PRODUCTS_ID = {
    fibras: document.getElementById('fibras'),
    articulosTecnicos: document.getElementById('articulosTecnicos'),
    blancos: document.getElementById('blancos'),
    confeccion: document.getElementById('confeccion'),
    guatas: document.getElementById('guatas'),
    limpieza: document.getElementById('limpieza'),
    sample: 'sample'
}


const PRODUCTS_CLASSES = {
    fibras: document.querySelectorAll('.fibras'),
    
    articulosTecnicos: document.querySelectorAll('.articulosTecnicos'),
    
    blancos: document.querySelectorAll('.blancos'),
    
    confeccion: document.querySelectorAll('.confeccion'),
    
    guatas: document.querySelectorAll('.guatas'),
    
    limpieza: document.querySelectorAll('.limpieza'),
    
    sample: document.querySelectorAll('.sample'),
}

const prodClassesKeys = Object.keys(PRODUCTS_CLASSES)



// const fibrasClass = document.querySelectorAll('.fibras');

// const artTecClass = document.querySelectorAll('.articulosTecnicos')

// const blancosClass = document.querySelectorAll('.blancos')

// const confeccionClass = document.querySelectorAll('.confeccion')

// const guatasClass = document.querySelectorAll('.guatas')

// const limpiezaClass = document.querySelectorAll('.limpieza')

// const sampleClass = document.querySelectorAll('.sample')

PRODUCTS_ID.fibras.addEventListener('click', function () {
    if(PRODUCTS_CLASSES.fibras[2].style.display === 'flex'){
        setDefault(PRODUCTS_CLASSES.fibras, PRODUCTS_ID.fibras)
    }else{
        setDefaultColor(PRODUCTS_ID.articulosTecnicos)
        setDefaultColor(PRODUCTS_ID.blancos)
        setDefaultColor(PRODUCTS_ID.confeccion)
        setDefaultColor(PRODUCTS_ID.guatas)
        setDefaultColor(PRODUCTS_ID.limpieza)
        hideProducts(PRODUCTS_CLASSES.fibras, PRODUCTS_ID.fibras)
        showProducts(PRODUCTS_CLASSES.fibras, PRODUCTS_ID.fibras)
    }

})
PRODUCTS_ID.articulosTecnicos.addEventListener('click', function () {
    if(PRODUCTS_CLASSES.articulosTecnicos[2].style.display === 'flex'){
        setDefault(PRODUCTS_CLASSES.articulosTecnicos, PRODUCTS_ID.articulosTecnicos)
    }else{
        setDefaultColor(PRODUCTS_ID.fibras)
        setDefaultColor(PRODUCTS_ID.blancos)
        setDefaultColor(PRODUCTS_ID.confeccion)
        setDefaultColor(PRODUCTS_ID.guatas)
        setDefaultColor(PRODUCTS_ID.limpieza)
        hideProducts(PRODUCTS_CLASSES.articulosTecnicos, PRODUCTS_ID.articulosTecnicos)
        showProducts(PRODUCTS_CLASSES.articulosTecnicos, PRODUCTS_ID.articulosTecnicos)
    }
})
PRODUCTS_ID.blancos.addEventListener('click', function () {
    if(PRODUCTS_CLASSES.blancos[2].style.display === 'flex'){
        setDefault(PRODUCTS_CLASSES.blancos, PRODUCTS_ID.blancos)
    }else{
        setDefaultColor(PRODUCTS_ID.fibras)
        setDefaultColor(PRODUCTS_ID.articulosTecnicos)
        setDefaultColor(PRODUCTS_ID.confeccion)
        setDefaultColor(PRODUCTS_ID.guatas)
        setDefaultColor(PRODUCTS_ID.limpieza)
        hideProducts(PRODUCTS_CLASSES.blancos, PRODUCTS_ID.blancos)
        showProducts(PRODUCTS_CLASSES.blancos, PRODUCTS_ID.blancos)
    }
})
PRODUCTS_ID.confeccion.addEventListener('click', function () {
    if(PRODUCTS_CLASSES.confeccion[2].style.display === 'flex'){
        setDefault(PRODUCTS_CLASSES.confeccion, PRODUCTS_ID.confeccion)
    }else{
        setDefaultColor(PRODUCTS_ID.fibras)
        setDefaultColor(PRODUCTS_ID.articulosTecnicos)
        setDefaultColor(PRODUCTS_ID.blancos)
        setDefaultColor(PRODUCTS_ID.guatas)
        setDefaultColor(PRODUCTS_ID.limpieza)
        hideProducts(PRODUCTS_CLASSES.confeccion, PRODUCTS_ID.confeccion)
        showProducts(PRODUCTS_CLASSES.confeccion, PRODUCTS_ID.confeccion)
    }
})
PRODUCTS_ID.guatas.addEventListener('click', function () {
    if(PRODUCTS_CLASSES.guatas[2].style.display === 'flex'){
        setDefault(PRODUCTS_CLASSES.guatas, PRODUCTS_ID.guatas)
    }else{
        setDefaultColor(PRODUCTS_ID.fibras)
        setDefaultColor(PRODUCTS_ID.articulosTecnicos)
        setDefaultColor(PRODUCTS_ID.blancos)
        setDefaultColor(PRODUCTS_ID.confeccion)
        setDefaultColor(PRODUCTS_ID.limpieza)
        hideProducts(PRODUCTS_CLASSES.guatas, PRODUCTS_ID.guatas)
        showProducts(PRODUCTS_CLASSES.guatas, PRODUCTS_ID.guatas)
    }
})
PRODUCTS_ID.limpieza.addEventListener('click', function () {
    if(PRODUCTS_CLASSES.limpieza[2].style.display === 'flex'){
        setDefault(PRODUCTS_CLASSES.limpieza, PRODUCTS_ID.limpieza)
    }else{
        setDefaultColor(PRODUCTS_ID.fibras)
        setDefaultColor(PRODUCTS_ID.articulosTecnicos)
        setDefaultColor(PRODUCTS_ID.blancos)
        setDefaultColor(PRODUCTS_ID.confeccion)
        setDefaultColor(PRODUCTS_ID.guatas)
        hideProducts(PRODUCTS_CLASSES.limpieza, PRODUCTS_ID.limpieza)
        showProducts(PRODUCTS_CLASSES.limpieza, PRODUCTS_ID.limpieza)
    }
})


const setDefaultColor = (idProduct) => {
    idProduct.style.backgroundColor = PALETTE_COLORS.secondary
    idProduct.style.color = PALETTE_COLORS.grey
}
const setDefault = (classNameProduct, idProduct) => {

    for (let index = 0; index < classNameProduct.length; index++) {
        classNameProduct[index].style.display = 'none'
    }

    for (let index = 0; index < PRODUCTS_CLASSES.sample.length; index++) {
       PRODUCTS_CLASSES.sample[index].style.display = 'flex'
    }

    idProduct.style.backgroundColor = PALETTE_COLORS.secondary
    idProduct.style.color = PALETTE_COLORS.grey
}

const showProducts = (classNameProduct, idProduct) => {


    for (let index = 0; index < classNameProduct.length; index++) {
        classNameProduct[index].style.display = 'flex'
    }
    // console.log(productsToHide)
    idProduct.style.backgroundColor = PALETTE_COLORS.primary
    idProduct.style.color = PALETTE_COLORS.accent
}

const hideProducts = (classNameProduct, idProduct) => {

    for (let index = 0; index < prodClassesKeys.length; index++) {
        if(prodClassesKeys[index] !== idProduct){
            PRODUCTS_CLASSES[prodClassesKeys[index]].forEach(element => {
                element.style.display = 'none'
            });

        }

        
    }
    console.log(classNameProduct)
    
}