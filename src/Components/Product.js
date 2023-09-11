import React, { useEffect, useState } from "react";
import { CSVLink } from "react-csv";
import { Link } from "react-router-dom";
import StarRatings from 'react-star-ratings';
export function Webpage() {
    const [store, setStore] = useState([])
    useEffect(() => {
        fetch("https://fakestoreapi.com/products")
            .then(get => get.json())
            .then(put => setStore(put))
    })
    const csvdata = [store];
    const [count, setCount] = useState(1)

    return (
        <>
            <div className="d-flex justify-content-between ">
                <h1>Product List</h1>
                <CSVLink data={csvdata}><button className="btn border mt-2">Download</button></CSVLink>

            </div>
            <div>
                <table className="table  table-striped ">
                    <tr className=" borders mb-5">
                        <th>Id</th>
                        <th>Image</th>
                        <th>Title</th>
                        <th>Description</th>
                        <th>Category</th>
                        <th>Price</th>
                        <th>Count</th>
                        <th className="p-5">Rating</th>
                        <th>Card</th>
                        <th>Buy</th>

                    </tr>
                    {
                        store.map((page, index) => (
                            <>
                                <tr className="p-4">
                                    <td className="p-2" >{page.id}</td>
                                    <td className="p-2"> <img src={page.image} /></td>
                                    <td className="text-primary">{page.title}</td>
                                    <td className="p-2">{page.description}</td>
                                    <td className="p-2">{page.category}</td>
                                    <td className="p-3">${page.price}</td>
                                    <td className="p-3">{page.rating.count}</td>
                                    <td className="text-center">
                                        ({page.rating.rate}) <StarRatings rating={page.rating.rate} starDimension="15px" starSpacing="4px" starRatedColor="gold" numberOfStars={5} />
                                    </td>
                                    <td className="card-list text-center d-flex align-content-center mt-5 ">
                                        <button className="button-size " onClick={() => { setCount(count + 1) }}>+</button>
                                        <p>{count}</p>
                                        <button className="button-size " onClick={() => { setCount(count - 1) }}>-</button>
                                    </td>
                                    <td className="p-3"> <Link to={`/Pagedetail/${page.id}`}><button className="btn btn-primary mb-4 ">View</button></Link>
                                    </td>


                                </tr>
                            </>
                        ))
                    }
                </table>
            </div>
        </>
    )
}