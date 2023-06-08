import React, {useRef} from 'react';
import {ConnectKitButton} from "connectkit";
import {CSSTransition, SwitchTransition} from "react-transition-group";
import classNames from "classnames";
import "./Whal3sConnectKitButton.css"


type Whal3sConnectKitButtonProps = {
  onClaim: () => void,
  isClaimed: boolean
}
const Whal3sConnectKitButton = ({onClaim, isClaimed}:Whal3sConnectKitButtonProps) => {
  const connectedRef = useRef<HTMLDivElement>(null);
  const connectRef = useRef<HTMLDivElement>(null);

  return (
    <ConnectKitButton.Custom>
      {({
          isConnected,
          show,
          truncatedAddress
        }) => {

        const nodeRef = isConnected ? connectedRef : connectRef;

        return (
          <SwitchTransition mode={'out-in'} >
            <CSSTransition
              key={isConnected ? "is-connected" : "connect"}
              nodeRef={nodeRef}
              addEndListener={(done:any) => {
                if (nodeRef.current) {
                  nodeRef.current.addEventListener("transitionend", done, false);
                }
              }}
              classNames='fade'
            >

              <div ref={nodeRef}>
                {isConnected ? (<div
                  className={"whal3s-mt-6 whal3s-grid whal3s-grid-cols-2 whal3s-gap-5"}>
                  <button
                    onClick={onClaim}
                    type="button"
                    className={classNames(
                      isClaimed ? 'whal3s-bg-teal-500 whal3s-text-white hover:whal3s-bg-teal-400 focus:ring-teal-500' : 'whal3s-bg-black whal3s-text-white hover:whal3s-bg-gray-800 focus:whal3s-ring-gray-900',
                      'whal3s-flex whal3s-w-full whal3s-items-center whal3s-justify-center whal3s-rounded-md whal3s-border whal3s-border-transparent whal3s-px-4 whal3s-py-2 focus:whal3s-outline-none focus:whal3s-ring-2  focus:whal3s-ring-offset-2'
                    )}
                  >
                    <span className="whal3s-sr-only">Claim with Whal3s</span>
                    <img src={'https://whal3s-assets.s3.eu-central-1.amazonaws.com/logos/whal3s_slim.png'} alt={'Whal3s logo'}
                         className={'whal3s-h-6 whal3s-w-auto whal3s-mr-2.5'}/>
                    <span>{isClaimed ? 'Rebate applied' : 'Claim rebate'}</span>
                  </button>
                  <button
                    type="button"
                    onClick={show}
                    // className="whal3s-w-full whal3s-rounded-md whal3s-border whal3s-border-transparent whal3s-bg-whal3s-600 whal3s-px-4 whal3s-py-2 whal3s-text-sm whal3s-font-medium whal3s-text-white whal3s-shadow-sm hover:whal3s-bg-whal3s-700 focus:whal3s-outline-none focus:whal3s-ring-2 focus:ring-whal3s-500 focus:whal3s-ring-offset-2 disabled:whal3s-cursor-not-allowed disabled:whal3s-bg-gray-100 disabled:whal3s-text-gray-500"
                    className="whal3s-w-full whal3s-rounded-md whal3s-bg-whal3s-50 whal3s-px-4 whal3s-py-2 whal3s-text-sm whal3s-font-semibold text-whal3s-600 whal3s-shadow-sm hover:whal3s-bg-whal3s-100"
                  >
                    {truncatedAddress}
                  </button>
                </div>) : (

                  <button
                    onClick={show}
                    type="button"
                    className="whal3s-mt-6 whal3s-flex whal3s-w-full whal3s-items-center whal3s-justify-center whal3s-rounded-md whal3s-border whal3s-border-transparent whal3s-bg-black whal3s-px-4 whal3s-py-2 whal3s-text-white hover:whal3s-bg-gray-800 focus:whal3s-outline-none focus:whal3s-ring-2 focus:whal3s-ring-gray-900 focus:whal3s-ring-offset-2"
                  >
                                                                        <span
                                                                          className="whal3s-sr-only">Claim with Whal3s</span>
                    <img src={'https://whal3s-assets.s3.eu-central-1.amazonaws.com/logos/whal3s_slim.png'} alt={'Whal3s logo'}
                         className={'whal3s-h-6 whal3s-w-auto whal3s-mr-2.5'}/>
                    <span>Connect wallet to claim</span>
                  </button>

                )}


              </div>
            </CSSTransition>
          </SwitchTransition>
        )
      }}
    </ConnectKitButton.Custom>
  )
};

export default Whal3sConnectKitButton;
