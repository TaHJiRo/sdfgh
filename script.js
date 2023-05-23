let input = document.querySelector("#input");
let addBtn = document.querySelector("#add_btn");
let number = 0;
let list = $(".list");
let backBtn = document.querySelector(".back");


backBtn.addEventListener('click', () => {
    location.href = "index1.html"
});


addBtn.addEventListener('click', () => {
    number++;

    let inputValue = input.value;
    list.append(`
    <div class="list_block" id="list_block_${number}">
                <h2>- ${inputValue}</h2>
                <div class="click">
                    <button class="completed_btn" id="completed_btn_${number}">
                        <img src="./img/unnamed.png" width="30px" alt="">
                    </button>
                    <button class="croos_btn" id="croos_btn_${number}">
                        <img src="./img/red-cross-md_0.png" width="30px" height="30px" alt="">
                    </button>
                </div>
            </div>
    `);
    



    let completedBtn = document.querySelector(`#completed_btn_${number}`);
    let crossBtn = document.querySelector(`#croos_btn_${number}`);
    let listBlock = $(`#list_block_${number}`);

    completedBtn.addEventListener('click', () => {
        listBlock.empty();
        listBlock.append(`
            <h2><del>- ${inputValue}</del></h2>
            <div class="click">
                <button class="completed_btn" id="completed_btn_${number}">
                    <img src="./img/unnamed.png" width="30px" alt="">
                </button>
                <button class="croos_btn" id="croos_btn_${number}">
                    <img src="./img/red-cross-md_0.png" width="30px" height="30px" alt="">
                </button>
            </div>

        `);
    });

    crossBtn.addEventListener('click', () => {
        listBlock.empty();
    });
});