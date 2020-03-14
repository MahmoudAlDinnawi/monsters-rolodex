import React from 'react';
import './searchbox.style.css'

export const SearchBox=(({placeholder,handelchange}) =>
<input className='search' 
type='search' placeholder={placeholder} 
onChange={handelchange}/>
)