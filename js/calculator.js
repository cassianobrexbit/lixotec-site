(function($) {

  var btc, ltc, eth, sell, buy, btc_buy_rate, eth_buy_rate, ltc_buy_rate, btc_sell_rate, eth_sell_rate, ltc_sell_rate;

  $.getJSON('brexbit.json', function (data) {

    btc_sell_rate = data.bitcoin.compra;
    btc_buy_rate = data.bitcoin.venda;

    eth_sell_rate = data.ethereum.compra;
    eth_buy_rate = data.ethereum.venda;

    ltc_sell_rate = data.litecoin.compra;
    ltc_buy_rate = data.litecoin.venda;

    $("#val_rate").val(btc_buy_rate);

   });


  $('#eth_btn').addClass('main2-btn');
  $('#ltc_btn').addClass('main2-btn');
  $('#sell_btn').addClass('main2-btn');


  btc = 1;
  eth = 0;
  ltc = 0;
  buy = 1;
  sell = 0;


  $("#val_cripto").val('');
  $("#val_brl").val('');

  $('#btc_btn').on('click', function(){

      $("#val_cripto").val('');
      $("#val_brl").val('');

      btc = 1;
      eth = 0;
      ltc = 0;

      $('#btc_btn').removeClass('main2-btn');
    	$('#eth_btn').addClass('main2-btn');
      $('#ltc_btn').addClass('main2-btn');

      if (buy == 1) {
        $("#val_rate").val(btc_buy_rate);
      } else if (sell == 1) {
        $("#val_rate").val(btc_sell_rate);
      };


  });

  $('#eth_btn').on('click', function(){

      $("#val_cripto").val('');
      $("#val_brl").val('');

      btc = 0;
      eth = 1;
      ltc = 0;

      $('#eth_btn').removeClass('main2-btn');
      $('#btc_btn').addClass('main2-btn');
      $('#ltc_btn').addClass('main2-btn');

      if (buy == 1) {
        $("#val_rate").val(eth_buy_rate);
      } else if (sell == 1) {
        $("#val_rate").val(eth_sell_rate);
      };
	});

  $('#ltc_btn').on('click', function(){

      $("#val_cripto").val('');
      $("#val_brl").val('');

      btc = 0;
      eth = 0;
      ltc = 1;

      $('#ltc_btn').removeClass('main2-btn');
      $('#eth_btn').addClass('main2-btn');
      $('#btc_btn').addClass('main2-btn');

      if (buy == 1) {
        $("#val_rate").val(ltc_buy_rate);
      } else if (sell == 1) {
        $("#val_rate").val(ltc_sell_rate);
      };
	});

  $('#buy_btn').on('click', function(){

      $("#val_cripto").val('');
      $("#val_brl").val('');

      buy = 1;
      sell = 0;

      $('#buy_btn').removeClass('main2-btn');
      $('#sell_btn').addClass('main2-btn');

      if (btc == 1) {
        $("#val_rate").val(btc_buy_rate);
      } else if (eth == 1) {
        $("#val_rate").val(eth_buy_rate);
      } else if (ltc == 1) {
        $("#val_rate").val(ltc_buy_rate);
      };

  });

  $('#sell_btn').on('click', function(){

      $("#val_cripto").val('');
      $("#val_brl").val('');

      sell = 1;
      buy = 0;

      $('#sell_btn').removeClass('main2-btn');
      $('#buy_btn').addClass('main2-btn');

      if (btc == 1) {
        $("#val_rate").val(btc_sell_rate);
      } else if (eth == 1) {
        $("#val_rate").val(eth_sell_rate);
      } else if (ltc == 1) {
        $("#val_rate").val(ltc_sell_rate);
      };

	});

  $(".onlynumber").on("keypress keyup blur",function (event) {

    $(this).val($(this).val().replace(/[^0-9\.]/g,''));

       if ((event.which != 46 || $(this).val().indexOf('.') != -1) &&
          (event.which < 48 || event.which > 57)) {

           event.preventDefault();
        }

   });


  $( "#val_brl" ).keyup(function( event ) {

    $("#val_cripto").val(($( "#val_brl" ).val() / $("#val_rate").val()).toFixed(8));

  });


  $( "#val_cripto" ).keyup(function( event ) {

    $("#val_brl").val(($( "#val_cripto" ).val() * $("#val_rate").val()).toFixed(2));

  });

})(jQuery);
