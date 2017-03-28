import React, { PropTypes } from 'react'

class About extends React.Component {
  render () {
    return(
      <div className="about text-center">
        <img className="bomb" src="https://68.media.tumblr.com/024cf54439d1a61124ce6ab1436174c2/tumblr_omb3fcuptx1qh8q8mo1_400.png" alt="logo"/>
        <h1>
          Review me
        </h1>
        <h3>The place to get the best feedback on your projects</h3>
        <br></br>
        
          {/*Para los títulos podrían utilizar otra Google Font como Lato, Montserrat o Nunito */}
          {/*Este párrafo nadie lo va a leeer porque está muy largo. Pónganlo en bullets o una imagen o palabras resaltadas,
          o algo que llame la atención*/}
          <h4>Review-me is a great tool for developers who wish to receive feedback on their open source projects.</h4>
        <p>You may <strong>rate</strong>, <strong>review</strong> and <strong>discover</strong> cool projects by using
          different filters. Help other users and collaborate with them!</p>
          <ol>
            <li>Sign up with your Github account</li>
            <li>Add your repo and include:</li>
              <ul>
                <li>A description to get people excited</li>
                <li>The profile of your project's ideal contributor</li>
              </ul>
            <li>Receive constructive feedback and improve your work!</li>
        </ol>
      <br></br>


      </div>
    )
  }
}

export default About;
