function contar(){
   var ini = document.getElementById('txti')
   var fim = document.getElementById('txtf')
   var pas = document.getElementById('txtp')

   if (ini.value.length == 0 || fim.value.length == 0 || pas.value.length == 0){
      window.alert ('[erro]')
   } else {
     res.innerHTML = `Contando: `
     var i = Number (ini.value)
     var f = Number (fim.value)
     var p = Number ( pas.value)
      if (i < f ) {
         //contagem progressiva
          for ( var c = i; c <= f ; c += p ) {
             res.innerHTML += `${c} `
         }

      } else {
         //contagem regressiva
         for(var c = i ; c >= f ; c-= p )
            res.innerHTML += `${c} `
      }
    
    
   
   }
}