import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import DogCard from './assets/components/DogCard'

function App() {

  return (
    <>
    <main>
      <DogCard 
        image="https://placedog.net/500/280"
        name="juanchito"
        description="Descripcion de perro"
        tagColor="primary"
        tagText="Atencion perrito en venta"/>
    </main>
    </>
  )
}

export default App
