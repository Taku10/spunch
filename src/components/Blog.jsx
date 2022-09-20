import '../styles/blog.css'
import React from 'react'
import camera_man from '../images/article-1.jpg'
import lions from '../images/article-2.jpg'
import cafe from '../images/article-3.jpg'

const Blog = () => {
    return (
        <div className='blog-container'>
            <div className='blog-header'>
                <h1 className='main-heading'>LATEST NEWS</h1>
                <p className='sub-heading'>Check out our latest news and activities</p>
                <hr className='purple-line' />
            </div>
            <div className='blog-wrapper'>
                <div className='news news-1'>
                    <img src={camera_man} alt={camera_man} />
                    <div className='article-details'>
                        <h3>Tempor incidunt labore dolor</h3>
                        <p className='article-date'>September 20, 2022</p>
                        <p className='article-text'>
                            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                        </p>
                        <div className='read-more'>
                            <p>READ MORE</p>
                            <i className="fa-solid fa-arrow-right-long"></i>
                        </div>
                    </div>
                </div>
                <div className='news news-2'>
                    <img src={lions} alt={lions} />
                    <div className='article-details'>
                        <h3>Eiusmod tempor labore aliqua</h3>
                        <p className='article-date'>September 20, 2022</p>
                        <p className='article-text'>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        </p>
                        <div className='read-more'>
                            <p>READ MORE</p>
                            <i className="fa-solid fa-arrow-right-long"></i>
                        </div>
                    </div>
                </div>
                <div className='news news-3'>
                    <img src={cafe} alt={cafe} />
                    <div className='news-details'>
                        <h3>Conseqntur distinctio ipsum</h3>
                        <p className='news-date'>September 20, 2022</p>
                        <p className='news-text'>
                            Aenean commodo ligula eget dolor sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.
                        </p>
                        <div className='read-more'>
                            <p>READ MORE</p>
                            <i className="fa-solid fa-arrow-right-long"></i>
                        </div>
                    </div>
                </div>
            </div>
            <button className='blog-button'>READ OUR BLOG</button>
        </div>
    )
}

export default Blog
