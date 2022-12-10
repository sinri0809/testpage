import { useState } from 'react';

import Video from 'components/common/Video';

const MeetingDraft = () => {

  const users = ['user1', 'user2', 'user3', 'user4', 'user5 ', 'user6']

  return <div className="meeting-draft">
    <Aside />
    <div className="video-list-container">
      <ul className="video-list horizontal">
        {users.map((user, index) =>
          <li className='video-item' key={index}>
            <span>{user}</span>
            <Video />
          </li>)
        }
        <li className="video-item more-infor horizontal">
          <div className="video-wrap">
            user
          </div>
        </li>
      </ul>
    </div>
    <hr />
    <div className="video-list-container">
      <ul className="video-list vertical">
        {users.map((user, index) =>
          <li className='video-item' key={index}>
            <span>{user}</span>
            <Video />
          </li>)
        }
        <li className="video-item more-infor vertical">
          <div className="video-wrap">
            user
          </div>
        </li>
      </ul>
    </div>
  </div>
}

export default MeetingDraft;

const Aside = () => {
  const [asideOpen, setAsideOpen] = useState(true);

  return <aside className={asideOpen ? "aside" : "aside close"}>
    <button
      className='btn-aside'
      onClick={() => setAsideOpen(!asideOpen)}
    >{asideOpen ? "close" : "open"}</button>
  </aside>
}