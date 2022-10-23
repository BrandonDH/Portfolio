
// hover over my name
const titleGetter = document.querySelector('.my-name')

titleGetter
  .addEventListener('mouseover', () => {
    titleGetter
      .textContent
      .split('')
      .forEach(element => {
        console.log(element)
  });

})

const myMarquee = document.querySelector('.marquee-redux')

// greeting scrolls across the bottom of the page