import { Fragment, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { XMarkIcon } from "@heroicons/react/24/outline";
import { useRouter } from "next/router";
import Link from "next/link";
import Image from "next/image";

export default function SideBar({ open, setOpen, setopenModal, item }: any) {
  const router = useRouter();
  return (
    <Transition.Root show={open} as={Fragment}>
      <Dialog as="div" className="relative z-50" onClose={setOpen}>
        <Transition.Child
          as={Fragment}
          enter="ease-in-out duration-500"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in-out duration-500"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-hidden">
          <div className="absolute inset-0 overflow-hidden">
            <div className="pointer-events-none fixed inset-y-0 left-0 flex max-w-full ">
              <Transition.Child
                as={Fragment}
                enter="transform transition ease-in-out duration-500 sm:duration-700"
                enterFrom="translate-y-full"
                enterTo="translate-y-0"
                leave="transform transition ease-in-out duration-500 sm:duration-700"
                leaveFrom="translate-y-0"
                leaveTo="translate-y-full"
              >
                <Dialog.Panel className="pointer-events-auto relative w-screen max-w-md">
                  <div
                    className="flex h-14 items-center justify-center text-white"
                    onClick={() => {
                      setOpen(false), setopenModal(true);
                    }}
                    style={{ backgroundColor: "#0279b1" }}
                  >
                    <Image
                      src="/images/logo_w.png"
                      width={100}
                      height={100}
                      alt="Logo"
                      style={{ width: "6rem", height: "3rem", color: "white" }}
                    ></Image>
                  </div>
                  <div className="flex h-full flex-col overflow-y-scroll bg-white py-6 shadow-xl">
                    <div className="px-4 sm:px-6">
                      {item.map((item: any, id: any) => (
                        <div key={id}>
                          {" "}
                          <Link
                            href={item.path}
                            onClick={() => setOpen(false)}
                            className={
                              router.pathname == `${item.path}`
                                ? "c-active"
                                : ""
                            }
                          >
                            {item.title.charAt(0).toUpperCase() +
                              item.title.slice(1)}
                          </Link>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="absolute top-0 right-0 -ml-8 flex pt-4 pr-2 sm:-ml-10 sm:pr-4">
                    <button
                      type="button"
                      className="rounded-md text-gray-300 hover:text-white focus:outline-none focus:ring-2 focus:ring-white"
                      onClick={() => setOpen(false)}
                    >
                      <span className="sr-only">Close panel</span>
                      <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                    </button>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  );
}
