import React from 'react'
import { connect } from 'react-redux'
import { glossaryTermSelected as glossaryTermSelectedAction } from '../../state/reducers/glossary'
import GlossaryIcon from '-!svg-react-loader!../../img/svg/icon-question-circle.svg'

const GlossaryTerm = ({ termKey, termkey, children, glossaryTermSelected, glossaryTerm }) => {
  const getTerm = () => {
    if (termKey) {
      return termKey
    }
    else if (termkey) {
      return termkey
    }
    else if (Array.isArray(children)) {
      return children[0]
    }
    return children
  }

  return (
    <span className="term term-end" title="Click to define" tabIndex="0"
      onClick={() => glossaryTermSelected(getTerm())}>
      {children}<GlossaryIcon />
    </span>
  )
}

export default connect(
  state => ({ glossaryTerm: state.glossary.glossaryTerm }),
  dispatch => ({ glossaryTermSelected: term => dispatch(glossaryTermSelectedAction(term)) })
)(GlossaryTerm)
