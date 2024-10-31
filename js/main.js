
// var image1 = document.getElementById('image1');
function readUrl(input){
    if(input.files && input.files[0]){
        var reader = new FileReader();
        reader.onload = function(e){
            $('.linkdetails .image1')
            .attr('src', e.target.result);
        };
        reader.readAsDataURL(input.files[0]);
    }
}

function resetIcon(){
    $('.linkdetails .image1')
    .attr('src', imgsource);
}

// to change background
function readUrlForBG(input){
    if(input.files && input.files[0]){
        var reader = new FileReader();
        reader.onload = function(e){
            $('.linkdetails .linkname3')
            .css("background-image", "url('" + e.target.result + "')");
            // var linknameBG = document.getElementById('linknameBG');
            // linknameBG.style.backgroundImage = `url('${e.target.result}') !important`;
            // console.log("done");
        };
        reader.readAsDataURL(input.files[0]);
    }
}

function resetbackground(){
    $('.linkdetails .linkname3')
    .css("background-image", "url('./images/blog.jpeg')");
}

function readUrlForCard(input){
    if(input.files && input.files[0]){
        var reader = new FileReader();
        reader.onload = function(e){
            $('.carddetails .image1')
            .attr('src', e.target.result);
        };
        reader.readAsDataURL(input.files[0]);
    }
}

// ===================================================

var firstCol = document.getElementById('firstCol');
var secondCol = document.getElementById('secondCol');
var descriptionInputForLink = document.getElementById('descriptionInputForLink');
var choosedLinkItem = document.getElementById('choosedLinkItem');
var imgsource = "./images/whatsup.png";

function changeLinkItem(linkItem, imgsrc){
    imgsource = imgsrc;
    choosedLinkItem.innerHTML = linkItem.innerHTML;
    
    var mystyle = linkItem.getAttribute('style');
    if(mystyle.includes("width: 110px")){
        shrinkColum();
        descriptionInputForLink.classList.add('d-none');
        document.getElementById('phonenumberlabel').innerHTML = `Phone Number <span>*</span>`;
        document.getElementById('phonenumberimg').setAttribute('src', './images/phone icon.png');
        document.getElementById('phonenumberimg').setAttribute('height', '15px');
    }
    else {
        expandColum();
        descriptionInputForLink.classList.remove('d-none');
        document.getElementById('phonenumberlabel').innerHTML = `Link <span>*</span>`;
        document.getElementById('phonenumberimg').setAttribute('src', './images/Link.png');
        document.getElementById('phonenumberimg').setAttribute('height', '7px');
    }
    var checkClass = linkItem.getAttribute('class');
    if(checkClass.includes("changeButtons")){
        document.getElementById('buttonsForBG').classList.remove('d-none');
        document.getElementById('buttonsForIcons').classList.add('d-none');
    }
    else {
        if(document.getElementById('buttonsForIcons').classList.contains('d-none')){
            document.getElementById('buttonsForBG').classList.add('d-none');
            document.getElementById('buttonsForIcons').classList.remove('d-none');
        }
    }
}

function expandColum(){
    firstCol.classList.remove('col-6');
    firstCol.classList.add('col-8');
    secondCol.classList.remove('col-6');
    secondCol.classList.add('col-4');
}

function shrinkColum(){
    firstCol.classList.remove('col-8');
    firstCol.classList.add('col-6');
    secondCol.classList.remove('col-4');
    secondCol.classList.add('col-6');
}

var choosedCardItem = document.getElementById('choosedCardItem');

function changeCardItem(linkItem){
    choosedCardItem.innerHTML = linkItem.innerHTML;

    var checkClass = linkItem.getAttribute('class');
    if(checkClass.includes("itHasDes")){
        document.getElementById('descriptionInputForCard').classList.remove('d-none');
        document.getElementById('price&offer').classList.add('d-none');
    }
    else {
        if(document.getElementById('price&offer').classList.contains('d-none')){
            document.getElementById('descriptionInputForCard').classList.add('d-none');
            document.getElementById('price&offer').classList.remove('d-none');
        }
    }
}

// ===================================================

var gallaryButtons = document.getElementsByClassName('filesgallary1');
var gallaryimggroup = document.getElementsByClassName('hoverdiv');
var gallaryimguploaded = document.getElementsByClassName('uploadedimage');

function readImgForGallary(input, index){
    if(input.files && input.files[0]){
        var reader = new FileReader();
        reader.onload = function(e){
            gallaryimguploaded[index].setAttribute('src', e.target.result);
            gallaryimggroup[index].classList.remove('d-none');
            gallaryButtons[index].classList.add('d-none');
        };
        reader.readAsDataURL(input.files[0]);
    }
}

function removeUploadedImg(index) {
    gallaryimggroup[index].classList.add('d-none');
    gallaryButtons[index].classList.remove('d-none');
}

