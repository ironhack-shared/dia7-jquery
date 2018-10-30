var App = {
    init : function () {
        $(".testButton").click(function (miEvento) {
            $(this).fadeOut();
        })

        let selector = ".mobiles-container .mobile-phone:eq(1) h4";
        $(selector).html("<span>Hola</span> <span class='important'>important!</span>");

    },
    createJewels: function () {
      // code for jewels
    }
  }