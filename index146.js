const login = {
    username: 'batman',
    password: 'Alfred1960KPO!',
    shouldOpenBatCave:function(){
if (this.username==='batman' && this.password === 'Alfred1960KPO!')
  console.log ('Welcome back batman!!');
 
else {
    console.log( "Sorry, you can't enter the Batcave, try again..");
   }
}
}
login.shouldOpenBatCave();
