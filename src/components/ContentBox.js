import React from 'react'

const ContentBox = () => {
  return (
    <div className='contentBox'>
      <div className='contentBox__section contentBox__section--recentPlayer'>
        <input type="checkbox" className="contentBox__section__readMore--stateCheck" id="section-1" />
        <label for="section-1" className="contentBox__section__readMore--trigger">Recent PLayers</label>
        <div className="contentBox__section__readMore--wrap">
          <div className="contentBox__section__readMore--target">player 1</div>
          <div className="contentBox__section__readMore--target">player 2</div>
        </div>
      </div>

      <div className='contentBox__section contentBox__section--friends'>
        <input type="checkbox" className="contentBox__section__readMore--stateCheck" id="section-2" />
        <label for="section-2" className="contentBox__section__readMore--trigger">Friends</label>
        <div className="contentBox__section__readMore--wrap">
          <div className="contentBox__section__readMore--target">player 1</div>
          <div className="contentBox__section__readMore--target">player 2</div>
        </div>
      </div>


    </div>
  )
}

export default ContentBox