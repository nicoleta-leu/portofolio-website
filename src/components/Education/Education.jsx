import "./Education.css";

const Education = () => (
  <section className="education-section" id="education">
    <h2 className="section-title">Parcurs profesional</h2>

    <div className="education-grid">

      <div className="edu-card">
        <h3 className="card-title">Studii</h3>
        <ul>
          <li>
            <strong>Universitatea Tehnică a Moldovei</strong>
            <br />
            Licență în Tehnologii Informaționale
            <br />
            <span className="period">sept. 2021 – iun. 2025</span>
          </li>
          <li>
            <strong>Liceul Teoretic Zîmbreni</strong>
            <br />
            Diplomă de baccalaureat
            <br />
            <span className="period">sept. 2009 – iun. 2021</span>
          </li>
        </ul>
      </div>

      <div className="edu-card">
        <h3 className="card-title">Certificări</h3>
        <ul>
          <li>
            <strong>Full-stack Engineer - CodeAcademy.com </strong>
            <br />
            <span className="period">iunie 2025 - prezent </span>
          </li>

          <li>
            <strong>Front‑End Development Course - Tekwill Academy</strong>
            <br />
            <span className="period">sept. 2023 - dec. 2023</span>
          </li>
        </ul>
      </div>

      <div className="edu-card">
        <h3 className="card-title">Experiență</h3>
        <ul>
          <li>
            <strong>Banca Națională a Moldovei</strong> <em>(stagiu de practică)</em>
            
            <br />
            <span className="period">sept. 2023 – sept. 2023</span>
            <p><em>Sarcina:</em> Efectuarea completărilor în aplicația SGED, în cadrul compartimentului "Departamentul Buget, Finanțe și
              Contabilitate", utilizând <em>HTML, CSS, JavaScript și JavaServerPage.</em></p>
          </li>
        </ul>
      </div>
    </div>
  </section>
);

export default Education;
