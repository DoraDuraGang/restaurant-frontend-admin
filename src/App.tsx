// TODO: не оставляй такие пробелы, импорты должны начинаться вначале файла

import './App.css'
import MainBlock from './components/MainBlock/MainBlock'
import NotificationBlock from './components/NotificationBlock/NotificationBlock'

// TODO: editorconfig добавил в файлы, нагугли как его использовать в vscode и через него прогони все файлы
// TODO: удалить так же все ненужные файлы, картинок и прочей хуйни
function App() {
  return (
    <section className='UserView'>
      <MainBlock/>
      <NotificationBlock/>
    </section>
  )
}

export default App
