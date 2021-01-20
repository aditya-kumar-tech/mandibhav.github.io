<!-- include html-->
  &lt;script type=&quot;text/javascript&quot;&gt;
function includeHTML() {
  var z, i, elmnt, file, xhttp;
  /*loop through a collection of all HTML elements:*/
  z = document.getElementsByTagName(&quot;*&quot;);
tl=z.length;
  for (i = 0; i&lt;z.length; i++){
    elmnt = z[i];
    /*search for elements with a certain atrribute:*/
    file = elmnt.getAttribute(&quot;w3-include-html&quot;);
    if (file) {
      /*make an HTTP request using the attribute value as the file name:*/
      xhttp = new XMLHttpRequest();
      xhttp.onreadystatechange = function() {
        if (this.readyState == 4) {
          if (this.status == 200) {elmnt.innerHTML = this.responseText;}
          if (this.status == 404) {elmnt.innerHTML = &quot;&quot;;}
          /*remove the attribute, and call this function once more:*/
          elmnt.removeAttribute(&quot;w3-include-html&quot;);
          includeHTML();
        }
      }      
      xhttp.open(&quot;GET&quot;, file, true);
      xhttp.send();
      /*exit the function:*/
      return;
    }
  }
};
&lt;/script&gt;
