$(function(){
    var  Kläder = [
        { name: 'skjorta', price:'400kr', photo: 'https://lotuseco.se/wp-content/uploads/2017/06/skjorta-amon-denim.jpg', id: 1 },
        { name: 'väst', price:'300kr', photo: 'https://www.skkshop.skk.se/static/webimages/original/540115540120vastchesky_stor.jpg', id: 2 },
        { name: 'tröja', price:'500kr', photo: 'https://hoyer.no/media/catalog/product/cache/image/700x700/e9c3970ab036de70892d86c6d221abfe/2/_/2_14_1.jpg', id: 3 },
        { name: 'kofta', price:'200kr', photo: 'http://www.forshagafestivalen.se/images/5ore/Billiga%20Sverige%20Kl%C3%A4der%20-%20818655%20-%20Michael%20Kors%20Kofta%20-%20Ash%20Melange%20Rea%205781.jpg', id: 4 },
        { name: 'jeans', price:'350kr', photo: 'https://uniqlo.scene7.com/is/image/UNIQLO/goods_64_182656?$prod$', id: 5 },
        { name: 'T-shirt', price:'100kr', photo: 'https://images.bewakoof.com/original/up-in-smoke-typography-half-sleeve-t-shirt-men-s-printed-t-shirts-1513764488.jpg', id: 6 },
        { name: 'byxor', price:'270kr', photo: 'https://armygross.se/images/normal/pentagon2.0-bdu-byxa-kaki.jpg', id: 7 },
        { name: 'shorts', price:'250kr', photo: 'https://static.netshoes.com.ar/produtos/short-nike-dry-academy-junior/02/001-3877-002/001-3877-002_zoom1.jpg', id: 8 },
        { name: 'kostym', price:'990kr', photo: 'http://cgc.se/beta/wp-content/uploads/2016/11/tiger_konstym.jpg', id: 9 },
        { name: 'jacka', price:'350kr', photo: 'https://www.subarushop.se/images/2.2143/zepelin-jacka-herr.jpeg', id: 10 },
    ];
     var Kläder1 = [];

     var Kläderlist = function (array, location) {
        var veiwList1 = array.map(function (item) {
            return `<li class="Kläder-list col-2">
         <img src="${item.photo}" alt="">
         <div class = 'texts'>
         <h2>${item.name}</h2>
         <h5>${item.price}</h5>
         </div>
         <button type="button" id="${item.id}">shop</button>
        </li> `;
        });
        $(location).html(veiwList1);
    };
    Kläderlist(Kläder, $('.show-list1'));
    
    var addToList1 = function (array, id, location) {
        var add1 = array.find(function (i) {
            return i.id === id;
        });

        Kläder1.push(add1);
       

        var elemnt1 = `
     <li class="elemnt1" id="${add1.id}">
     <h3>${add1.name}</h3>
     <button type="button" >del</button>
     </li>
     `;
        $("span.amount").text(Kläder1.length);
        $(location).append(elemnt1);
    };

    $(".car-list").on('click', 'button', function (e) {
        var id1 = $(this).attr('id');

        addToList1(Kläder, +id1, $('.new-list'))

    });

    var delet1 = function (array, deletone) {
        array.splice(deletone, 1);

    };


    var delet11 = function (array, location) {
      
        $('span.amount').text(array.length);
    };

    $('.new-list').on('click', 'button', function(a) {
    var remove = $(a.currentTarget).closest('li').remove();
    delet1(Kläder1,remove);
    delet11(Kläder1, $('.new-list'));

    });
   

     var  Elektronik = [
        { name: 'Samsung mobil', price:'7000kr', photo: 'https://s7d2.scene7.com/is/image/SamsungUS/Note8-Front-S-Pen-Midnight-Black?$product-details-jpg$', id: 1 },
        { name: 'iphone mobil', price:'8000kr', photo: 'http://www.three.co.uk/static/images/device_pages/MobileVersion/Apple/iPhone_X/Space_Grey/desktop/1.jpg', id: 2 },
        { name: 'huawei mobil', price:'5000kr', photo: 'https://i.gadgets360cdn.com/products/large/1521537947_635_huawei_nova_3e.jpg', id: 3 },
        { name: 'sony mobil', price:'6000kr', photo: 'http://99mobileprice.com/wp-content/uploads/2017/12/sony-xperia-edge-concept-design_149380589210.jpg', id: 4 },
        { name: 'linovo mobil', price:'6500kr', photo: 'https://i.gadgets360cdn.com/products/large/1528185213_635_lenovo_z5_db.jpg', id: 5 },
        { name: 'asuz mobil', price:'4000kr', photo: 'https://static.digit.in/product/fe410826f7eb3507a0bbaa386f3e66fbe4ae2592.jpeg', id: 6 },
        { name: 'LG mobil', price:'5000kr', photo: 'https://media.wired.com/photos/5b22dcc7714d3b70d9ed7f32/master/pass/LG-V30-Cloud-SilverTA.jpg', id: 7 },
        { name: '1+ mobil', price:'4500kr', photo: 'https://drop.ndtv.com/TECH/product_database/images/423201441820PM_635_oneplus_one.jpeg', id: 8 },
        { name: 'nokia mobil', price:'3500kr', photo: 'https://images.ctfassets.net/wcfotm6rrl7u/3WaBvlzfp6e4kACsCYwwQO/050ecdd71c7e504c84f32f6e07360cd4/nokia_8_Sirocco-ROW-black.png?w=230&h=230&fit=pad&bg=rgb:fff', id: 9 },
        { name: 'motorola mobil', price:'4300kr', photo: 'https://i.gadgets360cdn.com/products/large/1534396088_635_moto_p30.jpg', id: 10 },
    ];
    var  Elektronik1 = [];

    var Elektroniklist = function (array, location) {
        var veiwList2 = array.map(function (item) {
            return `<li class="Elektronik-list col-2">
         <img src="${item.photo}" alt="">
         <div class = 'texts'>
         <h2>${item.name}</h2>
         <h5>${item.price}</h5>
         </div>
         <button type="button" id="${item.id}">shop</button>
        </li> `;
        });
        $(location).html(veiwList2);
    };
    Elektroniklist(Elektronik , $('.show-list2'));

    var addToList2 = function (array, id, location) {
        var add2 = array.find(function (i) {
            return i.id === id;
        });

        Elektronik1.push(add2);
       

        var elemnt2 = `
     <li class="elemnt2" id="${add2.id}">
     <h3>${add2.name}</h3>
     <button type="button" >del</button>
     </li>
     `;
        $("span.amount").text(Elektronik1.length);
        $(location).append(elemnt2);
    };

    $(".car-list").on('click', 'button', function (e) {
        var id2 = $(this).attr('id');

        addToList2(Elektronik, +id2, $('.new-list'))

    });
    var delet2 = function (array, delettow) {
        array.splice(delettow, 1);

    };


    var delet22 = function (array, location) {
      
        $('span.amount').text(array.length);
    };

    $('.new-list').on('click', 'button', function(a) {
    var remove = $(a.currentTarget).closest('li').remove();
    delet2(Elektronik1,remove);
    delet22(Elektronik1, $('.new-list'));

    });
   

    var  Leksaker = [
        { name: ' Leksaksbil', price:'50kr', photo: 'https://shopcdn.textalk.se/shop/ws16/78116/art16/h7981/157717981-origpic-ba9e9c.jpg?max-width=1080&max-height=1080&quality=80', id: 1 },
        { name: 'Plocklåda', price:'80kr', photo: 'https://shopcdn.textalk.se/shop/ws16/78116/art16/h5723/157565723-origpic-56277f.jpg?max-width=1080&max-height=1080&quality=80', id: 2 },
        { name: 'Klosståg', price:'130kr', photo: 'https://shopcdn.textalk.se/shop/ws16/78116/art16/h5717/157565717-origpic-6e1c7a.jpg?max-width=1080&max-height=1080&quality=80', id: 3 },
        { name: 'Skallra GRÖN KANIN', price:'120kr', photo: 'https://shopcdn.textalk.se/shop/ws16/78116/art16/h0798/157210798-origpic-ac7f74.jpg?max-width=1080&max-height=1080&quality=80', id: 4 },
        { name: 'Stapelleksak MUS', price:'60kr', photo: 'https://shopcdn.textalk.se/shop/ws16/78116/art16/h8847/160728847-origpic-7945ba.jpg?max-width=1080&max-height=1080&quality=80', id: 5 },
        { name: 'Gåvagn med träklossar och personlig gravyr', price:'70kr', photo: 'https://shopcdn.textalk.se/shop/ws16/78116/art16/h5825/157565825-origpic-d5a9c7.jpg?max-width=1080&max-height=1080&quality=80', id: 6 },
        { name: 'Stapelleksak', price:'75kr', photo: 'https://shopcdn.textalk.se/shop/ws16/78116/art16/h7923/157717923-origpic-84e217.jpg?max-width=1080&max-height=1080&quality=80', id: 7 },
        { name: 'Verktygslåda i trä', price:'200kr', photo: 'https://shopcdn.textalk.se/shop/ws16/78116/art16/h6549/160196549-origpic-e80cbe.jpg?max-width=1080&max-height=1080&quality=80', id: 8 },
        { name: 'Byggklossar', price:'350kr', photo: 'https://shopcdn.textalk.se/shop/ws16/78116/art16/h2105/158032105-origpic-a39894.jpg?max-width=1080&max-height=1080&quality=80', id: 9 },
        { name: 'Bilbana ', price:'40kr', photo: 'https://shopcdn.textalk.se/shop/ws16/78116/art16/h0411/157590411-origpic-74e5b2.jpg?max-width=1080&max-height=1080&quality=80', id: 10 },
    ];
    var Leksaker1 =[];
    var Leksakerlist = function (array, location) {
        var veiwList3 = array.map(function (item) {
            return `<li class="Leksaker-list col-2">
         <img src="${item.photo}" alt="">
         <div class = 'texts'>
         <h2>${item.name}</h2>
         <h5>${item.price}</h5>
         </div>
         <button type="button" id="${item.id}">shop</button>
        </li> `;
        });
        $(location).html(veiwList3);
    };
    Leksakerlist(Leksaker, $('.show-list3'));


    var addToList3 = function (array, id, location) {
        var add3 = array.find(function (i) {
            return i.id === id;
        });

        Leksaker1.push(add3);
       

        var elemnt3 = `
     <li class="elemnt3" id="${add3.id}">
     <h3>${add3.name}</h3>
     <button type="button" >del</button>
     </li>
     `;
        $("span.amount").text(Leksaker1.length);
        $(location).append(elemnt3);
    };

    $(".car-list").on('click', 'button', function (e) {
        var id3 = $(this).attr('id');

        addToList3(Leksaker, +id3, $('.new-list'));

    });
    
    var delet3 = function (array, deletthree) {
        array.splice(deletthree, 1);

    };


    var delet33 = function (array, location) {
      
        $('span.amount').text(array.length);
    };

    $('.new-list').on('click', 'button', function(a) {
    var remove = $(a.currentTarget).closest('li').remove();
    delet3(Leksaker1,remove);
    delet33(Leksaker1, $('.new-list'));

    });
   
  
});













