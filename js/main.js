var NFC = document.getElementById('NFC');
var NFC_layer = document.getElementById('NFC-layer');
NFC.addEventListener('click' ,function(){
    NFC_layer.classList.remove('d-none')
})

function close_nfc_layer(){
    NFC_layer.classList.add('d-none')
}
