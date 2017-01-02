
'use strict';

const STORAGE_COLLECTION_USER = 'user';
module.exports = class UserModel{



    constructor(){};




    addUser(userObject){
        this.storage.insertEntry(
            STORAGE_COLLECTION_USER,
            userObject.getProps()
        );
    }




    getUser(userObject){
        if(!(userObject instanceof User)){
            throw new Error('Passed parameter must be a User instance');
        }
        let storageItem = this.storage.selectEntry(
            STORAGE_COLLECTION_USER,
            userObject.email
        );
        if(null !== storageItem){
            userObject.setProps(storageItem);
        }

        return userObject;
    }


    getUserByFbId(Fbid){
        var userObject = new User();
        userObject.email = email;
        return this.getUser(userObject);
    }



    updateUser(userObject){
        this.storage.updateEntry(
            STORAGE_COLLECTION_USER,
            userObject.fbId,
            userObject.getProps()
        );
    }

    getAllUsers(){
        console.log( this.storage.selectAllEntries(STORAGE_COLLECTION_USER));
    }




    set storage(storageObj){
        // if(!(storageObj instanceof Storage)){
        //     throw new Error('Storage must be an instance (or subclass) of Storage class');
        // }
        this._storage = storageObj;
    }

    get storage(){
        return this._storage;
    }
};
