import React, { useEffect, useState } from 'react'
import { getAllUserBoughtBooksAPI } from '../../services/allAPI';

function Purchase() {

    const [purchasedBooks, setPurchasedBooks] = useState([])
    console.log(purchasedBooks);

    useEffect(() => {
        getAllPurchasedBooks()
    }, [])

    const getAllPurchasedBooks = async () => {
        const token = sessionStorage.getItem("token")
        if (token) {
            const reqHeader = {
                "Authorization": `Bearer ${token}`
            }
            const result = await getAllUserBoughtBooksAPI(reqHeader)
            if (result.status == 200) {
                setPurchasedBooks(result.data)
            } else {
                console.log(result);

            }
        }
    }


    return (
        <div className='p-10 my-20 shadow rounded'>
            {/* duplicate book with status updation */}
            {
                purchasedBooks?.length > 0 ?
                    purchasedBooks?.map(books => (
                        <div key={books?._id} className="p-5 rounded mt-4 bg-gray-100">
                            <div className="md:grid grid-cols-[3fr_1fr]">
                                <div className="px-4">
                                    <h1 className="text-2xl">{books?.title}</h1>
                                    <h2 className='text-xl'>{books?.author}</h2>
                                    <h3 className="text-lg text-blue-600">$ {books?.discountprice}</h3>
                                    <p className="text-justify">{books?.abstract}</p>
                                    <div className="mt-3 flex">
                                        <img width={'150px'} src="https://static.vecteezy.com/system/resources/previews/023/629/827/original/web-button-icon-purchase-button-free-png.png" alt="pending" />
                                    </div>
                                </div>
                                <div className="px-4 mt-4 md:mt-0">
                                    <img className='w-full' src={books?.imageURL} alt="Book" />
                                    <div className="mt-4 flex justify-end">
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))
                    :
                    <p className="text-center my-5 font-bold">No Books Purchased Yet....</p>
            }
        </div>

    )
}

export default Purchase