import { Fragment, useRef, useState } from 'react'
import { Dialog, Transition } from '@headlessui/react'

// contexts
import { useContext } from 'react'
import { MatchedUserContext } from '../context/MatchedUserContext'
import { LastUserContext } from '../context/LastUserContext'

export const MatchComponent = ({currentProfile}) => {
  const [open, setOpen] = useState(true)

  const cancelButtonRef = useRef(null)

  const { matchedUser, setMatchedUser } = useContext(MatchedUserContext)
  const { lastUserInfo, setLastUserInfo } = useContext(LastUserContext)
  console.log('matched user', matchedUser)
  return (

    <div>

        <Transition.Root show={open} as={Fragment}>
        <Dialog as="div" className="relative z-10" initialFocus={cancelButtonRef} onClose={setOpen}>
            <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
            >
            <div className="fixed inset-0 bg-gray-800 bg-opacity-75 transition-opacity" />
            </Transition.Child>

            <div className="fixed inset-0 z-10 overflow-y-auto ">
            <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
                <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                enterTo="opacity-100 translate-y-0 sm:scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                >
                <Dialog.Panel className="flex flex-col justify-center relative transform overflow-hidden rounded-lg text-left shadow-xl transition-all max-w-lg  h-screen w-full gap-y-10">
                    {/* Deactivate account */}
                    <div className="b px-4 pb-4 pt-5 sm:p-6 sm:pb-4 w-full">
                        <div className="sm:flex sm:items-start">
                            {/* It's a match text */}
                            <div className="text-center w-full">
                            <Dialog.Title as="h3" className="font-semibold font-signature leading-6 text-slate-50 text-5xl">
                                It's a Match!
                            </Dialog.Title>
                                <div className="mt-4">
                                    <p className="text-md text-slate-200">
                                        You and {matchedUser.name.charAt(0).toUpperCase() + matchedUser.name.slice(1)} have both liked each other
                                    </p>
                                    <div className="flex justify-center items-center gap-x-6 mt-4">
                                        <img src={matchedUser.images[0]} className="h-32 w-32 border border-white rounded-full object-cover object-center"/>
                                        <img src={lastUserInfo.images[0]} className="h-32 w-32 border border-white rounded-full object-cover object-center"/>
                                        
                                    </div>
                                
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Cancel Deactivate buttons */}
                    <div className=" px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6 ">
                      
                        <button
                            type="button"
                            className="bg-gradient-to-t from-electric-pink  to-fiery-rose rounded-full hover:to-pink-700 hover:bg-rose-500 ease-in-out duration-300 text-slate-50  py-3 px-4  w-full"
                            onClick={() => setOpen(false)}
                            ref={cancelButtonRef}
                            >
                            Keep Swiping
                        </button>
                    </div>
                </Dialog.Panel>
                </Transition.Child>
            </div>
            </div>
        </Dialog>
        </Transition.Root>
    </div>
 
  )
}