import React from 'react'
import Link from '../utils/temp-link'

import FEDERAL_DISBURSEMENTS from '../../data/federal_disbursements.yml'
import * as GOMESA_STATE_DISBURSEMENTS from '../../data/gomesa_state_disbursements'

import StickyHeader from '../layouts/StickyHeader'
import { StickyWrapper } from '../utils/StickyWrapper'
import YearSelector from '../selectors/YearSelector'
import DataAndDocs from '../layouts/DataAndDocs'
import GlossaryTerm from '../utils/glossary-term.js'
import RevenueTypeTable from '../locations/RevenueTypeTable'
import RevenueProcessTable from '../locations/RevenueProcessTable'
import StateRevenue from '../locations/opt_in/StateRevenue'

import utils from '../../js/utils'

let year = 2017

const SectionDisbursements = props => {
  const usStateData = props.usStateMarkdown.frontmatter
  const usStateFields = props.usStateMarkdown.fields || {}
  const usStateDisbursements = FEDERAL_DISBURSEMENTS[usStateData.unique_id]
  const usGomesaStateDisbursements = GOMESA_STATE_DISBURSEMENTS[usStateData.unique_id]

  function getDisbursementsContent () {
    	let content
	    const onshoreDisbursements = (usStateDisbursements && usStateDisbursements.All.Onshore) ? usStateDisbursements.All.Onshore[year] : 0
	    const offshoreDisbursements = (usStateDisbursements && usStateDisbursements.All.Offshore) ? usStateDisbursements.All.Offshore[year] : 0
	    const allDisbursements = (usStateDisbursements && usStateDisbursements.All.All) ? usStateDisbursements.All.All[year] : 0

    	if (usStateDisbursements && offshoreDisbursements > 0) {
      content = <div>
        <p>
							ONRR also disburses some revenue from natural resource extraction to state governments. <strong>In { year }, ONRR disbursed {utils.formatToDollarInt(allDisbursements)} to {usStateData.title}. </strong>
							This included revenues from both onshore and offshore extraction in or near {usStateData.title}:
        </p>
        <ul>
          <li>{utils.formatToDollarInt(onshoreDisbursements)} was from onshore revenues</li>
          <li>{utils.formatToDollarInt(offshoreDisbursements)} was from offshore revenues</li>
        </ul>
      </div>
    	}
    	else if (usStateDisbursements) {
    		content = <p>ONRR also disburses some revenue from natural resource extraction to state governments. <strong>In { year }, ONRR disbursed {utils.formatToDollarInt(usStateDisbursements.All.All[year])} to {usStateData.title}.</strong></p>
    	}
    	else {
      content = <p>
        <strong>
          {usStateData.title} did not receive any disbursements from ONRR in { year }. This is usually because there was no natural resource extraction on federal land in the state.
        </strong>
      </p>
    	}

    	return content
  }

  return (
    <section id="federal-disbursements" className="disbursements">
      <StickyWrapper bottomBoundary="#federal-disbursements" innerZ="10000">
        <StickyHeader headerText={'Federal disbursements'} />
      </StickyWrapper>

      <p>After collecting revenue from natural resource extraction, the Office of Natural Resources Revenue distributes that money to different agencies, funds, and local governments for public use. This process is called “disbursement.”</p>
      <p>
				Most federal revenue disbursements go into national funds. For detailed data about which expenditures and projects from those national funds are in {usStateData.title}, see <Link to="/explore/#federal-disbursements">nationwide federal disbursements</Link>.
      </p>

      {getDisbursementsContent()}

      {usGomesaStateDisbursements &&
        <section id="gomesa-disbursements" className="disbursements">
          <StickyWrapper bottomBoundary="#gomesa-disbursements" innerZ="10000">
            <StickyHeader headerText={'GOMESA disbursements'} />
          </StickyWrapper>
          <p>ONRR disbursed GOMESA revenue to {usStateData.title}.</p>
            <table class="table-basic u-margin-top u-margin-bottom">
              <thead>
                <tr>
                  <th>Recipient</th>
                  <th>FY2019</th>
                </tr>
              </thead>
              <tbody>
                <tr><td></td><td></td></tr>
              </tbody>
            </table>
        </section>
      }

      <p>
        <Link to="/downloads/disbursements/" className="data-downloads">
          <DataAndDocs />
        </Link>
      </p>
    </section>
  )
}

export default SectionDisbursements
