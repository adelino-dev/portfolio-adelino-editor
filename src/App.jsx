import './App.css'
import Contacts from './components/Contacts';
import Header from './components/Header'
import { Project } from './components/Project'

function App() {
  const text =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit." +
    "Praesent posuere, neque condimentum lobortis gravida, lacus metus bibendum" +
    "augue, non rhoncus sem ante sodales nunc. Vivamus quam metus, posuere sit" +
    "amet dolor et, iaculis bibendum elit. Curabitur euismod non purus eget aliquet." +
    "Maecenas vulputate in nisl at consectetur. Curabitur nulla nisl, ornare non" +
    "sem sit amet, lacinia fermentum dolor. Vestibulum cursus eros quis lectus" +
    "sodales, eu posuere odio iaculis. Nunc tincidunt in tellus eu placerat." +
    "Cras rutrum dolor dui, eu bibendum massa bibendum nec. Quisque sodales" +
    "bibendum purus ut imperdiet. Sed fringilla tincidunt turpis, elementum" +
    "dignissim neque fermentum eu. Maecenas non est vitae ligula dapibus" +
    "commodo vestibulum a velit.";

  return (
    <>
      <Header />
      <section id="projects">
        <Project
          title="Carinho de Bicho - Videos Especiais"
          description={text}
          videoType="Instagram"
          videoIds={["DD9yQ-8uOIG", "DCrSTrnu2a-", "DAJaUuPvT6u"]}
        />
        <Project
          title="Carinho de Bicho - Historinhas"
          description={text}
          videoType="Instagram"
          videoIds={[
            "DEfU9eluqwG",
            "DBgkjrluuAG",
            "DAjQ1rMvT5t",
            "C_fshuuOCRf",
            "C_QL2Nvu19m",
            "C--ZeJ1uuor",
            "C-aWimcus_c",
          ]}
        />
        <Project
          title="Reels Divertidos"
          description={text}
          videoType="Instagram"
          videoIds={[
            "Cxbe5gfpuTi",
            "CxY14sMp5J6",
            "CxQs5pirBfZ",
            "CxOsry-pE_j",
          ]}
        />
        <Project
          title="Universidade do Metaverso"
          description={text}
          videoType="Youtube"
          videoIds={["vEqUJ6uhzEc", "XmAn5TDsU7U", "i9c_QMX4nnQ"]}
        />
        <Project
          title="Bastidores"
          description={text}
          videoType="Youtube"
          videoIds={["GBJAPQDRXCU", "b9rvqRdbcHU"]}
        />
        <Project
          title="Peças de Teatro"
          description={text}
          videoType="Youtube"
          videoIds={["MHSmvV-nNl0", "VroNaLQ9Z6o", "q71YQa3dWT4", "AF2vA22zs44"]}
        />
        <Project
          title="Unboxing"
          description={text}
          videoType="Youtube"
          videoIds={["9bhscpkRHRs", "3s25dBH435U", "QG6aaTAEocM", "Xy0MCYR8_I8"]}
        />
      </section>
      <Contacts />
    </>
  );
}

export default App;
