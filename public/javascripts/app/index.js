$(() => {


    function getCookie(name) {
        const value = `; ${document.cookie}`;
        const parts = value.split(`; ${name}=`);
        if (parts.length === 2) return parts.pop().split(';').shift();
      }

      var lang = getCookie('ccstvan_langpref');
      if (lang && !document.location.hash){
        history.pushState(null, null, "?lang="+lang);
      } 

    console.log();

})