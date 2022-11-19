const IconClose = () => {
  return <svg className="icon" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path fillRule="evenodd" clipRule="evenodd" d="M12.0065 9.63633L5.36378 3L3 5.3615L9.64274 11.9978L3.13626 18.498L5.46063 20.8202L11.9671 14.32L18.7585 21.1048L21.1223 18.7433L14.3309 11.9585L20.9564 5.33933L18.632 3.01721L12.0065 9.63633Z" fill="#555555" />
  </svg>
}

const IconNew = () => {
  return <svg className="icon" width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="7.5" cy="7.5" r="7.5" fill="#8A00D3" />
    <path d="M11.038 3.27273V12H9.82777L5.39169 5.59943H5.31072V12H3.99396V3.27273H5.21271L9.65305 9.68182H9.73402V3.27273H11.038Z" fill="white" />
  </svg>
}

const IconSearch = () => {
  return <svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <path d="M16.635 4.51c3.24 3.241 3.335 8.424.303 11.79l.3-.3L22 20.765 20.764 22l-4.763-4.763.3-.3c-3.366 3.033-8.55 2.939-11.79-.302A8.573 8.573 0 0 1 16.635 4.51zM5.723 5.724a6.858 6.858 0 1 0 9.698 9.699 6.858 6.858 0 0 0-9.698-9.7zm4.848-.58a5.574 5.574 0 0 1 5.573 5.475l.001.098h-.857A4.717 4.717 0 0 0 10.662 6h-.091v-.858z" id="8d2njemffa" />
    </defs>
    <g fill="none" fillRule="evenodd">
      <path d="M0 0h24v24H0z" />
      <use fill="#555555" href="#8d2njemffa" />
    </g>
  </svg>
}

const IconArrowPrev = () => {
  return <svg className="icon" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path fillRule="evenodd" clipRule="evenodd" d="M8.62137 13.5L14.0607 18.9393L11.9394 21.0606L2.80566 11.9269L12.0123 3.87109L13.9878 6.12882L8.99222 10.5H21V13.5H8.62137Z" fill="#555555" />
  </svg>
}

export {
  IconClose,
  IconNew,
  IconSearch,
  IconArrowPrev
};