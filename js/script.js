// WARNING MESSAGE: This is a playground for manipulating the Unsplash API. 
// As you know, this JavaScript file is accessible from the console. Do not use this code in this way in production.


const clientID = 'YOURCLIENTIDKEY'


// Examples :
// https://api.unsplash.com/photos/search?client_id=CLIENT_ID&query=QUERY&orientation=ORIENTATION
// https://api.unsplash.com/search/photos?client_id=*********&query=animal&orientation=landscape
let UnplashAPI = `https://api.unsplash.com/photos/random/?client_id=${clientID}&orientation=landscape`

// NOTICE
// comment these lines if you want and don't need them anymore
console.error('IMPORTANT : clientID', clientID, ' // change this const clientID by your CLIENT ID KEY');
console.warn('NOTE : Unsplash\'s API demo mode is limited to 50 requests per hour. Show console message and please try again later.');

console.log(UnplashAPI);


let imageUnsplashImgBackground = document.querySelector('.hero-section-img');

let imageUnsplashPhotographenNameCopyrightUrl = document.querySelector('#unsplash-creator-name-copyright-url');
let imageUnsplashPhotographenProfilImage = document.querySelector('#unsplash-creator-name-profil-image');
let imageUnsplashPhotographenNameCopyright = document.querySelector('#unsplash-creator-name-copyright');
let imageUnsplashPhotographenIdNameCopyright = document.querySelector('#unsplash-id-creator-name');



fetch(UnplashAPI)
    .then(function (response) {
        return response.json();
    })

    .then(function (jsonData) {

        imageUnsplashBackgroundUrl = jsonData.urls.regular;

        imageUnsplashPhotographenProfilImageData = jsonData.user.profile_image.medium;
        imageUnsplashPhotographenProfilImage.setAttribute('src', jsonData.user.profile_image.small);
        imageUnsplashPhotographenNameCopyright.textContent = jsonData.user.name;
        imageUnsplashPhotographenIdNameCopyright.textContent = '@' + jsonData.user.username;
        imageUnsplashPhotographenNameCopyrightUrl.setAttribute('href', 'https://unsplash.com/@' + jsonData.user.username);

        imageUnsplashImgBackground.style.backgroundImage = `url(${imageUnsplashBackgroundUrl})`;


        var delayInMilliseconds = 1000; // 1 second

        setTimeout(function () {
            imageUnsplashPhotographenNameCopyrightUrl.style.opacity = 1;
        }, delayInMilliseconds);

    })

    .catch(function (error) {
        console.log('Error : ', error);
        console.log(error.status);
    });