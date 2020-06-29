//Create DOM structure in Javascript
const parentElement = document.querySelector('body');
const removeButtonElement = document.createElement('button');
const mainElement = document.createElement('main')
const imageElement = document.createElement('img')
const anchorElement = document.createElement('a')



parentElement.append(mainElement, removeButtonElement)

mainElement.append(imageElement, anchorElement)


//Set the attributes for the image tag

imageElement.setAttribute('class', 'img')
imageElement.setAttribute('alt', 'GWagon')
imageElement.setAttribute('src', 'https://i.pinimg.com/564x/3b/d4/f8/3bd4f83d0c3cc87b9a78b84b17fc4625.jpg')


//Set the attributes for the anchor tag


anchorElement.setAttribute('class','link')
anchorElement.setAttribute('href', 'https://www.mbusa.com/en/home')

//Add the event listener to the button tag to remove mainElement

removeButtonElement.addEventListener('click', function() {
  mainElement.remove();
  })















