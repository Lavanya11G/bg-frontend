import React, { Fragment, useEffect, useRef, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import data from "../../constant/contentModal.json";
import Link from "next/link";
import { ArrowNarrowRightIcon } from "@heroicons/react/solid";
export default function ContentModal({ isOpen, close }) {
  const [selectedChapter, setSelectedChapter] = useState(1);

  return (
    <div>
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog
          as="div"
          className="fixed inset-0 -top-20 z-10 overflow-y-auto"
          onClose={close}
        >
          <div className="min-h-screen px-4 text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Dialog.Overlay className="fixed inset-0" />
            </Transition.Child>

            {/* This element is to trick the browser into centering the modal contents. */}
            <span
              className="inline-block h-screen align-middle"
              aria-hidden="true"
            >
              &#8203;
            </span>
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <div className="inline-block w-5/6 max-w-4xl overflow-hidden text-left align-middle transition-all transform bg-white dark:bg-dark-100 shadow-xl rounded-2xl">
                <div className="flex items-center">
                  <div className="flex justify-center h-full flex-1 p-6">
                    <div className="flex flex-col">
                      {data.slice(0, 9).map((chapter) => (
                        <button
                          type="button"
                          onClick={() => {
                            setSelectedChapter(chapter.chapterNumber);
                          }}
                          className="p-2 w-40 group flex items-center justify-between rounded-lg hover:bg-light-orange dark:hover:bg-dark-bg hover:cursor-pointer"
                        >
                          <p className="text-base font-medium text-gray-500 group-hover:text-my-orange dark:text-white">
                            Chapter {chapter.chapterNumber}
                          </p>
                          <ArrowNarrowRightIcon className="w-8 h-5 text-my-orange opacity-0 transition-opacity duration-150 group-hover:opacity-100" />
                        </button>
                      ))}
                    </div>
                    <div className="">
                      {data.slice(9, 18).map((chapter) => (
                        <button
                          type="button"
                          onClick={() => {
                            setSelectedChapter(chapter.chapterNumber);
                          }}
                          className="p-2 w-40 group flex items-center justify-between rounded-lg hover:bg-light-orange dark:hover:bg-dark-bg hover:cursor-pointer"
                        >
                          <p className="text-base font-medium text-gray-500 group-hover:text-my-orange dark:text-white">
                            Chapter {chapter.chapterNumber}
                          </p>
                          <ArrowNarrowRightIcon className="w-8 h-5 text-my-orange opacity-0 transition-opacity duration-150 group-hover:opacity-100" />
                        </button>
                      ))}
                    </div>
                  </div>
                  <div className="flex justify-center h-full flex-1 flex-col bg-light-orange p-6">
                    <p className="text-my-orange py-2 font-semibold">
                      Chapter {selectedChapter}
                    </p>
                    <hr className="border-my-orange/10" />
                    <div className={`flex p-3 flex-wrap `}>
                      {Array(
                        data.filter(
                          (chapter) => chapter.chapterNumber === selectedChapter
                        )[0].gitaVersesByChapterId.totalCount
                      )
                        .fill()
                        .map((_verse, index) => (
                          <div
                            onClick={() => {}}
                            className="flex justify-center items-center h-10 w-10 p-1.5 m-px text-gray-500 rounded hover:cursor-pointer hover:bg-my-orange hover:text-white"
                          >
                            {index + 1}
                          </div>
                        ))}
                    </div>
                  </div>
                </div>
              </div>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition>
    </div>
  );
}
