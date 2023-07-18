import React, { useEffect, useState } from 'react'
import { Link, json, redirect, useLoaderData, useParams } from 'react-router-dom'

export default function Details() {
    const {item} = useLoaderData()
    function addItem(e){
        e.preventDefault();
        console.log(e.target[0].name,);
        fetch("http://127.0.0.1:8000/api/shopping-list/active/items/add",{
            method:"post",
            headers: {
                'Content-Type': 'application/json'
            },
            redirect: 'follow',
            body: JSON.stringify({"id" : e.target[0].value})})
            .then((res)=>{
                if(res.ok){
                    redirect("/")
                }
            })
               
        
        
        
    }
    return (
        <div className='py-5 px-7 flex flex-col gap-y-5'>
            <div className='px-4'>
                <Link to={"/"} className='text-orange-primary font-medium'>&larr; back</Link>
            </div>
            <div className='flex justify-center'>
                <img className='w-[300px] h-[220px] rounded-3xl' src={item.image} alt="Image for the product" />
                
            </div>
            <div className='container px-10 flex flex-col gap-y-3'>
                <div>
                    <p className='text-[12px] text-gray-400'>name</p>
                    <h2 className='text-2xl font-bold capitalize'>{item.name}</h2>
                </div>
                
                <div>
                    <p className='text-[12px] text-gray-400'>category</p>
                    <h3 className='text-lg'>{item.category.name}</h3>
                </div>
                <div>
                    <p className='text-[12px] text-gray-400'>note</p>
                    <p className='text-lg text-[18px] font-medium'>{item.note}</p>
                </div>
                <div>
                    <form action="http://127.0.0.1:8000/api/shopping-list/active/items/add" method='post' onSubmit={(e)=>addItem(e)}>
                        <input type="hidden" name="id" value={item.id}/>
                        <Link to={"/"} className="px-4 py-3 rounded-lg font-bold" type="button">Cancel</Link>
                        <button type="submit" className=" bg-orange-primary px-4 py-3 rounded-lg text-white font-bold">Add to the list</button>
                    </form>
                    
                </div>
                
            </div>
        </div>
    )
}
