import {useParams, useOutletContext} from 'react-router'
import {useEffect, useState} from 'react'
import ArticleList from '../components/ArticleList'

function SectionPage (){

    const { articles } = useOutletContext()

    const { sectionName } = useParams()
    const [sectionArticles, setSectionArticles] = useState([])

    useEffect( () => {
        const filteredAtricles = articles.filter(article => article._tags.includes(`${sectionName.toLowerCase()}_hn`))

        setSectionArticles(filteredAtricles)
        
        console.log(filteredAtricles)
    }, [sectionName])
    

    return(
        <div>
        {sectionArticles 
            ? <ArticleList articles={sectionArticles} />
            : 'no articles found'
        
        }
        </div>
    )
}

export default SectionPage