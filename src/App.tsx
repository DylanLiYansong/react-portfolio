import React from "react";
import "./App.css";
import Header from "./components/Header";
import About from "./components/About";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Footer from "./components/Footer";

export interface appState {
  pageStatus: boolean;
}

interface appProps {}

class App extends React.Component<appProps, appState> {
  constructor(props: any) {
    super(props);
    this.state = {
      pageStatus: false,
    };
    this.pageStatusHandler = this.pageStatusHandler.bind(this);
  }

  pageStatusHandler = (checked: boolean) => {
    this.setState({
      pageStatus: checked,
    });
  };

  render() {
    return (
      <div className="App">
        <Header
          onChangeFunction={this.pageStatusHandler}
          pageStatus={this.state.pageStatus}
        />
        <About pageStatus={this.state.pageStatus} />
        <Projects pageStatus={this.state.pageStatus} />
        <Skills pageStatus={this.state.pageStatus} />
        <Footer />
      </div>
    );
  }
}

export default App;
