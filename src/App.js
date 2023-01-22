import { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";
import Header from "./components/Header";

const App = () => {
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true);
        axios.get("https://jsonplaceholder.typicode.com/posts").then((response) => {
            setPosts(response.data);
        });
        setLoading(false);
    }, []);

    return (
        <div className="App">
            <Header />
            <div className="container">
                {loading ? (
                    <h1>Loading ....</h1>
                ) : (
                    <div className="row">
                        {posts.map((post) => {
                            const src = `https://picsum.photos/id/${post.id}/200/300`;
                            return (
                                <div className="col-md-3">
                                    <div className="card">
                                        <img src={src} alt={post.title}></img>
                                        <h3 className="card-header">{post.title}</h3>
                                        <p className="card-body">{post.body}</p>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                )}
            </div>
        </div>
    );
};

export default App;
