console.log('hey it looks like it worked! Happy Hacking!')

ready(function(){
  setAce()
  document.getElementById('submit-code-button').onclick = () => { getCode() }

})
    

const getCode = () => {
  let content = editor.getValue()
  console.log(content)
  
  try {
    let evaluateFunction = new Function(content)
    document.getElementById('mathjs-results').innerHTML = evaluateFunction()
  }
  catch (e) {
    console.log('there seems to be an error')
    console.log(e)
    document.getElementById('mathjs-results').innerHTML = parseError(e)
    throw e
  }
  
}

const setAce = () => {
  editor.setTheme("ace/theme/sqlserver")
  var JavaScriptMode = ace.require("ace/mode/javascript").Mode
  editor.session.setMode(new JavaScriptMode())
}

const parseError = (err) => {

  return "Oops : " + err.toString().match(/:[^)]*/g)[0].substr(1);
}





//Thanks to http://youmightnotneedjquery.com/#ready
function ready(fn) {
  if (document.readyState != 'loading') {
    fn();
  } else if (document.addEventListener) {
    document.addEventListener('DOMContentLoaded', fn);
  } else {
    document.attachEvent('onreadystatechange', function() {
      if (document.readyState != 'loading')
        fn();
    });
  }
}