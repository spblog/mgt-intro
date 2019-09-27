import React from 'react';
import './App.css';
import '@microsoft/mgt';

declare global {
  /* eslint-disable-next-line */
  namespace JSX {
    interface IntrinsicElements {
      'mgt-login': any;
      'mgt-person': any;
      'mgt-msal-provider': any;
      'mgt-tasks': any
    }
  }
}

interface IState {
  loggedIn: boolean;
}

export default class App extends React.Component<{}, IState> {
  constructor(props: any) {
    super(props);

    this.state = {
      loggedIn: false
    }
  }

  public render(): React.ReactElement<{}> {
    return (
      <div className="App">
        <mgt-msal-provider client-id="d3c013d2-eeb6-45f5-ba63-4fd499489b06"></mgt-msal-provider>
        <div className="data">
            <mgt-login ref="loginComponent"></mgt-login>
            <mgt-tasks data-source="todo"></mgt-tasks>
          </div>
      </div>
    )
  }

  public componentDidMount() {
    (this.refs.loginComponent as HTMLElement).addEventListener('loginCompleted', e => {
      this.setState({
        loggedIn: true
      })
    });
  }
}
