// Rich Jones of Gun.io, public domain. Fork me, please! http://github.com/Miserlou/
//ported to Prototype.js by Walter Davis https://github.com/walterdavis
now = new Date();

if (now.getDate() == 18 && now.getMonth() == 0 && now.getFullYear() == 2012) {

  document.observe('dom:loaded', function() {
    $$('body').setStyle({'background': '#000000',
      'text-align': 'center',
      'color': '#111111',
      'font-family': 'Helvetica',
      'font-size':'2.2em',
      'vertical-align':'middle'}
    );
    $('body').update('<div style="width: 960px; margin: 0 auto;"><br /><br />This website is..<br /> <br /><div style="color: #222222">BLACKED OUT!</div><br />..in protest of <a href="http://en.wikipedia.org/wiki/Stop_Online_Piracy_Act" target="_blank" style="color: #220022">pending legislation</a> which threatens the freedoms of websites like this one and the freedoms of the people who use them.<br /><br />Please <a href="http://americancensorship.org/" target="_blank" style="color: #220022">help protect our free speech</a> against the corporate and political interests which seek to take them away!<br /><br />(And don\'t worry, we\'ll be back in business tomorrow!)</div>');
  });
}
