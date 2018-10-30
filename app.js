var App = {
    init: function () {
        $(".testButton").click(function (miEvento) {
            $(this).fadeOut();
        })

        class Phone {
            constructor(img, productName) {
                this.img = img;
                this.productName = productName;
            }
        }

        // var phones = [new Phone("https://cdn2.gsmarena.com/vv/bigpic/motorola-one-.jpg", "motorola"), new Phone("https://images-cdn.azureedge.net/azure/in-resources/0211f4bd-ce6a-4162-95a2-f801e5ae9176/Images/ProductImages/Source/V9%204GB%2064GB%20Black%20-%20Vivo.jpg;width=300;height=450;scale=canvas;anchor=bottomcenter", "iphone"), new Phone("https://cdn2.gsmarena.com/vv/bigpic/motorola-one-.jpg", "motorola"), new Phone("https://images-cdn.azureedge.net/azure/in-resources/0211f4bd-ce6a-4162-95a2-f801e5ae9176/Images/ProductImages/Source/V9%204GB%2064GB%20Black%20-%20Vivo.jpg;width=300;height=450;scale=canvas;anchor=bottomcenter", "iphone"), new Phone("https://cdn2.gsmarena.com/vv/bigpic/motorola-one-.jpg", "motorola"), new Phone("https://images-cdn.azureedge.net/azure/in-resources/0211f4bd-ce6a-4162-95a2-f801e5ae9176/Images/ProductImages/Source/V9%204GB%2064GB%20Black%20-%20Vivo.jpg;width=300;height=450;scale=canvas;anchor=bottomcenter", "iphone")]

        // for (var i = 0; i < phones.length; i++) {
        //     $(".mobiles-container").append(`<div class="mobile-phone"></div>`)
        // }

        // let selector = ".mobiles-container .mobile-phone";
        // $(selector).each(function (index) {
        //     $(this).html(`<h4>${phones[index].productName}</h4>
        //     <img src="${phones[index].img}" alt="">`)
        // })

        var arrNames = ["sonia", "maria", "diego", "julio"]

        $("#username").attr("placeholder", arrNames[Math.floor(Math.random() * arrNames.length)])

    },
    createJewels: function () {
        // code for jewels
    }
}