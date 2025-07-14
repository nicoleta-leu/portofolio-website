import "./Projects.css";

const Project = () => {
  return (
    <section className="project-section" id="project">
      <h3>Proiect</h3>
  <p className="project-description">
    Acest proiect a fost realizat în cadrul lucrării de licență și constă în dezvoltarea unei platforme online pentru vânzarea și donarea hainelor second-hand în Republica Moldova. lucrând atât pe partea de front-end cât și pe back-end. 
    Scopul principal al platformei este de a încuraja reutilizarea hainelor și reducerea risipei, oferind utilizatorilor posibilitatea de a lista, căuta și achiziționa sau dona articole vestimentare într-un mod simplu și eficient.
    <br /><br />
    Platforma include funcționalități precum înregistrare și autentificare a utilizatorilor și organizațiilor caritabile, pagini de produs detaliate, filtre pentru căutare, secțiune de donații, și un panou administrativ pentru gestionarea anunțurilor. Designul este prietenos, punând accent pe o experiență vizuală plăcută și intuitivă.
    <br /><br />
    Proiectul a fost realizat pe partea de front-end utilizând tehnologii moderne, în special HTML, CSS, JavaScript și React.
  </p>
      <div className="screenshots">
        
        <a href="/projects/project1-1.png" target="_blank">
          <img src="/projects/project1-1.png" alt="Pagina principală" />
        </a>

        <a href="/projects/project1-2.png" target="_blank">
          <img src="/projects/project1-2.png" alt="Pagina de înregistrare" />
        </a>

        <a href="/projects/project1-3.png" target="_blank">
          <img src="/projects/project1-3.png" alt="Pagina de adăugare produs" />
        </a>

        <a href="/projects/project1-4.png" target="_blank">
          <img src="/projects/project1-4.png" alt="Pagina de donații" />
        </a>

        <a href="/projects/project1-5.png" target="_blank">
          <img src="/projects/project1-5.png" alt="Pagina produse" />
        </a>

        <a href="/projects/project1-6.png" target="_blank">
          <img src="/projects/project1-6.png" alt="Pagina detalii produs" />
        </a>

       <a href="/projects/project1-7.png" target="_blank">
          <img src="/projects/project1-7.png" alt="Pagina acasă" />
        </a>

      </div>
    </section>
  );
};

export default Project;

