// Variables
let banderaSegundoNumero = 0;
let varTempForNum1 = "";
let varTempForNum2 = "";
let operacionSeleccionada = "";
let banderaComa = 0;
//Selectores
const root = document.querySelector(":root")
const selector = document.querySelectorAll("input[name='botonSkin']");
const numberButtom = document.querySelectorAll("input[name='number']");
const resultado = document.querySelector("#resultado");
//Eventos
eventListeners();

function eventListeners(){
    for (const botonSelectSkin of selector){
        botonSelectSkin.addEventListener("click", selectorSkin)
    }
    for (const numeroPulsado of numberButtom ){
    numeroPulsado.addEventListener("click", validarTecla)
    }
}
function validarTecla(e){
    //validacion general de la tecla pulsada
    const validacionNumeros = /^[0-9]+$/;
    if ( parseInt(e.target.value) || e.target.value == "0"){
        validarNumero(e);
    }else if ( isNaN(parseInt(e.target.value))){
        validarTeclaEspecial(e);
    }
    if(e.target.value == "."){
        decimal();
    }
}
//Funciones
//alidacion de teclas numericas
function validarNumero(e){
    //validacion si es un numero o una tecla especial
    if (banderaSegundoNumero == 0){
        varTempForNum1 = varTempForNum1 + e.target.value;
        mostrarDatos(varTempForNum1);
    }else if(banderaSegundoNumero == 1){
        varTempForNum2 = varTempForNum2 + e.target.value;
        mostrarDatos(varTempForNum2);
    }
}
//Validacion de teclas especiales
function validarTeclaEspecial(e) {
    switch (e.target.value) {
        case "DEL":
            console.log("se llamo DEL");
            if (banderaSegundoNumero == 0) {
                varTempForNum1 = "";
                console.log(banderaSegundoNumero);
                mostrarDatos("0");
            }else if (banderaSegundoNumero == 1 && varTempForNum1.length > 0) {
                banderaSegundoNumero = 1;
                varTempForNum2 = "";
                console.log("else if");
                mostrarDatos("0");
            }
            /*
            if(banderaSegundoNumero == 0){
                varTempForNum1 = varTempForNum1.slice(0,-1);
                mostrarDatos(varTempForNum1);
            }else if (banderaSegundoNumero == 1 && varTempForNum2.length == 0){
                varTempForNum1 = varTempForNum1.slice(0,-1);
                mostrarDatos(varTempForNum1);
                console.log("estoy funcionando");
            }*/
            break;
        case "+":
            banderaSegundoNumero = 1;
            banderaComa = 0;
            operacionSeleccionada = "suma";
            suma();
            break;
        case "-":
            banderaSegundoNumero = 1;
            banderaComa = 0;
            operacionSeleccionada = "resta";
            resta();
            break;
        case "x":
            banderaSegundoNumero = 1;
            banderaComa = 0;
            operacionSeleccionada = "multiplicacion";
            multiplicacion();
            break;
        case "/":
            banderaSegundoNumero = 1;
            banderaComa = 0;
            operacionSeleccionada = "division";
            division();
            break;
        case "RESET":
            varTempForNum1 = "";
            varTempForNum2 = "";
            banderaSegundoNumero = 0;
            operacionSeleccionada = ""
            banderaComa = 0;
            mostrarDatos("0");
            break;
        case "=":
            if (operacionSeleccionada == "suma"){
                suma();
            }else if (operacionSeleccionada == "resta"){
                resta();
            }else if (operacionSeleccionada == "multiplicacion"){
                multiplicacion();
            }else if (operacionSeleccionada == "division") {
                division();
            }
            break;
        default:
            break;
        }
}
//Funciones
function decimal(){
    let contenidoResultado = resultado.textContent;
    let ceroInicial;
    if ((varTempForNum1.length == 0 && banderaSegundoNumero == 0) || (varTempForNum2.length == 0 && banderaSegundoNumero == 1)){
        ceroInicial = "0"
    }else{
        ceroInicial = ""
    }
    if (banderaSegundoNumero == 0){
        if (banderaComa == 0){
            varTempForNum1 = varTempForNum1 + ceroInicial +  ".";
            mostrarDatos(varTempForNum1);
            banderaComa = 1;
        }else{
            console.log("ya existe una coma");
        }
    }else{
        if (banderaComa == 0){
            varTempForNum2 = varTempForNum2 + ceroInicial + ".";
            mostrarDatos(varTempForNum2);
            banderaComa = 1;
        }else{
            console.log("ya existe una coma en value 2");
        }
    }
}
function suma(){
    let opTemporal
    if (banderaSegundoNumero == 1 && varTempForNum2.length > 0){
        opTemporal = parseFloat(varTempForNum1)  + parseFloat(varTempForNum2);
        mostrarDatos(opTemporal);
        varTempForNum1 = opTemporal + "";
    }
    varTempForNum2 = "";
}
function resta() {
    let opTemporal
    if (banderaSegundoNumero == 1 && varTempForNum2.length > 0){
        opTemporal = parseFloat(varTempForNum1)  - parseFloat(varTempForNum2);
        mostrarDatos(opTemporal);
        varTempForNum1 = opTemporal + "";
    }
    varTempForNum2 = "";
}
function multiplicacion() {
    let opTemporal
    if (banderaSegundoNumero == 1 && varTempForNum2.length > 0){
        opTemporal = parseFloat(varTempForNum1)  * parseFloat(varTempForNum2);
        mostrarDatos(opTemporal);
        varTempForNum1 = opTemporal + "";
    }
    varTempForNum2 = "";
}
function division() {
    let opTemporal
    if (banderaSegundoNumero == 1 && varTempForNum2.length > 0){
        opTemporal = parseFloat(varTempForNum1)  / parseFloat(varTempForNum2);
        mostrarDatos(opTemporal);
        varTempForNum1 = opTemporal + "";
    }
    varTempForNum2 = "";
}
//Mostrar datos de las cifras en pantalla
function mostrarDatos(datos) {
    resultado.textContent = datos;
}

