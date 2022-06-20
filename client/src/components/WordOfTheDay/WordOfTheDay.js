import React from 'react'
import { useSelector } from 'react-redux';
import { CircularProgress } from '@material-ui/core'

import "./styles.css"
import Likes from '../Likes/Likes';
import MoreOptions from '../MoreOptions/MoreOptions';

const _theWotd_date = "19th Jun, 2022"

const spacing = <div style={{ margin: "4.5px" }}></div>

//* Chose not to implement <MoreOptions /> for mobile devices because I'm short on time
const WordOfTheDay = () => {
    const posts = useSelector(state => state.posts)
    const post = posts[0]

    return (
        !posts.length ? <CircularProgress /> :
            <section className="wotdContainer">
                <h2>{"Word Of The Day: " + _theWotd_date}</h2>

                <div className="largeDevicesContainer">
                    <div className="largeDevicesInnerContainer">
                        <div className="largeDevicesInnerContainer2">
                            <div className="largeDevicesInnerContainer3">
                                <div className="largeDevicesDescription">
                                    <h1>{post.word}</h1>
                                    <h2>{`(${post.pronunciation}) ${post.partOfSpeech}`}</h2>
                                    <h3>{post.definition}</h3>
                                </div>
                                <div className="largeDevicesOtherInfo">
                                    <div className="largeDevicesOtherInfoInnerContainer">
                                        <Likes leftAlign />
                                        <MoreOptions />
                                    </div>
                                    <h4>art by:&nbsp;&nbsp;&nbsp;&nbsp;<span>{post.artistName}</span></h4>
                                    <h4>post by:&nbsp;&nbsp;&nbsp;&nbsp;<span>{post.artistName}</span></h4>                            </div>
                            </div>
                        </div>

                        <img className="largeDevicesImage" src={post.selectedFile} alt="" />
                    </div>
                </div>

                <div className="smallDevicesContainer">
                    <h2 className="smallDevicesHeading">WORD OF THE DAY<br /><span>{_theWotd_date}</span></h2>
                    <img className="smallDevicesImage" src={post.selectedFile} alt="" />

                    <div className="smallDevicesInnerContainer">
                        <div className="smallDevicesDescription">
                            <h1>{post.word}</h1>
                            <h2>{`(${post.pronunciation}) ${post.partOfSpeech}`}</h2>
                            <div className="thinLine" />
                            <h3>{post.definition}</h3>
                        </div>
                        <div className="smallDevicesOtherInfo">
                            <Likes />
                            {spacing}
                            <h4>art by:&nbsp;&nbsp;&nbsp;&nbsp;<span>{post.artistName}</span></h4>
                            {spacing}
                            <h4>post by:&nbsp;&nbsp;&nbsp;&nbsp;<span>{post.artistName}</span></h4>                    </div>
                    </div>
                </div>
            </section>
    )
}

export default WordOfTheDay