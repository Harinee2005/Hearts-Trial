const bodyEl = document.querySelector("body");

        bodyEl.addEventListener("mousemove", (event) => {
            const xPos = event.pageX;  
            const yPos = event.pageY;  
            const spanEl = document.createElement("span");
            spanEl.style.left = xPos + "px";
            spanEl.style.top = yPos + "px";

            const size = Math.random() * 30 + 30;
            spanEl.style.width = size + "px";
            spanEl.style.height = size + "px";

            bodyEl.appendChild(spanEl);
            setTimeout(() => {
                spanEl.remove();
            }, 3000); 
        });