document.addEventListener("DOMContentLoaded", function () {
    const input = document.querySelector("#favchap");
    const button = document.querySelector("button");
    const list = document.querySelector("#list");

    button.addEventListener("click", function () {
        const li = document.createElement("li");
        const deleteButton = document.createElement("button");

        if (input.value.trim() !== "") {
            li.textContent = input.value;
            deleteButton.textContent = "X";
            li.append(deleteButton);
            list.append(li);

            deleteButton.addEventListener("click", function () {
                list.removeChild(li);
                input.focus();
            });

            input.focus();
            input.value = "";
        }
    });
});
