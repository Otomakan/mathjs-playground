console.log('hey it looks like it worked! Happy Hacking!')

ready(function(){
  setAce()
  document.getElementById('submit-code-button').onclick = () => { getCode() }

})
    

const getCode = () => {
  let content = editor.getValue()
  console.log(content)
  let evaluateFunction = new Function(content)
  try {
    document.getElementById('mathjs-results').innerHTML = evaluateFunction()
  }
  catch (e) {
    console.log('there seems to be an error')
    console.log(e)
    throw e
  }
  
}

const setAce = () => {
  editor.setTheme("ace/theme/sqlserver")
  var JavaScriptMode = ace.require("ace/mode/javascript").Mode
  editor.session.setMode(new JavaScriptMode())
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