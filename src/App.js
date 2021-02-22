import React, {Fragment} from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import 'normalize.css';

//importando todos los componentes
import Nosotros from './components/nosotros/nosotros';
import Header from './components/header/header';
import NuestrasExperiencias from './components/nuestrasExperiencias/nuestrasExperiencias';
import Cotizacion from './components/cotizacion/cotizacion'; 
import Contactanos from './components/contactanos/contactanos';
import Footer from './components/Footer/Footer';

function App() {

  	return (
		<Router>
	  		<Switch>
				<Route
					exact path="/"
					component={() => 
						<Fragment>
							<Header
								section="nosotros"
							/>
							<Nosotros />
							<Footer />
						</Fragment>
					}
        		/>
				<Route
					exact path="/nuestrasExperiencias"
					component={ () => 
						<Fragment>
							<Header 
								section="nuestrasExperiencias"
							/>
							<NuestrasExperiencias />
							<Footer />
						</Fragment>
					}
				/>
				<Route 
					exact path="/cotizacion"
					component={ () =>
						<Fragment>
							<Header 
								section="cotizacion"
							/>
							<Cotizacion />
							<Footer />
						</Fragment>
					}
				/>
				<Route 
					exact path="/contactanos"
					component={ () => 
						<Fragment>
							<Header 
								section="contactanos"
							/>
							<Contactanos />
							<Footer 
								section="contactanos"
							/>
						</Fragment>
					}
				/>
      		</Switch>
    	</Router>
  );
}

export default App;