function selectorSkin(e){
    if(e.target.value == "1"){
        root.style.setProperty("--back-color", "#3b4664");
        root.style.setProperty("--textTitles-color", "#ffffff");
        root.style.setProperty("--selectBoton-color", "#cc3f2e");
        root.style.setProperty("--backBotonSelect-color", "#252D44");
        root.style.setProperty("--backDisplay-color", "#181f32");
        root.style.setProperty("--textDisplay-color", "#ffffff");
        root.style.setProperty("--keyBoardBack-color", "#252d44");
        root.style.setProperty("--backBotonKey-color", "#EAE3DB");
        root.style.setProperty("--textBoton-color", "#4D5362");
        root.style.setProperty("--shadowKey-color", "#b5A499");
        root.style.setProperty("--delResKeyBack-color", "#64719b");
        root.style.setProperty("--delResKeyText-color", "#fff");
        root.style.setProperty("--delResKeyShadow-color", "#424E75");
        root.style.setProperty("--igualKeyBack-color", "#D13F30");
        root.style.setProperty("--igualKeyText-color", "#FFFFFF");
        root.style.setProperty("--igualKeyShadow-color", "#8F2316");
    }
    if(e.target.value == "2"){
       /*skin # 2*/
        root.style.setProperty("--back-color", "#E6E6E6");
        root.style.setProperty("--textTitles-color", "#353529");
        root.style.setProperty("--selectBoton-color", "#D35100");
        root.style.setProperty("--backBotonSelect-color", "#D4CDCD");
        root.style.setProperty("--backDisplay-color", "#EEEEEE");
        root.style.setProperty("--textDisplay-color", "#353529");
        root.style.setProperty("--keyBoardBack-color", "#D4CDCD");
        root.style.setProperty("--backBotonKey-color", "#E5E4E0");
        root.style.setProperty("--textBoton-color", "#3535290");
        root.style.setProperty("--shadowKey-color", "#A69C91");
        root.style.setProperty("--delResKeyBack-color", "#388186");
        root.style.setProperty("--delResKeyText-color", "#fff");
        root.style.setProperty("--delResKeyShadow-color", "#17585F");
        root.style.setProperty("--igualKeyBack-color", "#C85401");
        root.style.setProperty("--igualKeyText-color", "#FFFFFF");
        root.style.setProperty("--igualKeyShadow-color", "#7F3400");
   }
    if(e.target.value == "3"){
        /*skin #3*/
        root.style.setProperty("--back-color", "#17062A");
        root.style.setProperty("--textTitles-color", "#FFE53F");
        root.style.setProperty("--selectBoton-color", "#00DED1");
        root.style.setProperty("--backBotonSelect-color", "#1E0836");
        root.style.setProperty("--backDisplay-color", "#1E0836");
        root.style.setProperty("--textDisplay-color", "#FFE53F");
        root.style.setProperty("--keyBoardBack-color", "#1E0836");
        root.style.setProperty("--backBotonKey-color", "#331B4D");
        root.style.setProperty("--textBoton-color", "#FFE53F");
        root.style.setProperty("--shadowKey-color", "#8A20A2");
        root.style.setProperty("--delResKeyBack-color", "#56077C");
        root.style.setProperty("--delResKeyText-color", "#fff");
        root.style.setProperty("--delResKeyShadow-color", "#C019F6");
        root.style.setProperty("--igualKeyBack-color", "#00DECF");
        root.style.setProperty("--igualKeyText-color", "#000");
        root.style.setProperty("--igualKeyShadow-color", "#75FFF7");
   }
}
//mod 28/03/2022