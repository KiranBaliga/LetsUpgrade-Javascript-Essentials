<html>
   <head>
      <title>JavaScript Dates</title>
   </head>
   <body>
      <script>
         function myTime(time) {
            var hr = ~~(time / 3600);
            var min = ~~((time % 3600) / 60);
            var sec = time % 60;
            var sec_min = "";
            if (hr > 0) {
               sec_min += "" + hrs + ":" + (min < 10 ? "0" : "");
            }
            sec_min += "" + min + ":" + (sec < 10 ? "0" : "");
            sec_min += "" + sec;
            return sec_min+ " min";
         }
         document.write(myTime(150));
      </script>
   </body>
</html>
