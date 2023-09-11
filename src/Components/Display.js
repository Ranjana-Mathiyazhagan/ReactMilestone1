import React, { useEffect, useState } from "react";
import { CSVLink } from "react-csv";
import { useParams } from "react-router-dom";
export function Pagedetail() {

    const [data, setData] = useState([])
    var { id } = useParams()
    useEffect(() => {
        fetch("https://fakestoreapi.com/products/" + id)
            .then(value => value.json())
            .then(datavalue => setData(datavalue))
    })

    const csvdata = [data];
    return (
        <>
            <h1>
                Product List
            </h1>
            <div className="row">
                <div className=" col-lg-6">

                    <img src={data.image} className="card-img-top  dis-img" />
                </div>
                <div className="col-lg-6  bg-secondary mt-5">
                    <h3 className="card-title">{data.category}</h3>
                    <p className="card-content">{data.id}</p>
                    <p className="card-content">{data.title}</p>
                    <p className="card-content fs-3">{data.price}</p>
                    <p className="card-content mt-5">{data.description}</p>
                    <CSVLink data={csvdata}><button className="btn border border-dark mt-2">Download</button></CSVLink>
                </div>
            </div>
        </>
    )






}
