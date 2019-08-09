import React, { useEffect, useRef }  from 'react'
import Explore from './Explore'
//import MapSection from '../../components/sections/MapSection'
import { ExploreDataLink } from '../../layouts/icon-links/ExploreDataLink'



const Revenue = (props) => {

    return (
	<Explore
	  title="revenue"
	  contentLeft={
		  <>
			<ExploreDataLink to="https://revenuedata.doi.gov/explore/#revenue"
					     >Explore revenue trends
			    </ExploreDataLink>
			    <ExploreDataLink
				  to="https://revenuedata.doi.gov/explore/#revenue"
				  
				  >Filter revenue data
				</ExploreDataLink>
				<ExploreDataLink
				      to="https://revenuedata.doi.gov/explore/#revenue"
				      
				      >Explore revenue by data
				    </ExploreDataLink>
		      </>
		  }
		  contentCenter={
			  <ExploreDataLink
				to="https://revenuedata.doi.gov/explore/#revenue"
				>Understand how revenue works
			      </ExploreDataLink>
			  }
			  
			  contentRight={
				  <ExploreDataLink
					to="https://revenuedata.doi.gov/explore/#revenue"
					>Download files and review scope
				      </ExploreDataLink>
				  }
				  />
	
    )
    
}

export default Revenue


