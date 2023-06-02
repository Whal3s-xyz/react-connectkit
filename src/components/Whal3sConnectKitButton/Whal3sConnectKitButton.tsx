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
  console.log('Whal3sConnectKitButton', {onClaim, isClaimed})

  return (
    <ConnectKitButton.Custom>
      {({
          isConnected,
          show,
          truncatedAddress
        }) => {

        console.log('Whal3sConnectKitButton deep', {isConnected, show, truncatedAddress})
        const nodeRef = isConnected ? connectedRef : connectRef;

        return (
          <SwitchTransition mode={'out-in'} >
            <CSSTransition
              key={isConnected ? "is-connected" : "connect"}
              nodeRef={nodeRef}
              addEndListener={(done:any) => {
                console.log('Whal3sConnectKitButton addEndListener', {done})
                if (nodeRef.current) {
                  console.log('Whal3sConnectKitButton addEndListener 2')
                  nodeRef.current.addEventListener("transitionend", done, false);
                }
              }}
              classNames='fade'
            >

              <div ref={nodeRef}>
                {isConnected ? (<div
                  className={"mt-6 grid grid-cols-2 gap-5"}>
                  <button
                    onClick={onClaim}
                    type="button"
                    className={classNames(
                      isClaimed ? 'bg-teal-500 text-white hover:bg-teal-400 focus:ring-teal-500' : 'bg-black text-white hover:bg-gray-800 focus:ring-gray-900',
                      'flex w-full items-center justify-center rounded-md border border-transparent px-4 py-2 focus:outline-none focus:ring-2  focus:ring-offset-2'
                    )}
                  >
                    <span className="sr-only">Claim with Whal3s</span>
                    <img src={'https://whal3s-assets.s3.eu-central-1.amazonaws.com/logos/whal3s_slim.png'} alt={'Whal3s logo'}
                         className={'h-6 w-auto mr-2.5'}/>
                    <span>{isClaimed ? 'Rebate applied' : 'Claim rebate'}</span>
                  </button>
                  <button
                    type="button"
                    onClick={show}
                    // className="w-full rounded-md border border-transparent bg-whal3s-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-whal3s-700 focus:outline-none focus:ring-2 focus:ring-whal3s-500 focus:ring-offset-2 disabled:cursor-not-allowed disabled:bg-gray-100 disabled:text-gray-500"
                    className="w-full rounded-md bg-whal3s-50 px-4 py-2 text-sm font-semibold text-whal3s-600 shadow-sm hover:bg-whal3s-100"
                  >
                    {truncatedAddress}
                  </button>
                </div>) : (

                  <button
                    onClick={show}
                    type="button"
                    className="mt-6 flex w-full items-center justify-center rounded-md border border-transparent bg-black px-4 py-2 text-white hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-900 focus:ring-offset-2"
                  >
                                                                        <span
                                                                          className="sr-only">Claim with Whal3s</span>
                    <img src={'https://whal3s-assets.s3.eu-central-1.amazonaws.com/logos/whal3s_slim.png'} alt={'Whal3s logo'}
                         className={'h-6 w-auto mr-2.5'}/>
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
