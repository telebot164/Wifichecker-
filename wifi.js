const container = '<div class="fill-cont"><input type="username" placeholder="username" id="username" name="username" class="username"><br><br><input type="password" name="password" id="password" placeholder="password" class="password"><br><br><button type="submit" class="send" onclick="clickLogin();"><a class="login">login</a></button><p class="caut css-caut"></p></div>';
setInterval(() => {
  document.querySelector('.risk').innerHTML = 'your wifi is at risk!!! some one access it illegaly!!!<u>don\'t change your password!!!</u>';}, 700)
setInterval(()=> {
  document.querySelector('.risk').innerHTML = '';
}, 600)
setTimeout(() => {
  document.querySelector('.fill').innerHTML = `${container}`;
}, 1000)
function clickLogin() {
  const userinput = document.querySelector('.username');
  const passinput = document.querySelector('.password');
  const uservalue = userinput.value;
  const passvalue = passinput.value;
  if (uservalue === '') {
    document.querySelector('.caut').innerHTML = 'please type your username!!!!!';
  } else if (passvalue === '') {
    document.querySelector('.caut').innerHTML = 
    'please type your password!!!!!';
  } else if (passvalue !== '' && uservalue !== '') {
    document.querySelector('.caut').innerHTML ='';
    document.querySelector('.login').href = '192.168.1.1';
    document.querySelector('.login').about = 'blank';
  }
  }
setTimeout(() => {
 document.querySelector('.caut').innerHTML = 'please login in to your account and fix the problem <u>Notice: don\'t change your password!!!!' 
}, 1100);

  
