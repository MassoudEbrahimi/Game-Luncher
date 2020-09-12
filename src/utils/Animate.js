// ./src/components/PageShell.js

import React from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'

const PageShell = Page => {
    return props =>
    <div>
      <ReactCSSTransitionGroup
        transitionAppear={true}
        transitionAppearTimeout={600}
        transitionEnterTimeout={600}
        transitionLeaveTimeout={200}
        transitionName={props.match.path === '/' ? 'SlideIn' : 'SlideOut'}
      >
        <Page {...props} />
      </ReactCSSTransitionGroup>
    </div>;
};

export default PageShell;