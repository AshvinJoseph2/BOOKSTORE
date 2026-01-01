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

// home books: /home/books - called by home component when page loads
export const getHomePageBooksAPI = async ()=>{
    return await commonAPI("GET",`${serverURl}/home/books`,{})
}

// all-books : get request by books component when page loaded
export const getAllBooksPageAPI = async (reqHeader,searchKey)=>{
    return await commonAPI("GET",`${serverURl}/all-books?search=${searchKey}`,{},reqHeader)
}

// user-books : get request by bookstatus  when it loads
export const getAllUserProfileBooksAPI = async (reqHeader)=>{
    return await commonAPI("GET",`${serverURl}/user-books`,{},reqHeader)
}

// user-books/bought : get request by purchase component when it loads
export const getAllUserBoughtBooksAPI = async (reqHeader)=>{
    return await commonAPI("GET",`${serverURl}/user-books/bought`,{},reqHeader)
}

// /user/:id/edit - put request by edit component when update btn is clicked
export const editUserAPI = async (id,reqBody,reqHeader)=>{
    return await commonAPI("PUT",`${serverURl}/user/${id}/edit`,reqBody,reqHeader)
}

// /books/:id/view - get request by view component when page load
export const viewBookAPI = async (id,reqHeader)=>{
    return await commonAPI("GET",`${serverURl}/books/${id}/view`,{},reqHeader)
}

// books/all :GET request by Admin collection when it loads
export const getAllAdminBooksAPI = async (reqHeader)=>{
    return await commonAPI("GET",`${serverURl}/books/all`,{},reqHeader)
}
// users/all :GET request by Admin collection when it loads
export const getAllUsersAPI = async (reqHeader)=>{
    return await commonAPI("GET",`${serverURl}/users/all`,{},reqHeader)
}

// /books/:id/update :PUT request by Admin collection when approved btn clicked
export const updateBookStatusAPI = async (id,reqHeader)=>{
    return await commonAPI("PUT",`${serverURl}/books/${id}/update`,{},reqHeader)
}

// /books/:id DELETE request by BookStatus when delete btn clicked
export const removeBookAPI = async (id,reqHeader)=>{
    return await commonAPI("DELETE",`${serverURl}/books/${id}`,{},reqHeader)
}

// /books/:id/buy :PUT  request by View when buy btn clicked
export const bookPaymentAPI = async (id,reqHeader)=>{
    return await commonAPI("PUT",`${serverURl}/books/${id}/buy`,{},reqHeader)
}

