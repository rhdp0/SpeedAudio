const interval = setInterval(() => {
    const header = document.querySelector("._1R3Un")
    if (header) {
        console.log(header)
        clearInterval(interval)


        const button = document.createElement("button")
        button.innerHTML = "2x"
        button.classList.add("twoTimesButton")

        button.addEventListener("click",() => {
            const audios = document.querySelectorAll("audio")
            if(button.innerHTML === "2x") {
                audios.forEach((audio) => {
                    audio.playbackRate = 2
                    button.innerHTML = "1x"
                })
            }else if(button.innerHTML === "1x"){
                audios.forEach((audio) => {
                    audio.playbackRate = 1
                    button.innerHTML = "2x"
                })
            }
            
        })

        header.appendChild(button)
    }
},1000)

