import { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";
import Header from "./components/Header";

const App = () => {
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true);
        axios.get("/posts").then((response) => {
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
                            const src = `https://picsum.photos/id/${post.id}/300/200`;
                            return (
                                <div className="col-md-3 col-sm-4 col-6 mb-3">
                                    <div className="card">
                                        <img src={src} alt={post.title}></img>
                                        <h3 className="card-header">{post.title.slice(1, 30)} ...</h3>
                                        <p className="card-body">{post.body.slice(1, 40)} ... </p>
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
