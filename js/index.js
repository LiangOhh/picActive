const panels = document.querySelectorAll('.panel')
// console.log(panels);
panels.forEach(panel => {
    panel.addEventListener('click', () => {
        //排他思想
        transActive()
        panel.classList.add('active')
    })
})

function transActive() {
    panels.forEach(panel => {
        panel.classList.remove('active')
    })
}