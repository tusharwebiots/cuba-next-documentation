import React from 'react';
import CodeShowCaseBox from '../../component/CodeShowCaseBox';
import Img from '../../component/Img';

const Faq = () => {
  return (
    <>
      <div>
        <h4 className='main-title'>FAQs</h4>
        <div className='mt-5'>
          <h5>
            <strong>Question 1:</strong> When you first Receive the theme, and you run npm start directly, you will face this error.
          </h5>
          <div className='my-4'>
            <Img src='/assets/images/apps/npmInstallError.bd2b346.png' className='img-bordered w-100 ' alt='' />
          </div>
          <p>
            <strong>Ans : </strong> Run npm install first to install all the dependencies and then run the command npm run dev.
          </p>
          <CodeShowCaseBox code={'npm install'} />
          <CodeShowCaseBox code={'npm start'} />
        </div>

        <div className='mt-5'>
          <h5>
            <strong>Question 2:</strong> Getting the error : Heap out of memory?
          </h5>
          <p>
            <strong>Ans : </strong> Run the following command in the terminal. Use the first command if you are a linux user and second command if you are windows user.
          </p>
          <CodeShowCaseBox code={'NODE_OPTIONS=--max_old_space_size=4096 '} />
          <CodeShowCaseBox code={'set NODE_OPTIONS=--max_old_space_size=4096 npm run build '} />
        </div>

        <div className='mt-5'>
          <h5>
            <strong>Question 3:</strong> Facing Issues while installing and using dependencies ?
          </h5>
          <p>
            <strong>Ans : </strong> If you are facing this issues, then you might be running the older version of node, we recommend that you upgrade your node version and try running the project again.
          </p>
        </div>

        <div className='mt-5'>
          <h5>
            <strong>Question 4:</strong> If you faces System limit for number of file watchers reached, watch like error
          </h5>
          <p>
            <strong>Ans : </strong>Try the below given command.
          </p>
          <CodeShowCaseBox code={'sudo sysctl fs.inotify.max_user_watches=524288'} />
        </div>
        <div className='mt-5'>
          <h5>
            <strong>Question 5:</strong> facing Issues with cache?
          </h5>
          <p>
            <strong>Ans : </strong> Follow the below Given Setps
          </p>
          <p>Run this command first</p>
          <CodeShowCaseBox code={'npm cache clean --force'} />
          <p>If still you are facing the same issue:</p>
          <p>remove node_module and package-lock and run npm i again</p>
        </div>
        <div className='text-center thanks-content'>
          <h3>
            <span className='text-primary'>Thank You</span> For Purchasing Our Theme
          </h3>

          <h4>
            If you really liked our theme please rate us{' '}
            <a href='https://themeforest.net/item/cuba-bootstrap-responsive-admin-dashboard-template/reviews/27530933' target='_blank' rel='noreferrer'>
              here
            </a>{' '}
            to encourage us to develop amazing themes similar to this. <br />
            If you have any queries regarding our theme feel free to contact us, our team is always ready to help you.
          </h4>

          <div>
            <div className='col-md-12'>
              <div className='page-footer'>
                <div className='page-changes-summary'>
                  <div className='contributors'>
                    <div className='avtar-list'>
                      <div className='page-edit-date'>
                        <i className='fa fa-envelope fa-2x'></i>
                        <span>
                          Still Confused? Let us know{' '}
                          <a href='https://pixelstrap.freshdesk.com/support/home' target='_blank' rel='noreferrer'>
                            Here
                          </a>
                        </span>
                      </div>
                    </div>
                    <div className='page-rating'>
                      <div className='page-rating-title'>
                        <span> Was document helpful?</span>
                      </div>
                      <div className='page-rating-icons'>
                        <span className='rate-icon-pick' role='presentation'>
                          <svg preserveaspectratio='xMidYMid meet' height='1em' width='1em' fill='currentColor' viewbox='0 0 24 24' xmlns='http://www.w3.org/2000/svg' xmlnsXlink='http://www.w3.org/1999/xlink' stroke='none'>
                            <g>
                              <path d='M9.707 8.707a.993.993 0 0 0 .006-1.396 1.007 1.007 0 0 0-1.408-.03C8.273 7.312 7.519 8 6 8c-1.497 0-2.251-.67-2.303-.717a1 1 0 0 0-1.404 1.424C2.425 8.839 3.653 10 6 10c2.347 0 3.575-1.161 3.707-1.293m12 0a.993.993 0 0 0 .006-1.396 1.006 1.006 0 0 0-1.408-.03C20.273 7.312 19.519 8 18 8c-1.497 0-2.251-.67-2.303-.717a1 1 0 0 0-1.404 1.424C14.425 8.839 15.653 10 18 10c2.347 0 3.575-1.161 3.707-1.293M21.001 19a1 1 0 0 1-.896-.553C20.036 18.314 18.225 15 12 15c-6.225 0-8.036 3.314-8.11 3.456a1.002 1.002 0 0 1-1.344.43.997.997 0 0 1-.441-1.333C2.198 17.367 4.469 13 12 13s9.802 4.367 9.895 4.553A1.001 1.001 0 0 1 21.001 19' fill-rule='evenodd'></path>
                            </g>
                          </svg>
                        </span>
                        <span className='rate-icon-pick' role='presentation'>
                          <svg preserveaspectratio='xMidYMid meet' height='1em' width='1em' fill='currentColor' viewbox='0 0 24 24' xmlns='http://www.w3.org/2000/svg' xmlnsXlink='http://www.w3.org/1999/xlink' stroke='none'>
                            <g>
                              <path d='M10 8a1 1 0 0 0-1-1H3a1 1 0 1 0 0 2h6a1 1 0 0 0 1-1m12 0a1 1 0 0 0-1-1h-6a1 1 0 1 0 0 2h6a1 1 0 0 0 1-1m-1 9H3a1 1 0 1 1 0-2h18a1 1 0 1 1 0 2' fill-rule='evenodd'></path>
                            </g>
                          </svg>
                        </span>
                        <span className='rate-icon-pick' role='presentation'>
                          <svg preserveaspectratio='xMidYMid meet' height='1em' width='1em' fill='currentColor' viewbox='0 0 24 24' xmlns='http://www.w3.org/2000/svg' xmlnsXlink='http://www.w3.org/1999/xlink' stroke='none'>
                            <g>
                              <path d='M9.707 8.707a.999.999 0 0 0 0-1.414C9.575 7.161 8.347 6 6 6 3.653 6 2.425 7.161 2.293 7.293a.992.992 0 0 0-.005 1.396 1.007 1.007 0 0 0 1.408.029C3.727 8.689 4.481 8 6 8c1.52 0 2.273.689 2.293.707a.997.997 0 0 0 1.414 0m12 0a.999.999 0 0 0 0-1.414C21.575 7.161 20.347 6 18 6c-2.347 0-3.575 1.161-3.707 1.293a.992.992 0 0 0-.005 1.396 1.006 1.006 0 0 0 1.407.029C15.727 8.689 16.481 8 18 8c1.52 0 2.273.689 2.293.707a.997.997 0 0 0 1.414 0M12 19c-7.53 0-9.8-4.367-9.894-4.553a1.001 1.001 0 0 1 1.786-.902C3.974 13.704 5.792 17 12 17c6.226 0 8.037-3.314 8.111-3.456a1.007 1.007 0 0 1 1.344-.43.998.998 0 0 1 .441 1.333C21.802 14.633 19.531 19 12 19' fill-rule='evenodd'></path>
                            </g>
                          </svg>
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Faq;
