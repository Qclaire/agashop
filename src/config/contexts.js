import React from 'react';

import { compose } from 'recompose';

const firebaseContext = React.createContext(null);
const authUserContext = React.createContext(null);

const withFirebaseDB = Component => props => (
  <firebaseContext.Consumer>
    {firebase => <Component {...props} firebase={firebase} />}
  </firebaseContext.Consumer>
);

const withFirebaseAuth =  Component =>props =>(
	<authUserContext.Consumer>
		{authUser => <Component {...props} authUser={authUser} />}
	</authUserContext.Consumer>
)

const withFirebase = Component => compose(withFirebaseDB, withFirebaseAuth)(Component);

export {firebaseContext, authUserContext, withFirebase,}