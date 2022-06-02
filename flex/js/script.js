
var bestItems = [
    {
        rating: 4.7,
        isLike: false,
        className: 'img',
        title: 'Шоу Мэй',
        category: 'Черный чай',
        descr: 'Очень легкий чай с тонким ароматом, имеет сладковатый вкус с легкой кислинкой.',
        weight: '100 гр.',
        price: '15 BYR'
    },
    {
        rating: 5,
        isLike: true,
        className: 'img',
        title: 'Юньнань Юнь',
        category: 'Белый чай',
        descr: 'Очень легкий чай с тонким ароматом, имеет сладковатый вкус с легкой кислинкой.',
        weight: '100 гр.',
        price: '20 BYR'
    },
    {
        rating: 3.8,
        isLike: false,
        className: 'img',
        title: 'Бай Му Дань',
        category: 'Белый чай',
        descr: 'Очень легкий чай с тонким ароматом, имеет сладковатый вкус с легкой кислинкой.',
        weight: '100 гр.',
        price: '20 BYR',
        isStock: true,
        stockPrice: '15 BYR'
    },
    {
        rating: 2.6,
        isLike: true,
        className: 'img',
        title: 'Лушань Юнь',
        category: 'Зеленый чай',
        descr: 'Очень легкий чай с тонким ароматом, имеет сладковатый вкус с легкой кислинкой.',
        weight: '100 гр.',
        price: '25 BYR'
    },
];

var shadow = document.getElementById('shadow');
var form = document.getElementById('addItemForm');
var inputs = form.getElementsByTagName('input');
var addItem = document.getElementById('addItem');
var close = document.getElementById('close');

close.addEventListener('click', function (){
    shadow.style.height = '0';
})

addItem.addEventListener('click', function (){
    shadow.style.height = '100vh';
})

render(bestItems);

//render
function render(items){
    var list = document.getElementById('best-items-list');

    var htmlElems = '';

    for(var i = 0; i < items.length; i++){
        htmlElems += `
         <li>
                <div class="rating">${items[i].rating}</div>
                <div class="like ${items[i].isLike?"active":null}"></div>
                <div class="img"></div>
                <h3>${items[i].title}</h3>
                <p class="title">${items[i].category}</p>
                <p class="descr">${items[i].descr}</p>
                <p class="price">
                    ${items[i].weight} /
                    <span class="${items[i].isStock?'disable':''}">${items[i].price}</span>
                    <span class="isStock">${items[i].isStock ? items[i].stockPrice : ""}</span>
                </p>
                <button class="btn">В корзину</button>
            </li>
    `
    }

    list.innerHTML = htmlElems;
}


function getFormData(){
    var newItem = {};
    for(var i=0; i<inputs.length; i++){
        newItem[inputs[i].id] = inputs[i].value;
    }
    bestItems.push(newItem);

    render(bestItems);

    shadow.style.height = '0';
}


