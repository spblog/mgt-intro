import * as React from 'react';
import styles from './HelloWorld.module.scss';
import { IHelloWorldProps } from './IHelloWorldProps';
import { escape } from '@microsoft/sp-lodash-subset';

declare global {
  /* eslint-disable-next-line */
  namespace JSX {
    interface IntrinsicElements {
      'mgt-tasks': any;
    }
  }
}

export default class HelloWorld extends React.Component<IHelloWorldProps, {}> {
  public render(): React.ReactElement<IHelloWorldProps> {
    return (
      <div className={ styles.helloWorld }>
        <mgt-tasks data-source="todo"></mgt-tasks>
      </div>
    );
  }
}
