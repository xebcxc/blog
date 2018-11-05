import React from 'react';
import {BrowserRouter, Route, Switch} from "react-router-dom";
import {Helmet} from "react-helmet";
import Header from "../components/Header";
import Home from "./Home/loadable";
import Relative from "./Relative/loadable";
import Article from "./Article/loadable";
import Achieve from "./Achieves/loadable";
import About from "./About";
import NotFound from "../components/NotFound";
import Footer from "../components/Footer";

class App extends React.PureComponent {


    render() {
        return (
            <div className='app'>
                <BrowserRouter>
                    <div>
                        <Helmet title='梅 森'/>
                        <Header/>
                        <Switch>
                            <Route path='/' exact component={Home} />
                            <Route path='/tag/:tagName' component={Relative}/>
                            <Route path='/article/:articleId' component={Article}/>
                            <Route path='/achieve' component={Achieve}/>
                            <Route path='/about' component={About} />
                            <Route component={NotFound} />
                        </Switch>
                        <Footer/>
                    </div>
                </BrowserRouter>
            </div>
        );
    }
}


export default App;
