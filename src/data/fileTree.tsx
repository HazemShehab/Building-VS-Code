import { v4 as uuid } from 'uuid';
import { IFile } from "../interfaces";

export const fileTree: IFile = {
  id: uuid(),
  name: "VS Code Clone",
  isFolder: true,
  children: [
    {
      id: uuid(),
      name:"node_modules",
      isFolder: true,
      children: [
        {
          id: uuid(),
          name: '.vite', isFolder: true, 
          children: [
          {id: uuid(), name: 'NavBar.jsx', isFolder: false,
content:`import { NavLink, useLocation } from "react-router-dom";

const Navbar = () => {
  const { pathname } = useLocation();
  const storageKey = "loggedInUser";
  const userDataString = localStorage.getItem(storageKey);
  const userData = userDataString ? JSON.parse(userDataString) : null;
  const onLogout = () => {
    localStorage.removeItem(storageKey);
    setTimeout(() => {
      location.replace(pathname);
    }, 1500);
  };
  return (
    //using navlink to navigate between pages with no realod and 
    //adding active class by default to highligh the choosen link, 
    //you will be able to go into css file 
    //and make you css style on that active class
    <nav className="max-w-lg mx-auto mt-7 mb-20 px-3 py-5 rounded-md">
      <ul className="flex items-center justify-between">
        <li className="text-black duration-200 font-semibold text-lg">
          <NavLink to="/">Home</NavLink>
        </li>
        {userData ? (
          <div className="flex items-center text-indigo-600 space-x-4">
            <li className="duration-200 text-lg">
              <NavLink to="/todos">Todos</NavLink>
            </li>
            <li className="duration-200 text-lg">
              <NavLink to="/profile">Profile</NavLink>
            </li>
            <button
              className="bg-indigo-500 text-white p-2 rounded-md cursor-pointer"
              onClick={onLogout}
            >
              Logout
            </button>
          </div>
        ) : (
          <p className="flex items-center space-x-3">
            <li className="text-black duration-200 font-semibold text-lg">
              <NavLink to="/register">Register</NavLink>
            </li>
            <li className="text-black duration-200 font-semibold text-lg">
              <NavLink to="/login">Login</NavLink>
            </li>
          </p>
        )}
      </ul>
    </nav>
  );
};

export default Navbar;
`
          },
          {id: uuid(), name: 'helper.js', isFolder: false,
content:`import {async} from 'regenerator-runtime';
import { TIMEOUT_SEC } from './config';

const timeout = function (s) {
    return new Promise(function (_, reject) {
      setTimeout(function () {
        reject(new Error(Request took too long! Timeout after {s} second));
      }, s * 1000);
    });
  };


export const AJAX = async function(url, uploadData = undefined) {
  try {
  const fetchPro = uploadData ? fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(uploadData),
  }) : fetch(url);

    const res = await Promise.race([fetchPro, timeout(TIMEOUT_SEC)]);
    const data = await res.json();
  
    if(!res.ok) throw new Error({data.message} ({res.status}));
    return data;
    } catch(err) {
        throw err;
    }
};`
          }]
            },
          ]
        },
        {
          id: uuid(),
          name: "Public",
          isFolder: true,
          children: [
            {
              id: uuid(),
              name: "index.html",
              isFolder: false,
content:`<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <link rel="icon" type="image/svg+xml" href="/vite.svg" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Vite + React + TS</title>
  </head>
  <body>
    <div id="root"></div>
    <script type="module" src="/src/main.tsx"></script>
  </body>
</html>
`
              },
            ]
        },
        {
          id: uuid(),
          name: "src",
          isFolder: true,
          children: [
              {
                  id: uuid(),
                  name: "components",
                  isFolder: true,
                  children: [
                    {id: uuid(), name: "Button.tsx", isFolder: false,
content:`import { cn } from "../../lib/utils";
import { VariantProps, cva } from "class-variance-authority";
import { HTMLAttributes, ReactNode } from "react";

const buttonVariants = cva(
  "flex items-center justify-center rounded-md font-medium text-white duration-300 dark:text-black disabled:bg-indigo-400 disabled:hover:bg-indigo-400 disabled:cursor-not-allowed",
  {
    variants: {
      variant: {
        // ** FILLED
        default:
          "bg-slate-900 dark:bg-indigo-600 dark:text-white dark:hover:bg-indigo-700",
        danger:
          "bg-red-900 dark:bg-[#c2344d] dark:text-white dark:hover:bg-red-700",
        cancel:
          "bg-gray-300 text-gray-700 dark:bg-[#f5f5fa] dark:text-dark hover:bg-gray-400 dark:hover:bg-gray-200",

        // ** OUTLINE
        outline:
          "border border-indigo-400 hover:text-white bg-transparent text-black hover:border-transparent hover:bg-indigo-600 dark:text-gray-700 dark:hover:text-white",
      },
      size: {
        default: "p-3",
        sm: "text-sm px-4 py-2",
      },
      fullWidth: {
        true: "w-full",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

interface ButtonProps
  extends HTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  children: ReactNode;
  isLoading?: boolean;
  type?: "submit" | "button" | "reset";
}

const Button = ({variant,size,fullWidth,isLoading,className,children,type,...props}: ButtonProps) => {
  return (
    <button
      type={type}
      className={cn(buttonVariants({ variant, size, fullWidth, className }))}
      {...props}
      disabled={isLoading}
    >
      {isLoading ? (
        <svg
          className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
        >
          <circle
            className="opacity-25"
            cx="12"
            cy="12"
            r="10"
            stroke="currentColor"
            strokeWidth="4"
          ></circle>
          <path
            className="opacity-75"
            fill="currentColor"
            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
          ></path>
        </svg>
      ) : null}
      {children}
    </button>
  );
};

export default Button;
`
                    },
                  ]
                },
              {
                id: uuid(), name: "App.tsx", isFolder: false,
  content:`import { useSelector } from 'react-redux'
import Preview from './components/Preview'
import RecurisveComponent from './components/RecursiveComponent'
import ResizeablePanel from './components/ResizeablePanel'
import { fileTree } from './data/fileTree'
import './index.css'
import { RootState } from './app/store'
import WelcomeTab from './components/WelcomeTab'

const App = () =>{
  const { openedFiles } = useSelector(({tree}: RootState) => tree)

  return (
    <div>
      <div className="flex h-screen">
        <ResizeablePanel 
        showLeftPanel
        leftPanel={
          <div className='w-64 p-2'>
            <RecurisveComponent fileTree={fileTree}/>
          </div>
        }
        rightPanel={openedFiles.length ? <Preview /> : <WelcomeTab />}
        />
      </div>
    </div>
  )
}

export default App`
              },
            ]
        }
    ]
}