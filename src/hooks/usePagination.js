import {useEffect,useState} from 'react'

function usePagination({data,dataPerPage,currentPage}) {

    const [indexOfLastPost, setIndexOfLastPost] = useState(0)
    const [indexOfFirstPost, setIndexOfFirstPost] = useState(0)
    const [currentItems, setCurrentItems] = useState([])
    const [pagesNumber, setPagesNumber] = useState(0)
 
    useEffect(()=>{
        const indexOfLastPostTemp = currentPage * dataPerPage;
        const indexOfFirstPostTemp = indexOfLastPostTemp - dataPerPage;
        const currentCarsTemp = data.slice(indexOfFirstPostTemp, indexOfLastPostTemp);
        const pagesNumberTemp = Math.ceil(data.length / dataPerPage);
        
        setIndexOfLastPost(indexOfLastPostTemp)
        setIndexOfLastPost(indexOfLastPostTemp)
        setIndexOfFirstPost(indexOfFirstPostTemp)
        setIndexOfFirstPost(indexOfFirstPostTemp)
        setCurrentItems(currentCarsTemp)
        setPagesNumber(pagesNumberTemp)
    },[data,dataPerPage,currentPage])

    return {
        indexOfLastPost,
        indexOfFirstPost,
        currentItems,
        pagesNumber
    }


}

export default usePagination