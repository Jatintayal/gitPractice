//saying hello world to git
let x = {
  'f': 's',
  'next': (){
    console.log('git is awesome!!');
  }
}

console.log(JSON.stringify(x))

(() => {
  console.log(x.next);
})();
