import { Route, Routes, useParams } from "react-router-dom"
import posts from 'json/posts.json'
import PostModelo from "componentes/PostModelo";
import ReactMarkdown from 'react-markdown'
import './Post.css'
import NaoEncontrada from "paginas/NaoEncontrada";
import PaginaPadrao from "componentes/PaginaPadrao";

export default function Post(){

    const param = useParams();

    const post = posts.find((post) => {
        return post.id === Number(param.id)
    })

    if (!post){
        return (
            <NaoEncontrada />
        )    
    }


    return (
        <Routes>
            <Route path="*" element={<PaginaPadrao />}>
                <Route index element={
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
                } />
            </Route>
        </Routes>

    )
}