// ===================================================

function displayLinksItems_Details() {
    document.getElementById('itemsForInteractions').classList.add('d-none');
    document.getElementById('itemsForCards').classList.add('d-none');
    document.getElementById('itemsForLinks').classList.remove('d-none');
    document.getElementById('interactiondetails').classList.add('d-none');
    document.getElementById('carddetails').classList.add('d-none');
    document.getElementById('linkdetails').classList.remove('d-none');
    document.getElementById('interactionbutton').classList.remove('choosen');
    document.getElementById('cardbutton').classList.remove('choosen');
    document.getElementById('linkbutton').classList.add('choosen');
}

function displayCardsItems_Details() {
    document.getElementById('itemsForInteractions').classList.add('d-none');
    document.getElementById('itemsForCards').classList.remove('d-none');
    document.getElementById('itemsForLinks').classList.add('d-none');
    document.getElementById('interactiondetails').classList.add('d-none');
    document.getElementById('carddetails').classList.remove('d-none');
    document.getElementById('linkdetails').classList.add('d-none');
    document.getElementById('interactionbutton').classList.remove('choosen');
    document.getElementById('cardbutton').classList.add('choosen');
    document.getElementById('linkbutton').classList.remove('choosen');
}

function displayInteractionsItems_Details() {
    document.getElementById('itemsForInteractions').classList.remove('d-none');
    document.getElementById('itemsForCards').classList.add('d-none');
    document.getElementById('itemsForLinks').classList.add('d-none');
    document.getElementById('interactiondetails').classList.remove('d-none');
    document.getElementById('carddetails').classList.add('d-none');
    document.getElementById('linkdetails').classList.add('d-none');
    document.getElementById('interactionbutton').classList.add('choosen');
    document.getElementById('cardbutton').classList.remove('choosen');
    document.getElementById('linkbutton').classList.remove('choosen');
}

// ===================================================

function displayTextDetails() {
    document.getElementById('textdetails').classList.remove('d-none');
    document.getElementById('embeddetails').classList.add('d-none');
    document.getElementById('gallarydetails').classList.add('d-none');
    document.getElementById('comingtextdetails').classList.add('d-none');
    document.getElementById('textbtn').classList.add('chooseninteraction');
    document.getElementById('codebtn').classList.remove('chooseninteraction');
    document.getElementById('gallarybtn').classList.remove('chooseninteraction');
    document.getElementById('comingbtn').classList.remove('chooseninteraction');
}

function displayEmbedDetails() {
    document.getElementById('textdetails').classList.add('d-none');
    document.getElementById('embeddetails').classList.remove('d-none');
    document.getElementById('gallarydetails').classList.add('d-none');
    document.getElementById('comingtextdetails').classList.add('d-none');
    document.getElementById('textbtn').classList.remove('chooseninteraction');
    document.getElementById('codebtn').classList.add('chooseninteraction');
    document.getElementById('gallarybtn').classList.remove('chooseninteraction');
    document.getElementById('comingbtn').classList.remove('chooseninteraction');
}

function displayGallaryDetails() {
    document.getElementById('textdetails').classList.add('d-none');
    document.getElementById('embeddetails').classList.add('d-none');
    document.getElementById('gallarydetails').classList.remove('d-none');
    document.getElementById('comingtextdetails').classList.add('d-none');
    document.getElementById('textbtn').classList.remove('chooseninteraction');
    document.getElementById('codebtn').classList.remove('chooseninteraction');
    document.getElementById('gallarybtn').classList.add('chooseninteraction');
    document.getElementById('comingbtn').classList.remove('chooseninteraction');
}

function displayComingTextDetails() {
    document.getElementById('textdetails').classList.add('d-none');
    document.getElementById('embeddetails').classList.add('d-none');
    document.getElementById('gallarydetails').classList.add('d-none');
    document.getElementById('comingtextdetails').classList.remove('d-none');
    document.getElementById('textbtn').classList.remove('chooseninteraction');
    document.getElementById('codebtn').classList.remove('chooseninteraction');
    document.getElementById('gallarybtn').classList.remove('chooseninteraction');
    document.getElementById('comingbtn').classList.add('chooseninteraction');
}

// ===================================================
function getYoutubeEmbedCode(url) {
    console.log('hi');
    
    let videoId = getVideoIdFromUrl(url);
    let embedUrl = `https://www.youtube.com/embed/${videoId}`; 
    let iframe = `<iframe width="560" height="315" src="${embedUrl}" frameborder="0" allowfullscreen></iframe>`;
    return iframe;
}

