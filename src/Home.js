import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import SearchContainer from './containers/SearchContainer';
import DetailsContainer from './containers/DetailsContainer'


class Home extends Component {
  render() {
    return (
      <div>
        <header>
          <NavBar />
        </header>

        <main>
          <section className="jumbotron text-center">
            <div className="container">
              <h1 className="jumbotron-heading">Giphy Search</h1>
              <p className="lead text-muted">The true source for all things giphy...</p>
            </div>
          </section>

          <section className="container">
            <Switch>
              <Route path="/giphy/:giphyId" component={DetailsContainer} />
              <Route path="/" exact component={SearchContainer} />
            </Switch>
          </section>
        </main>

        <Footer />

      </div>
    );
  }
}

export default Home;
