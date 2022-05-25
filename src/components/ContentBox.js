import React from 'react'

const ContentBox = () => {
  return (
    <div className='contentBox'>
      <div className='contentBox__section contentBox__section--recentPlayer'>
        <input type="checkbox" class="read-more-state" id="section-1" /> 
        <ul class="read-more-wrap">
          <li class="read-more-target">lorem 3</li>
          <li class="read-more-target">lorem 4</li>
        </ul>
        <label for="section-1" class="read-more-trigger">Recent PLayer</label>
      </div>


    </div>
  )
}

export default ContentBox