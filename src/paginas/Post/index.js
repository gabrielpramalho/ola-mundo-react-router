import { useParams } from "react-router-dom"
import posts from 'json/posts.json'
import PostModelo from "componentes/PostModelo";
import ReactMarkdown from 'react-markdown'
import './Post.css'

export default function Post(){

    const param = useParams();

    const post = posts.find((post) => {
        return post.id === Number(param.id)
    })



    return (
        <PostModelo
            fotoCapa={`/assets/posts/${post.id}/capa.png`}
            titulo={post.titulo}
        >
        <div className="post-markdown-container">
            <ReactMarkdown>
                {post.texto}
            </ReactMarkdown>
        </div>
        

        </PostModelo>
    )
}