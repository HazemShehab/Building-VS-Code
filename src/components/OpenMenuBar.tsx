import { Popover, PopoverButton, PopoverPanel } from '@headlessui/react'
import RightArrowIcon from './SVG/RightArrow';

const OpenMenuBar = () => {

  return (
    <div className="flex w-full pt-1">
      <div className="flex gap-4">
        {/* File */}
        <Popover>
          <PopoverButton className="flex font-semibold text-white/50 focus:outline-none data-[active]:text-white data-[hover]:text-white data-[focus]:outline-1 data-[focus]:outline-white hover:bg-slate-800 p-1 rounded-md">
            File
          </PopoverButton>
          <PopoverPanel
            transition
            anchor="bottom"
            className="w-[300px] cursor-pointer divide-y ml-2 divide-white/5 rounded-md bg-gray-800 text-sm/6 transition duration-200 ease-in-out [--anchor-gap:var(--spacing-5)] data-[closed]:-translate-y-1 data-[closed]:opacity-0"
          >
            <div className="p-3">
              <div className="flex rounded-lg py-2 px-3 transition hover:bg-white/5 justify-between">
                <span className="font-semibold text-white">New Text File</span>
                <span className="text-white/50">Ctrl+N</span>
              </div>
              <div className="flex rounded-lg py-2 px-3 transition hover:bg-white/5 justify-between">
                <p className="font-semibold text-white">New File...</p>
                <p className="text-white/50">Ctrl+Alt+Windows+N</p>
              </div>
              <div className="flex rounded-lg py-2 px-3 transition hover:bg-white/5 justify-between">
                <p className="font-semibold text-white">New Window</p>
                <p className="text-white/50">Ctrl+shift+N</p>
              </div>
            </div>
            <div className="p-3">
              <div className="flex rounded-lg py-2 px-3 transition hover:bg-white/5 justify-between">
                <p className="font-semibold text-white">OpenFile</p>
                <p className="text-white/50">Ctrl+O</p>
              </div>
            </div>
          </PopoverPanel>
        </Popover>

        {/* Edit */}
        <Popover>
          <PopoverButton className="flex font-semibold text-white/50 focus:outline-none data-[active]:text-white data-[hover]:text-white data-[focus]:outline-1 data-[focus]:outline-white hover:bg-slate-800 p-1 rounded-md">
            Edit
          </PopoverButton>
          <PopoverPanel
            transition
            anchor="bottom"
            className="w-[300px] cursor-pointer divide-y ml-2 divide-white/5 rounded-md bg-gray-800 text-sm/6 transition duration-200 ease-in-out [--anchor-gap:var(--spacing-5)] data-[closed]:-translate-y-1 data-[closed]:opacity-0"
          >
            <div className="p-3">
              <div className="flex rounded-lg py-2 px-3 transition hover:bg-white/5 justify-between">
                <span className="font-semibold text-white">Undo</span>
                <span className="text-white/50">Ctrl+Z</span>
              </div>
              <div className="flex rounded-lg py-2 px-3 transition hover:bg-white/5 justify-between">
                <p className="font-semibold text-white">Redo</p>
                <p className="text-white/50">Ctrl+Y</p>
              </div>
            </div>
            <div className="p-3">
              <div className="flex rounded-lg py-2 px-3 transition hover:bg-white/5 justify-between">
                <p className="font-semibold text-white">Cut</p>
                <p className="text-white/50">Ctrl+X</p>
              </div>
              <div className="flex rounded-lg py-2 px-3 transition hover:bg-white/5 justify-between">
                <p className="font-semibold text-white">Copy</p>
                <p className="text-white/50">Ctrl+C</p>
              </div>
              <div className="flex rounded-lg py-2 px-3 transition hover:bg-white/5 justify-between">
                <p className="font-semibold text-white">Paste</p>
                <p className="text-white/50">Ctrl+V</p>
              </div>
            </div>
          </PopoverPanel>
        </Popover>

        {/* Selection */}
        <Popover>
          <PopoverButton className="flex font-semibold text-white/50 focus:outline-none data-[active]:text-white data-[hover]:text-white data-[focus]:outline-1 data-[focus]:outline-white hover:bg-slate-800 p-1 rounded-md">
            Selection
          </PopoverButton>
          <PopoverPanel
            transition
            anchor="bottom"
            className="w-[300px] cursor-pointer divide-y ml-2 divide-white/5 rounded-md bg-gray-800 text-sm/6 transition duration-200 ease-in-out [--anchor-gap:var(--spacing-5)] data-[closed]:-translate-y-1 data-[closed]:opacity-0"
          >
            <div className="p-3">
              <div className="flex rounded-lg py-2 px-3 transition hover:bg-white/5 justify-between">
                <span className="font-semibold text-white">Select All</span>
                <span className="text-white/50">Ctrl+A</span>
              </div>
              <div className="flex rounded-lg py-2 px-3 transition hover:bg-white/5 justify-between">
                <p className="font-semibold text-white">Expant Selection</p>
                <p className="text-white/50">Shift+Alt+RightArrow</p>
              </div>
              <div className="flex rounded-lg py-2 px-3 transition hover:bg-white/5 justify-between">
                <p className="font-semibold text-white">Shrink Selection</p>
                <p className="text-white/50">Shift+Alt+LeftArrow</p>
              </div>
            </div>
            <div className="p-3">
              <div className="flex rounded-lg py-2 px-3 transition hover:bg-white/5 justify-between">
                <p className="font-semibold text-white">Copy Line Up</p>
                <p className="text-white/50">Shift+Alt+UpArrow</p>
              </div>
              <div className="flex rounded-lg py-2 px-3 transition hover:bg-white/5 justify-between">
                <p className="font-semibold text-white">Copy Line Down</p>
                <p className="text-white/50">Shift+Alt+DownArrow</p>
              </div>
            </div>
          </PopoverPanel>
        </Popover>

        {/* View */}
        <Popover>
          <PopoverButton className="flex font-semibold text-white/50 focus:outline-none data-[active]:text-white data-[hover]:text-white data-[focus]:outline-1 data-[focus]:outline-white hover:bg-slate-800 p-1 rounded-md">
            View
          </PopoverButton>
          <PopoverPanel
            transition
            anchor="bottom"
            className="w-[300px] cursor-pointer divide-y ml-2 divide-white/5 rounded-md bg-gray-800 text-sm/6 transition duration-200 ease-in-out [--anchor-gap:var(--spacing-5)] data-[closed]:-translate-y-1 data-[closed]:opacity-0"
          >
            <div className="p-3">
              <div className="flex rounded-lg py-2 px-3 transition hover:bg-white/5 justify-between">
                <span className="font-semibold text-white">Comand Palette</span>
                <span className="text-white/50">Ctrl+Shit+P</span>
              </div>
              <div className="flex rounded-lg py-2 px-3 transition hover:bg-white/5 justify-between">
                <p className="font-semibold text-white">Open View...</p>
              </div>
            </div>
            <div className="p-3">

            {/* Start View sub menu Appearance*/}
            <Popover>
              <PopoverButton
                className="flex rounded-lg py-2 px-3 transition hover:bg-white/5 justify-between focus:outline-none">
                  <p className='font-semibold text-white'>Appearance</p>
                  <p className='ml-[150px] text-white/50'><RightArrowIcon /></p>
              </PopoverButton>
              <PopoverPanel
                transition
                anchor="bottom"
                className="w-[300px] cursor-pointer divide-y ml-[300px] divide-white/5 rounded-md bg-gray-800 text-sm/6 transition duration-200 ease-in-out [--anchor-gap:var(--spacing-5)] data-[closed]:-translate-y-1 data-[closed]:opacity-0"
              >
                <div className="p-3">
                  <div className="flex rounded-lg py-2 px-3 transition hover:bg-white/5 justify-between">
                    <span className="font-semibold text-white">Full Screen</span>
                    <span className="text-white/50">F11</span>
                  </div>
                  <div className="flex rounded-lg py-2 px-3 transition hover:bg-white/5 justify-between">
                    <p className="font-semibold text-white">Zen Mode</p>
                    <p className="text-white/50">Ctrl+K Z</p>
                  </div>
                  <div className="flex rounded-lg py-2 px-3 transition hover:bg-white/5 justify-between">
                    <p className="font-semibold text-white">Centered Layout</p>
                  </div>
                </div>
              </PopoverPanel>
            </Popover>
            {/* End View sub menu Appearance*/}

            {/* Start View sub menu Editor Layout*/}
            <Popover>
              <PopoverButton
                className="flex rounded-lg py-2 px-[9px] transition hover:bg-white/5 justify-between focus:outline-none">
                  <p className='font-semibold text-white'>Editor Layout</p>
                  <p className='ml-[144px] text-white/50'><RightArrowIcon /></p>
              </PopoverButton>
              <PopoverPanel
                transition
                anchor="bottom"
                className="w-[300px] cursor-pointer divide-y ml-[300px] divide-white/5 rounded-md bg-gray-800 text-sm/6 transition duration-200 ease-in-out [--anchor-gap:var(--spacing-5)] data-[closed]:-translate-y-1 data-[closed]:opacity-0"
              >
                <div className="p-3">
                  <div className="flex rounded-lg py-2 px-3 transition hover:bg-white/5 justify-between">
                    <span className="font-semibold text-white">Split Up</span>
                    <span className="text-white/50">Ctrl+K+Ctrl+\</span>
                  </div>
                  <div className="flex rounded-lg py-2 px-3 transition hover:bg-white/5 justify-between">
                    <p className="font-semibold text-white">Split Down</p>
                  </div>
                  <div className="flex rounded-lg py-2 px-3 transition hover:bg-white/5 justify-between">
                    <p className="font-semibold text-white">Split Left</p>
                  </div>
                  <div className="flex rounded-lg py-2 px-3 transition hover:bg-white/5 justify-between">
                    <p className="font-semibold text-white">Split Right</p>
                  </div>
                </div>
              </PopoverPanel>
            </Popover>
            {/* End View sub menu Editor Layout*/}

            </div>
            <div className="p-3">
              <div className="flex rounded-lg py-2 px-3 transition hover:bg-white/5 justify-between">
                <span className="font-semibold text-white">Explorer</span>
                <span className="text-white/50">Ctrl+Shift+E</span>
              </div>
            </div>
          </PopoverPanel>
        </Popover>

        {/* Go */}
        <Popover>
          <PopoverButton className="flex font-semibold text-white/50 focus:outline-none data-[active]:text-white data-[hover]:text-white data-[focus]:outline-1 data-[focus]:outline-white hover:bg-slate-800 p-1 rounded-md">
            Go
          </PopoverButton>
          <PopoverPanel
            transition
            anchor="bottom"
            className="w-[300px] cursor-pointer divide-y ml-2 divide-white/5 rounded-md bg-gray-800 text-sm/6 transition duration-200 ease-in-out [--anchor-gap:var(--spacing-5)] data-[closed]:-translate-y-1 data-[closed]:opacity-0"
          >
            <div className="p-3">
              <div className="flex rounded-lg py-2 px-3 transition hover:bg-white/5 justify-between">
                <span className="font-semibold text-white">Run</span>
                <span className="text-white/50">Forward</span>
              </div>
              <div className="flex rounded-lg py-2 px-3 transition hover:bg-white/5 justify-between">
                <p className="font-semibold text-white/50">Forward</p>
                <p className="text-white/50">Alt+RightArrow</p>
              </div>
              <div className="flex rounded-lg py-2 px-3 transition hover:bg-white/5 justify-between">
                <p className="font-semibold text-white">Last Edit Location</p>
                <p className="text-white/50">Ctrl+K Ctrl+Q</p>
              </div>
            </div>
          </PopoverPanel>
        </Popover>

        {/* --- */}
        <Popover>
          <PopoverButton className="flex font-semibold text-white/50 focus:outline-none data-[active]:text-white data-[hover]:text-white data-[focus]:outline-1 data-[focus]:outline-white hover:bg-slate-800 p-1 rounded-md">
            ---
          </PopoverButton>
          <PopoverPanel
            transition
            anchor="bottom"
            className="w-[300px] cursor-pointer divide-y ml-2 divide-white/5 rounded-md bg-gray-800 text-sm/6 transition duration-200 ease-in-out [--anchor-gap:var(--spacing-5)] data-[closed]:-translate-y-1 data-[closed]:opacity-0"
          >
            <div className="p-3">
              <div className="flex rounded-lg py-2 px-3 transition hover:bg-white/5 justify-between">
                <span className="font-semibold text-white">Run</span>
                <span className="text-white/50"><RightArrowIcon /></span>
              </div>
              <div className="flex rounded-lg py-2 px-3 transition hover:bg-white/5 justify-between">
                <p className="font-semibold text-white">Terminal</p>
                <p className="text-white/50"><RightArrowIcon /></p>
              </div>
              <div className="flex rounded-lg py-2 px-3 transition hover:bg-white/5 justify-between">
                <p className="font-semibold text-white">Help</p>
                <p className="text-white/50"><RightArrowIcon /></p>
              </div>
            </div>
          </PopoverPanel>
        </Popover>
      </div>
    </div>
  )
}

export default OpenMenuBar;