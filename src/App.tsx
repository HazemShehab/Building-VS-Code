import { useSelector } from 'react-redux'
import Preview from './components/Preview'
import RecurisveComponent from './components/RecursiveComponent'
import ResizeablePanel from './components/ResizeablePanel'
import { fileTree } from './data/fileTree'
import './index.css'
import { RootState } from './app/store'
import WelcomeTab from './components/WelcomeTab'
import NavBar from './components/NavBar'

const App = () =>{
  const { openedFiles } = useSelector(({tree}: RootState) => tree)

  return (
    <div className='relative'>
      <div>
        <NavBar />
      </div>
      <div className="flex h-200px">
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

export default App
