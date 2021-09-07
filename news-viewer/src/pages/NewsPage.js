import React from 'react';
import Categories from '../components/Categories';
import NewsList from '../components/NewsList';

const NewsPage = ({match}) => {
    const category = match.params.category || 'all';
    //카테고리가 선택되지 안ㄹ았으면 전체로 선택됨.

    return (
        <>
        <Categories />
        <NewsList category={category}/>
        </>
    );
}

export default NewsPage;