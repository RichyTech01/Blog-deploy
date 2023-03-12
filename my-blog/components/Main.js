import Link from "next/link"
import { useState, useEffect} from "react"
import styles from '@/styles/Home.module.css'


const Main = () => {
    const [posts, setPosts] = useState([])

useEffect(() => {
    const postLists = async () => {
        const response = await fetch('/api/posts')
        const data = await response.json()
        setPosts(data)
    }
    postLists()
})
    return ( 
        <div>
        <h1 className="homepage">All Articles</h1>
        {
            posts.map((post) => {
                return (
                    <div className={styles.content}>
                        <div className={styles.card}>
                    <ul key={post.Id} className={styles.grid}>
                        <li className="post-title">

                        <Link href={`/${post.id}`} className={styles.link}>

                      <h2 className="posts"> {post.title}</h2>
                      </Link>
                      </li>
                      <p>{post.datetime}</p>
                        <p className="post-body">{
                        (post.body).length<= 30 ? post.body : `${(post.body).slice(0, 100)}...`
                        }</p> 
                        
                       
                    </ul>
                    </div>
                     </div>
                    
                )
            })
        }
         </div>
      );
 }

 
 export default Main;