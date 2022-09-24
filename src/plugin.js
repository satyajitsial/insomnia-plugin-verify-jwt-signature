const jwt = require('jsonwebtoken');
var fs = require('fs');
module.exports.requestActions = [
  {
    label: "Verify JWT Signature",
    action: async (ctx, data) => {
      const { request } = data;
      const response = await ctx.network.sendRequest(request);
      console.log("#### Response  " ,response)
      console.log("#### Response Code " ,response.statusCode)
      console.log("#### Response Headers ",response.headers)
      if(response.statusCode == '200' || response.statusCode == '201' ){
      const responseHeaders = response.headers;
      const tokenKey = await ctx.app.prompt('Verify JWT Signature', {
        label: "Token Key in the header",
        cancelable: true,
        submitName: "Next",
        hints: ['Authorization'],
      });
      console.log("#### Token Key ",tokenKey )
        var tokenValue = null ,bearerToken = null
        for(var i=0;i<responseHeaders.length;i++){
           if(tokenKey.toLowerCase() == responseHeaders[i].name.toLowerCase()) {
              bearerToken = responseHeaders[i].value
              break
           }
       }
      if (bearerToken != null) {
        if (bearerToken.startsWith("Bearer ")){
          tokenValue = bearerToken.substring(7, bearerToken.length);
        }
        const promptResult = await ctx.app.prompt('Verify JWT Signature', {
          label: "Public Key File Path",
          cancelable: true
      });
        //const promptResult = await ctx.app.prompt('Public Key File Path : ', { defaultValue: '',cancelable: true });
          fs.readFile(promptResult, 'utf-8', (err, publicKey) => {
            try{
              if (publicKey) {
                var payload = jwt.verify(tokenValue, publicKey)
                ctx.app.alert("Successfully verified JWT Signature","Token Payload :\n"+JSON.stringify(payload))
              } else {
                ctx.app.alert("Verify JWT Signature","Public Key Not Found")
              }
            } catch {
            ctx.app.alert("Verify JWT Signature","JWT Signature verification Failed using Configured Public Key")
            }
          })
       } else {
        ctx.app.alert("Verify JWT Signature","JWT Token not found in Header")
       } 
    } else {
      ctx.app.alert("Verify JWT Signature","Invalid Response Code")
     } 
   }, 
  },
];