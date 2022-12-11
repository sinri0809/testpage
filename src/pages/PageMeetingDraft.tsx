import React, { useRef, useState, useEffect, Dispatch, SetStateAction } from 'react';

import Video from 'components/common/Video';

const MeetingDraft = () => {
  const users = ['user1', 'user2', 'user3', 'user4', 'user5 ', 'user6'];

  const refVideoList = useRef<HTMLUListElement>(null);
  const [test, setTestHorizontal] = useState(0);

  const refVideoListVertical = useRef<HTMLUListElement>(null);
  const [testVertical, setTestVertical] = useState(0);

  return <div className="meeting-draft">
    <Aside />
    <div className="video-list-container">
      <div className="video-list-wrap horizontal">
        <h1>horizontal example</h1>
        hiddend user test : {test}
        <ul className="video-list horizontal" ref={refVideoList}>
          {users.map((user, index) =>
            <React.Fragment key={index}>
              <VideoItem user={user} test={test} setTest={setTestHorizontal} />
            </React.Fragment>)
          }
          <li className="video-item more-infor">
            <div className="video-wrap">
              Hided user :
            </div>
          </li>
        </ul>
      </div>
      <hr />

      <div className="video-list-wrap vertical">
        <h1>vertical example</h1>
        vertical user test : {testVertical}
        <ul className="video-list" ref={refVideoListVertical}>
          {users.map((user, index) =>
            <React.Fragment key={index}>
              <VideoItem user={user} test={testVertical} setTest={setTestVertical} />
            </React.Fragment>)
          }
          <li className="video-item more-infor">
            <div className="video-wrap">
              Hided user :
            </div>
          </li>
        </ul>
      </div>
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

interface VideoItemProps {
  user: string;
  test: number;
  setTest: Dispatch<SetStateAction<number>>
};

const VideoItem = ({ user, test, setTest }: VideoItemProps) => {
  const refVideoItem = useRef<HTMLLIElement>(null);

  useEffect(() => {
    let options = {
      rootMargin: "0px",
      threshold: [0.1, 0.5, 1.0]
    };

    const callback: IntersectionObserverCallback = async ([entry], observe) => {
      if (!entry.isIntersecting) {
        entry.target.className = `video-item hidden`;
      } else {
        entry.target.className = `video-item visible`;
      }
      await checkHiddend(entry);
    };

    const checkHiddend = async (entry: IntersectionObserverEntry) => {
      let hidden = entry.target.parentElement?.getElementsByClassName('hidden').length;
      if (hidden) {
        await setTest(hidden);
      } else if (hidden === 0) {
        await setTest(0);
      }
    }

    let observer: IntersectionObserver;
    observer = new IntersectionObserver(callback, options);

    if (refVideoItem.current) {
      observer.observe(refVideoItem.current);
    }
    return () => {
    }
  }, [])

  return <li className='video-item' ref={refVideoItem}>
    <Video label={user} />
  </li>
}