import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import DogCard from './assets/components/DogCard'
import Header from './assets/components/Header'
import Footer from './assets/components/Footer'

function App() {

  return (
    <>
    <header className="header">
      <Header Title="adoptaperritos.net"/>
    </header>
    
    <main className="grilla">
      <DogCard 
        image="https://placedog.net/500/280"
        name="Max"
        description="Max es un perro juguetón y enérgico que adora correr y jugar al aire libre con sus amigos peludos."
        tagColor="primary"
        tagText="Amigo fiel"/>
      <DogCard 
        image="https://placedog.net/686/280"
        name="Luna"
        description="Luna es una perra cariñosa y leal, siempre lista para dar abrazos y acurrucarse con su dueño."
        tagColor="dark"
        tagText="Dulce compañera"/>
      <DogCard 
        image="https://placedog.net/457/280"
        name="Rocky"
        description="Rocky es un perro valiente y protector, ideal para familias que buscan un guardián y un amigo."
        tagColor="warning"
        tagText="Guardián leal"/>
      <DogCard 
        image="https://placedog.net/612/280"
        name="Bella"
        description="Bella es una perra inteligente y curiosa, siempre dispuesta a aprender trucos nuevos y explorar."
        tagColor="danger"
        tagText="Exploradora ágil"/>
      <DogCard 
        image="https://placedog.net/555/280"
        name="Duke"
        description="Duke es un perro tranquilo y amistoso, perfecto para hogares que buscan una presencia calmante y reconfortante."
        tagColor="success"
        tagText="Calmado y dulce"/>
      <DogCard 
        image="https://placedog.net/615/280"
        name="Daisy"
        description="Daisy es una perra vivaz y alegre, siempre lista para jugar y hacer sonreír a todos los que la rodean."
        tagColor="secondary"
        tagText="Fuente de alegría"/>
      <DogCard 
        image="https://placedog.net/444/280"
        name="Bruno"
        description="Bruno es un perro fuerte y robusto, ideal para aquellos que buscan un compañero de aventuras y protector."
        tagColor="primary"
        tagText="Aventurero fiel"/>
    </main>

    <footer className="footer">
    <Footer instruction="¿Estás listo para cambiar una vida y hacerla mejor? Adopta un perro y dale una segunda oportunidad de encontrar un hogar lleno de amor. Nuestros adorables amigos peludos están esperando ansiosamente una familia que los cuide y los ame incondicionalmente. Cada perro tiene una historia única y un corazón lleno de cariño para dar. Ven y descubre cómo un nuevo compañero puede llenar tu vida de alegría, lealtad y momentos inolvidables. ¡Da el paso y adopta hoy mismo, juntos podemos hacer la diferencia!"/>
    </footer>
    
   
    </>
  )
}

export default App
