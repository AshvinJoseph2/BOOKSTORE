// register

import commonAPI from "./commonAPI"
import serverURl from "./serverURL"

// register api - called by Auth component,when register btn clicked
export const registerAPI = async (reqBody)=>{
    return await commonAPI("POST",`${serverURl}/register`,reqBody)
}


// login api - called by Auth component,when login btn clicked
export const loginAPI = async (reqBody)=>{
    return await commonAPI("POST",`${serverURl}/login`,reqBody)
}
// google login api:  called by Auth component,when google login btn clicked
export const googleLoginAPI = async (reqBody)=>{
    return await commonAPI("POST",`${serverURl}/google-login`,reqBody)
}

// user /add / book : add book api  - called by sellBook ,when add book btn click
export const addBookAPI = async (reqBody,reqHeader)=>{
    return await commonAPI("POST",`${serverURl}/user/add/book`,reqBody,reqHeader)
}