function getVideoIdFromUrl(url) {
    let regExp = /^(?:https?:\/\/)?(?:www\.)?(?:youtube\.com\/(?:[^\/]+\/.+\/|(?:v|e(?:mbed)?)\/|.*[?&]v=)|youtu\.be\/)([^"&?\/\s]{11})/;
    let match = url.match(regExp);
    return (match && match[1]) ? match[1] : null;
}

function updateIframe(url) {
    let embedCode = getYoutubeEmbedCode(url);
    document.getElementById("frameshow").innerHTML = embedCode;
}

document.getElementById("youtubeLink").addEventListener("change", function() {
    let youtubeLink = this.value;
    updateIframe(youtubeLink);
});

// ===================================================



// ===================================================

var NFC = document.getElementById('NFC');
var NFC_layer = document.getElementById('NFC-layer');
NFC.addEventListener('click', function () {
    NFC_layer.classList.remove('d-none')
})

function close_nfc_layer() {
    NFC_layer.classList.add('d-none')
}

// ===================================================

var NFC = document.getElementById('editProfileButton');
var editProfile_layer = document.getElementById('edit-profile-layer');
NFC.addEventListener('click', function () {
    editProfile_layer.classList.remove('d-none')
})

function close_editProfile_layer() {
    editProfile_layer.classList.add('d-none')
}
// ===================================================

var sections = document.getElementById('sections');
var profile_sections_layer = document.getElementById('profile-sections-layer');
sections.addEventListener('click', function () {
    profile_sections_layer.classList.remove('d-none')
})

function close_sections_layer() {
    profile_sections_layer.classList.add('d-none')
}

// var links_edit = document.querySelector('.links .edit');
// var links_discard = document.querySelector('.links .discard');
// var links_icons = document.querySelectorAll('.links .icons');
// var links_btns = document.querySelector('.links .btns');

// function edit_links() {
//     links_btns.innerHTML = `<button onclick="discard_links()" class="discard btn btn-light border-0">
//                                     Discard
//                                 </button>

//                                 <button class="save btn btn-primary ms-3 border-0">
//                                     save changes
//                                 </button>`

//     for (var i = 0; i < links_icons.length; i++) {
//         links_icons[i].classList.remove('d-none');
//     }
// }

// function discard_links() {
//     links_btns.innerHTML = `<button onclick="edit_links()" class="edit btn btn-light border-0">
//                                     <i class="fa-solid fa-pen fa-lg me-2"></i>
//                                     Edit
//                                 </button>

//                                 <button class="add btn btn-primary ms-3 border-0">
//                                     <i class="fa-solid fa-plus fa-lg me-2"></i>
//                                     Add
//                                 </button>`

//     for (var i = 0; i < links_icons.length; i++) {
//         links_icons[i].classList.add('d-none');
//     }
// }

// var myh3 = document.querySelector('.profile-sections-layer .content .body .bodycontent .text h3').innerHTML;

// console.log(myh3);




let vectors =  document.getElementsByClassName('vector-icon');
let homeSectionName =  document.getElementsByClassName('home-section-name')
let mysection =  document.getElementsByClassName('mysection');
let sectionName =  document.getElementsByClassName('section-name');
let sectionInput =  document.getElementsByClassName('section-input');
let checkbuttons = document.getElementsByClassName('true&false');
let trueCheck = document.getElementsByClassName('trueCheck');
let falseCheck = document.getElementsByClassName('falseCheck');

for (let i = 0; i < vectors.length; i++) {
    vectors[i].addEventListener('click' , function(){
        // alert('sa')
        sectionName[i].classList.add('d-none');
        sectionInput[i].classList.remove('d-none');
        vectors[i].classList.add('d-none');
        checkbuttons[i].classList.remove('d-none');
    })
    
}

for (let i = 0; i < trueCheck.length; i++) {
    trueCheck[i].addEventListener('click' , function(){
        // alert('sa')
        sectionName[i].innerHTML = sectionInput[i].value;
        homeSectionName[i].innerHTML = sectionName[i].innerHTML;
        sectionName[i].classList.remove('d-none');
        sectionInput[i].classList.add('d-none');
        vectors[i].classList.remove('d-none');
        checkbuttons[i].classList.add('d-none');
    })
    
}

for (let i = 0; i < falseCheck.length; i++) {
    falseCheck[i].addEventListener('click' , function(){
        // alert('sa')
        sectionInput[i].value = sectionName[i].innerHTML;
        sectionName[i].classList.remove('d-none');
        sectionInput[i].classList.add('d-none');
        vectors[i].classList.remove('d-none');
        checkbuttons[i].classList.add('d-none');
    })
    
}


// ==============================================================

var ADD = document.getElementsByClassName('add');
var add_Layer = document.getElementById('add-layer');
for(let i = 0; i < ADD.length; i++){
    ADD[i].addEventListener('click', function () {
        add_Layer.classList.remove('d-none')
    })
}

function close_add_layer() {
    add_Layer.classList.add('d-none')
}
