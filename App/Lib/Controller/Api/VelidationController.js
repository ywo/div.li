/**
 * controller
 * @return
 */
module.exports = Controller("Home/BaseController", function(){
  "use strict";
  let EMAIL_REG = /^(\w)+(\.\w+)*@(\w)+((\.\w+)+)$/
  return {
    emailAction: function(){
    	let email = this.get('email');
    	if(EMAIL_REG.test(email)) {
    		this.json({
    			errcode: 0,
    			msg : 'success'
    		});
    	} else {
    		this.json({
    			errcode: 1,
    			msg : 'fail'
    		});
    	}

    }
  };
});