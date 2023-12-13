import Registaration from './template/Registaration';
import Cards from './template/Cards';

import Gauben_B from "./../assets/Gauben_B.svg"; 
import keine_Gauben_B from "./../assets/keine_Gauben_B.svg";
import Anderes from "./../assets/Anderes.svg"; 
import Pultdach from "./../assets/Pultdach.svg"; 
import Flachdach from "./../assets/Flachdach.svg";
import Satteldach from "./../assets/Satteldach.svg";

export default [
    {
        template: <Cards />,
        title: "Welche Dachform hat Ihraus?",
        items: [
            { name: 'Satteldach', icon: Satteldach },
            { name: 'Flachdach', icon: Flachdach },
            { name: 'Pultdach', icon: Pultdach },
            { name: 'Anderes', icon: Anderes },
        ],
        name: 'dachform'
    },
     {
         template: <Cards />,
         title: "Besitzt Ihr Haus Gauben oder Dachfenster?",
      items: [
        { name: 'Ja', icon: Gauben_B },
        { name: 'Nein', icon: keine_Gauben_B },
        { name: 'Weiß nicht', icon: Anderes },
         ],
      name: 'dachfenster'
    },
      {
      template: <Registaration />,
      title: "Gratulation, das Angebot ist in Ihrer Region noch verfügbar! Wir senden Ihnen gerne kostenlose Informationen zu.",
        items: [
      {
        name: 'name',
        type: 'text',
        value: '',
        label: 'Gender',
      },
      {
        name: 'telefonnummer',
        type: 'text',
        value: '',
        label: 'Phone number',
      },
      {
        name: 'postleitzahl',
        type: 'text',
        value: '',
        label: 'Postleitzahl',
          },
       {
        name: 'stadt',
        type: 'text',
        value: '',
        label: 'Ort',
      },
      {
        name: 'strasse',
        type: 'text',
        value: '',
        label: 'Straße',
      },
      {
        name: 'hausnummer',
        type: 'text',
        value: '',
        label: 'Hausnummer',
      },
          ],
       name: 'step3'
    }
  ]