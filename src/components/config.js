import Registaration from './template/Registaration';
import Cards from './template/Cards';

import svgIcons from './svgImports'

export default [
    {
        template: <Cards />,
        title: "Welche Dachform hat Ihraus?",
        items: [
           { name: 'Satteldach', icon: svgIcons.Satteldach },
            { name: 'Flachdach', icon: svgIcons.Flachdach },
            { name: 'Pultdach', icon: svgIcons.Pultdach },
            { name: 'Anderes', icon: svgIcons.Anderes },
        ],
        name: 'dachform'
    },
     {
         template: <Cards />,
         title: "Besitzt Ihr Haus Gauben oder Dachfenster?",
      items: [
        { name: 'Ja', icon: svgIcons.Gauben_B },
            { name: 'Nein', icon: svgIcons.keine_Gauben_B },
            { name: 'Weiß nicht', icon: svgIcons.Anderes },
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