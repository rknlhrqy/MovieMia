import React from 'react';
import { connect } from 'react-redux';

const Home = props => (
  <div>
    <h1>What is MovieMia?</h1>
    <p>A web application to search a movie via the movie title.</p>
    <p>It is a single-page application, built with:</p>
    <ul>
      <li><a href='https://get.asp.net/'>ASP.NET Core</a> and <a href='https://msdn.microsoft.com/en-us/library/67ef8sbd.aspx'>C#</a> for cross-platform server-side code</li>
      <li><a href='https://facebook.github.io/react/'>React</a> and <a href='https://redux.js.org/'>Redux</a> for client-side code</li>
      <li><a href='http://getbootstrap.com/'>Bootstrap</a> for layout and styling</li>
    </ul>
    <p>I have also set up:</p>
    <ul>
      <li><strong>Client-side navigation</strong>. For example, click <em>Search</em>.</li>
      <li><strong>Development server integration</strong>. In development mode, the development server from <code>create-react-app</code> runs in the background automatically, so your client-side resources are dynamically built on demand and the page refreshes when you modify any file.</li>
      <li><strong>Efficient production builds</strong>. In production mode, development-time features are disabled, and your <code>dotnet publish</code> configuration produces minified, efficiently bundled JavaScript files.</li>
    </ul>
    <p>The application is built via docker and deployed to <a href='https://www.heroku.com'>Heroku</a> as a container.</p>
  </div>
);

export default connect()(Home);
