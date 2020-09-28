import React, { useEffect, useState } from 'react';
import { fetchMovieDetail, fetchMovieVideos, fetchSimiliarMovie, fetchCasts } from '../../service';
import 'react-bootstrap-carousel/dist/react-bootstrap-carousel.css'
import { Modal } from 'react-bootstrap';
import ReactPlayer from 'react-player';
import ReactStars from "react-rating-stars-component"
import { Link } from 'react-router-dom';
export function MovieDetail({ match }) {
    let params = match.params;
    let genres = [];

    const [isOpen, setIsOpen] = useState(false);
    const [detail, setDetail] = useState([]);
    const [video, setVideo] = useState([]);
    const [casts, setCasts] = useState([]);
    const [similiarMovie, setSimiliarMovie] = useState([]);

    useEffect(() => {
        const fetchAPI = async () => {
            setDetail(await fetchMovieDetail(params.id));
            setVideo(await fetchMovieVideos(params.id));
            setCasts(await fetchCasts(params.id));
            setSimiliarMovie(await fetchSimiliarMovie(params.id));
        };
        fetchAPI();
    }, [params.id])

    genres = detail.genres;

    var MoviePlayerModal = (props) => {
        const youtubeUrl = 'https://www.youtube.com/watch?v=';
        console.log('KEYGUE', video.key)
        return (

            <Modal

                {...props}
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered
            >

                <Modal.Header closeButton>
                    <Modal.Title
                        id="contained-modal-title-vcenter"
                        style={{ color: '#000000', fontWeight: 'bolder' }}
                    >
                        {detail.title}
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body style={{ backgroundColor: '#000000' }}>
                    <ReactPlayer
                        className="container-fluid"
                        url={youtubeUrl + video.key}
                        // playing
                        width="100%"
                    >
                    </ReactPlayer>
                </Modal.Body>
            </Modal>
        );
    };
    let genresList;
    if (genres) {
        genresList = genres.map((g, i) => {
            return (
                <li className="list-inline-item">
                    <button type="button" className="btn btn-outline-info">
                        {g.name}
                    </button>
                </li>
            )
        })
    }
    const castList = casts.slice(0, 4).map((c, i) => {
        return (
            <div className="col-md-3 text-center" key={i}>
                <img
                    className="img-fluid rounded-circle mx-auto d-block"
                    src={c.img}
                    alt={c.name}>

                </img>
                <p className="front-weight-light text-center">{c.name}</p>
                <p
                    className="font-weight-light text-center"
                    style={{ color: "#5a606b" }}
                >
                    {c.character}
                </p>
            </div>
        )
    })

    const similiarMovieList = similiarMovie.slice(0, 4).map((item, index) => {
        return (
            <div className="col-md-3 col-sm-4" key={index}>
                <div className="card">
                    <Link to={"/movie/" + item.id}>
                        <img className="img-fluid" src={item.poster} alt={item.title}></img>

                    </Link>
                </div>
                <div className="mt-3">
                    <p style={{ fontWeight: 'bolder', marginBottom: 5 }}>{item.title}</p>
                    <p style={{ fontWeight: 'bolder', marginBottom: 1 }}>Rated: {item.rating}</p>
                    <ReactStars count={item.rating} size={20} color={'#f4c10f'}></ReactStars>
                </div>
            </div>
        )
    })
    return (
        <div className="container">
            <div className="row mt-2">
                <MoviePlayerModal
                    show={isOpen}
                    onHide={() => {
                        setIsOpen(false);
                    }}
                ></MoviePlayerModal>
                <div className="col text-center" style={{ width: '100%' }}>
                    <img
                        className="img-fluid"
                        src={'http://image.tmdb.org/t/p/original/' + detail.backdrop_path}
                        alt={detail.title}>
                    </img>
                    <div className="carousel-center">
                        <i
                            onClick={() => setIsOpen(true)}
                            className="far fa-play-circle"
                            style={{ fontSize: 95, color: '#f4c10f', cursor: "pointer" }}
                        ></i>
                    </div>
                    <div
                        className="carousel-caption"
                        style={{ textAlign: 'center', fontSize: 40 }}
                    >
                        {detail.title}
                    </div>
                </div>
            </div>
            <div className="row mt-3">
                <div
                    className="col">
                    <p style={{ color: '#5a606b', fontWeight: 'bolder' }}>
                        GENRE
                        </p>
                </div>
            </div>
            <div className="row mt-3">
                <div
                    className="col">
                    <ul className="list-inline">
                        {genres && genresList}
                    </ul>
                </div>
            </div>
            <div className="row mt-3">
                <div className="col">
                    <div className="text-center">
                        <ReactStars
                            count={detail.vote_average}
                            size={20}
                            color={"#f4c10f"}
                        ></ReactStars>
                    </div>
                </div>
            </div>
            <div className="mt-3">
                <p style={{ color: '#5a606b', fontWeight: 'bolder' }}>OVERVIEW</p>
                {detail.overview}
            </div>
            <div className="row mt-3">
                <div className="col mt-3">
                    <p style={{ color: '#5a606b', fontWeight: 'bolder' }}>RELEASE DATE</p>
                    <p style={{ color: '#f4c10f' }}>{detail.release_date}</p>
                </div>
                <div className="col mt-3">
                    <p style={{ color: '#5a606b', fontWeight: 'bolder' }}>RUN TIME</p>
                    <p style={{ color: '#f4c10f' }}>{detail.runtime}</p>
                </div>
                <div className="col mt-3">
                    <p style={{ color: '#5a606b', fontWeight: 'bolder' }}>BUDGET</p>
                    <p style={{ color: '#f4c10f' }}>{detail.budget}</p>
                </div>
                <div className="col mt-3">
                    <p style={{ color: '#5a606b', fontWeight: 'bolder' }}>HOMEPAGE</p>
                    <p style={{ color: '#f4c10f' }}>{detail.homepage}</p>
                </div>
            </div>
            <div className="row mt-3">
                <div
                    className="col">
                    <p style={{ color: '#5a606b', fontWeight: 'bolder' }}>CASTS</p>
                </div>
            </div>
            <div className="row mt-3">{castList}</div>
            <div className="row mt-3">
                <div className="col">
                    <p style={{ color: '#5a606b', fontWeight: 'bolder' }}>SIMILIAR MOVIES</p>
                </div>
            </div>
            <div className="row mt-3">{similiarMovieList}</div>
            <hr className="mt-5" style={{ borderTop: "1px solid #5a606b" }}></hr>
            <div className="row mt-3">
                <di className="col-md-8 col-sm-6" style={{ color: '#5a606b' }}>
                    <h3>
                        ABOUT ME
                    </h3>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis, animi. Tenetur consectetur ullam voluptates nam temporibus porro, illo maxime omnis corporis quae dolorum pariatur facilis nemo quisquam vitae, officiis reiciendis!
                    </p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus in asperiores ut accusantium ipsum doloribus laboriosam, consequatur ipsam voluptatum quibusdam iure, officiis quaerat, veritatis vitae dolores dignissimos! A, ab ipsam.</p>
                    <div className="row mt-3">
                        <ul className="list-inline">
                            <li className="list-inline-item">
                                <a href="/" style={{ color: '#f4c10f' }}>
                                    <i className="fab fa-facebook"> @kevinhermawan009</i>
                                </a>
                            </li>
                        </ul>
                        <ul className="list-inline">
                            <li className="list-inline-item">
                                <a href="/" style={{ color: '#f4c10f', marginLeft: 10 }}>
                                    <i className="fab fa-youtube"> @kevinhermawan009</i>
                                </a>
                            </li>
                        </ul>
                        <ul className="list-inline">
                            <li className="list-inline-item">
                                <a href="/" style={{ color: '#f4c10f', marginLeft: 10 }}>
                                    <i className="fab fa-instagram"> @kevinhermawan009</i>
                                </a>
                            </li>
                        </ul>
                        <ul className="list-inline">
                            <li className="list-inline-item">
                                <a href="/" style={{ color: '#f4c10f', marginLeft: 10 }}>
                                    <i className="fab fa-twitter"> @KevinHGuwo1</i>
                                </a>
                            </li>
                        </ul>
                        <ul className="list-inline">
                            <li className="list-inline-item">
                                <a href="/" style={{ color: '#f4c10f', marginLeft: 10 }}>
                                    <i className="fab fa-line"> @kevinhermawan009</i>
                                </a>
                            </li>
                        </ul>
                    </div>
                </di>
                <div className="col-md-4 col-sm-6" style={{ color: "#5a606b" }}>
                    <h3>KEEP IN TOUCH</h3>
                    <ul className="list-unstyled">
                        <li>
                            <p>
                                <strong>
                                    <i className="fas fa-map-marker-alt">   </i>
                                    <a style={{ marginLeft: 5 }}>
                                        Address: Banteng, Tangerang, Indonesia
                                        </a>
                                </strong>
                            </p>
                        </li>
                    </ul>
                    <ul className="list-unstyled">
                        <li>
                            <p>
                                <strong>
                                    <i className="fas fa-envelope">   </i>
                                    <a style={{ marginLeft: 5 }}>
                                        Email: reactjugger@gmail.com
                                        </a>

                                </strong>
                            </p>
                        </li>
                    </ul>
                    <ul className="list-unstyled">
                        <li>
                            <p>
                                <strong>
                                    <i className="fas fa-phone"></i>
                                    <a style={{ marginLeft: 5 }}>
                                        Phone: (+62)81318947729
                                        </a>
                                </strong>
                            </p>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}