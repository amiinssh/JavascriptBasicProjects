let selected = null; 

        const lists = document.getElementsByClassName("list");
        const rightBox = document.getElementById("right");
        const leftBox = document.getElementById("left");

        function handleDragStart(e) {
            selected = e.target;
        }

        function handleDragOver(e) {
            e.preventDefault(); 
        }

        function handleDrop(e) {
            e.preventDefault();
            if (selected) {
                e.target.appendChild(selected); 
                selected = null; 
            }
        }

        for (let list of lists) {
            list.setAttribute("draggable", "true");
            list.addEventListener("dragstart", handleDragStart);
        }

        leftBox.addEventListener("dragover", handleDragOver);
        leftBox.addEventListener("drop", handleDrop);
        rightBox.addEventListener("dragover", handleDragOver);
        rightBox.addEventListener("drop", handleDrop);