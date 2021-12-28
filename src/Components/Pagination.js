import React from 'react';

const Pagination = ({postsPerPage,totalPosts,paginate}) => {
    console.log(postsPerPage,totalPosts)
    const pageNumber = [];
    for(let i=1;i<=Math.ceil(totalPosts/postsPerPage);i++){
        pageNumber.push(i);
    }
    return (
        <nav className='pagination'>
            {pageNumber.map(number=>(<li className='page-item' key={number}>
                {/* //this !# is a clickable event * */}
                <a onClick={()=>paginate(number)} className='page-link' href="!#">{number}</a>
            </li>))}
        </nav>
    );
};

export default Pagination;