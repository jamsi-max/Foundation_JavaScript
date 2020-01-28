'use strict';

const button = document.querySelectorAll('.button-desc');
button.forEach(function(element) {
    element.addEventListener('click', function(event){
        if (event.target.innerText == 'Подробнее'){
            event.target.innerText = 'Отмена';
            event.target.parentNode.parentNode.querySelector('img').classList.add('noActive');
            event.target.parentNode.parentNode.querySelector('span').classList.add('active');
        } else if (event.target.innerText == 'Отмена'){
            event.target.innerText = 'Подробнее';
            event.target.parentNode.parentNode.querySelector('img').classList.remove('noActive');
            event.target.parentNode.parentNode.querySelector('span').classList.remove('active');
        }
    })
});


const add_basket = document.querySelectorAll('.add-basket');
add_basket.forEach(button => {
    button.addEventListener('click', event => {
        let selectElementAdd = event.target.parentNode.parentNode.querySelectorAll('.id-basket , img , .price');
        basket.addBasketList(selectElementAdd);
    })
});

const productMinus = document.body.addEventListener('click', event =>{
    if (event.target.classList.value == 'minus') {
        let find = event.target.parentNode.parentNode;
        basket.removeBasketListMenu(find.querySelector('.id').innerText)
    }
});

const productPlus = document.body.addEventListener('click', event =>{
    if (event.target.classList.value == 'plus') {
        let find = event.target.parentNode.parentNode;
        basket.addBasketListMenu(find.querySelector('.id').innerText)
    }
});


let basket = {
    basket_list: ['В корзине пусто'],
    id: 0,
    img: "",
    price: 0,
    total: 0,
    allTotal: 0,
    count: 0,

    addBasketList(elementList) {
        let flagInner = 0;
        this.basket_list.forEach(element => {
            if (element.indexOf(elementList[2].innerText.split(' ')[1]) != -1) {
                flagInner = 1;
                element[3] += 1;
                element[4] += element[2];
                this.allTotal += this.price;
                this.insertTag();
            }
        });

        if (!flagInner) {
            this.id = elementList[2].innerText.split(' ')[1];
            this.img = elementList[0].src;
            this.price = +elementList[1].innerText.split(' ')[1];
            this.basket_list.push([this.id, this.img, this.price, 1 , this.price]);
            this.allTotal += this.price;
            this.insertTag();
        };
    },

    insertTag(){
        this.removeAllTags();
        const iconCount = document.querySelector('.iconCount');
        this.count = 0;
        this.basket_list.forEach(element => {
            if (!isNaN(element[3])){
                this.count += element[3];
            }
            iconCount.innerText = `${this.count}`;
        });
        

        let selectElementInsert = document.querySelector('.basket-emty');
        if (this.basket_list.length > 1){
            selectElementInsert.parentNode.insertAdjacentHTML("beforeEnd", '<li class="basketInsert"><div class="">№</div><div class="id">id</div><div class="id">img</div><div class="price-basket">price</div><div class="count"><div></div><div>count</div><div></div></li>');
            for (let n = 1; n < this.basket_list.length; n++){
                let tagInser = `<li class="basketInsert"><div class="">${n}</div><div class="id">${this.basket_list[n][0]}</div><img src="${this.basket_list[n][1]}" width="30px" height="30px" alt=""><div class="price-basket">${this.basket_list[n][2]} ₽</div><div class="count"><button class="minus">-</button><div>${this.basket_list[n][3]}</div><button class="plus">+</button></div></li>`;
                selectElementInsert.parentNode.insertAdjacentHTML("beforeEnd", tagInser);
            }
            selectElementInsert.parentNode.insertAdjacentHTML("beforeEnd", `<li class="total basketInsert"><div class="">Total:</div><div class="total-count">${this.allTotal} ₽</div></li>`);
        } else {
            selectElementInsert.parentNode.insertAdjacentHTML("beforeEnd",`<li class="basketInsert "><div style="height: 200px;line-height: 200px;">${this.basket_list[0]}</div></li>`)
        }
    },

    removeAllTags() {
        let elementRemove = document.querySelectorAll('.basketInsert');
        elementRemove.forEach(element => element.parentNode.removeChild(element));
    },

    removeBasketListMenu(elementId) {
        this.basket_list.forEach(function (element , index) {
            if (element.indexOf(elementId) != -1) {
                if (element[3] > 1) {
                    element[3] -= 1;
                    element[4] -= element[2];
                    basket.allTotal -= element[2];
                    basket.insertTag();
                } else {
                    basket.allTotal -= element[2];
                    basket.basket_list.splice(index, 1);
                    basket.insertTag();
                }
            } 
        })
    },

    addBasketListMenu(elementId) {
        this.basket_list.forEach(element => {
            if (element.indexOf(elementId) != -1) {
                element[3] += 1;
                element[4] += element[2];
                this.allTotal += element[2];
                this.insertTag();
            }
        })
    },

}     
