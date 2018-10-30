var App = {
    init : function () {
        $(".testButton").click(function (miEvento) {
            $(this).fadeOut();
        })

        let selector = ".mobiles-container .mobile-phone";
        $(selector).each(function (index) {
            $(this).html(`<h4>Phone ${index + 1}</h4>
            <img src="https://images-cdn.azureedge.net/azure/in-resources/0211f4bd-ce6a-4162-95a2-f801e5ae9176/Images/ProductImages/Source/V9%204GB%2064GB%20Black%20-%20Vivo.jpg;width=300;height=450;scale=canvas;anchor=bottomcenter" alt="">`)
        })

    },
    createJewels: function () {
      // code for jewels
    }
  }