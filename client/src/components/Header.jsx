import React from 'react'
import { assets } from '../assets/assets.js'
import { useAppContext } from '../context/AppContext.jsx';
import { useRef } from 'react';

const Header = () => {

    const { setInput, input } = useAppContext();
    const inputRef = useRef()

    const onSubmitHandler = async (e) => {
        e.preventDefault();
        setInput(inputRef.current.value)
    }

    const onClear = () => {
        setInput('')
        inputRef.current.value=""
    }

    return (
        <div className="relative mx-8 sm:mx-16 xl:mx-24">
            <div className="text-center mt-20 mb-8">
                <div className="inline-flex items-center justify-center gap-4 px-6 py-1.5 mb-4 border border-primary/40 bg-primary/10 rounded-full text-sm text-primary">
                    <img src={assets.star_icon} alt="star" className="w-2.5"></img>
                    <p>New: AI feature intergrated</p>
                </div>
                <h1 className="text-3xl sm:text-6xl font-semibold sm:leading-16"><span className='text-primary'>Blogging Platform</span>
                    <br /> built using MERN Stack</h1>
                <p className='my:6 sm:my-8 max-w-2xl m-auto max-sm:text-xs'>AI-powered blogging app to create and publish content in <br/> finance, health, technology, and education effortlessly.</p>
                <form onSubmit={onSubmitHandler} className='flex justify-between max-w-lg max-sm:scale-75 mx-auto border border-black-300 bg-white rounded overflow-hidden'>
                    <input ref={inputRef} type="text" placeholder='Search for blogs' required
                        className='w-full pl-4 outline-none' />
                    <button type="submit" className='bg-primary text-white px-8 py-2 m-1.5 rounded hover:scale-105 transition-all cursor-pointer'>Search</button>
                </form>

            </div>

            <div className='text-center'>
                {
                    input && (
                        <button
                            onClick={onClear}
                            className='bg-primary text-white px-5 py-2 m-1 rounded hover:scale-102 transition-all cursor-pointer'>
                            Clear Search
                        </button>
                    )
                }
            </div>
        </div>
    )
}

export default Header
