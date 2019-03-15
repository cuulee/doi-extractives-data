/**
 * Constants that are used by the application
 **/
module.exports = Object.freeze({
	DISBURSEMENTS_SORT_BY_YEAR_DESC: 
	`Disbursements:allFederalDisbursements (
      sort:{fields:[Year], order: DESC}
    ){
      disbursements:edges {
        data:node {
          id
          Year
          DisplayYear
          Fund
          Source
          Disbursement
          DisbursementCategory
          internal {
            type
            contentDigest
            owner
          }
        }
      }
    }`,
	MARKDOWN_HOWITWORKS: 
		`allMarkdownRemark(filter: {id: {regex: "/how-it-works/"}}) {
	    pages: edges {
	      page: node {
	        frontmatter {
	          title
	          permalink
	          layout
	          redirect_from
            report_year
	        }
	        htmlAst
	      }
	    }
	  }`,
  MARKDOWN_DOWNLOADS: 
    `allMarkdownRemark(filter: {id: {regex: "/downloads/"}}) {
      pages: edges {
        page: node {
          frontmatter {
            title
            permalink
            layout
            redirect_from
          }
          htmlAst
        }
      }
    }`,

});

