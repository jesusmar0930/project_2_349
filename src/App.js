import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

const App = () => {
  return (
    <Router basename="/project_2_349">
      <div className="app">
        <Navigation />
        <main className="main-content">
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/skills" component={Skills} />
            <Route path="/projects" component={Projects} />
            <Route path="/contact" component={Contact} />
          </Switch>
        </main>
        <Footer />
      </div>
    </Router>
  );
};