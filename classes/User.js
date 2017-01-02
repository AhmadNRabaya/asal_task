
'use strict';


module.exports = (function () {


    var props = new WeakMap();
    class User{
        constructor(){
            props.set(this,{
             name: null,
             email: null,
             mobile: null,
             fbId: null,
             accessToken:null
            });
        }
        /* Setter Methods*/
        set name(value){
            let propsObj = props.get(this);
            propsObj.name = value;
            props.set(this,propsObj);
            return this;
        }
        set mobile(value){
            let propsObj = props.get(this);
            propsObj.mobile = value;
            props.set(this,propsObj);
            return this;
        }
        set email(value){
            let propsObj = props.get(this);
            propsObj.email = value.toLowerCase();
            props.set(this,propsObj);
            return this;
        }
        set fbId(value){
            let propsObj = props.get(this);
            propsObj.fbId = value;
            props.set(this,propsObj);
            return this;
        }
        set accessToken(value){
            let propsObj = props.get(this);
            propsObj.accessToken = value;
            props.set(this,propsObj);
            return this;
        }

        setProps(dataObject){
            if(typeof dataObject != 'object'){
                throw new Error('Passed parameter must be a type of object');
            }
            let propsObj = props.get(this);
            for(let propName in propsObj){
                if(dataObject.hasOwnProperty(propName)){
                    this[propName] = dataObject[propName];
                }
            }
            return this;
        }


        /* Getter Methods*/
        get name(){
            let propsObj = props.get(this);
            return propsObj.name;
        }
        get mobile(){
            let propsObj = props.get(this);
            return propsObj.mobile;
        }
        get email(){
            let propsObj = props.get(this);
            return propsObj.email;
        }
        get fbId(){
            let propsObj = props.get(this);
            return propsObj.fbId;
        }
        get accessToken(){
            let propsObj = props.get(this);
            return propsObj.accessToken;
        }

        getProps(){
            return props.get(this);
        }

    }
    return User;
})();
